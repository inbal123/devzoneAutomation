import BasePage from "./BasePage";

export default class ViewAlerts extends BasePage {
    static clickOnAlertsButton() {
        cy.get("#notifications_alert_Hover").click()
    }

    static verifyAlertsAreShown() {
        cy.get("ul.MuiList-root").should("be.visible")
    }

    static closeAlertsWindow() {
        cy.get("#customized-menu").click()
    }
}