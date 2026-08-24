import { addEnumerations, t } from "mendix";
import { SUB_Feedback_GetOrCreate } from "./FeedbackModule.SUB_Feedback_GetOrCreate.js";
import { PopulateDefaultMetaData } from "./FeedbackModule.PopulateDefaultMetaData.js";

export const DS_Feedback_Populate = {
  "name": "FeedbackModule.DS_Feedback_Populate",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "nanoflowCall",
      "label": "e01251a3-b322-4997-8506-e3f84031430f",
      "flow": () => SUB_Feedback_GetOrCreate,
      "parameters": [],
      "outputVar": "Feedback"
    },
    {
      "type": "microflowCall",
      "label": "eecdf958-6585-4ad6-9b97-fae56ca16d3e",
      "operationId": "54DF4chgG1ikFH1hMJNiUQ",
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
      "type": "nanoflowCall",
      "label": "47e5e489-6ee1-4578-a1e0-d3f712694158",
      "flow": () => PopulateDefaultMetaData,
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        },
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
      "type": "javaScriptActionCall",
      "label": "7fbc2519-7dd5-4d66-8d9c-61938d7d48ca",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_Recalculate_MendixModal_Error_PopUp_Zindex").JS_Recalculate_MendixModal_Error_PopUp_Zindex,
      "parameters": []
    },
    {
      "type": "return",
      "label": "cb8754a4-b9b6-46c3-8d40-e43064e9428f",
      "result": {
        "type": "variable",
        "variable": "Feedback"
      },
      "resultKind": "object"
    }
  ]
};
