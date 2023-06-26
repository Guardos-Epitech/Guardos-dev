describe('Ingredients API', () => {
  // Test for the GET / route
  it('should fetch all ingredients', () => {
    cy.request('http://localhost:8081/api/ingredients')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
  });

  // Test for the POST / route (creating a new ingredient)
  it('should create a new ingredient and add it to a restaurant', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8081/api/ingredients',
      body: {
        name: 'Test Ingredient',
        allergens: ['gluten'],
        ingredients: ['test'],
        restoName: 'test'
      }
    })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body)
          .to.include('Ingredient Test Ingredient saved with id');
      });
  });

  // Test for the POST / route (error case)
  it('should return an error if the name or id is missing or invalid', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8081/api/ingredients',
      body: {
        allergens: ['gluten'],
        ingredients: ['test'],
        restoName: 'test'
      },
      failOnStatusCode: false // This is important to handle the expected error response
    })
      .then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.eq('Missing name or wrong id for ingredient');
      });
  });

  // Test for the DELETE / route
  it('should delete an ingredient', () => {

    cy.request({
      method: 'POST',
      url: 'http://localhost:8081/api/ingredients',
      body: {
        name: 'IngredientToDelete',
        allergens: ['gluten'],
        ingredients: ['test'],
        restoName: 'test'
      }
    });

    cy.request({
      method: 'DELETE',
      url: 'http://localhost:8081/api/ingredients',
      body: {
        name: 'IngredientToDelete'
      }
    })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body)
          .to.include('Ingredient IngredientToDelete deleted with id');
      });
  });

  // Test for the DELETE / route (error case)
  it('should return an error if the ingredient is not found', () => {
    cy.request({
      method: 'DELETE',
      url: 'http://localhost:8081/api/ingredients',
      body: {
        name: 'NonExistentIngredient'
      },
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.eq('Ingredient not found');
      });
  });
});
