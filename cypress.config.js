const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demowebshop.tricentis.com',
    env: {
      first_name: 'John',
      last_name: 'Doe',
      login_email: 'aryaputrahaidar@gmail.com',
      login_password: '1234569',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
