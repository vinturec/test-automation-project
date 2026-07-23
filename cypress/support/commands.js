

Cypress.Commands.add("openStore", () => {
  cy.visit("https://advantageonlineshopping.com/#/");
});

Cypress.Commands.add("selectAndAddToCart", () => {
  // Navigate to Tablets category
  cy.get("[aria-label='TabletsCategory']").click();

  // Wait for product tiles to load and click the first full product card
  cy.get(".categoryRight li")
    .first()
    .should("be.visible")
    .click();

  // Ensure we are on the product page
  cy.url().should("include", "/product/");

  // Intercept product API call to ensure the page is fully loaded
  cy.intercept('/catalog/api/v1/products/*').as('getProduct');
  cy.wait('@getProduct');

  // Click the Add to Cart button reliably
  cy.get('button[name="save_to_cart"]', { timeout: 15000 })
    .should('be.visible')
    .click({ force: true });
});



Cypress.Commands.add("removeFromCart", () => {
  cy.get(".remove").click();
});

Cypress.Commands.add("cartShouldBeEmpty", () => {
  cy.contains("Your shopping cart is empty").should("be.visible");
});
