const url = "https://mail.google.com/";
const loginEmail = "testarvis@gmail.com";
const password = "test123test";
const emailWhoToSend = "irbeiljina@gmail.com";
const loginInputCssSelector = "#identifierId";
const loginEmailNextStepCssSelector = "#identifierNext > div > button";
const passwordClickCssSelector = "#password";
const passwordCssSelector =
  "#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input";
const passwordNextStepCssSelector = "#passwordNext > div > button";
const compostButtonCssSelector = 'div[jscontroller="eIu7Db"]';
const addEmailForMessageCssSelector = "#:a7";
const addSubjectCssSelector = "#:76";
const subjectMessage = "Friendly reminder!!!";
const messageBodyCssSelector = "#:8d";
const messageBody = "Es Tevi mīlu";

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
      .setValue(addEmailForMessageCssSelector, emailWhoToSend)
      .setValue(addSubjectCssSelector, subjectMessage)
      .setValue(messageBodyCssSelector, messageBody)
      .pause(4000);
  },
};
