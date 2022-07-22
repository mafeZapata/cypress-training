class ShoppingCartPage {
    private goCheckoutBtn: string;

    constructor() {
        this.goCheckoutBtn = ".cart_navigation > .standard-checkout";
    }

    public goToCheckoutPage(): void {
        cy.get(this.goCheckoutBtn).click();
    }
}

export { ShoppingCartPage }
