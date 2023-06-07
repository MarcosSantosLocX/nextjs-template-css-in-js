describe('Dashboard page', () => {
  it('should visit to the Dashboard page and check default language is Português', () => {
    cy.visit('http://localhost:3000/');

    cy.checkTheDashboardPageInPtBrLanguage();
  });

  it('should change the language of the Dashboard page to English', () => {
    cy.visit('http://localhost:3000/en');

    cy.url().should('include', '/en');

    cy.checkTheDashboardPageInEnUsLanguage();
  });
});
