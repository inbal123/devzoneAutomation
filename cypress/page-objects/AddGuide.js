import BasePage from './BasePage'

export default class AddGuide extends BasePage {
	static GUIDE_NAME = 'Guide'
	static GUIDE_DESCRIPTION = 'Guide description'

	static clickHowToGetStartedButton() {
		// Temporary
		BasePage.goToPersonalArea()
		cy.get(
			'#root > div > div.personal-zone-container > div.personal-zone-inner-container > div.personal-zone-inner-projects-container > div > div:nth-child(3) > div'
		).click()
		cy.get(
			'#project-page-container > div.project-page-inner-container > div.project-page-services-container > div:nth-child(2) > div'
		).click()
		cy.contains('על השירות').click()
		cy.fixture('test.jpg').then(fileContent => {
			cy.get(
				'#service-page-container > div.service-page-inner-container > div.on-service-tab-container > div.on-service-tab-files-container > div > input'
			).attachFile(
				{
					fileContent: fileContent.toString(),
					fileName: 'test.jpg',
					mimeType: 'image/jpg',
					encoding: 'utf-8',
				},
				{ subjectType: 'input' }
			)
		})
		// Until here Temporary
		cy.contains('איך מתחילים?').click()
	}
	static clickToAddNewGuide() {
		cy.get("div[class='how-to-start-tab-item-add']").click()
	}
	static typeGuideName() {
		cy.get(
			'#EditProjectServiceGuideModal > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.edit-guide-item-service-modal-inner-main > div.MuiFormControl-root.edit-guide-item-modal-input-title-input > div > input'
		).type(AddGuide.GUIDE_NAME)
	}
	static typeGuideDescription() {
		cy.get(
			'#EditProjectServiceGuideModal > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.edit-guide-item-service-modal-inner-main > textarea'
		).type(AddGuide.GUIDE_DESCRIPTION)
	}
	static uploadGuidePicture() {
		cy.fixture('test.jpg').then(fileContent => {
			cy.get("input[accept='.jpg,.jpeg,.png,.mp4']").attachFile(
				{
					fileContent: fileContent.toString(),
					fileName: 'test.jpg',
					mimeType: 'image/jpg',
					encoding: 'utf-8',
				},
				{ subjectType: 'input' }
			)
		})
	}
	static clickOnSaveChangesButton() {
		cy.contains('שמירת שינויים').click()
	}
	static clickOnCancelChangesButton() {
		cy.contains('ביטול השינויים').click()
	}
	static makeSureTheGuideHasBeenSaved() {
		// This Test is temporially on comment due to a bug in Add Guide procedure
		cy.get('.how-to-start-tab-item-name').should(
			'have.text',
			AddGuide.GUIDE_NAME
		)
		cy.get('.how-to-start-tab-item-desc p').should(
			'have.text',
			AddGuide.GUIDE_DESCRIPTION
		)
	}
}
