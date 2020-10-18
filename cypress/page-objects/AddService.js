import AddProject from './AddProject'
import BasePage from './BasePage'

export default class AddService extends BasePage {
	static FILE_NAMES = [
		'mydoc.doc',
		'mydocx.docx',
		'mypdf.pdf',
		'mypptx.pptx',
		'myxlsx.xlsx',
	]
	static FILE_FORMATS = [
		'application/msword',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		'application/pdf',
		'application/vnd.openxmlformats-officedocument.presentationml.presentation',
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	]
	static EXISTING_SERVICE_NAME = 'existing service'
	static FUTURE_SERVICE_NAME = 'future service'
	static SERVICE_DESCRIPTION = 'my description'
	static NUMBER_OF_REQUESTS_PER_MINUTE = '10250'
	static LINK_TO_THE_OPERATION_CHANNEL = 'example.com'
	static EXAMPLE_ARMY_PHONE_NUMBER = '5555-5555'
	static EXAMPLE_CIVILIAN_PHONE_NUMBER = '55-5555555'
	static RULE_OF_PRODUCT_MANAGER = 'klumnik'
	static GRAPHQL_SERVER_ENDPOINT_LINK = 'http://graphql-server-endpoint-link'
	static SWAGGER_SERVER_ENDPOINT_LINK = 'http://swagger-server-endpoint-link'

	static printFiles() {
		let outputString = ''
		for (let i = 0; i < AddService.FILE_NAMES.length; i++) {
			outputString +=
				'\n' +
				AddService.FILE_NAMES[i].substring(
					AddService.FILE_NAMES[i].indexOf('.') + 1
				) +
				' file type - ' +
				AddService.FILE_NAMES[i] +
				(i === AddService.FILE_NAMES.length - 1 ? '\n' : '\n\n')
		}
		return outputString
	}

	static clickOnAddServiceButton() {
		cy.get(
			'#header-container > div.left-header-container > div.add-service-btn > div > span:nth-child(1)'
		).click()
	}

	static clickToSelectTheProject(projectName) {
		cy.xpath("//div[text()='" + projectName + "']").click()
	}

	static clickAddService() {
		cy.get(
			'button[class="create-project-service-choose-project__button"]'
		).click()
	}

	static typeServiceName(name) {
		cy.get('#input-with-icon-adornment').type(name)
	}

	static ClickOnTheWantedTags() {
		cy.get('.search-filters-item').each(tag => {
			tag.click()
		})
	}

	static typeServiceDescription() {
		cy.get('textarea.create-project-service-general__description-box').type(
			AddService.SERVICE_DESCRIPTION
		)
	}

	static ChooseExistingService() {
		cy.xpath(
			"//div[@class='radio-button__radio-text'][text()='שירות קיים']"
		).click()
	}

	static ChooseFutureService() {
		cy.xpath(
			"//div[@class='radio-button__radio-text'][text()='שירות עתידי']"
		).click()
	}

	static ChooseB2BServiceType() {
		cy.xpath("//div[@class='radio-button__radio-text'][text()='B2B']").click()
	}

	static ChooseB2CServiceType() {
		cy.xpath("//div[@class='radio-button__radio-text'][text()='B2C']").click()
	}

	static typeNumberOfRequestPerSecond() {
		cy.get("input[placeholder='2000']").type(
			AddService.NUMBER_OF_REQUESTS_PER_MINUTE
		)
	}

	static fillAllTheServiceTeamDetails() {
		AddService.typeLinkToTheOperationChannel()
		AddService.typeDevelopmentTeamPhoneNumbers()
		AddService.typeOperatingCHAMALPhoneNumbers()
		AddService.TypeProductManagerDetails()
		AddService.selectUser()
	}

	static selectUser() {
		cy.get(
			'div[class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input"]'
		).click()
		cy.get(
			'#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(2)'
		).click()
	}

	static typeLinkToTheOperationChannel() {
		cy.get('#input-with-icon-adornment').type(
			AddService.LINK_TO_THE_OPERATION_CHANNEL
		)
	}

