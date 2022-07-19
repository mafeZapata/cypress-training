class ShoppingCartPage {
    private goToCheckoutBtn: string;

    constructor() {
        this.goToCheckoutBtn = ".cart_navigation span";
    }
    
    public goToCheckoutPage(): void {
        cy.get(this.goToCheckoutBtn).click();
    }
}

export { ShoppingCartPage }
