import BasePage from "../page-objects/BasePage";
import ViewAlerts from "../page-objects/ViewAlerts";
import ManageSubscription from "../page-objects/ManageSubscription";
import AddProject from "../page-objects/AddProject";
import DeleteProject from "../page-objects/DeleteProject";
import AddService from "../page-objects/AddService";
import DeleteService from "../page-objects/DeleteService";


describe("Visit Website", () => {
  it("Visit", () => {
    cy.visit("http://devzone-webiks.s3-website.eu-central-1.amazonaws.com");
  });
});

describe("View Alerts Test", () => {
  it("View Alerts", () => {
    ViewAlerts.clickOnAlertsButton();
    ViewAlerts.verifyAlertsAreShown();
  });

  it("Close Alerts Window", () => {
    ViewAlerts.closeAlertsWindow();
  });
});

describe("Manage Subscription Test", () => {
  it("Open Service - חיפוש", () => {
    ManageSubscription.openServicePage("חיפוש");
  });

  it("Unsubscribe from Service", () => {
    ManageSubscription.unsubscriptionFromService();
    ManageSubscription.verifyUnsubscription();
  });

  it("Subscribe to Service", () => {
    ManageSubscription.subscribeToService();
    ManageSubscription.verifySubscription();
  });
});

describe("Add Project Test", () => {
  it("Go to Add Project Page", () => {
    BasePage.goToHomePage();
    BasePage.goToPersonalArea();
    AddProject.clickOnAddProjectButton();
  });

  it(
    "Insert Project Details\n" +
      "Name - Testing\n" +
      "Forces - תקשוב\n" +
      "Description - Description",
    () => {
      AddProject.typeProjectName("Testing");
      AddProject.chooseProjectForces("תקשוב");
      AddProject.typeProjectDescription("Description");
      AddProject.clickOnNextStageButton();
    }
  );

  it("Add Project Member - s1111111", () => {
    AddProject.clickOnAddMembersButton();
    AddProject.typePersonalNumber("s1111111");
    AddProject.addMember();
    AddProject.clickOnNextStageButton();
  });

  it("Add Project Logo - test.jpg", () => {
    AddProject.insertProjectLogo();
    AddProject.clickOnFinishButton();
  });

  it("View Created Project", () => {
    AddProject.viewCreatedProject();
  });
});

describe("Add Service Test", () => {
  describe("Add an existed service", () => {
    it(
      "Click 'Add Service' in homepage\n" +
      "Choose 'Testing' project",
      () => {
      AddService.clickOnAddServiceButton();
      AddService.typeToSelectTheProject();
      AddService.clickAddService();
    });

    it(
      `First tab - Fill general details\n
      Service name - ${AddService.SERVICE_NAME}\n
      Tags - Click on all tags\n
      Description - ${AddService.SERVICE_DESCRIPTION}`
      ,
    () => {
      AddService.typeServiceName();
      AddService.ClickOnTheWantedTags();
      AddService.typeServiceDescription();
      AddService.clickOnNextStageButton();
    });

    it(
      `Second tab - Fill technical information\n
      Service Status - Existing service\n
      Service Type - B2B`,
       () => {
      AddService.ChooseExistingService();
      AddService.ChooseB2BServiceType();
      AddService.clickOnNextStageButton();
    });

    it(
      `Third tab - Fill contacting details\n
      Link to Operation channel - ${AddService.LINK_TO_THE_OPERATION_CHANNEL}\n
      Development team phone numbers - \n 
      Army phone - ${AddService.EXAMPLE_ARMY_PHONE_NUMBER}\n
      Civilian phone - ${AddService.EXAMPLE_CIVILIAN_PHONE_NUMBER}\n
      Operating CHAMAL phone numbers - \n 
      Army phone - ${AddService.EXAMPLE_ARMY_PHONE_NUMBER}\n
      Civilian phone - ${AddService.EXAMPLE_CIVILIAN_PHONE_NUMBER}\n
      Product Manager details - \n 
      Rule - ${AddService.RULE_OF_PRODUCT_MANAGER}\n
      Army phone - ${AddService.EXAMPLE_ARMY_PHONE_NUMBER}\n
      Select from drop list - should be done here but we could'nt do that at the moment`,
      () => {
      AddService.fillAllTheServiceTeamDetails();
      AddService.clickOnNextStageButton();
    });

    it(
      `Fourth tab - Upload files\n
      File - ${AddService.NAME_OF_UPLOADED_FILE}`,
      () => {
      AddService.uplaodFilesToTheService();
      AddService.clickOnNextStageButton();
    });

    it(
      `Fifth Tab - Select API\n
      API Type - GraphQL\n
      API Server Endpoint Link - ${AddService.GRAPHQL_SERVER_ENDPOINT_LINK}`,
      () => {
      AddService.selectGraphQLAsApiType();
      AddService.typeGraphQLServerEndpointLink();
    });

    it("Finish adding the existed service", () => {
      AddService.clickOnFinishButton();
      AddService.viewCreatedService();
    });
  });


  describe("Delete service", () => {
    it('Delete service', () => {
      // BasePage.goToHomePage()
      // DeleteService.openServicesPage()
      // cy.pause()
      // DeleteService.clickOnTheChosenService(AddService.SERVICE_NAME
      //cy.pause()
      DeleteService.ClickDeleteService()
      DeleteService.confirmDeletion()

    })
  });

  describe("Add future service", () => {

  });

  // describe("Delete Project Test", () => {
  //     it("Delete Project - Testing", () => {
  //         BasePage.goToHomePage()
  //         BasePage.goToPersonalArea()
  //         DeleteProject.chooseProjectToDelete("Testing")
  //         DeleteProject.openProjectPage()
  //         DeleteProject.clickOnDeleteProjectButton()
  //         DeleteProject.typeProjectNameForConfirmation()
  //         DeleteProject.deleteProject()
  //     })
  // })
});
