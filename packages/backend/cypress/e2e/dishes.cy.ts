describe('BE Dishes Test', () => {

  // Test to add a dish
  it('should add a dishes', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8081/api/dishes/McDonalds',
      body: {
        name: 'testdishes',
      }
    })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('Object');
        expect(response.body.name).to.eq('testdishes');
      });
  });
  // Test to change a dish
  it('should modify a dish restaurant', () => {
    cy.request({
      method: 'PUT',
      url: 'http://localhost:8081/api/dishes/McDonalds',
      body: {
        name: 'testdishes',
      }
    })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });
  // Test to delete a dish
  it('should delete a dishes', () => {
    cy.request({
      method: 'DELETE',
      url: 'http://localhost:8081/api/dishes/McDonalds',
      body: {
        name: 'testdishes',
      }
    })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });
  // Test for AllDishes
  it('should return all Dishes', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8081/api/dishes'
    })
      .then((response) => {
        const dishes = response.body;
        const hasMCMuffin = dishes.some(dish => dish.name === 'MCMuffin');
        expect(hasMCMuffin).to.be.true;
      });
  });
  // Test for Dish Name
  it('should return dishes from a name', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8081/api/dishes/McDonalds'
    })
      .then((response) => {
        const dishes = response.body;
        const hasMCMuffin = dishes.some(dish => dish.dishes[0].name ===
                'MCMuffin');
        expect(hasMCMuffin).to.be.true;
      });
  });
});
