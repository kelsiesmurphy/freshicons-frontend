import "dotenv/config";
import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { logger } from "hono/logger";
import assets from "./routes/assets";

const app = new Hono();

app.use("*", logger());
app.route("/api/assets", assets);

// Set port (from env or fallback)
const port = parseInt(process.env.PORT || "3001", 10);

// Start server
serve({ fetch: app.fetch, port }, () => {
  console.log(`🚀 API server running at http://localhost:${port}`);
});

export default app;
