describe("UI TESTS", () => {
  //   it("should navigate to google website", () => {
  //     cy.visit("http://google.com");
  //   });

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should navigate to login page", () => {
    cy.get("h1.mb-3").should("have.length", 1);
    cy.get("h1.mb-3").should("be.visible");
  });

  it("should not allow login when username is not provided", () => {
    cy.get("#inputPassword").type("123456");
    cy.get('[data-cy="submit-button"]').click();
    // check that we are still on the same page
    cy.get("h1.mb-3").should("have.length", 1);
    cy.get("h1.mb-3").should("be.visible");
    cy.get('[data-cy="homepage"]').should("have.length", 0);
  });

  it("should not allow login when password is not provided", () => {
    cy.get("#inputEmail").type("zullum@test.ca");
    cy.get('[data-cy="submit-button"]').click();
    // check that we are still on the same page
    cy.get("h1.mb-3").should("have.length", 1);
    cy.get("h1.mb-3").should("be.visible");
    cy.get('[data-cy="homepage"]').should("have.length", 0);
  });

  it("should login to homepage with valid creds", () => {
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

  it("should contain correct input values", () => {
    cy.get("#inputEmail").type("zullum@test.ca");
    cy.get("#inputEmail").should("have.value", "zullum@test.ca");
    cy.get("#inputPassword").type("123456");
    cy.get("#inputPassword").should("have.value", "123456");
    cy.get("#inputPassword").should("not.have.value", "000123456");
  });

  it("should logout successfully", () => {
    cy.get("#inputEmail").type("zullum@test.ca");
    cy.get("#inputPassword").type("123456");
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="homepage"]').should("have.length", 1);
    cy.get('[data-cy="homepage"]').should("be.visible");
    cy.get('[data-cy="submit-button"]').should("be.visible");
    cy.get('[data-cy="submit-button"]').should("have.class", "btn-danger");
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="logged-out"]').should("be.visible");
    cy.get('[data-cy="logged-out"]').should(
      "contain",
      "You are now logged out"
    );
  });

  it("should have existing elements", () => {
    cy.get("#inputEmail").should("exist");
    cy.get("#inputPassword").should("exist");
    cy.get('[data-cy="logged-out"]').should("not.exist");
    // usually no need to wait but if you need it then
    // cy.wait(1000);
  });

  // it("should fail and create video and screenshot", () => {
  //   cy.get("#zzzz").should("exist");
  // });
});
