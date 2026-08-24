import { addEnumerations, t } from "mendix/native";

export const ACT_Chat_sendMessage = {
  "name": "NativeMobile.ACT_Chat_sendMessage",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "writeLog",
      "label": "247f48fd-ae59-4cf2-a06f-dfc936e7a5cc",
      "level": "info",
      "message": {
        "type": "function",
        "name": "+",
        "parameters": [
          {
            "type": "function",
            "name": "+",
            "parameters": [
              {
                "type": "literal",
                "value": "Chat message send :: "
              },
              {
                "type": "variable",
                "variable": "MessagesHelper",
                "path": "MessageText"
              }
            ]
          },
          {
            "type": "literal",
            "value": "\n"
          }
        ]
      }
    },
    {
      "type": "return",
      "label": "b65ff63b-e495-4026-b3c2-cf0256011446",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
