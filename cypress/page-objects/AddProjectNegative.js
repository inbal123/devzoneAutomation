import AddProject from "./AddProject";

export default class AddProjectNegative extends AddProject {
    static verifyButtonNextIsDisabled() {
        cy.contains(/^לשלב הבא$/).should("have.class", "disabledElement")
    }

    static clearNameAndDescriptionFields() {
        cy.get("input[placeholder = 'הפרויקט שלי']").clear()
        cy.get("textarea[placeholder ='כדאי לשקף בתיאור את מטרת הפרויקט ועולם התוכן שלו']").clear()
    }

    static typeReallyLongProjectName() {
        cy.get("input[placeholder = 'הפרויקט שלי']").type("Really Looooooooooooooooooooooong Project Name")
    }

    static verifyNotTheEntireProjectNameWasTyped() {
        cy.get("#input-with-icon-adornment").should("not.have.value", "Really Looooooooooooooooooooooong Project Name").and("have.value", "Really Looooooooooooooooo")
    }

    static verifyAddMemberButtonIsDisabled() {
        cy.contains(/^הוספה$/).should("have.class", "disabled")
    }

    static typePersonalNumberWithLetterAndLessThanSevenDigits() {
        cy.get("input.member-item-add-on-input").type("s123")
    }

    static typePersonalNumberWithoutLetterAndWithSevenDigits() {
        cy.get("input.member-item-add-on-input").type("1234567")
    }

    static typeEightLettersAsPersonalNumber() {
        cy.get("input.member-item-add-on-input").type("ssssssss")
    }

    static typeNonExistingPersonalNumberWithLetter() {
        cy.get("input.member-item-add-on-input").type("s0000000")
    }

    static verifyAddMemberErrorMessageIsVisible() {
        cy.get(".member-item-add-on-error").should("be.visible").and("contain.text", "מבנה המספר האישי שהזנת לא תקין, יש להכניס אות באנגלית ולאחריה שבע ספרות")
    }

    static clearPersonalNumberField() {
        cy.get("input[placeholder = 's1111111']").clear()
    }

    static verifyFinishButtonIsDisabled() {
        cy.contains(/^אישור וסיום$/).should("have.class", "disabledElement")
    }

    static insertFileThatIsNotJpgOrJpegOrPngOrSvgType() {
        cy.fixture("mydoc.doc").then((fileContent) => {
            cy.get("input[type = 'file']").attachFile(
                {
                    fileContent: fileContent.toString(),
                    fileName: "mydoc.doc",
                    mimeType: "application/msword",
                },
                { subjectType: "input" }
            )
        })
    }

    static verifyAddLogoErrorMessageIsVisible() {
        cy.get(".app-alert-banner__text").should("be.visible").and("contain.text", "ניתן להעלות קבצים מסוג JPEG, JPG, PNG, SVG")
    }
}