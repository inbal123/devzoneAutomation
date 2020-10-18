export default class EditService {
	static EDITED_SERVICE_NAME = 'edited future service'
	static EDITED_NUMBER_OF_REQUESTS_PER_MINUTE = '22'

	static editServiceName() {
		cy.get('input[placeholder="השירות שלי"]')
			.clear()
			.type(EditService.EDITED_SERVICE_NAME)
	}
	static openEditServiceWindow() {
		cy.get('#service-page-details-title-edit-btn').click({ force: true })
		cy.wait(1000)
		cy.get('.edit-title-service-modal-exit-container-icon').click()
		cy.get('#service-page-details-title-edit-btn').click({ force: true })
	}

	static CloseEditServiceWindow() {
		cy.get(
			"svg[class='edit-title-service-modal-exit-container-icon'] g"
		).click({ force: true })
	}

	static ChooseB2BServiceType() {
		cy.xpath("//div[@class='radio-button__radio-text'][text()='B2B']").click()
	}

	static clickToCancelServiceEdit() {
		cy.get('.edit-title-service-modal-btns-cancel').click()
	}

	static makeSureThatServiceTypeHasNotChanged() {
		cy.get('label[for="B2C"] input')
			.invoke('attr', 'checked')
			.should('contain', '')
	}
	static makeSureThatNumberOfRequestsHasNotChanged() {
		let NUMBER_OF_REQUESTS_PER_MINUTE = 10250
		cy.get('input[placeholder="2000"]').should(
			'have.value',
			NUMBER_OF_REQUESTS_PER_MINUTE
		)
	}
	static makeSureThatTagsHaveNotChanged() {
		let NUMBER_OF_CHOSEN_TAGS = 6
		cy.get('.search-filters-item-selected').should(returnedObject => {
			expect(returnedObject).to.have.length(NUMBER_OF_CHOSEN_TAGS)
		})
	}

	static makeSureThatNothingHasChangedDuringTheCanceledEdition() {
		EditService.openEditServiceWindow()
		EditService.makeSureThatTagsHaveNotChanged()
		EditService.makeSureThatNumberOfRequestsHasNotChanged()
		EditService.makeSureThatServiceTypeHasNotChanged()
		EditService.CloseEditServiceWindow()
	}

	static cancelEditService() {
		EditService.openEditServiceWindow()
		EditService.editServiceName()
		EditService.removeTwoTagsFromService()
		EditService.editNumberOfRequestsPerMinute()
		EditService.ChooseB2BServiceType()
		EditService.clickToCancelServiceEdit()
		EditService.makeSureThatNothingHasChangedDuringTheCanceledEdition()
	}

	static editNumberOfRequestsPerMinute() {
		cy.get('input[placeholder="2000"]')
			.clear()
			.type(EditService.EDITED_NUMBER_OF_REQUESTS_PER_MINUTE)
	}

	static clickSave() {
		cy.get(
			'#EditProjectServiceTitleModal > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.edit-title-service-modal-btns-container > div.edit-title-service-modal-btns-save'
		).click()
	}
	static removeTwoTagsFromService() {
		let numberOfTagsToRemove = 2
		let numberOfTagsThatAlreadyRemoved = 0
		cy.get('.search-filters-item-selected').each(tag => {
			if (numberOfTagsThatAlreadyRemoved++ < numberOfTagsToRemove) {
				tag.click()
			}
		})
	}

	static clickOnAllServicesButton() {
		cy.xpath('//span[@class="footer-right-txt"][text()="כל השירותים"]').click()
	}

	static clickEditServicePicture() {
		cy.fixture('test.jpg').then(fileContent => {
			cy.get('input[class="input-file-service-page"]').attachFile(
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

	static clickCancelButton() {
		cy.get('.nav-header__cancel-btn').click()
	}

	static cancelTheTryingToCaneclTheAddServiceProcedure() {
		cy.get(
			'.close-wizard-modal__button.close-wizard-modal__button--back'
		).click()
	}
	static clickToConfirmTheCancel() {
		cy.get(
			'.close-wizard-modal__button.close-wizard-modal__button--exit'
		).click()
	}
}
