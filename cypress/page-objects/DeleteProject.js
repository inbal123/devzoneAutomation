import BasePage from './BasePage'

export default class DeleteProject extends BasePage {
	static projectName

	static insertNameOfProjectToDelete(projectName) {
		this.projectName = projectName
	}

	static openProjectPage() {
		cy.get('.project-card__name').contains(this.projectName).click()
	}

	static clickOnDeleteProjectButton() {
		cy.get('.project-page-action-delete-project-icon').click()
	}

	static typeProjectNameForConfirmation() {
		cy.get("input[placeholder = 'שם הפרויקט']").type(this.projectName)
	}

	static deleteProject() {
		cy.get('.delete-project-modal-btns-delete')
			.contains('מחיקת הפרויקט')
			.click()
	}

	static confirmDeletion() {
		cy.xpath('//*[@id="root"]/div/div[1]/div/span').should('be.visible')
	}
}
