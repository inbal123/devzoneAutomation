export default class EditService {
  static EDITED_SERVICE_NAME = "edited shit"

  static editName() {
    cy.get('input[placeholder="השירות שלי"]')
      .clear()
      .type(EditService.EDITED_SERVICE_NAME)
  }
  static openEditWindow() {
    cy.get("#service-page-details-title-edit-btn").click({ force: true })
    cy.wait(1000)
    cy.get(".edit-title-service-modal-exit-container-icon").click()
    cy.get("#service-page-details-title-edit-btn").click({ force: true })
  }
  static editNumberOfRequestsPerMinute() {
    let EDITED_NUMBER_OF_REQUESTS_PER_MINUTE = "22"
    cy.get('input[placeholder="2000"]')
      .clear()
      .type(EDITED_NUMBER_OF_REQUESTS_PER_MINUTE)
  }
  static clickSave() {
    cy.get(
      "#EditProjectServiceTitleModal > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.edit-title-service-modal-btns-container > div.edit-title-service-modal-btns-save"
    ).click()
  }
  static removeTwoTagsFromService() {
    let numberOfTagsToRemove = 2
    let numberOfTagsThatAlreadyRemoved = 0
    cy.get(".search-filters-item-selected").each((tag) => {
      if (numberOfTagsThatAlreadyRemoved++ < numberOfTagsToRemove) {
        tag.click()
      }
    })
  }

  static clickOnAllServicesButton() {
    cy.xpath('//span[@class="footer-right-txt"][text()="כל השירותים"]').click()
  }
}
