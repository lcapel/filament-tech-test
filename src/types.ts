export type APICompany = {
  Id: string;
  Name: string;
  Website: string;
  Domain: string;
  FinancialDataCurrencyCode: string;
  ISOCountryCode: string;
  AddressLineOne: string;
  AddressLineTwo: string;
  City: string;
  PostalCode: string;
  ProfitAndLossAccount_Latest: '' | number;
  ProfitAndLossAccount_2024: '' | number;
  ProfitAndLossAccount_2023: '' | number;
  ProfitAndLossAccount_2022: '' | number;
  ProfitAndLossAccount_2021: '' | number;
  ProfitAndLossAccount_2020: '' | number;
  TotalRevenue_Latest: '' | number;
  TotalRevenue_2024: '' | number;
  TotalRevenue_2023: '' | number;
  TotalRevenue_2022: '' | number;
  TotalRevenue_2021: '' | number;
  TotalRevenue_2020: '' | number;
  RetainedEarnings_Latest: '' | number;
  RetainedEarnings_2024: '' | number;
  RetainedEarnings_2023: '' | number;
  RetainedEarnings_2022: '' | number;
  RetainedEarnings_2021: '' | number;
  RetainedEarnings_2020: '' | number;
}

export type APIResponseSchema = {
  results: APICompany[];
  total: number;
}

export type InputCompany = {
  id: string;
  name: string;
  website: string;
}

export type Match = APICompany & {
  matchType: 'exact' | 'ambiguous';
};

export type MatchedInputCompany = {
  inputId: string;
  inputName: string;
  inputWebsite: string;
  matches: Match[];
}

export type Financial = {
  year: number;
  totalRevenue: number;
}

export type Addresses = {
  lineOne: string;
  lineTwo: string;
  city: string;
  postalCode: string;
}

export type OutputCompany = {
  name: string;
  providerId: string;
  addresses: Addresses;
  financials: Financial[];
}
