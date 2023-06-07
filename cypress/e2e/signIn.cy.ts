describe('SignIn page', () => {
  it('should visit to the SignIn page and check default language is Português', () => {
    cy.visit('http://localhost:3000/signIn');

    cy.checkTheSignInPageInPtBrLanguage();
  });

  it('should change the language of the SignIn page to English', () => {
    cy.visit('http://localhost:3000/en/signIn');

    cy.checkTheSignInPageInEnUsLanguage();
  });
});
