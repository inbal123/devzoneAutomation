import BasePage from '../page-objects/BasePage'

import ViewAlerts from '../page-objects/ViewAlerts'
import ManageSubscription from '../page-objects/ManageSubscription'

import AddProject from '../page-objects/AddProject'
import ManageProjectMembers from '../page-objects/ManageProjectMembers'
import EditProject from '../page-objects/EditProject'
import DeleteProject from '../page-objects/DeleteProject'

import AddService from '../page-objects/AddService'
import EditService from '../page-objects/EditService'
import DeleteService from '../page-objects/DeleteService'

import AddGuide from '../page-objects/AddGuide'
import EditGuide from '../page-objects/EditGuide'
import DeleteGuide from '../page-objects/DeleteGuide'

import AddProjectNegative from '../page-objects/AddProjectNegative'
import DeleteProjectNegative from '../page-objects/DeleteProjectNegative'
import EditProjectNegative from '../page-objects/EditProjectNegative'
import UsefulFunctions from '../page-objects/UsefulFunctions'
import usefulFunctions from '../page-objects/UsefulFunctions'

const EMTPY_FIELD = 'EMPTY FIELD'

describe(`Positive Tests`, () => {
	describe(`General Tests`, () => {
		describe(`Visit Website Test`, () => {
			it(`Visit`, () => {
				cy.visit('http://localhost:3000/')
				//cy.visit('http://devzone-webiks.s3-website.eu-central-1.amazonaws.com')
				//  npm run cy:run --record --key 3c4c248e-4811-4755-b566-23e524523fec
			})
		})
		describe(`View Alerts Test`, () => {
			it(`View Alerts`, () => {
				ViewAlerts.clickOnAlertsButton()
				ViewAlerts.verifyAlertsAreShown()
			})
			it(`Close Alerts Window`, () => {
				ViewAlerts.closeAlertsWindow()
			})
		})
		describe(`Manage Subscription Test`, () => {
			it(`Open Service - חיפוש`, () => {
				ManageSubscription.openServicePage('חיפוש')
			})
			it(`Unsubscribe from Service`, () => {
				ManageSubscription.unsubscriptionFromService()
				ManageSubscription.verifyUnsubscription()
			})
			it(`Subscribe to Service`, () => {
				ManageSubscription.subscribeToService()
				ManageSubscription.verifySubscription()
			})
		})
	})
	// All the 'describe' blocks inside 'Project Tests' must run in this order
	// 1. add project 2. add members to the project 3. edit the project 4. delete the project
	describe(`Project Tests`, () => {
		describe(`Add Project Test`, () => {
			it(`Go to 'Add Project' Page`, () => {
				BasePage.goToHomePage()
				BasePage.goToPersonalArea()
				AddProject.clickOnAddProjectButton()
			})
			it(`Insert Project Details\n
      Name - ${BasePage.PROJECT_NAME}\n
      Forces - תקשוב\n
      Description - Description`, () => {
				AddProject.typeProjectName(BasePage.PROJECT_NAME)
				AddProject.chooseProjectForces('תקשוב')
				AddProject.typeProjectDescription('Description')
				AddProject.clickOnNextStageButton()
			})
			it(`Add Project Member - s1111111`, () => {
				AddProject.clickOnAddMembersButton()
				AddProject.typePersonalNumber('s1111111')
				AddProject.addMember()
				AddProject.clickOnNextStageButton()
			})
			it(`Add Project Logo - test.jpg`, () => {
				AddProject.insertProjectLogo()
				AddProject.clickOnFinishButton()
			})

			it(`View Created Project`, () => {
				AddProject.viewCreatedProject()
			})
		})
		describe(`Project Members Management Test`, () => {
			it(`Go to Project Members Tab`, () => {
				ManageProjectMembers.clickOnProjectMembersTab()
			})

			it(`Add a Project Member - s1234567`, () => {
				ManageProjectMembers.clickOnAddMemberButton()
				ManageProjectMembers.addMember('s1234567')
				ManageProjectMembers.verfiyMemberExists('s1234567')
			})

			it(`Delete a Project Member - s1234567`, () => {
				ManageProjectMembers.deleteMember('s1234567')
				ManageProjectMembers.verifyMemberDoesNotExist('s1234567')
			})
		})
		describe(`Edit Project Test`, () => {
			it(`Open Edit Window`, () => {
				EditProject.clickOnEditProjectButton()
			})

			it(`Edit Project Details\n
        Edited Name - EDITED ${BasePage.PROJECT_NAME}\n
        Edited Forces - זרוע היבשה\n
        Edited Description - Edited Description`, () => {
				EditProject.editProjectName(`EDITED ${BasePage.PROJECT_NAME}`)
				EditProject.editProjectForces('זרוע היבשה')
				EditProject.editProjectDescription('Edited Description')
				EditProject.clickOnSaveChangesButton()
			})

			it(`Verify Changes to the Project`, () => {
				EditProject.verifyChanges()
			})
		})
		describe(`Delete Project Test`, () => {
			it(`Delete Project`, () => {
				DeleteProject.insertNameOfProjectToDelete(
					`EDITED ${BasePage.PROJECT_NAME}`
				)
				DeleteProject.clickOnDeleteProjectButton()
				DeleteProject.typeProjectNameForConfirmation()
				DeleteProject.deleteProject()
				DeleteProject.confirmDeletion()
			})
		})
	})

	// All the 'describe' blocks inside 'Service Tests' must run in this order
	// 1. add service 2. edit service 3. delete service
	// We need to have a project before the tests of service.
	describe(`Service Tests`, () => {
		describe(`Add Service Tests`, () => {
			describe(`Add existing service Test`, () => {
				it(`Click 'Add Service' in homepage\n Choose 'Testing' project`, () => {
					UsefulFunctions.addProject()
					AddService.clickOnAddServiceButton()
					AddService.clickToSelectTheProject(BasePage.PROJECT_NAME)
					AddService.clickAddService()
				})
				it(`First tab - Fill general details\n
	  Service name - ${AddService.EXISTING_SERVICE_NAME}\n
	  Tags - Click on all tags\n
	  Description - ${AddService.SERVICE_DESCRIPTION}`, () => {
					AddService.typeServiceName(AddService.EXISTING_SERVICE_NAME)
					AddService.ClickOnTheWantedTags()
					AddService.typeServiceDescription()
					AddService.clickOnNextStageButton()
				})

				it(`Second tab - Fill technical information\n
	  Service Status - Existing service\n
	  Service Type - B2B\n
	  Number of requests per minute - ${AddService.NUMBER_OF_REQUESTS_PER_MINUTE}`, () => {
					AddService.ChooseExistingService()
					AddService.ChooseB2BServiceType()
					AddService.typeNumberOfRequestPerSecond()
					AddService.clickOnNextStageButton()
				})
				it(`Third tab - Fill contacting details\n
	  Link to Operation channel - ${AddService.LINK_TO_THE_OPERATION_CHANNEL}\n
	  Development team phone numbers -\n
	  Army phone - ${AddService.EXAMPLE_ARMY_PHONE_NUMBER}\n
	  Civilian phone - ${AddService.EXAMPLE_CIVILIAN_PHONE_NUMBER}\n
	  Operating CHAMAL phone numbers -\n
	  Army phone - ${AddService.EXAMPLE_ARMY_PHONE_NUMBER}\n
	  Civilian phone - ${AddService.EXAMPLE_CIVILIAN_PHONE_NUMBER}\n
	  Product Manager details -\n
	  Rule - ${AddService.RULE_OF_PRODUCT_MANAGER}\n
	  Army phone - ${AddService.EXAMPLE_ARMY_PHONE_NUMBER}\n
	  Select from drop list - NAME`, () => {
					AddService.fillAllTheServiceTeamDetails()
					AddService.clickOnNextStageButton()
				})
				it(`Fourth tab - Upload files - ${AddService.printFiles()}`, () => {
					AddService.uplaodFilesToTheService()
					AddService.clickOnNextStageButton()
				})
				it(`Fifth Tab - Select API\n
	  API Type - GraphQL\n
	  API Server Endpoint Link - ${AddService.GRAPHQL_SERVER_ENDPOINT_LINK}`, () => {
					AddService.selectGraphQLAsApiType()
					AddService.typeGraphQLServerEndpointLink()
				})
				it(`Finish adding service`, () => {
					AddService.clickOnFinishButton()
					AddService.viewCreatedService()
					AddService.makeSureThatEverythingSavedDuringAddServiceProcedure(
						AddService.EXISTING_SERVICE_NAME
					)
				})
			})
			describe(`Add future service Test`, () => {
				it(`Click 'Add Service' in homepage\n Choose 'New' project`, () => {
					cy.get("span[class='add-service-btn-txt-on-service-page']").click()
					AddService.clickToSelectTheProject(AddService.PROJECT_NAME)
					AddService.clickAddService()
				})
				it(`First tab - Fill general details\n
	  Service name - ${AddService.FUTURE_SERVICE_NAME}\n
	  Tags - Click on all tags\n
	  Description - ${AddService.SERVICE_DESCRIPTION}`, () => {
					AddService.typeServiceName(AddService.FUTURE_SERVICE_NAME)
					AddService.ClickOnTheWantedTags()
					AddService.typeServiceDescription()
					AddService.clickOnNextStageButton()
				})
				it(`Second tab - Fill technical information\n
	  Service Status - Future service\n
	  Service Type - B2C\n
	  Number of requests per minute - ${AddService.NUMBER_OF_REQUESTS_PER_MINUTE}`, () => {
					AddService.ChooseFutureService()
					AddService.ChooseB2CServiceType()
					AddService.typeNumberOfRequestPerSecond()
					AddService.clickOnNextStageButton()
				})
				it(`Third tab - Fill contacting details\n
	  Link to Operation channel - ${AddService.LINK_TO_THE_OPERATION_CHANNEL}\n
	  Development team phone numbers -\n
	  Army phone - ${AddService.EXAMPLE_ARMY_PHONE_NUMBER}\n
	  Civilian phone - ${AddService.EXAMPLE_CIVILIAN_PHONE_NUMBER}\n
	  Operating CHAMAL phone numbers -\n
	  Army phone - ${AddService.EXAMPLE_ARMY_PHONE_NUMBER}\n
	  Civilian phone - ${AddService.EXAMPLE_CIVILIAN_PHONE_NUMBER}\n
	  Product Manager details -\n
	  Rule - ${AddService.RULE_OF_PRODUCT_MANAGER}\n
	  Army phone - ${AddService.EXAMPLE_ARMY_PHONE_NUMBER}\n
	  Select from drop list - NANE`, () => {
					AddService.fillAllTheServiceTeamDetails()
					AddService.clickOnNextStageButton()
				})
				it(`Fourth tab - Upload files - ${AddService.printFiles()}`, () => {
					AddService.uplaodFilesToTheService()
					AddService.clickOnNextStageButton()
				})
				it(`Fifth Tab - Select API\n
	  API Type - Swagger\n
	  API Server Endpoint Link - ${AddService.SWAGGER_SERVER_ENDPOINT_LINK}`, () => {
					AddService.selectSwaggerAsApiType()
					AddService.typeSwaggerServerEndpointLink()
				})
				it(`Finish adding service`, () => {
					AddService.clickOnFinishButton()
					AddService.viewCreatedService()
					AddService.makeSureThatEverythingSavedDuringAddServiceProcedure(
						AddService.FUTURE_SERVICE_NAME
					)
				})
			})
		})
		describe(`Edit service Tests`, () => {
			describe(`Edit service details Test`, () => {
				it(`Service name - ${EditService.EDITED_SERVICE_NAME}\n
	Tags - Remove two tags\n
	Number of requests per minute - ${EditService.EDITED_NUMBER_OF_REQUESTS_PER_MINUTE}`, () => {
					EditService.openEditServiceWindow()
					EditService.editServiceName()
					EditService.removeTwoTagsFromService()
					EditService.editNumberOfRequestsPerMinute()
					EditService.clickSave()
				})
			})
			describe(`Edit service picture Test`, () => {
				it(`Edit service picture`, () => {
					EditService.clickEditServicePicture()
				})
			})
		})
		describe(`Delete service Test`, () => {
			it('Delete service', () => {
				// Here I delete the service i edited in the 'describe' block 'Edit service details Test'
				DeleteService.DeleteService(EditService.EDITED_SERVICE_NAME)
			})
		})
	})
	// We must have a project and a service to perform this test,
	// SO -
	// As a project I'll use the project I have already created up here in
	//  the 'describe' block 'Add existing service Test' (name of project: 'Testing')
	// As a service I'll use the special service I'm creating four lines down from here.
	describe(`Guides Tests`, () => {
		describe(`Add Guide to service Test`, () => {
			it(`Add Guide to service`, () => {
				AddGuide.clickHowToGetStartedButton()
				AddGuide.clickToAddNewGuide()
				AddGuide.typeGuideName()
				AddGuide.typeGuideDescription()
				AddGuide.uploadGuidePicture()
				AddGuide.clickOnSaveChangesButton()
				AddGuide.makeSureTheGuideHasBeenSaved()
			})
		})
		describe(`Edit Guide Test`, () => {
			it(`Edit Guide`, () => {
				EditGuide.clickOnEditGuideButton()
				EditGuide.typeGuideName(EditGuide.EDITED_GUIDE_NAME)
				EditGuide.typeGuideDescription(EditGuide.EDITED_GUIDE_DESCRIPTION)
				EditGuide.clickToRemoveTheAttachedPicture()
				EditGuide.uploadGuidePicture()
				EditGuide.ClickSaveChanges()
			})
		})
		describe(`Delete Guide Test`, () => {
			it(`Delete Guide`, () => {
				DeleteGuide.clickOnDeleteGuideButton()
				DeleteService.DeleteService(AddService.EXISTING_SERVICE_NAME)
			})
		})
	})
})

