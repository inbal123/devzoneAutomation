import EditProject from "./EditProject";

export default class EditProjectNegative extends EditProject {
    static clearProjectNameField() {
        cy.get("#input-with-icon-adornment").clear()
    }

    static clearProjectDescriptionField() {
        cy.get(".create-project-general__description-box").clear()
    }

    static typeReallyLongProjectName() {
        cy.get("#input-with-icon-adornment").clear().type("Really Looooooooooooooooooooooong Project Name")
    }

    static verifyNotTheEntireProjectNameWasTyped() {
        cy.get(".project-page-details-title").should("not.contain.text", "Really Looooooooooooooooooooooong Project Name").and("contain.text", "Really")
    }

    static verfiySaveChangesButtonIsDisabled() {
        cy.get(".edit-project-save-btn").should("have.class", "disabledElement")
    }
}