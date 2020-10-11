import BasePage from "./BasePage"

export default class EditGuide extends BasePage {
  static EDITED_GUIDE_NAME = "edited guide name"
  static EDITED_GUIDE_DESCRIPTION = "edited description"
  static clickOnEditGuideButton() {
    cy.get(
      'svg[class="MuiSvgIcon-root how-to-start-tab-item-three-points-btn hideEdit"]'
    ).click({ force: true })
    cy.contains("עריכה").click()
  }
  static typeGuideName(guideName) {
    cy.get("input[placeholder='למשל, איך להתחיל להשתמש בשירות?']")
      .clear()
      .type(guideName)
  }
  static typeGuideDescription(guideDescription) {
    cy.get("textArea").clear().type(guideDescription)
  }
  static clickToRemoveTheAttachedPicture() {
    cy.get("#X").click({ force: true })
    // Begining ---
    // Currently there is a problem that causes the other text fields to get empty while i remove the picture
    // so in the meantime I need to do that again
    EditGuide.typeGuideName(EditGuide.EDITED_GUIDE_NAME)
    EditGuide.typeGuideDescription(EditGuide.EDITED_GUIDE_DESCRIPTION)
    // End ---
  }
  static ClickSaveChanges() {
    cy.get(".edit-guide-item-service-modal-btns-save").click()
  }
  static ClickCancelChanges() {
    cy.get(".edit-guide-item-service-modal-btns-cancel").click()
  }
  static clickOnXToCloseEditWindow() {
    cy.get(
      "svg[class='edit-guide-item-service-modal-exit-container-icon'] g"
    ).click({ force: true })
  }
  static uploadGuidePicture() {
    cy.fixture("test.jpg").then((fileContent) => {
      cy.get("input[accept='.jpg,.jpeg,.png,.mp4']").attachFile(
        {
          fileContent: fileContent.toString(),
          fileName: "test.jpg",
          mimeType: "image/jpg",
          encoding: "utf-8",
        },
        { subjectType: "input" }
      )
    })
  }
}
