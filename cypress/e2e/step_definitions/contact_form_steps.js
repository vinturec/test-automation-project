import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("The user selects category {string}", (category) => {
  cy.get("select[name='categoryListboxContactUs']")
    .should("be.visible")
    .select(category);
});

When("The user selects product {string}", (product) => {
  cy.get("select[name='productListboxContactUs']")
    .should("be.visible")
    .select(product);
});

When("The user enters email {string}", (email) => {
  cy.get("input[name='emailContactUs']").should("be.visible").type(email);
});

When("The user types the subject message {string}", (message) => {
  cy.get("textarea[name='subjectTextareaContactUs']")
    .should("be.visible")
    .type(message);
});

When("The user clicks the Send button", () => {
  cy.get("#send_btn").should("not.be.disabled").click();
});

Then("The form should be reset or show confirmation", () => {
  cy.get("input[name='emailContactUs']").should("have.value", "");
});
