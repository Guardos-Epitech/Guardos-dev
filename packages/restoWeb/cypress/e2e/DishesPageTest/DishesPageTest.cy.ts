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
        cy.get('.MuiGrid-grid-sm-5 > .MuiFormControl-root > .MuiFormControl-root >' + 
        '.MuiInputBase-root > #component-outlined').type('TestDish123');
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
        .type('{downarrow}{enter}');
        cy.wait(1000);
        cy.get('.MuiButton-contained').click();
        cy.wait(5000);
        cy.contains('TestDish123');
    });
});