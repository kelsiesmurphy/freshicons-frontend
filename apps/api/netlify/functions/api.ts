import { Hono } from "hono";
import assets from "../../src/routes/assets";
import { logger } from "hono/logger";

const app = new Hono();

app.use("*", logger());
app.route("/assets", assets);

export const handler = app.fetch;
