import BasePage from "./BasePage"

export default class AddGuide extends BasePage {
  static GUIDE_NAME = "Guide"
  static GUIDE_DESCRIPTION = "Guide description"

  static clickHowToGetStartedButton() {
    cy.contains("איך מתחילים?").click()
  }
  static clickToAddNewGuide() {
    cy.get("div[class='how-to-start-tab-item-add']").click()
  }
  static typeGuideName() {
    cy.get(
      "#EditProjectServiceGuideModal > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.edit-guide-item-service-modal-inner-main > div.MuiFormControl-root.edit-guide-item-modal-input-title-input > div > input"
    ).type(AddGuide.GUIDE_NAME)
  }
  static typeGuideDescription() {
    cy.get(
      "#EditProjectServiceGuideModal > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.edit-guide-item-service-modal-inner-main > textarea"
    ).type(AddGuide.GUIDE_DESCRIPTION)
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
  static clickOnSaveChangesButton() {
    cy.contains("שמירת שינויים").click()
  }
  static clickOnCancelChangesButton() {
    cy.contains("ביטול השינויים").click()
  }
  static makeSureTheGuideHasBeenSaved() {
    cy.get(".how-to-start-tab-item-name").should(
      "have.text",
      AddGuide.GUIDE_NAME
    )
    cy.get(".how-to-start-tab-item-desc p").should(
      "have.text",
      AddGuide.GUIDE_DESCRIPTION
    )
  }
}
