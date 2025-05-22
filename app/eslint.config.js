import { config } from "@repo/eslint-config/react";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...config,
  { ignores: [".react-router", ".netlify", ".turbo", "build"] },
];
