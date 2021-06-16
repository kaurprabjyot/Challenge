// This assignment is about two things
// 1. Create meaningful, reproducible, reliable and non-flaky tests
// 2. creating clean, readable and maintainable code. 

// Below are five tests that (somehow) work but require cleaning up. Update this
// code to make it easier to maintain, more readable and has sensible ways of asserting
// data. You might want to research different approaches to improving UI automation such as
// Page Object Models.

// TypeScript is also installed and enabled, so if you are comfortable with it, please 
// feel free to use the same.

//To reference elements returned by functions within "HomePage" class.
import HomePage from "./pageObjects/HomePage"; 

//To reference elements returned by functions within "AdminPage" class.
import AdminPage from "./pageObjects/AdminPage"; 

//To reference elements returned by functions within "BrandingPage" class.
import BrandingPage from "./pageObjects/BrandingPage";

describe('Automation Testing Online tests', () => 
{
// variable declaration to access functions from each referenced class.
    const HOMEPAGE = new HomePage();
    const ADMINPAGE = new AdminPage();
    const BRANDING = new BrandingPage();

    // Test one: Verify that you can log in with valid credentials
    it('should be able to login', () => {
        
        //visit application URL and enter credentials. 
        
        HOMEPAGE.visit();
        HOMEPAGE.adminPanel().click();
        ADMINPAGE.username().click();
        ADMINPAGE.username().type('admin');
        ADMINPAGE.password().type('password');
        ADMINPAGE.loginButton().click();

        cy.wait(3000); //static wait of 3 seconds to wait for the contents to load

        ADMINPAGE.adminNavBar().invoke('text').then(text => {
            expect(text).to.contain('Rooms');
        });
    })

    //Test two: Check to see if rooms are saved and displayed in the UI
    it('should be able to save rooms', () => {
        
        //visit application URL and enter credentials.
        
        HOMEPAGE.visit();
        HOMEPAGE.adminPanel().click();
        ADMINPAGE.username().click();
        ADMINPAGE.username().type('admin');
        ADMINPAGE.password().type('password');
        ADMINPAGE.loginButton().click();
        
        ADMINPAGE.roomNumber().type('101'); //Enter value in room# field
        ADMINPAGE.price().type('101');  ////Enter value in price field
        ADMINPAGE.createButton().click();
        cy.wait(2000);
        cy.get('.detail').its('length').should('be.greaterThan', 0);
    })


    // Test three: Check to see the confirm message appears when branding is updated
    it ('should be able to update branding', () => {
        
        HOMEPAGE.visit();
        HOMEPAGE.adminPanel().click();
        ADMINPAGE.username().click();
        ADMINPAGE.username().type('admin');
        ADMINPAGE.password().type('password');
        ADMINPAGE.loginButton().click();
        BRANDING.visit(); //navigate to branding tab
        cy.wait(2000);
        BRANDING.name().type("Test");  //enter name under B&B details 
        BRANDING.submitButton().click();
        cy.wait(1000);
        BRANDING.closeButton().its('length').then(elementCount => {
            if (elementCount === 1) { 
                expect(true).to.be.true;
            } else {
                expect(true).to.be.false;
            }
        });
    })

    // Test four: Check to see if the contact form shows a success message
    it('should see success message', () => {
        HOMEPAGE.visit();
        HOMEPAGE.name().type('TEST123');
        HOMEPAGE.email().type('TEST123@TEST.COM');
        HOMEPAGE.phone().type('01212121311');
        HOMEPAGE.subject().type('TEsTEST');
        HOMEPAGE.textArea().type('TEsTESTTEsTESTTEsTEST');
        HOMEPAGE.submitButton().click();
        cy.wait(3000); //static wait of 3 seconds for success message to appear. 
        HOMEPAGE.successMessage().invoke('text').should('contain', 'Thanks for getting in touch');
    })

    // Test five: Check to see if unread messages are bolded
    it('should see unread messages are bolded', () => {
        HOMEPAGE.visit();
        HOMEPAGE.adminPanel().click();
        ADMINPAGE.username().click();
        ADMINPAGE.username().type('admin');
        ADMINPAGE.password().type('password');
        ADMINPAGE.loginButton().click();
        cy.wait(2000); //static wait of 2 seconds for contents to load.
        ADMINPAGE.notifications().click(); 
        ADMINPAGE.unreadMessages().its('length').should('be.at.least', 1);
    })


})