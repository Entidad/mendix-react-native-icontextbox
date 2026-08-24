import { addEnumerations, t } from "mendix";

export const OCH_Feedback_SaveToLocalStorage = {
  "name": "FeedbackModule.OCH_Feedback_SaveToLocalStorage",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "ecb30975-c760-4a26-88be-d0a8effbe0a1",
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
      "label": "a4c9d50d-eb4c-473a-8d4c-31ead67864af",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
