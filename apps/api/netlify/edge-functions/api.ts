import assets from "../../src/routes/assets";
import { Hono } from "https://deno.land/x/hono@v4.3.11/mod.ts";
import { handle } from "https://deno.land/x/hono@v4.3.11/adapter/netlify/index.ts";

import type { Context } from "https://edge.netlify.com/";

export type Env = {
  Bindings: {
    context: Context;
  };
};

const app = new Hono<Env>();

app.get("/", (c: { text: (arg0: string) => any }) => {
  return c.text("Hello Hono!");
});
app.route("/assets", assets);

export default handle(app);

// import { Hono } from "https://deno.land/x/hono@v4.3.11/mod.ts";
// import { handle } from "https://deno.land/x/hono@v4.3.11/adapter/netlify/index.ts";

// // Import the type definition
// import type { Context } from "https://edge.netlify.com/";

// export type Env = {
//   Bindings: {
//     context: Context;
//   };
// };

// const app = new Hono<Env>();

// app.get("/country", (c) =>
//   c.json({
//     "You are in": c.env.context.geo.country?.name,
//   })
// );

// export default handle(app);
