import { Tool } from '@/lib/types';

// Tool data will be populated in Phase 4
export const tools: Tool[] = [];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
