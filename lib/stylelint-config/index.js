/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-tailwindcss"],
  plugins: ["stylelint-selector-bem-pattern"],
  rules: {
    "at-rule-no-deprecated": [true, { ignoreAtRules: ["apply"] }],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "config",
          "custom-variant",
          "theme",
          "source",
          "utility",
          "variant",
        ],
      },
    ],
    "custom-property-pattern": null,
    "hue-degree-notation": "number",
    "import-notation": "string",
    "lightness-notation": "number",
    "plugin/selector-bem-pattern": {
      componentName: "[A-Z]+",
      componentSelectors: {
        initial: "^\\.{componentName}(?:-[a-z]+)?$",
        combined: "^\\.combined-{componentName}-[a-z]+$",
      },
      utilitySelectors: "^\\.util-[a-z]+$",
    },
    "selector-class-pattern": null,
  },
};
