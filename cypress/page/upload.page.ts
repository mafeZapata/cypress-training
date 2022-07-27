class UploadPage {
    private btnUpload: string;
    private uploadPageURL: string;
    private titleSelector: string;
    private modalTitle: string;

    constructor() {
        this.uploadPageURL = "https://the-internet.herokuapp.com/upload"
        this.btnUpload = "#file-upload";
        this.titleSelector = "#file-submit.button";
        this.modalTitle="#content > div > h3";
    }

    public visitUploadPage(): void {
        cy.visit(this.uploadPageURL)
    }

    public uploadFile(fileName: string): void {
        cy.get(this.btnUpload).attachFile(fileName);
        cy.get(this.titleSelector).click();
    }

    public getModalTitle() {
        return cy.get(this.modalTitle);
    }
}

export { UploadPage }
