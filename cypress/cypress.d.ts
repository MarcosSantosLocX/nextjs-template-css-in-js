/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    checkTheDashboardPageInPtBrLanguage(): Chainable<void>;
    checkTheDashboardPageInEnUsLanguage(): Chainable<void>;
    checkTheSignInPageInPtBrLanguage(): Chainable<void>;
    checkTheSignInPageInEnUsLanguage(): Chainable<void>;
    validateLanguageSwitchToPtBr(): Chainable<void>;
    validateLanguageSwitchToEnUS(): Chainable<void>;
  }
}
