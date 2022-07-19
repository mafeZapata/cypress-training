class ProductsListPage {
    private addToCartBtn: string;
    private goToCartBtn: string;

    constructor() {
        this.addToCartBtn = ".ajax_add_to_cart_button";
        this.goToCartBtn = ".button-container > .button-medium";

    }

    public addTShirtToCart(): void {
        cy.get(this.addToCartBtn).click();
    }

    public goToCartPage(): void {
        cy.get(this.goToCartBtn).click();
    }
}

export { ProductsListPage }
