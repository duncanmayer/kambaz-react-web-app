import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => { 
  const envMode = mode || "development";  

  const env = loadEnv(envMode, process.cwd(), "");

  console.log("Loaded ENV Variables:", env); // debug
  console.log("Netlify remote server:", process.env.VITE_REMOTE_SERVER);

  return {
    define: { 
      "process.env": {
        ...env,
        VITE_REMOTE_SERVER: env.VITE_REMOTE_SERVER || process.env.VITE_REMOTE_SERVER,
      },
    },
  };
});
