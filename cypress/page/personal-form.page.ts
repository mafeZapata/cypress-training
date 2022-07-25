interface PersonalInformation {
    name: string
    lastName: string
    email: string
    gender: string
    mobileNumber: string
    dateOfBirth: string
    hobbies: string[]
    currentAddress: string
    state: string
    city: string
}

class PersonalFormPage {
    private personalInfoFormUrl: string
    private firstName: string;
    private lastName: string;
    private email: string;
    private mobileNumber: string;
    private dateOfBirth: string;
    private currentAdress: string;
    private state: string;
    private city: string;
    private modalTitle: string

    constructor() {
        this.personalInfoFormUrl = "https://demoqa.com/automation-practice-form";
        this.firstName = "#firstName";
        this.lastName = "#lastName";
        this.email = "#userEmail";
        this.mobileNumber = "#userNumber";
        this.dateOfBirth = "#dateOfBirthInput";
        this.currentAdress = "#currentAddress";
        this.state = "#react-select-3-input";
        this.city = "#react-select-4-input";
        this.modalTitle = "#example-modal-sizes-title-lg";
    }

    public visitPersonalInfoFormPage(): void{
        cy.visit(this.personalInfoFormUrl);
    }

    public fillForm(personalInformation: PersonalInformation): void {
        cy.get(this.firstName).type(personalInformation.name);
        cy.get(this.lastName).type(personalInformation.lastName);
        cy.get(this.email).type(personalInformation.email);
        cy.contains(personalInformation.gender).click()
        cy.get(this.mobileNumber).type(personalInformation.mobileNumber);
        cy.get(this.dateOfBirth).type(`{selectall}${personalInformation.dateOfBirth}{enter}`);
        this.setHobbies(personalInformation.hobbies);
        cy.get(this.currentAdress).type(personalInformation.currentAddress);
        cy.get(this.state).focus().type(`${personalInformation.state}{enter}`);
        cy.get(this.city).focus().type(`${personalInformation.city}{enter}`);
        cy.get("#userForm").submit();
    }

    private setHobbies(userHobbies: string[]): void {
        userHobbies.forEach(element => {
            cy.contains(element).click();
        });
    }


    public checkForm(PersonalInformation: PersonalInformation) {
        cy.get('.modal').contains(PersonalInformation.name);
        cy.get('.modal').contains(PersonalInformation.lastName);
        cy.get('.modal').contains(PersonalInformation.email);
        cy.get('.modal').contains(PersonalInformation.gender);
        cy.get('.modal').contains(PersonalInformation.dateOfBirth);
        cy.get('.modal').contains(PersonalInformation.currentAddress);
        cy.get('.modal').contains(PersonalInformation.state);
        cy.get('.modal').contains(PersonalInformation.city); 
    }

    public getModalTitle() {
        return cy.get(this.modalTitle);
    }
}

export { PersonalFormPage }
