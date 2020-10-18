import BasePage from "./BasePage";

export default class ManageProjectMemebers extends BasePage {
    static projectName

    static chooseProject(projectName) {
        this.projectName = projectName
    }

    static openProjectPage() {
        cy.get(".project-card__name")
            .contains(new RegExp("^" + this.projectName + "$", "g"))
            .click()
    }

    static clickOnProjectMembersTab() {
        cy.contains(/^חברי הפרויקט$/).click()
    }

    static clickOnAddMemberButton() {
        cy.contains(/^הוספת משתמש$/).click()
    }

    static addMember(personalNumber) {
        cy.get(".member-item-add-on-input").type(personalNumber)
        cy.get(".member-item-add-on-add-btn").click()
    }

    static verfiyMemberExists(personalNumber) {
        cy.get(`#${personalNumber}x`).should("exist")
    }

    static deleteMember(personalNumber) {
        cy.get(`#${personalNumber}x`).click({ force: true })
    }

    static verifyMemberDoesNotExist(personalNumber) {
        cy.get(`#${personalNumber}x`).should("not.exist")
    }

    static clickOnMemberChatButton(personalNumber) {
        cy.xpath(`//*[@id = '${personalNumber}']/preceding-sibling::*[2]`)
    }

    static clickOnMemberMailButton(personalNumber) {
        cy.xpath(`//*[@id = '${personalNumber}']/preceding-sibling::a`)
    }
}