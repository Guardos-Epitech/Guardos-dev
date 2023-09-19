describe('ProductPageTest check products', () => {
    it('passes', () => {
        cy.visit('http://localhost:8080/products');
        cy.wait(5000);
        cy.contains('Test Ingredient');
    });
});

describe('ProductPageTest add new product', () => {
    it('passes', () => {
        cy.visit('http://localhost:8080/products');
        cy.wait(5000);
        cy.get('.MuiButton-contained').click();
        cy.get('.MuiGrid-grid-sm-8').eq(0)
        .find('.MuiFormControl-root > .MuiFormControl-root' +
        '> .MuiInputBase-root > #component-outlined').type('Cypress test Product');
        cy.get('.MuiGrid-grid-sm-8').eq(1)
        .find('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #tags-outlined')
        .type('{downarrow}{enter}');
        cy.get('.MuiGrid-grid-sm-8').eq(2)
        .find('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #tags-outlined')
        .wait(1000).type('{downarrow}{enter}');
        cy.wait(1000);
        cy.get('.MuiButton-contained').click();
        cy.wait(5000);
        cy.contains('Cypress test Product');
    });
});