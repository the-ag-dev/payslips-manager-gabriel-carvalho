describe("Payslip Application Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Displays a list of payslips on the main screen", () => {
    cy.get(".payslip-list-item").should("have.length.at.least", 1);
  });

  it("Navigates to the individual payslip details page on item click", () => {
    cy.get(".payslip-list-item").first().click();
    cy.url().should("include", "/payslip");
    cy.get(".payslip-details").should("exist");
  });

  it("Displays all required information on the payslip details page", () => {
    cy.get(".payslip-list-item").first().click();
    cy.get(".payslip-id").should("exist");
    cy.get(".payslip-period").should("exist");
    cy.get(".download-button").should("exist");
  });

  it("Displays the download toast after pressing the download button", () => {
    cy.get(".payslip-list-item").first().click();
    cy.url().should("include", "/payslip");
    cy.get(".download-button").click();
    cy.get(".download-toast").should("exist");
  });
});
