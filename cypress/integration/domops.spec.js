describe("UI TESTS", () => {
  //   it("should navigate to google website", () => {
  //     cy.visit("http://google.com");
  //   });

  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");
  });

  it("should clear input text field", () => {
    cy.get(".action-email").type("fake@email.com");
    cy.get(".action-email").clear();
    cy.get(".action-email").should("not.have.value", "fake@email.com");
    cy.get(".action-email").should("have.value", "");
  });

  it("should double click the element", () => {
    cy.get(".action-div")
      .dblclick()
      .should("not.be.visible")
      .should("have.value", "");
    cy.get(".action-input-hidden").should("be.visible");
  });

  it("should check the first checkbox", () => {
    cy.get('.action-check [type="checkbox"]')
      .check("checkbox1")
      .should("be.checked");
  });

  it("should uncheck the first checkbox", () => {
    cy.get('.action-check [type="checkbox"]')
      .check("checkbox1")
      .should("be.checked");
    cy.get('.action-check [type="checkbox"]')
      .uncheck("checkbox1")
      .should("not.be.checked");
  });

  it("should select the first radio button", () => {
    cy.get('.action-radios [type="radio"]')
      .check("radio1")
      .should("be.checked");
  });

  it("should select the first radio button", () => {
    cy.get(".action-select").select("apples");
    cy.get(".action-select").should("have.value", "fr-apples");
  });
});
