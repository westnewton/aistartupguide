'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Are these tools actually worth it for a small business?',
    answer:
      'Most of the tools we recommend have free tiers or trials, so you can test them risk-free. We focus on tools that save time or generate revenue for businesses with 1\u201350 employees \u2014 not enterprise software repackaged for small teams. Every review includes real pricing and our honest take on whether the ROI is there.',
  },
  {
    question: "I'm not tech-savvy. Can I still use AI tools?",
    answer:
      "Absolutely. The majority of tools we feature are designed for non-technical users \u2014 think drag-and-drop interfaces, not code. Our setup guides walk you through everything step by step. If you can use email and social media, you can use these tools.",
  },
  {
    question: 'How do you choose which tools to feature?',
    answer:
      "We personally test every tool before recommending it. We evaluate ease of use, pricing transparency, customer support quality, and real-world impact for small businesses. We're independent \u2014 no tool pays for placement in our reviews or rankings.",
  },
  {
    question: 'Is AI going to replace my employees?',
    answer:
      'For most small businesses, AI is a force multiplier \u2014 not a replacement. It handles repetitive tasks (scheduling, follow-ups, data entry) so your team can focus on the work that actually requires a human touch. Think of it as hiring a tireless assistant for $30\u2013$100/month.',
  },
  {
    question: 'What if I need help setting up a tool?',
    answer:
      "We offer 1-on-1 setup sessions where we walk you through implementation, configuration, and best practices for your specific business. Book a session through our contact page and we'll get you up and running fast.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-list">
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item${openIndex === index ? ' open' : ''}`}
        >
          <button
            className="faq-question"
            onClick={() => handleToggle(index)}
          >
            <span>{item.question}</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
