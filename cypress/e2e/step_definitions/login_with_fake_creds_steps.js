import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import environment from "../../POM/HomePage";

const env = new environment();

Given("Navigate to login page", () => {
  env.dev();
  cy.get("#menuUser").click();
});

When("The user enters valid credentials", () => {
  cy.get("input[name='username']").type("testuser");
  cy.get("input[name='password']").type("test1234");
});

When("Clicks on sign in", () => {
  cy.get("#sign_in_btn").click();
});

Then("The user should be logged in", () => {
  cy.get("#signInResultMessage").should("contain.text", "Incorrect");
});
