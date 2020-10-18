import DeleteProject from './DeleteProject'

export default class DeleteProjectNegative extends DeleteProject {
	static typeWrongProjectNameForConfirmation() {
		cy.get("input[placeholder = 'שם הפרויקט']").type('Wrong Project Name')
	}

	static verifyDeleteProjectButtonIsDisabled() {
		cy.get('.delete-project-modal-btns-delete-disabled').should('be.visible')
	}
}
