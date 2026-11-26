import { ReportAggregator } from "@wdio/html-reporter"

let reportAggregator

export const config = {
  runner: "local",

  specs: ["./test/specs/**/*.spec.js"],

  maxInstances: 8,

  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": { args: ["--start-maximized"] },
    },
  ],

  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "error",

  bail: 0,

  baseUrl: "https://practicesoftwaretesting.com/",

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "mocha",

  reporters: [
    ["spec", { realtimeReporting: true, color: true, showPreface: false }],
    ["allure", { outputDir: "allure-results" }],
    [
      "html",
      {
        outputDir: "./reports/html-reports/",
        filename: "report.html",
        reportTitle: "Test Report Title",
        useOnAfterCommandForScreenshot: false,
      },
    ],
  ],

  mochaOpts: { ui: "bdd", timeout: 60000 },

  onPrepare: function (config, capabilities) {
    reportAggregator = new ReportAggregator({
      outputDir: "./reports/html-reports/",
      filename: "master-report.html",
      reportTitle: "Master Report",
      linkScreenshots: true,
      collapseTests: true,
      showInBrowser: true,
    })
    reportAggregator.clean()
  },

  onComplete: async function () {
    await reportAggregator.createReport()
  },
}
