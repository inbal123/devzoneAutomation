import BasePage from "../page-objects/BasePage";
import ViewAlerts from "../page-objects/ViewAlerts";
import ManageSubscription from "../page-objects/ManageSubscription";
import AddProject from "../page-objects/AddProject";
import DeleteProject from "../page-objects/DeleteProject";
import AddService from "../page-objects/AddService";

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
    it("ClickAddServiceInHomePage", () => {
      AddService.clickOnAddServiceButton();
      AddService.typeToSelectTheProject();
      AddService.clickAddService();
    });

    it("First tab - Fill general details", () => {
      AddService.typeServiceName();
      AddService.ClickOnTheWantedTags();
      AddService.typeServiceDescription();
      AddService.clickOnNextStageButton();
    });

    it("Second tab - Fill technical information", () => {
      AddService.ChooseExistService();
      AddService.ChooseB2BServiceType();
      AddService.clickOnNextStageButton();
    });

    it("Third tab - Fill contacting details", () => {
      AddService.fillAllTheServiceTeamDetails();
      AddService.clickOnNextStageButton();
    });

    it("Fourth tab - Upload files", () => {
      AddService.uplaodFileToTheService();
      //AddService.uplaodFileToTheService2()
      AddService.clickOnNextStageButton();
    });

    it("Fifth tab - elect API", () => {
      AddService.selectGraphQLAsApiType();
      AddService.typeGraphQLServerEndpointLink();
    });

    it("Finish adding the existed service", () => {
      AddService.clickOnFinishButton();
      AddService.viewCreatedService();
    });
  });

  describe("Add new service", () => {});

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
