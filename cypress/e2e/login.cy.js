describe('SauceDemo - Login Tests', () => {

    before(() => {
      cy.fixture('sauceLogin').then((data) => {
        globalThis.user = data
      });
    });
  
    it('[1] Loads login page successfully', () => {
      cy.visit(user.url)
      cy.title().should('eq', 'Swag Labs')
      cy.usernameField().should('be.visible')
      cy.passwordField().should('exist')
      cy.loginBtn().should('exist')
    });
  
    it('[2] Logs in with valid credentials', () => {
        cy.loginWith(user.valid.username, user.valid.password);
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('have.text', 'Products');
        cy.get('.inventory_item').should('have.length', 6);
      });
  
    it('[3] Shows error with locked out user', () => {
      cy.loginWith(user.locked.username, user.locked.password)
      cy.errorMsg().should('be.visible')
      cy.errorMsg().should('contain.text', 'locked out')
      cy.get('.fa-times-circle').should('exist')
    });
  
    it('[4] Invalid login returns error', () => {
      cy.loginWith(user.invalid.username, user.invalid.password)
      cy.errorMsg().should('contain.text', 'Username and password do not match')
    });
  
    it('[5] Empty username shows error', () => {
      cy.visit(user.url)
      cy.passwordField().type(user.valid.password)
      cy.loginBtn().click()
      cy.errorMsg().should('contain', 'Username is required')
    });
  
    it('[6] Empty password shows error', () => {
      cy.visit(user.url)
      cy.usernameField().type(user.valid.username)
      cy.loginBtn().click()
      cy.errorMsg().should('contain', 'Password is required')
    });
  
    it('[7] Both fields empty triggers error', () => {
      cy.visit(user.url)
      cy.loginBtn().click()
      cy.errorMsg().should('exist')
    });
  
    it('[8] Username and password fields have correct placeholders', () => {
      cy.visit(user.url);
      cy.usernameField().should('have.attr', 'placeholder', 'Username')
      cy.passwordField().should('have.attr', 'placeholder', 'Password')
    });
  
    it('[9] Password input should be masked', () => {
      cy.visit(user.url)
      cy.passwordField().should('have.attr', 'type', 'password')
    });
  
    it('[10] Whitespace in credentials trimmed automatically', () => {
      cy.loginWith(` ${user.valid.username} `, ` ${user.valid.password} `)
      cy.errorMsg().should('contain', 'do not match any user in this service')
    });
  
    it('[11] Uppercase username should fail', () => {
      cy.loginWith(user.valid.username.toUpperCase(), user.valid.password)
      cy.errorMsg().should('be.visible')
    });
  
    it('[12] Login persists after page reload', () => {
      cy.loginWith(user.valid.username, user.valid.password)
      cy.reload()
      cy.url().should('include', '/inventory.html')
      cy.get('.inventory_item').should('exist')
    });
  
    it('[13] Can log in with slow typing', () => {
      cy.visit(user.url);
      cy.usernameField().type(user.valid.username, { delay: 200 })
      cy.passwordField().type(user.valid.password, { delay: 200 })
      cy.loginBtn().click()
      cy.url().should('include', '/inventory.html')
    });
  
    it('[14] Back navigation doesn’t return to login screen', () => {
      cy.loginWith(user.valid.username, user.valid.password)
      cy.go('back')
      cy.url().should('eq', 'https://www.saucedemo.com/')
    });
  
    it('[15] Login error disappears after correction', () => {
      cy.loginWith(user.invalid.username, user.invalid.password);
      cy.errorMsg().should('exist');
  
      cy.usernameField().clear()
      cy.usernameField().type(user.valid.username)

      cy.passwordField().clear()
      cy.passwordField().type(user.valid.password)
      cy.loginBtn().click()
  
      cy.url().should('include', '/inventory.html')
    });

    it.only('[16] Test Case 3: Login User with incorrect email and password', () => {
      cy.visit('https://automationexercise.com/')
      cy.get('#header').should('be.exist')
      cy.get('.fa.fa-lock').click()
      cy.wait(2000)
      cy.get('.login-form > h2').should('be.exist')


      // cy.title().should('eq', 'Swag Labs')
      // cy.usernameField().should('be.visible')
      // cy.passwordField().should('exist')
      // cy.loginBtn().should('exist')
    });
  

  
  });
  