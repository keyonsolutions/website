import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";
import next from "ultracite/oxlint/next";
import shadcn from "ultracite/oxlint/shadcn";
import antiSlop from "ultracite/oxlint/anti-slop";

export default defineConfig({
  extends: [core, react, next, shadcn, antiSlop],
  ignorePatterns: core.ignorePatterns,
  jsPlugins: shadcn.jsPlugins,
});
