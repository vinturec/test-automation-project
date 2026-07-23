import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import environment from "../../POM/HomePage";
import items from "../../POM/ProductPage";

const env = new environment();
const browse = new items();


// When("The user clicks on the search button", () => {
//   cy.get("#menuSearch").click({ force: true });

//   // Wait for search bar to become visible
//   cy.get("#searchSection").should("not.have.css", "display", "none");
//   cy.get("#autoComplete").should("be.visible");
// });


// When("The user enters {string} in the search bar", (term) => {
//   cy.get('#autoComplete').should('be.visible').type(term, { force: true });
// });


// When("Submits the search", () => {
//   cy.get("#autoComplete").type("{enter}");
// });


When("The user types {string} directly into the hidden search bar", (term) => {
  cy.get("#autoComplete").type(term + "{enter}", { force: true });
});



Then("Products related to {string} should be visible", (term) => {
  cy.get(".productName").should("exist");
  cy.get(".productName").first().should("contain.text", term.charAt(0).toUpperCase());
});
