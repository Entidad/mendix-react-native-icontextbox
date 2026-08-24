import { addEnumerations, t } from "mendix";

export const ACT_Feedback_TriggerScreenshotMode = {
  "name": "FeedbackModule.ACT_Feedback_TriggerScreenshotMode",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "closeForm",
      "label": "ec4831d5-3a6a-43b1-81b5-abb1e24b8757"
    },
    {
      "type": "javaScriptActionCall",
      "label": "71fc0907-f5b3-48bb-9a70-1d193967c21e",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_ToggleFeedbackScreenshotWidget").JS_ToggleFeedbackScreenshotWidget,
      "outputVar": "base64FromWidget",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "12f61a36-b16f-4b2b-ba1b-d3efc2575b81",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": "uploadCancelled"
          }
        ]
      },
      "targets": {
        "true": "bfc87cd7-f629-4f78-81d4-78be566345ea",
        "false": "b4d2cb07-cde2-4dcf-9870-5dadebc940f9"
      }
    },
    {
      "type": "jump",
      "label": "b4d2cb07-cde2-4dcf-9870-5dadebc940f9",
      "target": "bb185ea2-d3e0-4642-852d-5847d357f07f"
    },
    {
      "type": "jump",
      "label": "bb185ea2-d3e0-4642-852d-5847d357f07f",
      "target": "896625d3-4350-4998-b876-a5778abebd7b"
    },
    {
      "type": "jump",
      "label": "896625d3-4350-4998-b876-a5778abebd7b",
      "target": "bcd6b0c1-917b-455e-8a43-9025bacb7801"
    },
    {
      "type": "openForm",
      "label": "bcd6b0c1-917b-455e-8a43-9025bacb7801",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "return",
      "label": "19326d71-6167-42bc-abce-3b1ebaceb55b",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "bfc87cd7-f629-4f78-81d4-78be566345ea",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "a8170fef-4691-41a7-8a11-025e3e42a7dd",
        "false": "c64de622-91c3-474f-bc88-c976b984df7e"
      }
    },
    {
      "type": "return",
      "label": "c64de622-91c3-474f-bc88-c976b984df7e",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "a8170fef-4691-41a7-8a11-025e3e42a7dd",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_isStrictMode").JS_isStrictMode,
      "outputVar": "isStrictMode",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "e00dcdcf-4fd6-4d26-a995-498a039dea72",
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
        "true": "8924b59b-859a-4648-8640-567e3bbca4d5",
        "false": "77d36d3c-701c-4d4d-b7fe-f8667ef4f995"
      }
    },
    {
      "type": "jump",
      "label": "77d36d3c-701c-4d4d-b7fe-f8667ef4f995",
      "target": "f400bc6f-05bd-406d-adf1-82a491e37985"
    },
    {
      "type": "javaScriptActionCall",
      "label": "f400bc6f-05bd-406d-adf1-82a491e37985",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/feedbackmodule/actions/JS_SetSingleLocalStorageObjectItem").JS_SetSingleLocalStorageObjectItem,
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
            "type": "variable",
            "variable": "base64FromWidget"
          }
        }
      ]
    },
    {
      "type": "jump",
      "label": "b8f48af1-e1f1-4186-b819-7bdb635f4410",
      "target": "896625d3-4350-4998-b876-a5778abebd7b"
    },
    {
      "type": "jump",
      "label": "896625d3-4350-4998-b876-a5778abebd7b",
      "target": "bcd6b0c1-917b-455e-8a43-9025bacb7801"
    },
    {
      "type": "changeObject",
      "label": "8924b59b-859a-4648-8640-567e3bbca4d5",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64FromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "MWbCoj6a9VSIPYoHR9OLRw",
      "inputVar": "Feedback"
    },
    {
      "type": "jump",
      "label": "896625d3-4350-4998-b876-a5778abebd7b",
      "target": "bcd6b0c1-917b-455e-8a43-9025bacb7801"
    }
  ]
};
