import { defineConfig } from "eslint/config";
import html from "eslint-plugin-html";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["templates/*.html"],
    plugins: { html },
  },
]);
