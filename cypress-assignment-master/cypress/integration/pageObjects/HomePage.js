/// <reference types = "Cypress" />

class HomePage 
{

    visit()
    {
        return cy.visit('https://automationintesting.online/#/');
    }

    adminPanel()
    {
        return cy.get('footer p a:nth-child(5)');
        //// cy.get('footer p a:nth-child(5)');
    }

    name()
    {
        return cy.get('input[placeholder=\"Name\"]');
    }
    email()
    {
    return cy.get('input[placeholder=\"Email\"]');
    }

    phone()
    {
        return cy.get('input[placeholder=\"Phone\"]');
    }

    subject()
    {
        return cy.get('input[placeholder=\"Subject\"]');
    }

    textArea()
    {
        return cy.get('textarea');
    }

    submitButton()
    {
        return cy.xpath("//button[text()=\"Submit\"]");
    }

    successMessage()
    {
    return cy.get("div.contact");
    }
    
}

export default HomePage;