describe(`Negative Tests`, () => {
	describe(`Add Project Negative Tests`, () => {
		it(`Go to Add Project Page`, () => {
			BasePage.goToHomePage()
			BasePage.goToPersonalArea()
			AddProject.clickOnAddProjectButton()
		})

		it(`Try to Create a Project without Choosing Forces\n
      Insert Project Details\n
      Name - Testing\n
      Forces - ${EMTPY_FIELD}\n
      Description - Description`, () => {
			AddProject.typeProjectName('Testing')
			AddProject.typeProjectDescription('Description')
			AddProjectNegative.verifyButtonNextIsDisabled()
			AddProjectNegative.clearNameAndDescriptionFields()
		})

		it(`Try to Create a Project without Project Name\n
      Insert Project Details\n
      Name - ${EMTPY_FIELD}\n
      Forces - תקשוב\n
      Description - Description`, () => {
			AddProject.chooseProjectForces('תקשוב')
			AddProject.typeProjectDescription('Description')
			AddProjectNegative.verifyButtonNextIsDisabled()
			AddProjectNegative.clearNameAndDescriptionFields()
		})

		it(`Try to Create a Project with a Really Long Project Name\n
      Insert Project Details\n
      Name - Really Looooooooooooooooooooooong Project Name\n
      Forces - תקשוב\n
      Description - Description`, () => {
			AddProjectNegative.typeReallyLongProjectName()
			AddProject.chooseProjectForces('תקשוב')
			AddProject.typeProjectDescription('Description')
			AddProjectNegative.verifyNotTheEntireProjectNameWasTyped()
			AddProjectNegative.clearNameAndDescriptionFields()
		})

		it(`Try to Create a Project without a Description\n
      Insert Project Details\n
      Name - Testing\n
      Forces - תקשוב\n
      Description - ${EMTPY_FIELD}`, () => {
			AddProject.typeProjectName('Testing')
			AddProject.chooseProjectForces('תקשוב')
			AddProjectNegative.verifyButtonNextIsDisabled()
			AddProjectNegative.clearNameAndDescriptionFields()
		})

		it(`Fill All Fields Correctly and Go to the Next Stage\n
      Name - Testing\n
      Forces - תקשוב\n
      Description - Description`, () => {
			AddProject.typeProjectName('Testing')
			AddProject.chooseProjectForces('תקשוב')
			AddProject.typeProjectDescription('Description')
			AddProject.clickOnNextStageButton()
		})

		it(`Try to Add Project Member without a Personal Number
      Add Project Member - ${EMTPY_FIELD}`, () => {
			AddProject.clickOnAddMembersButton()
			AddProjectNegative.verifyAddMemberButtonIsDisabled()
		})

		it(`Try to Add a Project Member with Letter and Less than Seven Digits as Personal Number\n
      Add Project Member - s123`, () => {
			AddProjectNegative.typePersonalNumberWithLetterAndLessThanSevenDigits()
			AddProject.addMember()
			AddProjectNegative.verifyAddMemberErrorMessageIsVisible()
			AddProjectNegative.clearPersonalNumberField()
		})

		it(`Try to Add a Project Member without Letter and with Seven Digits as Personal Number\n
      Add Project Member - 1234567`, () => {
			AddProjectNegative.typePersonalNumberWithoutLetterAndWithSevenDigits()
			AddProject.addMember()
			AddProjectNegative.verifyAddMemberErrorMessageIsVisible()
			AddProjectNegative.clearPersonalNumberField()
		})

		it(`Try to Add a Project Member with Eight Letters as Personal Number\n
      Add Project Member - ssssssss`, () => {
			AddProjectNegative.typeEightLettersAsPersonalNumber()
			AddProject.addMember()
			AddProjectNegative.verifyAddMemberErrorMessageIsVisible()
			AddProjectNegative.clearPersonalNumberField()
		})

		// // Try only with a backend
		// it(`Try to Add a Project Member with Non Existing Personal Number With a Letter\n
		//     Add Project Member - s0000000`, () => {
		//   AddProjectNegative.typeNonExistingPersonalNumberWithLetter()
		//   AddProjectNegative.verifyAddMemberErrorMessageIsVisible()
		//   AddProjectNegative.clearPersonalNumberField()
		// })

		it(`Add a Project Member Correctly and Go to the Next Stage\n
      Add Project Member - s1111111`, () => {
			AddProject.typePersonalNumber('s1111111')
			AddProject.addMember()
			AddProject.clickOnNextStageButton()
		})

		it(`Try to Create a Project without a Project Logo\n
      Add Project Logo - ${EMTPY_FIELD}`, () => {
			AddProjectNegative.verifyFinishButtonIsDisabled()
		})

		it(`Try to Add a File that is not Jpg/Jpeg/Png/Svg Type as the Project Logo\n
      Add Project Logo - text.txt`, () => {
			AddProjectNegative.insertFileThatIsNotJpgOrJpegOrPngOrSvgType()
			AddProjectNegative.verifyAddLogoErrorMessageIsVisible()
			AddProjectNegative.verifyFinishButtonIsDisabled()
			// That just for the service testing that coming right after this test
			AddProject.insertProjectLogo()
			AddProject.clickOnFinishButton()
			AddProject.viewCreatedProject()
		})
	})
	describe(`Edit Project Negative Tests`, () => {
		it(`Go to Existing Project Page - ${BasePage.PROJECT_NAME}`, () => {
			BasePage.goToPersonalArea()
			EditProject.openExistingProjectPage()
		})

		it(`Open Edit Window`, () => {
			EditProject.clickOnEditProjectButton()
		})

		it(`Try to Save Edits without Project Name\n
	      Edited Name - ${EMTPY_FIELD}\n
	      Edited Forces - זרוע היבשה\n
	      Edited Description - Edited Description`, () => {
			EditProjectNegative.clearProjectNameField()
			EditProject.editProjectDescription('Edited Description')
			EditProjectNegative.verfiySaveChangesButtonIsDisabled()
		})

		it(`Try to Save Changes with a Really Long Project Name\n
	      Edited Name - Really Looooooooooooooooooooooong Project Name\n
	      Edited Forces - זרוע היבשה\n
	      Edited Description - Edited Description`, () => {
			EditProjectNegative.typeReallyLongProjectName()
			EditProject.editProjectDescription('Edited Description')
			EditProject.clickOnSaveChangesButton()
			// To be used when changes are saved during automations
			// EditProjectNegative.verifyNotTheEntireProjectNameWasTyped()
			EditProject.clickOnEditProjectButton()
		})

		it(`Try to Save Changes without Description\n
	      Edited Name - ${BasePage.PROJECT_NAME}\n
	      Edited Forces - זרוע היבשה\n
	      Edited Description - ${EMTPY_FIELD}`, () => {
			EditProject.editProjectName(BasePage.PROJECT_NAME)
			EditProjectNegative.clearProjectDescriptionField()
			EditProjectNegative.verfiySaveChangesButtonIsDisabled()

			// That is just in order to have a project for the next test
			EditProject.editProjectDescription('Edited Description')
			EditProject.clickOnSaveChangesButton()
		})
	})

	describe(`Delete Project Negative Tests`, () => {
		it(`Choose Project to Delete - ${BasePage.PROJECT_NAME}`, () => {
			DeleteProject.insertNameOfProjectToDelete(BasePage.PROJECT_NAME)
		})

		it(`Try to Delete the Project without Typing Project Name`, () => {
			cy.contains('כל הפרויקטים').click()
			DeleteProject.openProjectPage()
			DeleteProject.clickOnDeleteProjectButton()
			DeleteProjectNegative.verifyDeleteProjectButtonIsDisabled()
		})

		it(`Try to Delete the Project When Typing Wrong Project Name`, () => {
			DeleteProjectNegative.typeWrongProjectNameForConfirmation()
			DeleteProjectNegative.verifyDeleteProjectButtonIsDisabled()
		})

		it('Navigate Back to Home Page', () => {
			BasePage.goToHomePage()
		})
	})

	describe(`Service Negative Tests`, () => {
		describe(`'Cancel Add Service' Test`, () => {
			it(
				"Click 'Add Service' in homepage\n" + "Choose 'Testing' project",
				() => {
					// We need a project in order to perform service tests
					usefulFunctions.addProject()
					AddService.clickOnAddServiceButton()
					AddService.clickToSelectTheProject(AddService.PROJECT_NAME)
					AddService.clickAddService()
				}
			)
			it(`First tab - Fill general details\n
	      Service name - ${AddService.EXISTING_SERVICE_NAME}`, () => {
				AddService.typeServiceName(AddService.EXISTING_SERVICE_NAME)
			})
			it(`Cancel the cancel - click to cancel 'add service' procedure and then
	   regret and choose to continue`, () => {
				EditService.clickCancelButton()
				EditService.cancelTheTryingToCaneclTheAddServiceProcedure()
			})
			it(`Cancel 'add service' procedure
	  (without saving the already filled-in details)`, () => {
				EditService.clickCancelButton()
				EditService.clickToConfirmTheCancel()
			})
		})
		describe(`Check the ability to navigate back and fourth during 'add service'
		procedure\n and that the 'next stage' button enables in every tab just
		when all the necessary fields have been filled in`, () => {
			it(`Check that 'add service' button is disabled unless you choose
		to which project you want to add the service`, () => {
				AddService.clickOnAddServiceButton()
				// Here 'add service' button still should be disabled
				AddService.makeSureAddServiceButtonIsDisabled()
				AddService.clickToSelectTheProject(AddService.PROJECT_NAME)
				// Here 'add service' button should be enabled
				AddService.clickAddService()
			})
			it(`In first tab check that 'add service' button is disabled while user did'nt
		finish filling-in all the fields\n
		(First tab is to fill in general details)
		Service name - ${AddService.EXISTING_SERVICE_NAME}\n
		Tags - Click on all tags\n
		Description - ${AddService.SERVICE_DESCRIPTION}`, () => {
				AddService.typeServiceName(AddService.EXISTING_SERVICE_NAME)
				AddService.ClickOnTheWantedTags()
				// Until here 'next stage' button still should be disabled
				AddService.makeSureNextStageButtonIsDisabled()
				AddService.typeServiceDescription()
				// Just here - (after filling in the name & tags & description) - 'next stage' button should be enabled
				AddService.clickOnNextStageButton()
			})
			it(`In second tab check that user can go back to first tab with 'previous stage' button`, () => {
				AddService.clickOnPreviousStageButton()
				AddService.ElementFromFirstTabShouldBeVisible()
				AddService.clickOnNextStageButton()
			})
			it(`In second tab check that "next stage" button is disabled while user did'nt
		    finish filling-in all the necessary fields\n
		    (Second tab - Fill technical information)
		    Service Status - Future service\n
		    Service Type - B2C\n
		    Number of requests per minute -  ${AddService.NUMBER_OF_REQUESTS_PER_MINUTE}`, () => {
				AddService.ChooseFutureService()
				// Until here 'next stage' button still should be disabled
				AddService.makeSureNextStageButtonIsDisabled()
				AddService.ChooseB2CServiceType()
				AddService.typeNumberOfRequestPerSecond()
				// Just here - (after filling in the service status & service type) - 'next stage' button should become enabled
				AddService.makeSureNextStageButtonIsEnabled()
				AddService.clickOnNextStageButton()
			})
			it(`In third tab check that user can go back to second tab with 'previous stage' button`, () => {
				AddService.clickOnPreviousStageButton()
				AddService.ElementFromSecondTabShouldBeVisible()
				AddService.clickOnNextStageButton()
				AddService.clickOnNextStageButton()
			})
			it(`In forth tab check that user can go back to third tab with 'previous stage' button`, () => {
				AddService.clickOnPreviousStageButton()
				AddService.ElementFromThirdTabShouldBeVisible()
				AddService.clickOnNextStageButton()
				AddService.clickOnNextStageButton()
			})
			it(`In fifth tab check that user can go back to fourth tab with 'previous stage' button`, () => {
				AddService.clickOnPreviousStageButton()
				AddService.ElementFromFourthTabShouldBeVisible()
				AddService.clickOnNextStageButton()
				AddService.selectGraphQLAsApiType()
				// From here it's just for next tests (it's not really part of this test)
				AddService.clickOnFinishButton()
				AddService.viewCreatedService()
			})
		})
		describe("'Cancel Edit service' Test", () => {
			it('Cancel Edit service', () => {
				EditService.cancelEditService()
			})
		})
		describe("'Cancel Delete service' Test", () => {
			it("Cancel Delete service via 'Cancel' button", () => {
				DeleteService.ClickDeleteService()
				DeleteService.typeNameToConfirmDeletion(
					AddService.EXISTING_SERVICE_NAME
				)
				DeleteService.ClickOnCancelDeletionButton()
			})
			it("Cancel Delete via 'X' symbole", () => {
				DeleteService.ClickDeleteService()
				DeleteService.typeNameToConfirmDeletion(
					AddService.EXISTING_SERVICE_NAME
				)
				DeleteService.clickOnXToExit()
			})
		})
	})
})
