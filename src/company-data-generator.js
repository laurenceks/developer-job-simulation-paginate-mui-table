import {faker} from '@faker-js/faker';

export const getCompanyData = (limit = 100, start = 0) => {
  const companies = [];
  for (let i = 0; i < limit; i++) {
    companies.push({
      id: i,
      name: faker.company.companyName(),
      description: faker.company.bs(),
      currency: faker.finance.currencyName(),
      routingNumber: faker.finance.routingNumber() });
  }
  return companies;
};
