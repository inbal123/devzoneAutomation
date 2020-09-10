import BasePage from "./BasePage";

export default class AddProject extends BasePage {
    static clickOnAddProjectButton() {
        cy.get("#X").click()
    }

    static typeProjectName(projectName) {
        cy.get("input[placeholder = 'הפרויקט שלי']").type(projectName)
    }

    static chooseProjectForces(projectForces) {
        cy.get("#create-project-general__arm").click().then(() => {

        cy.wait(500)
        cy.get("li.MuiListItem-root").contains(new RegExp("^" + projectForces + "$", "g")).click()})
    }

    static typeProjectDescription(projectDescription) {
        cy.get("textarea[placeholder ='כדאי לשקף בתיאור את מטרת הפרויקט ועולם התוכן שלו']").type(projectDescription)
    }

    static clickOnAddMembersButton() {
        cy.contains(/^הוספת משתמש$/).click()
    }

    static typePersonalNumber(personalNumber) {
        cy.get("input[placeholder = 's1111111']").type(personalNumber)
    }

    static addMember() {
        cy.contains(/^הוספה$/).click()
    }

    static insertProjectLogo() {
        cy.fixture("test.jpg").then(fileContent => {
            cy.get("input[type = 'file']").attachFile({
                fileContent: fileContent.toString(),
                fileName: "test.jpg",
                mimeType: "image/jpg"
            }, { subjectType: "input" });
        });
    }

    static clickOnNextStageButton() {
        cy.contains(/^לשלב הבא$/).click()
    }

    static goBackToPreviousStage() {
        cy.contains(/^לשלב הקודם$/)
    }

    static clickOnFinishButton() {
        cy.contains(/^אישור וסיום$/).click()
    }

    static viewCreatedProject() {
        cy.contains(/^לצפייה בפרויקט$/).click()
    }
}