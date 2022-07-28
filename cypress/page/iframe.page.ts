class IframePage {
    private ifrmaPageURL: string;
    private iframe: string;
    private titleIframe: string;
    private titleText: string;
    private cssSelector: string;

    constructor() {
        this.ifrmaPageURL = "https://www.w3schools.com/html/html_iframe.asp";
        this.iframe = "[title=\"W3Schools HTML Tutorial\"]";
        this.titleText = "HTML Tutorial";
        this.titleIframe = "#main h1";
        this.cssSelector = "[title=\"CSS Tutorial\"]";
    }

    public visit(): void {
        cy.visit(this.ifrmaPageURL)
        cy.wait(10000)
    }

    public getFrameTitle(): any {  
        return cy.iframe(this.iframe).find("h1");
    }

    public goToCssPageInFrame(): void {
        cy.iframe(this.iframe).find(this.cssSelector).click();
    }
}

export { IframePage }
