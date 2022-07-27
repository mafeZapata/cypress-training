import {UploadPage} from "../page/index";
import {DownloadPage} from "../page/index";


describe("Test to upload and download a file", () => {
  let uploadPage: UploadPage;
  let downloadPage: DownloadPage;
  const fileName = "prueba.txt";

  beforeEach(() => {
    uploadPage = new UploadPage();
    downloadPage = new DownloadPage();
  });

  it(" Try to Upload file", () => {
    uploadPage.visitUploadPage();
    uploadPage.uploadFile(fileName);
    uploadPage.getModalTitle().should("have.text", "File Uploaded!");
  });

  it("Try to download file test", () => {
    downloadPage.visitDownloadPage();
    downloadPage.downloadFile();
    downloadPage.verifyLoctionFile("sampleFile.jpeg");
  });
});
