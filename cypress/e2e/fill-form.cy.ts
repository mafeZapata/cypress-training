import {
  PersonalFormPage,
} from "../page/index";

const personalInformation = {
  name: "Holmes",
  lastName: "Salazar",
  email: "test@email.com",
  gender: "Male",
  dateOfBirth: "27 Jul 2016",
  mobileNumber: "3656589156",
  hobbies: ["Music", "Reading"],
  currentAddress: "Av siempreViva # 123",
  state: "Haryana",
  city: "Karnl",
};

describe("try to summit a form", () => {
  let personalFormPage: PersonalFormPage;

  before(() => {
    personalFormPage = new PersonalFormPage();
    personalFormPage.visitPersonalInfoFormPage();
  });

  it("Try to summit a form", () => {
    personalFormPage.fillForm(personalInformation);
    personalFormPage.getModalTitle().should("have.text", "Thanks for submitting the form");
  });
});
