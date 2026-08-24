import { addEnumerations, t } from "mendix";

export const ACT_Feedback_UploadImage = {
  "name": "FeedbackModule.ACT_Feedback_UploadImage",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "setVariable",
      "label": "0386869e-ee65-4ff1-9a68-75bbd792aaf8",
      "value": {
        "type": "literal",
        "value": ".gif,.png,.jpg,.jpeg"
      },
      "outputVar": "mimeTypes",
      "outputKind": "primitive"
    },
    {
      "type": "setVariable",
      "label": "94885cfe-77a6-4731-a83d-902c69d9f62c",
      "value": {
        "type": "literalNumeric",
        "value": "5"
      },
      "outputVar": "fileUploadSize",
      "outputKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "e070d4d5-ae9c-4f21-a53c-92e225a16b3a",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_UploadAndConvertToFileBlobURL").JS_UploadAndConvertToFileBlobURL,
      "outputVar": "fileBlobURL",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "mimeTypes"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileUploadSize"
          }
        }
      ]
    },
    {
      "type": "switch",
      "label": "e47f76f2-fc08-4dcb-aed3-ad4a1f72aa24",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "uploadCancelled"
          }
        ]
      },
      "targets": {
        "true": "b476533c-4b10-40b5-93a1-39f35a71051a",
        "false": "f7a5ba46-c7ad-4e85-8e97-a5ea4d9f229c"
      }
    },
    {
      "type": "return",
      "label": "f7a5ba46-c7ad-4e85-8e97-a5ea4d9f229c",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "b476533c-4b10-40b5-93a1-39f35a71051a",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "bb60f97d-e21f-4131-a159-349e7162a078",
        "true": "a9925d13-f2de-4ed0-a23f-f81a9cc8cb1f"
      }
    },
    {
      "type": "switch",
      "label": "a9925d13-f2de-4ed0-a23f-f81a9cc8cb1f",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "fileSizeNotAccepted"
          }
        ]
      },
      "targets": {
        "true": "cf87632a-0a4d-42ed-a9e6-de683398433d",
        "false": "9021d640-a29b-49e0-b331-b1c9fa194990"
      }
    },
    {
      "type": "showMessage",
      "label": "9021d640-a29b-49e0-b331-b1c9fa194990",
      "messageType": "error",
      "message": t([
        {
          "type": "literal",
          "value": "Maximum image size allowed is 5MB."
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "46c7c825-07cc-4302-b50c-f9ecc5bd4758",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "cf87632a-0a4d-42ed-a9e6-de683398433d",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "fileTypeNotAccepted"
          }
        ]
      },
      "targets": {
        "false": "c1677300-2b51-4830-99d9-4f4004f572a7",
        "true": "299caefd-993d-469d-acd6-752ff412c4e1"
      }
    },
    {
      "type": "closeForm",
      "label": "299caefd-993d-469d-acd6-752ff412c4e1"
    },
    {
      "type": "javaScriptActionCall",
      "label": "6b055eab-1b4d-4d73-b129-4f11b05584e9",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_ToggleFeedbackAnnotateWidget").JS_ToggleFeedbackAnnotateWidget,
      "outputVar": "base64ImageFromWidget",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileBlobURL"
          }
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "e82c7938-3825-4453-a50a-7842f0eea662",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64ImageFromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "UCi0VYyTlF69/GYEVWrF7A",
      "inputVar": "Feedback"
    },
    {
      "type": "openForm",
      "label": "8118397d-9235-4cc8-bda7-760931fb8193",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "b9f46392-d127-4d3d-9f37-fce3ced1d8ca",
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
      "type": "javaScriptActionCall",
      "label": "042af49f-9ddf-4d46-b564-a74e5ffb6cbe",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_RevokeUploadedFileFromMemory").JS_RevokeUploadedFileFromMemory,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileBlobURL"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "3fdf1f96-3f0c-4422-acf4-749e81fc2423",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "c1677300-2b51-4830-99d9-4f4004f572a7",
      "messageType": "error",
      "message": t([
        {
          "type": "literal",
          "value": "Only images with format of .gif .jpg .jpeg .png are allowed"
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "7a47bab4-d642-4d2c-aed0-3b19c0b96ead",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "bb60f97d-e21f-4131-a159-349e7162a078",
      "messageType": "error",
      "message": t([
        {
          "type": "literal",
          "value": "Upload failed, please try again."
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "b66ef754-ce89-487e-934e-62d31edebd91",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
