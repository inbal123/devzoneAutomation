import BasePage from "./BasePage"
import EditService from "./EditService"

export default class DeleteService extends BasePage {
  static openServicesPage() {
    cy.xpath(
      '//*[@id="root"]/div/div[2]/div[1]/div[2]/div[2]/div[2]/div[1]/span[2]'
    ).click()
  }

  static clickOnTheChosenService(NAME_OF_SERVICE_TO_DELETE) {
    cy.xpath(`//div[text()="${NAME_OF_SERVICE_TO_DELETE}"]`).click()
  }

  static ClickDeleteService() {
    cy.xpath("//span[text()='מחיקת השירות']").click({ force: true })
  }

  static confirmDeletion(serviceName) {
    cy.xpath("//input[@placeholder='שם השירות']").type(serviceName)
    cy.xpath("//div[text()='מחיקת השירות']").click()
    cy.xpath('//*[@id="root"]/div/div[1]/div/span').should("be.visible")
  }
}
