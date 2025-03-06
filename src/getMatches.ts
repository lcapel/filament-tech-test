import matches from './output/foundCompanies.json' with { type: 'json' };
import type { MatchedInputCompany } from './types.js';

export default function getMatches(): MatchedInputCompany[] {
  return matches as MatchedInputCompany[];
}
