const url = "https://mail.google.com/";
const loginEmail = "testarvis@gmail.com";
const password = "test123test";
const emailWhoToSend = "arviiljins@gmail.com";
const loginInputCssSelector = "#identifierId";
const loginEmailNextStepCssSelector = "#identifierNext > div > button";
const passwordClickCssSelector = "#password";
const passwordCssSelector =
  "#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input";
const passwordNextStepCssSelector = "#passwordNext > div > button";
const compostButtonCssSelector = 'div[jscontroller="eIu7Db"]';
const addEmailForMessageCssSelector = 'input[peoplekit-id="BbVjBd"]';
const addSubjectCssSelector = 'input[name="subjectbox"]';
const subjectMessage = "Friendly reminder!!!";
const messageBodyCssSelector = 'div[aria-label="Message Body"]';
const messageBody = "Testa emails";
const buttonSendMessageCssSelector = 'div[data-tooltip="Send ‪(⌘Enter)‬"]';

module.exports = {
  "Send email": (browser) => {
    browser
      .url(url)
      .pause(3000)
      .setValue(loginInputCssSelector, loginEmail)
      .click(loginEmailNextStepCssSelector)
      .pause(1000)
      .click(passwordClickCssSelector)
      .setValue(passwordCssSelector, password)
      .click(passwordNextStepCssSelector)
      .click(compostButtonCssSelector)
      .pause(1000)
      .setValue(addEmailForMessageCssSelector, emailWhoToSend)
      .setValue(addSubjectCssSelector, subjectMessage)
      .setValue(messageBodyCssSelector, messageBody)
      .click(buttonSendMessageCssSelector)
      .pause(4000);
  },
};
