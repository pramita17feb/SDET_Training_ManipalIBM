$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/calculateBMI.feature");
formatter.feature({
  "line": 1,
  "name": "To test BMI Calculation",
  "description": "",
  "id": "to-test-bmi-calculation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "BMI Calculation of 5 user",
  "description": "",
  "id": "to-test-bmi-calculation;bmi-calculation-of-5-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "open Calculator URL",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "validate Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "navigate to BMI Calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate BMI Calculator Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "entered input  Age\u003cAge\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "entered input Height\u003cHeight\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "entered input Weight\u003cWeight\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "capture the BMI value",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "to-test-bmi-calculation;bmi-calculation-of-5-user;",
  "rows": [
    {
      "cells": [
        "Age",
        "Height",
        "Weight"
      ],
      "line": 16,
      "id": "to-test-bmi-calculation;bmi-calculation-of-5-user;;1"
    },
    {
      "cells": [
        "10",
        "127",
        "40"
      ],
      "line": 17,
      "id": "to-test-bmi-calculation;bmi-calculation-of-5-user;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 18,
      "id": "to-test-bmi-calculation;bmi-calculation-of-5-user;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 19,
      "id": "to-test-bmi-calculation;bmi-calculation-of-5-user;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 20,
      "id": "to-test-bmi-calculation;bmi-calculation-of-5-user;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 21,
      "id": "to-test-bmi-calculation;bmi-calculation-of-5-user;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "BMI Calculation of 5 user",
  "description": "",
  "id": "to-test-bmi-calculation;bmi-calculation-of-5-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "open Calculator URL",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "validate Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "navigate to BMI Calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate BMI Calculator Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "entered input  Age10",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "entered input Height127",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "entered input Weight40",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "capture the BMI value",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.open_the_chrome_browser()"
});
formatter.result({
  "duration": 8034796700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.open_Calculator_URL()"
});
formatter.result({
  "duration": 2596464500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.validate_Calculator_page()"
});
formatter.result({
  "duration": 16852100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.navigate_to_BMI_Calculator_link()"
});
formatter.result({
  "duration": 1639199300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.validate_BMI_Calculator_Page()"
});
formatter.result({
  "duration": 6466300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 18
    }
  ],
  "location": "stepDefinition.entered_input_Age(int)"
});
formatter.result({
  "duration": 207744100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "127",
      "offset": 20
    }
  ],
  "location": "stepDefinition.entered_input_Height(int)"
});
formatter.result({
  "duration": 263298300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 20
    }
  ],
  "location": "stepDefinition.entered_input_Weight(int)"
});
formatter.result({
  "duration": 243090700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.calculate_BMI()"
});
formatter.result({
  "duration": 851776200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.capture_the_BMI_value()"
});
formatter.result({
  "duration": 110250000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "BMI Calculation of 5 user",
  "description": "",
  "id": "to-test-bmi-calculation;bmi-calculation-of-5-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "open Calculator URL",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "validate Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "navigate to BMI Calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate BMI Calculator Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "entered input  Age30",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "entered input Height156",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "entered input Weight70",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "capture the BMI value",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.open_the_chrome_browser()"
});
formatter.result({
  "duration": 6264327900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.open_Calculator_URL()"
});
formatter.result({
  "duration": 2418090500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.validate_Calculator_page()"
});
formatter.result({
  "duration": 16898800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.navigate_to_BMI_Calculator_link()"
});
formatter.result({
  "duration": 1750022400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.validate_BMI_Calculator_Page()"
});
formatter.result({
  "duration": 9027500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 18
    }
  ],
  "location": "stepDefinition.entered_input_Age(int)"
});
formatter.result({
  "duration": 216591400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "156",
      "offset": 20
    }
  ],
  "location": "stepDefinition.entered_input_Height(int)"
});
formatter.result({
  "duration": 223739900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 20
    }
  ],
  "location": "stepDefinition.entered_input_Weight(int)"
});
formatter.result({
  "duration": 584039000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.calculate_BMI()"
});
formatter.result({
  "duration": 974249200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.capture_the_BMI_value()"
});
formatter.result({
  "duration": 128651700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "BMI Calculation of 5 user",
  "description": "",
  "id": "to-test-bmi-calculation;bmi-calculation-of-5-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "open Calculator URL",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "validate Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "navigate to BMI Calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate BMI Calculator Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "entered input  Age25",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "entered input Height152",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "entered input Weight55",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "capture the BMI value",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.open_the_chrome_browser()"
});
formatter.result({
  "duration": 6488589300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.open_Calculator_URL()"
});
formatter.result({
  "duration": 2862066500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.validate_Calculator_page()"
});
formatter.result({
  "duration": 18202800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.navigate_to_BMI_Calculator_link()"
});
formatter.result({
  "duration": 2053725100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.validate_BMI_Calculator_Page()"
});
formatter.result({
  "duration": 16961600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 18
    }
  ],
  "location": "stepDefinition.entered_input_Age(int)"
});
formatter.result({
  "duration": 300032100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "152",
      "offset": 20
    }
  ],
  "location": "stepDefinition.entered_input_Height(int)"
});
formatter.result({
  "duration": 382510200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55",
      "offset": 20
    }
  ],
  "location": "stepDefinition.entered_input_Weight(int)"
});
formatter.result({
  "duration": 710767000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.calculate_BMI()"
});
formatter.result({
  "duration": 777709700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.capture_the_BMI_value()"
});
formatter.result({
  "duration": 113862000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "BMI Calculation of 5 user",
  "description": "",
  "id": "to-test-bmi-calculation;bmi-calculation-of-5-user;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "open Calculator URL",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "validate Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "navigate to BMI Calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate BMI Calculator Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "entered input  Age20",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "entered input Height160",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "entered input Weight45",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "capture the BMI value",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.open_the_chrome_browser()"
});
formatter.result({
  "duration": 6845779800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.open_Calculator_URL()"
});
formatter.result({
  "duration": 2449440300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.validate_Calculator_page()"
});
formatter.result({
  "duration": 21919900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.navigate_to_BMI_Calculator_link()"
});
formatter.result({
  "duration": 1492456900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.validate_BMI_Calculator_Page()"
});
formatter.result({
  "duration": 11827200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 18
    }
  ],
  "location": "stepDefinition.entered_input_Age(int)"
});
formatter.result({
  "duration": 295433400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "160",
      "offset": 20
    }
  ],
  "location": "stepDefinition.entered_input_Height(int)"
});
formatter.result({
  "duration": 349841400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 20
    }
  ],
  "location": "stepDefinition.entered_input_Weight(int)"
});
formatter.result({
  "duration": 672165200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.calculate_BMI()"
});
formatter.result({
  "duration": 1067015800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.capture_the_BMI_value()"
});
formatter.result({
  "duration": 419723100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "BMI Calculation of 5 user",
  "description": "",
  "id": "to-test-bmi-calculation;bmi-calculation-of-5-user;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "open Calculator URL",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "validate Calculator page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "navigate to BMI Calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate BMI Calculator Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "entered input  Age35",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "entered input Height160",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "entered input Weight70",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "capture the BMI value",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.open_the_chrome_browser()"
});
formatter.result({
  "duration": 7186590800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.open_Calculator_URL()"
});
formatter.result({
  "duration": 2819572800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.validate_Calculator_page()"
});
formatter.result({
  "duration": 13105400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.navigate_to_BMI_Calculator_link()"
});
formatter.result({
  "duration": 1546452900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.validate_BMI_Calculator_Page()"
});
formatter.result({
  "duration": 16095500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 18
    }
  ],
  "location": "stepDefinition.entered_input_Age(int)"
});
formatter.result({
  "duration": 257658200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "160",
      "offset": 20
    }
  ],
  "location": "stepDefinition.entered_input_Height(int)"
});
formatter.result({
  "duration": 415021500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 20
    }
  ],
  "location": "stepDefinition.entered_input_Weight(int)"
});
formatter.result({
  "duration": 344795000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.calculate_BMI()"
});
formatter.result({
  "duration": 1165443800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.capture_the_BMI_value()"
});
formatter.result({
  "duration": 110670600,
  "status": "passed"
});
});