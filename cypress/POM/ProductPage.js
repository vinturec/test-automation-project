export default class items {
  navigateToCloth() {
    cy.get("[aria-label='TabletsCategory']").click();
  }

  SelectItem() {
  cy.intercept('/catalog/api/v1/products/*').as('getProduct');

  cy.get(":nth-child(1) > :nth-child(4) > .productName")
    .should('be.visible')
    .click();

  cy.wait('@getProduct');
  cy.url().should('include', '/product/');
}



  AddToCart() {
    cy.get('button[name="save_to_cart"]', { timeout: 15000 })
      .should('be.visible')
      .click({ force: true });
  }

  checkoutitem() {
    cy.get("#menuCart").click();
    // cy.get(".cart .checkOutButton").click();
    cy.get("#checkOutButton").click();
  }

  cartPage() {
    cy.url().should('include', '/login'); 
  }
}





