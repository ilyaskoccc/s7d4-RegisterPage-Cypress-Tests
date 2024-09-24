import { errorMessages } from "../../src/components/register";
describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('Error Messages', () => {
    it('Name input throws error for 2 chars', () => {
      //Arrange
      //cy.visit('http://localhost:5173/');
      //Act
      cy.get('[data-cy="ad-input"]').type("il");
      //Assert
      cy.contains(errorMessages.ad);
    });
    it('Surname input throws error for 2 chars', () => {
      //Arrange
      //cy.visit('http://localhost:5173/');
      //Act
      cy.get('[data-cy="soyad-input"]').type("ko");
      //Assert
      cy.contains(errorMessages.soyad);
    });
    it('Email input throws error for ilyas@wit.', () => {
      //Arrange
      //cy.visit('http://localhost:5173/');
      //Act
      cy.get('[data-cy="email-input"]').type("ilyas@wit.");
      //Assert
      cy.contains(errorMessages.email);
    });
    it('Password input throws error for 1234', () => {
      //Arrange
      //cy.visit('http://localhost:5173/');
      //Act
      cy.get('[data-cy="password-input"]').type("1234");
      //Assert
      cy.contains(errorMessages.password);
    });
    it('Button is disabled for unvalidated inputs.', () => {
      //Arrange
      //cy.visit('http://localhost:5173/');
      //Act
      cy.get('[data-cy="password-input"]').type("1234");
      //Assert
      cy.get('[data-cy="submit-button"]').should("be.disabled");
    });
  });
  describe('Form inputs validated', () => {
    it('button enabled for validated inputs', () => {
      //Arrange
      //cy.visit('http://localhost:5173/');
      //Act
      cy.get('[data-cy="ad-input"]').type("ilyas");
      cy.get('[data-cy="soyad-input"]').type("koç");
      cy.get('[data-cy="email-input"]').type("ilyas@wit.com.tr");
      cy.get('[data-cy="password-input"]').type("1234Aa**");
      //Assert
      cy.get('[data-cy="submit-button"]').should("be.enabled");
    });
    it('submits form on validated inputs', () => {
      //Arrange
      //cy.visit('http://localhost:5173/');
      //Act
      cy.get('[data-cy="ad-input"]').type("ilyas");
      cy.get('[data-cy="soyad-input"]').type("koç");
      cy.get('[data-cy="email-input"]').type("ilyas@wit.com.tr");
      cy.get('[data-cy="password-input"]').type("1234Aa**");
      cy.get('[data-cy="submit-button"]').click();
      //Assert
      cy.get('[data-cy="response-message"]').should("be.visible");
    });
  });
});