class DownloadPage {
    private downloadPageURL: string;
    private btnGenerate: string;

    constructor() {
        this.downloadPageURL = "https://demoqa.com/upload-download";
        this.btnGenerate = "#downloadButton";
    }

    public visitDownloadPage(): void {
        cy.visit(this.downloadPageURL)
    }

    public downloadFile(): void {
        cy.get(this.btnGenerate).click();
    }

    public verifyLoctionFile(fileName: string): void {
        cy.readFile('./cypress/downloads/'+fileName).should('exist');
    }
}

export { DownloadPage }
