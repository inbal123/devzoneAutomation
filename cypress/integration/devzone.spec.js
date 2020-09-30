import BasePage from "../page-objects/BasePage"
import ViewAlerts from "../page-objects/ViewAlerts"
import ManageSubscription from "../page-objects/ManageSubscription"
import AddProject from "../page-objects/AddProject"
import AddService from "../page-objects/AddService"
import DeleteService from "../page-objects/DeleteService"
import EditService from "../page-objects/EditService"
import AddGuide from "../page-objects/AddGuide"

describe(`Visit Website Test`, () => {
  it(`Visit`, () => {
    cy.visit("http://localhost:3000/")
    // cy.visit("http://devzone-webiks.s3-website.eu-central-1.amazonaws.com")
    //  npm run cy:run --record --key ae6466a9-bb06-4033-adaa-307c60655eff
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
describe(`Add Service Tests`, () => {
  describe(`Add existing service Test`, () => {
    it(`Click 'Add Service' in homepage\n Choose 'Testing' project`, () => {
      AddService.clickOnAddServiceButton()
      AddService.clickToSelectTheProject(AddService.PROJECT_NAME)
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
      DeleteService.ClickDeleteService()
      DeleteService.confirmDeletion(AddService.EXISTING_SERVICE_NAME)
    })
  })

  describe(`Add future service Test`, () => {
    it(`Click 'Add Service' in homepage\n Choose 'New' project`, () => {
      AddService.clickOnAddServiceButton()
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
  it("Delete service", () => {
    DeleteService.DeleteService(EditService.EDITED_SERVICE_NAME)
  })
})
describe(`Service Negative Tests`, () => {
  describe(`'Cancel Add Service' Test`, () => {
    it("Click 'Add Service' in homepage\n" + "Choose 'Testing' project", () => {
      AddService.clickOnAddServiceButton()
      AddService.clickToSelectTheProject(AddService.PROJECT_NAME)
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
    it("Cancel Edit service", () => {
      EditService.cancelEditService()
    })
  })
  describe("'Cancel Delete service' Test", () => {
    it("Cancel Delete service via 'Cancel' button", () => {
      DeleteService.ClickDeleteService()
      DeleteService.typeNameToConfirmDeletion(AddService.EXISTING_SERVICE_NAME)
      DeleteService.ClickOnCancelDeletionButton()
    })
    it("Cancel Delete via 'X' symbole", () => {
      DeleteService.ClickDeleteService()
      DeleteService.typeNameToConfirmDeletion(AddService.EXISTING_SERVICE_NAME)
      DeleteService.clickOnXToExit()
    })
  })
})
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
