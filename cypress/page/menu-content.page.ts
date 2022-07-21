class MenuContentPage {
    private dressesMenu: string;
    private tShirtMenu: string;
    private menuContentPageURL: string
<<<<<<< Updated upstream
=======
    
>>>>>>> Stashed changes

    constructor() {
        this.tShirtMenu = "#block_top_menu > ul > li:nth-child(3) > a";
        this.menuContentPageURL = "http://automationpractice.com/"
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click()
    }
}

export { MenuContentPage }
