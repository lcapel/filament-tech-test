import axios from './axiosRetry.js';
import { failSpinner, succeedSpinner } from './ui.js';
import writeFile from './writeFile.js'
import getCompanies from './getCompanies.js';

import type { APIResponseSchema, Match, MatchedInputCompany } from './types.js';

export const runSearch = async () => {
  const companies = getCompanies();
  let companiesProcessed = 0;
  let successfulMatches = 0;
  let failedMatches = 0;
  const searchStartTime = new Date().getTime();
  const foundCompanies = [];

  try {
    for (const company of companies) {
      const { data } = await axios.post('http://localhost:3000/api/search', {
        name: company.name,
        website: company.website,
      }) as { data: APIResponseSchema };

      let matches: Match[] = [];
      const matchedCompany: MatchedInputCompany = {
        inputId: company.id,
        inputName: company.name,
        inputWebsite: company.website,
        matches,
      }

      if (data.total === 0) {
        failedMatches++;
      } else {
        foundCompanies.push({
          ...matchedCompany,
          matches: data.results.map((m) => ({
            ...m,
            matchType: data.total === 1 ? 'exact' : 'ambiguous',
          }))
        });
        successfulMatches++;
      }

      companiesProcessed++;
    }

    writeFile(foundCompanies, 'foundCompanies.json');

    const searchEndTime = new Date().getTime();
    const totalSearchTime = (searchEndTime - searchStartTime) / 1000;
    succeedSpinner(`Search completed (${totalSearchTime.toFixed(2)}s). Successful matches ${successfulMatches}/${companiesProcessed}. Failed matches ${failedMatches}/${companiesProcessed}.`);
  } catch (error) {
    console.error('Error encountered:', error);
    failSpinner('Error encountered while searching.');
  }
}
