describe("UI TESTS", () => {
  //   it("should navigate to google website", () => {
  //     cy.visit("http://google.com");
  //   });
  it("should navigate to login page", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1.mb-3").should("have.length", 1);
    cy.get("h1.mb-3").should("be.visible");
  });

  it("should not allow login when username is not provided", () => {
    cy.visit("http://localhost:3000");
    cy.get("#inputPassword").type("123456");
    cy.get('[data-cy="submit-button"]').click();
    // check that we are still on the same page
    cy.get("h1.mb-3").should("have.length", 1);
    cy.get("h1.mb-3").should("be.visible");
    cy.get('[data-cy="homepage"]').should("have.length", 0);
  });

  it("should not allow login when password is not provided", () => {
    cy.visit("http://localhost:3000");
    cy.get("#inputEmail").type("zullum@test.ca");
    cy.get('[data-cy="submit-button"]').click();
    // check that we are still on the same page
    cy.get("h1.mb-3").should("have.length", 1);
    cy.get("h1.mb-3").should("be.visible");
    cy.get('[data-cy="homepage"]').should("have.length", 0);
  });

  it("should login to homepage with valid creds", () => {
    cy.visit("http://localhost:3000");
    cy.get("#inputEmail").type("zullum@test.ca");
    cy.get("#inputPassword").type("123456");
    cy.get('[data-cy="submit-button"]').click();
    // check that we are still on the same page
    cy.get("h1.mb-3").should("have.length", 0);
    cy.get('[data-cy="homepage"]').should("have.length", 1);
    cy.get('[data-cy="homepage"]').should("be.visible");
    cy.get('[data-cy="submit-button"]').should("have.class", "btn-danger");
    cy.get('[data-cy="submit-button"]').should("not.have.class", "btn-success");
  });
});
