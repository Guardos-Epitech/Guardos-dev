describe('DishesPageTest check dish card', () => {
    it('passes', () => {
        cy.visit('http://localhost:8080/dishes');
        cy.wait(5000);
        cy.contains("Ben & Jerry's Chocolate Fudge Brownie");
    });
});

describe('DishesPageTest add dish card', () => {
    it('passes', () => {
        cy.visit('http://localhost:8080/dishes');
        cy.wait(5000);
        cy.get('.MuiButton-contained').click();
        cy.wait(1000);
        cy.get('.MuiGrid-grid-sm-5 > .MuiFormControl-root > .MuiFormControl-root >' + 
        '.MuiInputBase-root > #component-outlined').type('TestDish123');
        cy.get('.MuiGrid-grid-sm-3 > .MuiFormControl-root > .MuiFormControl-root >' + 
        '.MuiInputBase-root > #outlined-end-adornment').type('6.66');
        cy.get('.MuiGrid-grid-sm-8').eq(0).find('.MuiFormControl-root > .MuiFormControl-root >' + 
        '.MuiInputBase-root > #outlined-multiline-flexible').type('cypress test description');
        cy.get('.MuiGrid-grid-sm-8').eq(1).find('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #tags-outlined')
        .type('{downarrow}{enter}');
        cy.get('.MuiGrid-grid-sm-8').eq(2).find('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #tags-outlined')
        .type('{downarrow}{enter}');
        cy.get('.MuiGrid-grid-sm-8').eq(3).find('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #tags-outlined')
        .type('{downarrow}{enter}');
        cy.get('.MuiGrid-grid-sm-8:last').should('exist')
        .find('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #tags-outlined')
        .wait(3000).type('{downarrow}').wait(1000).type('{enter}');
        cy.wait(1000);
        cy.get('.MuiButton-contained').click();
        cy.wait(5000);
        cy.contains('TestDish123');
    });
});

describe('DishesPageTest edit dish card', () => {
    it('passes', () => {
        cy.visit('http://localhost:8080/dishes');
        cy.wait(5000);
        cy.contains('TestDish123');
        cy.get('.MuiPaper-root').eq(2).find('.YgFNULgWXmZsCGJKZc5g > .MuiGrid-root > .MuiGrid-root > .ZA6LF0zDIfuiCFc0tcNj > div > #long-button').click();
        cy.get('#basic-menu > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root > .MuiTouchRipple-root').click();
        cy.wait(5000);
        cy.get('.MuiGrid-grid-sm-8').eq(0).find('.MuiFormControl-root > .MuiFormControl-root >' + 
        '.MuiInputBase-root > #outlined-multiline-flexible').type('cypress changed test description');
        cy.get('.MuiButton-contained').click();
        cy.wait(5000);
        cy.contains('cypress changed test description');
    });
});