class UploadPage {
    private btnUpload: string;
    private uploadPageURL: string;
    private titleSelector: string;

    constructor() {
        this.uploadPageURL = "https://the-internet.herokuapp.com/upload"
        this.btnUpload = "#file-upload";
        this.titleSelector = "#file-submit.button";
    }

    public visitUploadPage(): void {
        cy.visit(this.uploadPageURL)
    }

    public verifyFile(fileName: string): void {
        cy.get(this.btnUpload).attachFile(fileName);
    }

    public uploadFile(): void {
        cy.get(this.titleSelector).click();
    }
}

export { UploadPage }
