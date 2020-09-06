import BasePage from "./BasePage";

export default class ManageSubscription extends BasePage {
    static openServicePage(serviceName) {
        cy.get(".project-service-card__title").contains(new RegExp("^" + serviceName + "$", "g")).click()
    }
    
    static subscribeToService() {
        cy.get(".service-page-action-subscribe-btn").click()
    }

    static verifySubscription() {
        cy.get(".service-page-action-un-subscribe-btn").should("be.visible")
    }

    static unsubscriptionFromService() {
        cy.get(".service-page-action-un-subscribe-btn").click()
    }

    static verifyUnsubscription() {
        cy.get(".service-page-action-subscribe-btn").should("be.visible")
    }
}