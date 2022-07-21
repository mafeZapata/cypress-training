class ProductsListPage {
    private addToCartBtn: string;
    private goToCheckBtn: string;

    constructor() {
        this.addToCartBtn = ".ajax_add_to_cart_button";
        this.goToCheckBtn = ".button-container > .button-medium";
    }

    public addTShirtToCart(): void {
        cy.get(this.addToCartBtn).click();
    }

    public goToCheckPage(): void {
        cy.get(this.goToCheckBtn).click();
    }
}

export { ProductsListPage }
