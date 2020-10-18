import BasePage from './BasePage'

export default class DeleteGuide extends BasePage {
	static clickOnDeleteGuideButton() {
		cy.get("div[class='how-to-start-tab-item']")
			.click()
			.then(() => {
				cy.get(
					"svg[class='MuiSvgIcon-root how-to-start-tab-item-three-points-btn']"
				).click()
			})
		cy.xpath(
			"//div[@class='on-service-tab-extra-reading-files-file-popUp-item'][text()='מחיקה']"
		).click()
		cy.get("div[class='how-to-start-tab-item last-item-how-to-start']")
			.click()
			.then(() => {
				cy.get(
					"svg[class='MuiSvgIcon-root how-to-start-tab-item-three-points-btn']"
				).click()
			})
		cy.xpath(
			"//div[@class='on-service-tab-extra-reading-files-file-popUp-item'][text()='מחיקה']"
		).click()
	}
}
