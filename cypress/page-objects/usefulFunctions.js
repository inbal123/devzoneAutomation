import BasePage from './BasePage'
import AddProject from '../page-objects/AddProject'
import AddService from '../page-objects/AddService'

export default class usefulFunctions extends BasePage {
	static addProject() {
		BasePage.goToHomePage()
		BasePage.goToPersonalArea()
		AddProject.clickOnAddProjectButton()
		AddProject.typeProjectName(BasePage.PROJECT_NAME)
		AddProject.chooseProjectForces('תקשוב')
		AddProject.typeProjectDescription('Description')
		AddProject.clickOnNextStageButton()
		AddProject.clickOnAddMembersButton()
		AddProject.typePersonalNumber('s1111111')
		AddProject.addMember()
		AddProject.clickOnNextStageButton()
		AddProject.insertProjectLogo()
		AddProject.clickOnFinishButton()
		AddProject.viewCreatedProject()
	}
	static addService(name) {
		AddService.clickOnAddServiceButton()
		AddService.clickToSelectTheProject(BasePage.PROJECT_NAME)
		AddService.clickAddService()
		AddService.typeServiceName(name)
		AddService.ClickOnTheWantedTags()
		AddService.typeServiceDescription()
		AddService.clickOnNextStageButton()
		AddService.ChooseExistingService()
		AddService.ChooseB2BServiceType()
		AddService.typeNumberOfRequestPerSecond()
		AddService.clickOnNextStageButton()
		AddService.fillAllTheServiceTeamDetails()
		AddService.clickOnNextStageButton()
		AddService.uplaodFilesToTheService()
		AddService.clickOnNextStageButton()
		AddService.selectGraphQLAsApiType()
		AddService.typeGraphQLServerEndpointLink()
		AddService.clickOnFinishButton()
		AddService.viewCreatedService()
		AddService.makeSureThatEverythingSavedDuringAddServiceProcedure(name)
	}
}
