class ProductsListPage {
    private allProducts: string;
    private addToCartBtn: string;
    private goToCheckBtn: string;
    
    constructor() {
        this.addToCartBtn = ".ajax_add_to_cart_button";
        this.goToCheckBtn = ".button-container > .button-medium";
        this.allProducts = ".product-container";
    }

    public addTShirtToCart(productName: string): void {
        this.findProductByName(productName).find(this.addToCartBtn).click();
    }

    private findProductByName(productName: string) {
        return cy.get(this.allProducts).filter(`:contains("${productName}")`)
    }

    public goToCheckPage(): void {
        cy.get(this.goToCheckBtn).click();
    }
}

export { ProductsListPage }
