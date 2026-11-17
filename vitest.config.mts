import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    // lets tests use the @/ alias from tsconfig.json
    tsconfigPaths: true,
  },
});
