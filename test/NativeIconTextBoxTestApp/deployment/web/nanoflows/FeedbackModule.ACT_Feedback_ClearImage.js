import { addEnumerations, t } from "mendix";

export const ACT_Feedback_ClearImage = {
  "name": "FeedbackModule.ACT_Feedback_ClearImage",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "changeObject",
      "label": "8817dad8-9b82-4870-8484-4d061a99f119",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "a68080b1-334b-4a57-ac50-b836e3437a56",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_SetFeedbackStorageObject").JS_SetFeedbackStorageObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "52133d01-4a09-45d5-ac64-d71477aadee9",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
