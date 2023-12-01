describe('BE Images Test', () => {
  
  let latestImageId;
  let latestImageIdEnd;
  let latestImageIdINT = -1;
  it('Should get the latest image ID to start tests', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8081/api/images/latestID'
    })
      .then((response) => {
        expect(response.status).to.eq(200);
        latestImageId = response.body; // cast to int
        latestImageIdINT = parseInt(latestImageId) + 1;
      });
  });

  it('Should upload image to restaurant', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8081/api/images/',
      body: {
        restaurant: 'McDonaldsTEST',
        image: {
          filename: 'CypressAutoTestImage',
          contentType: 'png',
          size: 124,
          base64: 'testimagestring'
        }
      }
    })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('Should delete image from restaurant', () => {
    cy.request({
      method: 'DELETE',
      url: 'http://localhost:8081/api/images/',
      body: {
        restaurant: 'McDonaldsTEST',
        imageId: latestImageIdINT
      }
    })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  //it('Upload should fail because of wrong restaurant', () => {
  //  cy.request({
  //    method: 'POST',
  //    url: 'http://localhost:8081/api/images/',
  //    body: {
  //      restaurant: 'RestaurantnotExistsss',
  //      image: {
  //        filename: 'CypressAutoTestImage',
  //        contentType: 'png',
  //        size: 124,
  //        base64: 'testimagestring'
  //      }
  //    }
  //  })
  //    .then((response) => {
  //      expect(response.status).to.eq(404);
  //    });
  //});

  it('Should upload image to dish', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8081/api/images/',
      body: {
        restaurant: 'McDonaldsTEST',
        dish: 'MCMuffin',
        image: {
          filename: 'CypressAutoTestImage',
          contentType: 'png',
          size: 124,
          base64: 'testimagestring'
        }
      }
    })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('Should delete image from dish', () => {
    cy.request({
      method: 'DELETE',
      url: 'http://localhost:8081/api/images/',
      body: {
        restaurant: 'McDonaldsTEST',
        dish: 'MCMuffin',
        imageId: latestImageIdINT
      }
    })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  //it('Upload should fail because of wrong dish', () => {
  //  cy.request({
  //    method: 'POST',
  //    url: 'http://localhost:8081/api/images/',
  //    body: {
  //      restaurant: 'McDonaldsTEST',
  //      dish: 'NOTEXISTING',
  //      image: {
  //        filename: 'CypressAutoTestImage',
  //        contentType: 'png',
  //        size: 124,
  //        base64: 'testimagestring'
  //      }
  //    }
  //  })
  //    .then((response) => {
  //      expect(response.status).to.eq(404);
  //    });
  //});
  
  it('Should upload image to extra', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8081/api/images/',
      body: {
        restaurant: 'McDonaldsTEST',
        extra: 'cheese',
        image: {
          filename: 'CypressAutoTestImage',
          contentType: 'png',
          size: 124,
          base64: 'testimagestring'
        }
      }
    })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('Should delete image from extra', () => {
    cy.request({
      method: 'DELETE',
      url: 'http://localhost:8081/api/images/',
      body: {
        restaurant: 'McDonaldsTEST',
        extra: 'cheese',
        imageId: latestImageIdINT
      }
    })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  //  it('Upload should fail because of wrong extra', () => {
  //    cy.request({
  //      method: 'POST',
  //      url: 'http://localhost:8081/api/images/',
  //      body: {
  //        restaurant: 'McDonaldsTEST',
  //        extra: 'abcdef',
  //        image: {
  //          filename: 'CypressAutoTestImage',
  //          contentType: 'png',
  //          size: 124,
  //          base64: 'testimagestring'
  //        }
  //      }
  //    })
  //      .then((response) => {
  //        expect(response.status).to.eq(404);
  //      });
  //  });

  it('Should get the latest image ID to end tests', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8081/api/images/latestID'
    })
      .then((response) => {
        expect(response.status).to.eq(200);
        latestImageIdEnd = response.body; // cast to int
        expect(latestImageIdEnd).to.eq(latestImageId);
      });
  });
  
});
