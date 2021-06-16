/// <reference types = "Cypress" />

class AdminPage
{
    visit()
    {
        return cy.visit('https://automationintesting.online/#/admin');
    }

    notifications()
    {
        return cy.get('.notification');
    }

    username()
    {
        return cy.get('[data-testid=username]');
        //cy.xpath('//div[@class=\"form-group\"][1]/input');
    }

    password() 
    {
        return cy.get('[data-testid=password]'); 
        //cy.xpath('//div[@class=\"form-group\"][2]/input');
    }

    loginButton()
    {
        return cy.get('[data-testid=submit]');
        // cy.get('button.float-right');
    }

    adminNavBar()
    {
        return cy.get('div.navbar-collapse');
    }
    roomNumber()
    {
        return cy.get('.room-form > div:nth-child(1) input'); 
    }
    price()
    {
        return cy.get('.room-form > div:nth-child(4) input');
    }
    createButton()
    {
        return cy.get('button.btn-outline-primary');
    }

    unreadMessages()
    {
        return cy.get('div.read-false');
    }
}
export default AdminPage;