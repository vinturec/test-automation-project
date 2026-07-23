// import { defineConfig } from "cypress";
// import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
// import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
// import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

// export default defineConfig({
//   e2e: {
//     specPattern: "**/*.feature",
//     async setupNodeEvents(
//       on: Cypress.PluginEvents,
//       config: Cypress.PluginConfigOptions
//     ): Promise<Cypress.PluginConfigOptions> {
//       // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//       await addCucumberPreprocessorPlugin(on, config);

//       on(
//         "file:preprocessor",
//         createBundler({
//           plugins: [createEsbuildPlugin(config)],
//         })
//       );

//       // Make sure to return the config object as it might have been modified by the plugin.
//       return config;
//     },
//   },
// });


// import { defineConfig } from "cypress";
// import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
// import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
// import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

// export default defineConfig({
//   e2e: {
//     baseUrl: "https://advantageonlineshopping.com/#/",
//     specPattern: "cypress/e2e/features/*.feature",
//     supportFile: "cypress/support/e2e.js",

//     async setupNodeEvents(on, config) {
//       // Set stepDefinitions path via environment variable
//       config.env = {
//         ...config.env,
//         cucumber: {
//           stepDefinitions: "cypress/e2e/step_definitions"
//         }
//       };

//       await addCucumberPreprocessorPlugin(on, config);

//       on(
//         "file:preprocessor",
//         createBundler({
//           plugins: [createEsbuildPlugin(config)],
//         })
//       );

//       return config;
//     },
//   },
// });


import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import path from "path";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://advantageonlineshopping.com",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents: async (on, config) => {
      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: path.join(__dirname, "cypress/e2e/step_definitions")
      });

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    }
  }
});
