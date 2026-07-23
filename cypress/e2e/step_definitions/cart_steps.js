import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import environment from "../../POM/HomePage";
import items from "../../POM/ProductPage";

const env = new environment();
const browse = new items();

Given("Navigate to website store", () => {
  env.dev();
});

When("The user selects item", () => {
  browse.navigateToCloth();
});

When("Add it to cart", () => {
  browse.SelectItem();
  browse.AddToCart();
});

When("Checkout the item", () => {
  browse.checkoutitem();
});

Then("It Navigates to cart page", () => {
  browse.cartPage();
});



When("The user opens the cart", () => {
  cy.get("#menuCart").click();
});

When("Removes the item from the cart", () => {
  cy.get(".remove").click(); 
});

Then("The cart should be empty", () => {
  cy.contains("Your shopping cart is empty").should("be.visible");
});
