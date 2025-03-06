import writeFile from './writeFile.js'
import getMatches from './getMatches.js';
import { failSpinner, succeedSpinner } from './ui.js';
import type { Financial, OutputCompany } from './types.js';

export const runTransform = async () => {
  const matches = getMatches();
  const transformedCompanies = [];

  try {
    for (const match of matches) {
      let outputCompany: OutputCompany;

      // Ignore ambiguous matches for now...
      if (match.matches.length === 1) {
        const [uniqueMatch] = match.matches;
        // Implement transformation logic here...
        let financials: Financial[] = [];

        transformedCompanies.push({
          name: uniqueMatch.Name,
          providerId: uniqueMatch.Id,
          addresses: {
            lineOne: uniqueMatch.AddressLineOne,
            lineTwo: uniqueMatch.AddressLineTwo,
            city: uniqueMatch.City,
            postalCode: uniqueMatch.PostalCode
          },
          financials
        });
      }
    }

    writeFile(transformedCompanies, 'transformed.json');

    succeedSpinner(`Transformation completed.`);
  } catch (error) {
    console.error('Error encountered:', error);
    failSpinner('Error encountered while transforming matches.');
  }
}
