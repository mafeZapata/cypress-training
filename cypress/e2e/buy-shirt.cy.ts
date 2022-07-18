describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    cy.visit("http://automationpractice.com/");
    cy.get("#block_top_menu > ul > li:nth-child(3) > a").click();
    cy.get(".ajax_add_to_cart_button > span").click();
    cy.get(".layer_cart_cart > .button-container").click();
    cy.get(".cart_navigation span").click();
    cy.get("#email").type("aperdomobo@gmail.com");
    cy.get("#passwd").type("WorkshopProtractor");
    cy.get("#SubmitLogin > span").click();
    cy.get(".cart_navigation > .button").click();
    cy.get("#cgv").check();
    cy.get(".cart_navigation > .button").click();
    cy.get(".bankwire > span").click();
    cy.get("#cart_navigation > .button").click();
    cy.get("#center_column > div > p > strong")
        .should("have.text", "Your order on My Store is complete.");
  });
});
