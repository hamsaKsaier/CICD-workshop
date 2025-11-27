describe('Login Functionality', () => {

    beforeEach(() => {
        // Visit the login page before each test
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.wait(10000)
    })

    it('should login successfully with valid credentials', () => {
        // Enter valid username
        cy.get('input[name="username"]').type('Admin')
        // cy.wait(10000)
        // Enter valid password
        cy.get('input[name="password"]').type('admin123')
        // cy.wait(10000)
        // Click login button
        cy.get('button[type="submit"]').click()
        // cy.wait(10000)
        // Assert successful login - user is redirected to dashboard
        cy.url().should('include', '/dashboard')
    })
    it('should login unsuccessfully with invalid credentials', () => {
        // Enter valid username
        cy.get('input[name="username"]').type('Admin')
        // cy.wait(10000)
        // Enter valid password
        cy.get('input[name="password"]').type('admin12333')
        // cy.wait(10000)
        // Click login button
        cy.get('button[type="submit"]').click()
        // cy.wait(10000)
        // Assert successful login - user is redirected to dashboard
        cy.url().should('include', '/dashboard')
    })



})

