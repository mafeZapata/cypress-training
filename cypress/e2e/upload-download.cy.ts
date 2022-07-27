import {UploadPage} from "../page/index";

describe("Test to upload and download a file", () => {
  let uploadPage: UploadPage;
  const fileName = "prueba.txt";
  beforeEach(() => {
    uploadPage = new UploadPage();
  });

  it(" Try to Upload file", () => {
    uploadPage.visitUploadPage();
    uploadPage.verifyFile(fileName);
    uploadPage.uploadFile();
  });
});
