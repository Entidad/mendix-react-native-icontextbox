import { addEnumerations, t } from "mendix";
import { SUB_Feedback_ResetLocalStorage } from "./FeedbackModule.SUB_Feedback_ResetLocalStorage.js";

export const ACT_SubmitFeedback = {
  "name": "FeedbackModule.ACT_SubmitFeedback",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "microflowCall",
      "label": "b2e7ad03-f09a-4bec-9661-461e2371934c",
      "operationId": "9xMRGf4f+1+kkbSkX3pbHQ",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "isValid"
    },
    {
      "type": "switch",
      "label": "53237893-7901-49c8-bd84-5f69f71f7e5d",
      "condition": {
        "type": "variable",
        "variable": "isValid"
      },
      "targets": {
        "true": "b028ee2a-247d-4ba4-b43d-d6f3a4f0cb01",
        "false": "58478a43-77f5-4c7c-b8d7-2f48155db1b6"
      }
    },
    {
      "type": "return",
      "label": "58478a43-77f5-4c7c-b8d7-2f48155db1b6",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "microflowCall",
      "label": "b028ee2a-247d-4ba4-b43d-d6f3a4f0cb01",
      "operationId": "4WUQ2cDSHF6r07zKXkG1NQ",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "ResponseHelper"
    },
    {
      "type": "closeForm",
      "label": "ce82f418-89ab-4e33-85a6-6ee6bae05d62",
      "numberOfPagesToClose": {
        "type": "literalNumeric",
        "value": "1"
      }
    },
    {
      "type": "switch",
      "label": "841106d7-ea59-4fca-a4d4-3c821514bd9c",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "ResponseHelper"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "6fe72f6c-0f8d-4a99-b948-b7c8b4d9cd22",
        "false": "5d03a927-7159-49fb-865a-e85a6d319ff2"
      }
    },
    {
      "type": "jump",
      "label": "5d03a927-7159-49fb-865a-e85a6d319ff2",
      "target": "a704c71e-e861-4a93-a0d1-51cd73a0953f"
    },
    {
      "type": "openForm",
      "label": "a704c71e-e861-4a93-a0d1-51cd73a0953f",
      "path": "FeedbackModule/PopupFailure.page.xml",
      "params": {
        "name": "FeedbackModule/PopupFailure.page.xml",
        "location": "modal",
        "resizable": false
      }
    },
    {
      "type": "return",
      "label": "9f341404-0b86-4d50-9c7e-1e83d81d038f",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "openForm",
      "label": "6fe72f6c-0f8d-4a99-b948-b7c8b4d9cd22",
      "path": "FeedbackModule/PopupSuccess.page.xml",
      "params": {
        "name": "FeedbackModule/PopupSuccess.page.xml",
        "location": "modal",
        "resizable": false
      },
      "inputArgs": {
        "$Response": {
          "type": "variable",
          "variable": "ResponseHelper"
        }
      }
    },
    {
      "type": "nanoflowCall",
      "label": "48768dce-7ddb-4962-8761-301cff88d733",
      "flow": () => SUB_Feedback_ResetLocalStorage,
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "return",
      "label": "c3e4f84e-1c8d-4427-af68-cd1e654e7303",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
