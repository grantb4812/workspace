import { getGreeting } from '../support/app.po';

describe('fem-testing-react', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to fem-testing-react!');
  });
});
