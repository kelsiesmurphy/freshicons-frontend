import { Hono } from "hono";
import { supabase } from "../lib/supabase";
import { verifyClerkJWT } from "../lib/verifyClerkJWT";

const app = new Hono();

app.get("/search", async (c) => {
  const q = c.req.query("q")?.toLowerCase() || "";

  const { data, error } = await supabase
    .from("assets")
    .select("*")
    .or(`name.ilike.%${q}%,description.ilike.%${q}%,tags.cs.{${q}}`);

  if (error) return c.json({ error: error.message }, 500);
  return c.json(data);
});

app.get("/:id/download-url", async (c) => {
  try {
    const auth = c.req.header("Authorization");
    const { userId } = await verifyClerkJWT(auth);

    const assetId = c.req.param("id");
    const { data: purchase } = await supabase
      .from("purchases")
      .select("*")
      .eq("user_id", userId)
      .eq("asset_id", assetId)
      .maybeSingle();

    if (!purchase) return c.json({ error: "Not purchased" }, 403);

    const { data: asset } = await supabase
      .from("assets")
      .select("file_url")
      .eq("id", assetId)
      .maybeSingle();

    if (!asset) return c.json({ error: "Asset not found" }, 404);

    return c.json({ url: asset.file_url });
  } catch (e) {
    return c.json({ error: (e as Error).message }, 401);
  }
});

export default app;
