import { createPlugin } from "@markuplint/ml-core";

import { requiredH1 } from "./rules/required-h1.js";

export default createPlugin({
  name: "noemptyheading",
  create(setting) {
    return {
      rules: {
        "required-h1": requiredH1(setting),
      },
    };
  },
});
