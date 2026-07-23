import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("The user clicks the Speakers category", () => {
  cy.get("[aria-label='SpeakersCategory']").click();
});

Then("The Speakers category page should load successfully", () => {
  cy.url().should("include", "/category/Speakers/");
  cy.get(".categoryTitle").should("contain.text", "SPEAKERS");
});
