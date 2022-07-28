import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    setupNodeEvents(on, config) {
      config.defaultCommandTimeout = 20000
      config.responseTimeout = 20000
      
      return config;
    },
    retries: 2,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mocha",
        quite: true,
        overwrite: false,
        html: true,
        json: true,
      },
    },
  }  
});
