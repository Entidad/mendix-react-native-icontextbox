import { addEnumerations, t } from "mendix/native";

export const NAV_Chat_demo = {
  "name": "NativeMobile.NAV_Chat_demo",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "createObject",
      "label": "ce8fe67b-2aa6-420a-83a8-47bab3b17276",
      "objectType": "NativeMobile.MessagesHelper",
      "outputVar": "NewMessagesHelper"
    },
    {
      "type": "changeObject",
      "inputVar": "NewMessagesHelper",
      "member": "MessageBoxReturnKey",
      "value": {
        "type": "literal",
        "value": "Send"
      }
    },
    {
      "type": "openForm",
      "label": "7bd6fea2-67e1-46e5-94e9-1914ed30ebdf",
      "path": "NativeMobile.Chat_demo",
      "params": {
        "name": "NativeMobile.Chat_demo",
        "location": "content"
      },
      "inputArgs": {
        "$MessagesHelper": {
          "type": "variable",
          "variable": "NewMessagesHelper"
        }
      }
    },
    {
      "type": "return",
      "label": "87218d75-8e75-4e15-a023-9db8b5c3df0b",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
