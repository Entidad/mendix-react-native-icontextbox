import { addEnumerations, t } from "mendix";

export const OCH_UpdateUserLanguage = {
  "name": "Atlas_Core.OCH_UpdateUserLanguage",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "commitObjects",
      "label": "f62d8414-5a45-40d5-91e9-dfa5061b96b1",
      "operationId": "6dQXQzfIdFCfk8XtuGKnng",
      "inputVar": "User"
    },
    {
      "type": "javaScriptActionCall",
      "label": "35da779b-0eb4-444d-bf5b-2db81ec26bdc",
      "action": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/javascriptsource/atlas_core/actions/ReloadWithState").ReloadWithState,
      "parameters": []
    },
    {
      "type": "return",
      "label": "59e065f5-8000-45a9-be30-f04ff1658459",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