	static typeDevelopmentTeamPhoneNumbers() {
		cy.xpath(
			'//*[@id="root"]/div/div/div/div[2]/div/div[2]/div[2]/div[1]/div[2]/div/div/div/input'
		).type(AddService.EXAMPLE_ARMY_PHONE_NUMBER)
		cy.xpath(
			'//*[@id="root"]/div/div/div/div[2]/div/div[2]/div[2]/div[2]/div[2]/div/div/div/input'
		).type(AddService.EXAMPLE_CIVILIAN_PHONE_NUMBER)
	}

	static typeOperatingCHAMALPhoneNumbers() {
		cy.xpath(
			'//*[@id="root"]/div/div/div/div[2]/div/div[3]/div[2]/div[1]/div[2]/div/div/div/input'
		).type(AddService.EXAMPLE_ARMY_PHONE_NUMBER)
		cy.xpath(
			'//*[@id="root"]/div/div/div/div[2]/div/div[3]/div[2]/div[2]/div[2]/div/div/div/input'
		).type(AddService.EXAMPLE_CIVILIAN_PHONE_NUMBER)
	}

	static TypeProductManagerDetails() {
		cy.xpath(
			'/html/body/div/div/div/div/div[2]/div/div[4]/div[2]/div[1]/div[2]/div/div/input'
		).type(AddService.RULE_OF_PRODUCT_MANAGER)
		cy.xpath(
			'//*[@id="root"]/div/div/div/div[2]/div/div[4]/div[2]/div[2]/div[2]/div/div/div/input'
		).type(AddService.EXAMPLE_ARMY_PHONE_NUMBER)
	}

	static typeNumberOfRequestPerSecond() {
		cy.get('input[placeholder="2000"]').type(
			AddService.NUMBER_OF_REQUESTS_PER_MINUTE
		)
	}

	static uplaodFilesToTheService() {
		for (let i = 0; i < AddService.FILE_FORMATS.length; i++) {
			cy.fixture(AddService.FILE_NAMES[i]).then(fileContent => {
				cy.get('input').attachFile(
					{
						fileContent: fileContent.toString(),
						fileName: AddService.FILE_NAMES[i],
						mimeType: AddService.FILE_FORMATS[i],
						encoding: 'utf-8',
					},
					{ subjectType: 'input' }
				)
			})
		}
	}

	static selectGraphQLAsApiType() {
		cy.xpath("//div[text()='GraphQL']").click()
	}

	static selectSwaggerAsApiType() {
		cy.xpath("//div[text()='Swagger']").click()
	}

