import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  // Ensure mode is always a string
  const envMode = mode || "development"; 

  // Load environment variables
  const env = loadEnv(envMode, process.cwd(), "");

  console.log("Loaded ENV Variables:", env); // Debugging

  return {
    define: {
      "process.env": env, // Expose environment variables
    },
  };
});