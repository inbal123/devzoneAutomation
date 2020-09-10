import BasePage from "./BasePage"

export default class AddService extends BasePage {
  static FILE_NAMES = [
    "mydoc.doc",
    "mydocx.docx",
    "mypdf.pdf",
    "mypptx.pptx",
    "myxlsx.xlsx",
  ]

  static FILE_FORMATS = [
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ]
  static SERVICE_NAME = "shit"
  static SERVICE_DESCRIPTION = "my description"
  static NUMBER_OF_REQUESTS_PER_MINUTE = "10250"
  static LINK_TO_THE_OPERATION_CHANNEL = "example.com"
  static EXAMPLE_ARMY_PHONE_NUMBER = "55555555"
  static EXAMPLE_CIVILIAN_PHONE_NUMBER = "555555555"
  static RULE_OF_PRODUCT_MANAGER = "klumnik"
  static GRAPHQL_SERVER_ENDPOINT_LINK = "http://graphql-server-endpoint-link"
  static SWAGGER_SERVER_ENDPOINT_LINK = "http://swagger-server-endpoint-link"

  static printFiles() {
    let outputString = ""
    for (let i = 0; i < AddService.FILE_NAMES.length; i++) {
      outputString +=
        "\n" +
        AddService.FILE_NAMES[i].substring(
          AddService.FILE_NAMES[i].indexOf(".") + 1
        ) +
        " file type - " +
        AddService.FILE_NAMES[i] +
        (i === AddService.FILE_NAMES.length - 1 ? "\n" : "\n\n")
    }
    return outputString
  }
  static clickOnAddServiceButton() {
    cy.xpath("//span[text()='הוספת שירות']").click()
  }

  static typeToSelectTheProject() {
    cy.xpath("//div[text()='Testing']").click()
  }

  static clickAddService() {
    cy.contains("להוספת שירות").click()
  }
  static typeServiceName() {
    cy.get("#input-with-icon-adornment").type(AddService.SERVICE_NAME)
  }
  static ClickOnTheWantedTags() {
    cy.get(".search-filters-item").then((tag) => {
      tag.click()
    })
  }

  static typeServiceDescription() {
    cy.get("textarea.create-project-service-general__description-box").type(
      AddService.SERVICE_DESCRIPTION
    )
  }
  static ChooseExistingService() {
    cy.xpath(
      "//div[@class='radio-button__radio-text'][text()='שירות קיים']"
    ).click()
  }

  static ChooseFutureService() {
    cy.xpath(
      "//div[@class='radio-button__radio-text'][text()='שירות עתידי']"
    ).click()
  }

  static ChooseB2BServiceType() {
    cy.xpath("//div[@class='radio-button__radio-text'][text()='B2B']").click()
  }

  static ChooseB2CServiceType() {
    cy.xpath("//div[@class='radio-button__radio-text'][text()='B2C']").click()
  }
  static typeNumberOfRequestPerSecond() {
    cy.get("input[placeholder='2000']").type(
      AddService.NUMBER_OF_REQUESTS_PER_MINUTE
    )
  }
  static fillAllTheServiceTeamDetails() {
    AddService.typeLinkToTheOperationChannel()
    AddService.typeDevelopmentTeamPhoneNumbers()
    AddService.typeOperatingCHAMALPhoneNumbers()
    // Tryings to solve the problem
    AddService.selectUser()

    this.TypeProductManagerDetails()
  }
  static selectUser() {
    cy.get(
      'div[class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input"]'
    ).click()
    cy.get('li[data-value="name"]').click()
  }
  static typeLinkToTheOperationChannel() {
    cy.get("#input-with-icon-adornment").type(
      AddService.LINK_TO_THE_OPERATION_CHANNEL
    )
  }
  static typeDevelopmentTeamPhoneNumbers() {
    cy.xpath(
      '//*[@id="root"]/div/div/div/div[2]/div/div[2]/div[2]/div[1]/div[2]/div/div/div/input'
    ).type(AddService.EXAMPLE_ARMY_PHONE_NUMBER)
    cy.xpath(
      '//*[@id="root"]/div/div/div/div[2]/div/div[2]/div[2]/div[2]/div[2]/div/div/div/input'
    ).type(AddService.EXAMPLE_CIVILIAN_PHONE_NUMBER)
  }
  static typeOperatingCHAMALPhoneNumbers() {
    cy.xpath(
      '//*[@id="root"]/div/div/div/div[2]/div/div[3]/div[2]/div[1]/div[2]/div/div/div/input'
    ).type(AddService.EXAMPLE_ARMY_PHONE_NUMBER)
    cy.xpath(
      '//*[@id="root"]/div/div/div/div[2]/div/div[3]/div[2]/div[2]/div[2]/div/div/div/input'
    ).type(AddService.EXAMPLE_CIVILIAN_PHONE_NUMBER)
  }

  static TypeProductManagerDetails() {
    cy.xpath(
      "/html/body/div/div/div/div/div[2]/div/div[4]/div[2]/div[1]/div[2]/div/div/input"
    ).type(AddService.RULE_OF_PRODUCT_MANAGER)
    cy.xpath(
      '//*[@id="root"]/div/div/div/div[2]/div/div[4]/div[2]/div[2]/div[2]/div/div/div/input'
    ).type(AddService.EXAMPLE_ARMY_PHONE_NUMBER)
    // Here we should choose value in the select list, but it's impossible at the moment
  }
  static typeNumberOfRequestPerSecond() {
    cy.get('input[placeholder="2000"]').type(
      AddService.NUMBER_OF_REQUESTS_PER_MINUTE
    )
  }

  static uplaodFilesToTheService() {
    for (let i = 0; i < AddService.FILE_FORMATS.length; i++) {
      cy.fixture(AddService.FILE_NAMES[i]).then((fileContent) => {
        cy.get("input").attachFile(
          {
            fileContent: fileContent.toString(),
            fileName: AddService.FILE_NAMES[i],
            mimeType: AddService.FILE_FORMATS[i],
            encoding: "utf-8",
          },
          { subjectType: "input" }
        )
      })
    }
  }

  static selectGraphQLAsApiType() {
    cy.xpath("//div[text()='GraphQL']").click()
  }

  static selectSwaggerAsApiType() {
    cy.xpath("//div[text()='Swagger']").click()
  }
  static typeGraphQLServerEndpointLink() {
    cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input"]').type(
      AddService.GRAPHQL_SERVER_ENDPOINT_LINK
    )
  }
  static typeSwaggerServerEndpointLink() {
    cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input"]').type(
      AddService.SWAGGER_SERVER_ENDPOINT_LINK
    )
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
