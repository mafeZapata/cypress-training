import {IframePage} from "../page/index";

describe("Test to interact with an iframe", () => {
  let iframePage: IframePage;
  let iframetitle: string;

  beforeEach(() => {
    iframePage = new IframePage();
    iframetitle="HTML Tutorial";
    iframePage.visit();
  });

  it("Try to interact with an iframe", () => {
    iframePage.getFrameTitle().should("have.text", iframetitle);
    iframePage.goToCssPageInFrame();
  });
});
