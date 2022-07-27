import {IframePage} from "../page/index";

describe("Test to interact with an iframe", () => {
  let iframePage: IframePage;

  beforeEach(() => {
    iframePage = new IframePage();
  });

  it("Try to interact with an iframe", () => {
    iframePage.visit();
    iframePage.getFrameTitle();
    iframePage.goToCssPageInFrame();
  });
});
