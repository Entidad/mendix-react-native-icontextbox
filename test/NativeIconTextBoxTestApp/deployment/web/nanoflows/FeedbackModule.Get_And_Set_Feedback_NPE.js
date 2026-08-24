import { addEnumerations, t } from "mendix";

export const Get_And_Set_Feedback_NPE = {
  "name": "FeedbackModule.Get_And_Set_Feedback_NPE",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "f30c7ba6-7997-4cd5-9402-5a15a4cefd58",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_GetSingleStringLocalStorageObjectItem").JS_GetSingleStringLocalStorageObjectItem,
      "outputVar": "AppID",
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
            "value": "AppID"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "bf01fb56-d521-4d4c-9bc3-83e51be11f03",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_GetSingleStringLocalStorageObjectItem").JS_GetSingleStringLocalStorageObjectItem,
      "outputVar": "Subject",
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
            "value": "Subject"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "2599aad0-b2ef-4c23-8ee0-1dcee49ce62e",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_GetSingleStringLocalStorageObjectItem").JS_GetSingleStringLocalStorageObjectItem,
      "outputVar": "Description",
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
            "value": "Description"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "eeb8c5e7-191b-40f3-85d6-dc8cf0c29e6b",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_GetSingleStringLocalStorageObjectItem").JS_GetSingleStringLocalStorageObjectItem,
      "outputVar": "SubmitterUUID",
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
            "value": "SubmitterUUID"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "af713860-2d17-4ff5-8d38-72afd8b04ea3",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_GetSingleStringLocalStorageObjectItem").JS_GetSingleStringLocalStorageObjectItem,
      "outputVar": "SubmitterEmail",
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
            "value": "SubmitterEmail"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "3aee6294-c6cb-487e-925e-86877925efba",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_GetSingleStringLocalStorageObjectItem").JS_GetSingleStringLocalStorageObjectItem,
      "outputVar": "SubmitterDisplayName",
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
            "value": "SubmitterDisplayName"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "3ea0065c-b933-454f-9a97-dbea90d4374f",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_GetSingleStringLocalStorageObjectItem").JS_GetSingleStringLocalStorageObjectItem,
      "outputVar": "ImageB64",
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
            "value": "ImageB64"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "8930b842-b721-411b-8488-fce57cb88e47",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_GetShowEmailBooleanLocalStorageObjectItem").JS_GetShowEmailBooleanLocalStorageObjectItem,
      "outputVar": "_showEmail",
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
            "value": "_showEmail"
          }
        }
      ]
    },
    {
      "type": "createObject",
      "label": "77cc0d85-bc94-459e-8547-db6af5e7668b",
      "objectType": "FeedbackModule.Feedback",
      "outputVar": "NewFeedback"
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "AppID",
      "value": {
        "type": "variable",
        "variable": "AppID"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "Subject",
      "value": {
        "type": "variable",
        "variable": "Subject"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "Description",
      "value": {
        "type": "variable",
        "variable": "Description"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "SubmitterUUID",
      "value": {
        "type": "variable",
        "variable": "SubmitterUUID"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "SubmitterEmail",
      "value": {
        "type": "variable",
        "variable": "SubmitterEmail"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "SubmitterDisplayName",
      "value": {
        "type": "variable",
        "variable": "SubmitterDisplayName"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "ImageB64"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "_showEmail",
      "value": {
        "type": "variable",
        "variable": "_showEmail"
      }
    },
    {
      "type": "return",
      "label": "3854cc9b-dbfc-48bb-b082-d2cbab9c10d3",
      "result": {
        "type": "variable",
        "variable": "NewFeedback"
      },
      "resultKind": "object"
    }
  ]
};
