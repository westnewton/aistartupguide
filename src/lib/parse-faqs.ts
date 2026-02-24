export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Extracts FAQ question/answer pairs from markdown content.
 * Looks for an H2 section containing "frequently asked questions" or "faq",
 * then parses each H3 as a question with its following paragraphs as the answer.
 */
export function parseFAQsFromMarkdown(markdown: string): FAQItem[] {
  const lines = markdown.split('\n');
  const faqs: FAQItem[] = [];

  let inFAQSection = false;
  let currentQuestion = '';
  let currentAnswer: string[] = [];

  for (const line of lines) {
    // Detect the start of the FAQ section (H2 containing "faq" or "frequently asked")
    if (line.match(/^## /)) {
      const heading = line.replace(/^## /, '').toLowerCase();
      if (heading.includes('frequently asked') || heading.includes('faq')) {
        inFAQSection = true;
        continue;
      } else if (inFAQSection) {
        // Hit a new H2 — FAQ section is over
        if (currentQuestion && currentAnswer.length > 0) {
          faqs.push({
            question: currentQuestion,
            answer: cleanAnswer(currentAnswer),
          });
        }
        break;
      }
    }

    if (!inFAQSection) continue;

    // Each H3 is a new question
    if (line.match(/^### /)) {
      // Save the previous Q&A if exists
      if (currentQuestion && currentAnswer.length > 0) {
        faqs.push({
          question: currentQuestion,
          answer: cleanAnswer(currentAnswer),
        });
      }
      currentQuestion = line.replace(/^### /, '').trim();
      currentAnswer = [];
      continue;
    }

    // Collect answer lines (skip empty lines and horizontal rules)
    if (currentQuestion && line.trim() && !line.match(/^---/)) {
      currentAnswer.push(line.trim());
    }
  }

  // Don't forget the last Q&A
  if (currentQuestion && currentAnswer.length > 0) {
    faqs.push({
      question: currentQuestion,
      answer: cleanAnswer(currentAnswer),
    });
  }

  return faqs;
}

/**
 * Cleans markdown formatting from answer text for use in schema markup.
 * Strips links, bold, italic, and inline code — Google wants plain text.
 */
function cleanAnswer(lines: string[]): string {
  return lines
    .join(' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // [text](url) → text
    .replace(/\*\*([^*]+)\*\*/g, '$1')        // **bold** → bold
    .replace(/\*([^*]+)\*/g, '$1')             // *italic* → italic
    .replace(/`([^`]+)`/g, '$1')               // `code` → code
    .replace(/\s+/g, ' ')                       // collapse whitespace
    .trim();
}
