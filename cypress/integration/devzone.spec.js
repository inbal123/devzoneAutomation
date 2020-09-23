import BasePage from "../page-objects/BasePage"
import ViewAlerts from "../page-objects/ViewAlerts"
import ManageSubscription from "../page-objects/ManageSubscription"
import AddProject from "../page-objects/AddProject"
import EditProject from "../page-objects/EditProject"
import AddService from "../page-objects/AddService"
import DeleteService from "../page-objects/DeleteService"
import EditService from "../page-objects/EditService"
import DeleteProject from "../page-objects/DeleteProject"
import AddProjectNegative from "../page-objects/AddProjectNegative"
import EditProjectNegative from "../page-objects/EditProjectNegative"
import DeleteProjectNegative from "../page-objects/DeleteProjectNegarive"

const EMTPY_FIELD = "EMPTY FIELD"

describe(`Visit Website`, () => {
  it(`Visit`, () => {
    cy.visit("/")
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
    ManageSubscription.openServicePage("חיפוש")
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

describe(`Add Project Test`, () => {
  it(`Go to Add Project Page`, () => {
    BasePage.goToHomePage()
    BasePage.goToPersonalArea()
    AddProject.clickOnAddProjectButton()
  })

  it(`Insert Project Details\n
      Name - Testing\n
      Forces - תקשוב\n
      Description - Description`, () => {
    AddProject.typeProjectName("Testing")
    AddProject.chooseProjectForces("תקשוב")
    AddProject.typeProjectDescription("Description")
    AddProject.clickOnNextStageButton()
  })

  it(`Add Project Member - s1111111`, () => {
    AddProject.clickOnAddMembersButton()
    AddProject.typePersonalNumber("s1111111")
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

describe(`Edit Project Test`, () => {
  it(`Go to Existing Project Page - גב האומה`, () => {
    BasePage.goToHomePage()
    BasePage.goToPersonalArea()
    EditProject.openExistingProjectPage()
  })

  it(`Open Edit Window`, () => {
    EditProject.openEditWindow()
  })

  it(`Edit Project Details\n
      Edited Name - Edited Name\n
      Edited Forces - זרוע היבשה\n
      Edited Description - Edited Description`, () => {
    EditProject.editProjectName("Edited Name")
    EditProject.editProjectForces("זרוע היבשה")
    EditProject.editProjectDescription("Edited Description")
    EditProject.clickOnSaveChangesButton()
  })

  it(`Verify Changes to the Project`, () => {
    EditProject.verifyChanges()
  })
})

describe(`Add Service Test`, () => {
  describe(`Add existing service`, () => {
    it(`Click 'Add Service' in homepage\n Choose 'Testing' project`, () => {
      AddService.clickOnAddServiceButton()
      AddService.clickToSelectTheProject()
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

    it(`Finish adding the existed service`, () => {
      AddService.clickOnFinishButton()
      AddService.viewCreatedService()
      DeleteService.ClickDeleteService()
      DeleteService.confirmDeletion(AddService.EXISTING_SERVICE_NAME)
    })
  })

  describe(`Add future service`, () => {
    it(`Click 'Add Service' in homepage\n Choose 'New' project`, () => {
      AddService.clickOnAddServiceButton()
      AddService.clickToSelectTheProject()
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

    it(`Finish adding the future service`, () => {
      AddService.clickOnFinishButton()
      AddService.viewCreatedService()
    })
  })
})

describe(`Edit service`, () => {
  it(`reomve two tags`, () => {
    EditService.openEditWindow()
    EditService.editName()
    EditService.editNumberOfRequestsPerMinute()
    EditService.removeTwoTagsFromService()
    EditService.clickSave()
  })
})

describe(`Edit service picture`, () => {
  it(`Edit service picture`, () => {
    EditService.clickEditServicePicture()
  })
})

describe("Delete future service", () => {
  it("Delete future service", () => {
    DeleteService.ClickDeleteService()
    DeleteService.confirmDeletion(EditService.EDITED_SERVICE_NAME)
  })
})

describe(`Delete Project Test`, () => {
  it(`Choose Project to Delete - Testing`, () => {
    DeleteProject.chooseProjectToDelete("Testing")
  })

  it(`Delete Project`, () => {
    BasePage.goToHomePage()
    DeleteProject.openProjectPage()
    DeleteProject.clickOnDeleteProjectButton()
    DeleteProject.typeProjectNameForConfirmation()
    DeleteProject.deleteProject()
  })
})


describe("Add Service Negative Tests", () => {
  describe("Cancel Add Service", () => {
    it("Click 'Add Service' in homepage\n" + "Choose 'Testing' project", () => {
      AddService.clickOnAddServiceButton()
      AddService.clickToSelectTheProject()
      AddService.clickAddService()
    })

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

  describe(`Check the ability to navigate back and forth during 'add service'
            procedure\n and that the 'next stage' button enables in every tab just
            when all the necessary fields have been filled in`, () => {
    it(`Check that 'add service' button is disabled unless you choose
        to which project you want to add the service`, () => {
      AddService.clickOnAddServiceButton()
      // Here 'add service' button still should be disabled
      AddService.makeSureAddServiceButtonIsDisabled()
      AddService.clickToSelectTheProject()
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
      // From here it's just for finish creating the service and delete it in order
      // to continue with next tests (it's not part of the tests)
      AddService.clickOnFinishButton()
      AddService.viewCreatedService()
      DeleteService.ClickDeleteService()
      DeleteService.confirmDeletion(AddService.EXISTING_SERVICE_NAME)
    })
  })
})

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
    AddProject.typeProjectName("Testing")
    AddProject.typeProjectDescription("Description")
    AddProjectNegative.verifyButtonNextIsDisabled()
    AddProjectNegative.clearNameAndDescriptionFields()
  })

  it(`Try to Create a Project without Project Name\n
      Insert Project Details\n
      Name - ${EMTPY_FIELD}\n
      Forces - תקשוב\n
      Description - Description`, () => {
    AddProject.chooseProjectForces("תקשוב")
    AddProject.typeProjectDescription("Description")
    AddProjectNegative.verifyButtonNextIsDisabled()
    AddProjectNegative.clearNameAndDescriptionFields()
  })

  it(`Try to Create a Project with a Really Long Project Name\n
      Insert Project Details\n
      Name - Really Looooooooooooooooooooooong Project Name\n
      Forces - תקשוב\n
      Description - Description`, () => {
    AddProjectNegative.typeReallyLongProjectName()
    AddProject.chooseProjectForces("תקשוב")
    AddProject.typeProjectDescription("Description")
    AddProjectNegative.verifyNotTheEntireProjectNameWasTyped()
    AddProjectNegative.clearNameAndDescriptionFields()
  })

  it(`Try to Create a Project without a Description\n
      Insert Project Details\n
      Name - Testing\n
      Forces - תקשוב\n
      Description - ${EMTPY_FIELD}`, () => {
    AddProject.typeProjectName("Testing")
    AddProject.chooseProjectForces("תקשוב")
    AddProjectNegative.verifyButtonNextIsDisabled()
    AddProjectNegative.clearNameAndDescriptionFields()
  })

  it(`Fill All Fields Correctly and Go to the Next Stage\n
      Name - Testing\n
      Forces - תקשוב\n
      Description - Description`, () => {
    AddProject.typeProjectName("Testing")
    AddProject.chooseProjectForces("תקשוב")
    AddProject.typeProjectDescription("Description")
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
    AddProject.typePersonalNumber("s1111111")
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
  })

  it("Navigate Back to Home Page", () => {
    BasePage.goToHomePage()
  })
})

describe(`Edit Project Negative Tests`, () => {
  it(`Go to Existing Project Page - גב האומה`, () => {
    BasePage.goToHomePage()
    BasePage.goToPersonalArea()
    EditProject.openExistingProjectPage()
  })

  it(`Open Edit Window`, () => {
    EditProject.openEditWindow()
  })

  it(`Try to Save Edits without Project Name\n
      Edited Name - ${EMTPY_FIELD}\n
      Edited Forces - זרוע היבשה\n
      Edited Description - Edited Description`, () => {
    EditProjectNegative.clearProjectNameField()
    EditProject.editProjectDescription("Edited Description")
    EditProjectNegative.verfiySaveChangesButtonIsDisabled()
  })

  it(`Try to Save Changes with a Really Long Project Name\n
      Edited Name - Really Looooooooooooooooooooooong Project Name\n
      Edited Forces - זרוע היבשה\n
      Edited Description - Edited Description`, () => {
    EditProjectNegative.typeReallyLongProjectName()
    EditProject.editProjectDescription("Edited Description")
    EditProject.clickOnSaveChangesButton()
    // To be used when changes are saved during automations
    // EditProjectNegative.verifyNotTheEntireProjectNameWasTyped()
    EditProject.openEditWindow()
  })

  it(`Try to Save Changes without Description\n
      Edited Name - Edited Name\n
      Edited Forces - זרוע היבשה\n
      Edited Description - ${EMTPY_FIELD}`, () => {
    EditProject.editProjectName("Edited Name")
    EditProjectNegative.clearProjectDescriptionField()
    EditProjectNegative.verfiySaveChangesButtonIsDisabled()
  })

  it("Navigate Back to Home Page", () => {
    BasePage.goToHomePage()
  })
})

describe(`Delete Project Negative Tests`, () => {
  it(`Choose Project to Delete - גב האומה`, () => {
    DeleteProject.chooseProjectToDelete("גב האומה")
  })

  it(`Try to Delete the Project without Typing Project Name`, () => {
    BasePage.goToHomePage()
    DeleteProject.openProjectPage()
    DeleteProject.clickOnDeleteProjectButton()
    DeleteProjectNegative.verifyDeleteProjectButtonIsDisabled()
  })

  it(`Try to Delete the Project When Typing Wrong Project Name`, () => {
    DeleteProjectNegative.typeWrongProjectNameForConfirmation()
    DeleteProjectNegative.verifyDeleteProjectButtonIsDisabled()
  })

  it("Navigate Back to Home Page", () => {
    BasePage.goToHomePage()
  })
})