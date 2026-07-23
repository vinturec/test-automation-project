import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then("Special Offers should be visible on the home page", () => {
  // Check that the text "SPECIAL OFFER" is present in the correct element
  cy.get("#special_offer_items > .roboto-regular")
    .should("contain.text", "SPECIAL OFFER");

  // Also check that there is at least one offer item
  cy.get("#img-special-offer > figure > img").should("exist");
});

When("The user clicks on the first See Offer button", () => {
  cy.get("#see_offer_btn")
    .contains("SEE OFFER")
    .first()
    .click();
});

Then("The product details page for the offer should be displayed", () => {
  cy.url().should("include", "/product/");
  cy.get(".roboto-regular.ng-binding")
    .should("contain.text", "HP PAVILION 15Z TOUCH LAPTOP");
});
