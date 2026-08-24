import { addEnumerations, t } from "mendix";
import { Get_And_Set_Feedback_NPE } from "./FeedbackModule.Get_And_Set_Feedback_NPE.js";

export const SUB_Feedback_GetOrCreate = {
  "name": "FeedbackModule.SUB_Feedback_GetOrCreate",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "0b8892a4-7d3e-4a10-acee-7f51d70fb5aa",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_isStrictMode").JS_isStrictMode,
      "outputVar": "isStrictMode",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "ce476542-754e-441e-8d0e-a5493215cb5e",
      "condition": {
        "type": "function",
        "name": "=",
        "parameters": [
          {
            "type": "variable",
            "variable": "isStrictMode"
          },
          {
            "type": "literal",
            "value": false
          }
        ]
      },
      "targets": {
        "false": "49297f0f-4c6b-427c-875d-99bda47be773",
        "true": "ba277a11-9ba0-4e31-b632-3acd2580e730"
      }
    },
    {
      "type": "tryCatch",
      "label": "ba277a11-9ba0-4e31-b632-3acd2580e730",
      "catchTarget": "dfe7fa6e-bbb0-4b59-acb3-8638d43d200f",
      "body": [
        {
          "type": "javaScriptActionCall",
          "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_GetFeedbackStorageObject").JS_GetFeedbackStorageObject,
          "outputVar": "LocalFeedback",
          "parameters": [
            {
              "kind": "primitive",
              "value": {
                "type": "constant",
                "name": "FeedbackModule.LocalStorageKey"
              }
            },
            {
              "kind": "primitive",
              "value": {
                "type": "literal",
                "value": "FeedbackModule.Feedback"
              }
            }
          ]
        },
        {
          "type": "return",
          "result": {
            "type": "literal",
            "value": true
          },
          "resultKind": "primitive"
        }
      ]
    },
    {
      "type": "switch",
      "label": "fa446b47-e72d-4d9e-b3b4-f59f11586d57",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "LocalFeedback"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "30597125-7b18-4223-aa49-564c9aa658b7",
        "true": "0821d877-f7e5-46fb-8016-f7cf9b17ce37"
      }
    },
    {
      "type": "return",
      "label": "0821d877-f7e5-46fb-8016-f7cf9b17ce37",
      "result": {
        "type": "variable",
        "variable": "LocalFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "30597125-7b18-4223-aa49-564c9aa658b7",
      "target": "ad8abded-acf7-4825-b935-21d9ba26b5f4"
    },
    {
      "type": "createObject",
      "label": "ad8abded-acf7-4825-b935-21d9ba26b5f4",
      "objectType": "FeedbackModule.Feedback",
      "outputVar": "NewFeedback"
    },
    {
      "type": "return",
      "label": "682ee019-fab8-459d-8226-e94f781b7d3e",
      "result": {
        "type": "variable",
        "variable": "NewFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "dfe7fa6e-bbb0-4b59-acb3-8638d43d200f",
      "target": "30597125-7b18-4223-aa49-564c9aa658b7"
    },
    {
      "type": "jump",
      "label": "30597125-7b18-4223-aa49-564c9aa658b7",
      "target": "ad8abded-acf7-4825-b935-21d9ba26b5f4"
    },
    {
      "type": "jump",
      "label": "49297f0f-4c6b-427c-875d-99bda47be773",
      "target": "9eed95fc-e9de-4487-8a56-6e13f8cd4c2c"
    },
    {
      "type": "nanoflowCall",
      "label": "9eed95fc-e9de-4487-8a56-6e13f8cd4c2c",
      "flow": () => Get_And_Set_Feedback_NPE,
      "parameters": [],
      "outputVar": "StrictModeFeedback"
    },
    {
      "type": "return",
      "label": "7977ea57-5b01-4e04-a6f6-bddd9b6cca1e",
      "result": {
        "type": "variable",
        "variable": "StrictModeFeedback"
      },
      "resultKind": "object"
    }
  ]
};
