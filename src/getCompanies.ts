import companies from './data/inputCompanies.json' with { type: 'json' };
import type { InputCompany } from './types.js';

export default function getCompanies(): InputCompany[] {
  return companies as InputCompany[];
}
