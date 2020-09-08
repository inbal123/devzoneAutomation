import BasePage from "./BasePage";

const SERVICE_NAME                  = 'shit'
const SERVICE_DESCRIPTION           = 'my description'
const NUMBER_OF_REQUESTS            = '10250'
const LINK_TO_THE_OPERATION_CHANNEL = 'example.com'
const EXAMPLE_ARMY_PHONE_NUMBER          = '55555555'
const EXAMPLE_CIVILIAN_PHONE_NUMBER      = '555555555'
const RULE_OF_PRODUCT_MANAGER       = 'klumnik'

export default class AddService extends BasePage{
    static clickOnAddServiceButton() {
        cy.xpath("//span[text()='הוספת שירות']").click()
    }

    static typeToSelectTheProject(){
        cy.xpath("//div[text()='Testing']").click()
    }

    static clickAddService(){
        cy.contains("להוספת שירות").click()
    }
    static typeServiceName(){
        cy.get("#input-with-icon-adornment").type(SERVICE_NAME)
    }
    static ClickOnTheWantedTags(){
        cy.get(".search-filters-item").then(tag => {
            tag.click()
        })
    }
    static typeServiceDescription(){
        cy.get("textarea.create-project-service-general__description-box").type(SERVICE_DESCRIPTION)
    }
    static ChooseExistService(){
        cy.xpath("//div[@class='radio-button__radio-text'][text()='שירות קיים']").click()
    }

    static ChooseFutureService(){
        cy.xpath("//div[@class='radio-button__radio-text'][text()='שירות עתידי']").click()
    }

    static ChooseB2BServiceType(){
        cy.xpath("//div[@class='radio-button__radio-text'][text()='B2B']").click()
    }

    static ChooseB2CServiceType(){
        cy.xpath("//div[@class='radio-button__radio-text'][text()='B2C']").click()
    }
    static typeNumberOfRequestPerSecond(){
        cy.get("input[placeholder='2000']").type(NUMBER_OF_REQUESTS)
    }
    static fillAllTheServiceTeamDetails(){
        this.typeLinkToTheOperationChannel()
        this.typeDevelopmentTeamPhoneNumbers()
        this.typeOperatingCHAMALPhoneNumbers()
        this.TypeProductManagerDetails()
    }
    static typeLinkToTheOperationChannel(){
        cy.get("#input-with-icon-adornment").type(LINK_TO_THE_OPERATION_CHANNEL)
    }
    static typeDevelopmentTeamPhoneNumbers(){
        cy.xpath('//*[@id="root"]/div/div/div/div[2]/div/div[2]/div[2]/div[1]/div[2]/div/div/div/input').type(EXAMPLE_ARMY_PHONE_NUMBER)
        cy.xpath('//*[@id="root"]/div/div/div/div[2]/div/div[2]/div[2]/div[2]/div[2]/div/div/div/input').type(EXAMPLE_CIVILIAN_PHONE_NUMBER)   
    }
    static typeOperatingCHAMALPhoneNumbers(){
        cy.xpath('//*[@id="root"]/div/div/div/div[2]/div/div[3]/div[2]/div[1]/div[2]/div/div/div/input').type(EXAMPLE_ARMY_PHONE_NUMBER)
        cy.xpath('//*[@id="root"]/div/div/div/div[2]/div/div[3]/div[2]/div[2]/div[2]/div/div/div/input').type(EXAMPLE_CIVILIAN_PHONE_NUMBER)
    }

    static TypeProductManagerDetails(){
        cy.xpath('/html/body/div/div/div/div/div[2]/div/div[4]/div[2]/div[1]/div[2]/div/div/input').type(RULE_OF_PRODUCT_MANAGER)
        cy.xpath('//*[@id="root"]/div/div/div/div[2]/div/div[4]/div[2]/div[2]/div[2]/div/div/div/input').type(EXAMPLE_ARMY_PHONE_NUMBER)
        // Here we should choose value in the select list, but it's impossible at the moment
    }

    static uplaodFileToTheService() {
        cy.fixture("mydoc.doc").then(fileContent => {
            cy.get("input").attachFile({
                fileContent: fileContent.toString(),
                fileName: "mydoc.doc",
                mimeType: "application/msword",
                encoding: "utf-8"
            }, { subjectType: "input" });
        });
    }

    static uplaodFileToTheService2() {
        cy.fixture("mydocx.docx").then(fileContent => {
            cy.get("input").attachFile({
                fileContent: fileContent.toString(),
                fileName: "mydocx.docx",
                mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                encoding: "utf-8"
            }, { subjectType: "input" });
        });
    }

    static selectGraphQLAsApiType(){
        cy.xpath("//div[text()='GraphQL']").click()
    }

    static selectSwaggerAsApiType(){
        cy.xpath("//div[text()='Swagger']").click()
    }
    static typeGraphQLServerEndpointLink(){
        cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input"]').type("http://graphql-server-endpoint-link")
    }
    static typeSwaggerServerEndpointLink(){
        cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input"]').type("http://swagger-server-endpoint-link")
    }
    static clickOnNextStageButton() {
        cy.contains(/^לשלב הבא$/).click()
    }

    static goBackToPreviousStage() {
        cy.contains(/^לשלב הקודם$/)
    }

    static clickOnFinishButton() {
        cy.contains(/^אישור וסיום$/).click()
    }

    static viewCreatedService() {
        cy.contains(/^מעבר לצפייה בשירות$/).click()
    }
}