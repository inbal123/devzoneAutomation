import BasePage from "./BasePage"
import AddService from "./AddService"

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
    cy.xpath("//span[text()='מחיקת השירות']/parent::div").click()
  }
  static confirmDeletion() {
    cy.xpath("//input[@placeholder='שם השירות']").type(AddService.SERVICE_NAME)
    cy.xpath("//div[text()='מחיקת השירות']").click()
    cy.xpath('//*[@id="root"]/div/div[1]/div/span').should("be.visible")
  }
}
