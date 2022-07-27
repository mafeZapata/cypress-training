class IframePage {
    private ifrmaPageURL: string;
    private iframe: string;
    private titleText: string;
    private cssSelector: string;

    constructor() {
        this.ifrmaPageURL = "https://www.w3schools.com/html/html_iframe.asp";
        this.iframe = "[title=\"W3Schools HTML Tutorial\"]";
        this.titleText = "HTML Tutorial";
        this.cssSelector = "[title=\"CSS Tutorial\"]";
    }

    public visit(): void {
        cy.visit(this.ifrmaPageURL)
        cy.wait(10000)
    }

    public getFrameTitle(): void {
        cy.iframe(this.iframe).find("h1").should("have.text", this.titleText);
    }

    public goToCssPageInFrame(): void {
        cy.iframe(this.iframe).find(this.cssSelector).click();
    }
}

export { IframePage }
