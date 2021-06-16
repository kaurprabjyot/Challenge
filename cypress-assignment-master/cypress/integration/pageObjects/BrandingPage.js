/// <reference types = "Cypress" />

class BrandingPage 
{
    visit()
    {
        return cy.visit('https://automationintesting.online/#/admin/branding');
    }

    name()
    {
        return cy.get('input.form-control').eq(0);
    }

    submitButton()
    {
        return cy.get('button.btn-outline-primary');
    }

    closeButton()
    {
        return cy.xpath('//button[text()="Close"]');
    }
}


export default BrandingPage;