export default class BasePage {
    static logMessage(message) {
        cy.log(message)
    }

    static reloadPage() {
        cy.reload
    }

    static goToHomePage() {
        cy.visit("/")
    }

    static goToPersonalArea() {
        cy.get(".user-label-btn").click()
    }
}