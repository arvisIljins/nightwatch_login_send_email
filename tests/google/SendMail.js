const loginEmail = "testarvis@gmail.com";
const password = "test123test";
const timeOut1s = 1000;
const timeOut3s = 3000;
const emailWhoToSend = "arviiljins@gmail.com";
const subjectMessage = "Friendly reminder!!!";
const messageBody = "Testa emails";

module.exports = {
  "Login gmail": (browser) => {
    var login = browser.page.login();
    login
      .navigate()
      .setValue("@username", loginEmail)
      .click("@next")
      .pause(timeOut3s)
      .click("@clickInPassword")
      .setValue("@passwordCssSelector", password)
      .click("@passwordNextStepCssSelector")
      .pause(timeOut1s)
      .saveScreenshot("./logged-in.png");
  },

  "Send mail": (browser) => {
    var sendMail = browser.page.sendMail();
    sendMail
      .click("@compostButtonCssSelector")
      .pause(timeOut1s)
      .setValue("@addEmailForMessageCssSelector", emailWhoToSend)
      .setValue("@addSubjectCssSelector", subjectMessage)
      .setValue("@messageBodyCssSelector", messageBody)
      .click("@buttonSendMessageCssSelector")
      .pause(timeOut1s)
      .saveScreenshot("./message-send.png");
  },
};