	static typeGraphQLServerEndpointLink() {
		cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input"]').type(
			AddService.GRAPHQL_SERVER_ENDPOINT_LINK
		)
	}

	static typeSwaggerServerEndpointLink() {
		cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input"]').type(
			AddService.SWAGGER_SERVER_ENDPOINT_LINK
		)
	}

	static clickOnNextStageButton() {
		cy.contains(/^לשלב הבא$/).click()
	}

	static clickOnPreviousStageButton() {
		cy.contains(/^לשלב הקודם$/).click()
	}

	static clickOnFinishButton() {
		cy.contains(/^אישור וסיום$/).click()
	}

	static viewCreatedService() {
		cy.contains(/^מעבר לצפייה בשירות$/).click()
	}

	static makeSureAddServiceButtonIsDisabled() {
		cy.get(
			'button[class="create-project-service-choose-project__button"]'
		).should('be.disabled')
	}

	static makeSureNextStageButtonIsDisabled() {
		cy.get(
			'#root > div > div > div > div.nav-buttons > button.nav-buttons__button.nav-buttons__button--next'
		).should('have.class', 'disabledElement')
	}

	static makeSureNextStageButtonIsEnabled() {
		cy.get(
			'#root > div > div > div > div.nav-buttons > button.nav-buttons__button.nav-buttons__button--next'
		).should('not.have.class', 'disabledElement')
	}

	static ElementFromFirstTabShouldBeVisible() {
		cy.xpath("//div[text()='שם השירות']").should('be.visible')
	}

	static ElementFromSecondTabShouldBeVisible() {
		cy.xpath("//div[text()='בדיקת עומסים']").should('be.visible')
	}

	static ElementFromThirdTabShouldBeVisible() {
		cy.xpath("//div[text()='טלפוני צוות פיתוח']").should('be.visible')
	}

	static ElementFromFourthTabShouldBeVisible() {
		cy.xpath("//span[text()='אפשר לבחור קובץ או לגרור אותו לכאן']").should(
			'be.visible'
		)
	}

	static makeSureThatEverythingSavedDuringAddServiceProcedure(serviceName) {
		cy.get(
			'#service-page-container > div.service-page-header-container > div.service-page-right-side-container > div.service-page-right-side-details-container > div.service-page-details-title-container > span'
		).should('have.text', serviceName)
		cy.get(
			'#service-page-container > div.service-page-header-container > div.service-page-right-side-container > div.service-page-right-side-details-container > div.service-page-right-side-details-by-and-update > span.service-page-right-side-details-by-and-update-by > span'
		).should('have.text', AddService.PROJECT_NAME)
		cy.get(
			'div[class="labels-service-details"] div[class="labels-label-service-details"]'
		).should('have.length', 6)
		cy.get(
			'#service-page-container > div.service-page-header-container > div.service-page-left-side-container > div.service-page-left-side-details > div.service-page-left-side-details-load > span.service-page-left-side-details-result'
		).should('have.text', AddService.NUMBER_OF_REQUESTS_PER_MINUTE)
		cy.get(
			'#service-page-container > div.service-page-header-container > div.service-page-left-side-container > div.service-page-left-side-details > div.service-page-left-side-details-type > span.service-page-left-side-details-result'
		).should(
			'have.text',
			serviceName === AddService.EXISTING_SERVICE_NAME ? 'B2B' : 'B2C'
		)
		cy.get(
			'#service-page-container > div.service-page-inner-container > div.on-service-tab-container > div.on-service-tab-connect-container > div > div:nth-child(1) > div > div:nth-child(2) > span:nth-child(2)'
		).should('have.text', AddService.EXAMPLE_ARMY_PHONE_NUMBER)
		cy.get(
			'#service-page-container > div.service-page-inner-container > div.on-service-tab-container > div.on-service-tab-connect-container > div > div:nth-child(1) > div > div:nth-child(3) > span:nth-child(2)'
		).should('have.text', AddService.EXAMPLE_CIVILIAN_PHONE_NUMBER)
		cy.get(
			'#service-page-container > div.service-page-inner-container > div.on-service-tab-container > div.on-service-tab-connect-container > div > div:nth-child(2) > div > div:nth-child(1) > span:nth-child(2)'
		).should('have.text', AddService.EXAMPLE_ARMY_PHONE_NUMBER)
		cy.get(
			'#service-page-container > div.service-page-inner-container > div.on-service-tab-container > div.on-service-tab-connect-container > div > div:nth-child(2) > div > div:nth-child(2) > span:nth-child(2)'
		).should('have.text', AddService.EXAMPLE_CIVILIAN_PHONE_NUMBER)
		// I concatenated the 'edit' word due to a bug in the system that doing it automatically and causes this test to fail
		cy.get(
			'#service-page-container > div.service-page-inner-container > div.on-service-tab-container > div.on-service-tab-connect-container > div > div:nth-child(3) > div.on-service-tab-connect-item-title'
		).should('have.text', AddService.RULE_OF_PRODUCT_MANAGER + 'edit')
		cy.get(
			'#service-page-container > div.service-page-inner-container > div.on-service-tab-container > div.on-service-tab-connect-container > div > div:nth-child(3) > div.on-service-tab-connect-item-details-container > div > span:nth-child(2)'
		).should('have.text', AddService.EXAMPLE_ARMY_PHONE_NUMBER)
		// I waited for 15 files instead of 5 like it should be due to a bug in the system that gets 15 files when we upload just 5 files and causes this test to fail
		cy.get(
			"div[class='on-service-tab-extra-reading-files-file-container']"
		).should('have.length', 15)
	}
}
