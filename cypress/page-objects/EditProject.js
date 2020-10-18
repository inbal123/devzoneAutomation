import BasePage from './BasePage'

export default class EditProject extends BasePage {
	static EDITED_PROJECT_NAME
	static EDITED_PROJECT_FORCES
	static EDITED_PROJECT_DESCRIPTION

	static openExistingProjectPage() {
		cy.get('.project-card__name').contains(BasePage.PROJECT_NAME).click()
	}

	static clickOnEditProjectButton() {
		cy.get('#project-page-details-title-edit-btn').click({ force: true })
		cy.wait(500)
		cy.get("div[class='edit-project-cancel-btn']").click()
		cy.get('#project-page-details-title-edit-btn').click({ force: true })
	}

	static editProjectName(editedName) {
		cy.get('#input-with-icon-adornment').clear().type(editedName)
		this.EDITED_PROJECT_NAME = editedName
	}

	static editProjectForces(editedForces) {
		cy.get('#create-project-general__arm').click()
		cy.contains(new RegExp('^' + editedForces + '$', 'g')).click()
		this.EDITED_PROJECT_FORCES = editedForces
	}

	static editProjectDescription(editedDescription) {
		cy.get('.create-project-general__description-box')
			.clear()
			.type(editedDescription)
		this.EDITED_PROJECT_DESCRIPTION = editedDescription
	}

	static clickOnSaveChangesButton() {
		cy.get('.edit-project-save-btn').click()
	}

	static clickOnCancelChangesButton() {
		cy.get('.edit-project-cancel-btn').click()
	}

	static verifyChanges() {
		cy.get('.project-page-details-title').should(
			'have.text',
			this.EDITED_PROJECT_NAME + ' edit'
		)
		cy.get('.project-page-details-unit').should(
			'have.text',
			this.EDITED_PROJECT_FORCES
		)
		cy.get('.project-page-details-description').should(
			'have.text',
			this.EDITED_PROJECT_DESCRIPTION
		)
	}
}
