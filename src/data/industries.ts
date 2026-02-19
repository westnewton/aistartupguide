import { Industry } from '@/lib/types';

// Industry data will be populated in Phase 4
export const industries: Industry[] = [];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
