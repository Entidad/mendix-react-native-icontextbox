import { addEnumerations, t } from "mendix";

export const PopulateDefaultMetaData = {
  "name": "FeedbackModule.PopulateDefaultMetaData",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "2edf0ad2-48f0-4bb9-820d-eba055ace460",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_PopulateFeedbackMetadata").JS_PopulateFeedbackMetadata,
      "parameters": [
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
      "type": "javaScriptActionCall",
      "label": "bfd86f6d-2899-4de5-9dc1-bf9a59c16479",
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
      "label": "14041530-20b5-4b09-9406-5250d12efc0d",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
