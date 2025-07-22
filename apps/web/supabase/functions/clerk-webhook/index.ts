import { createClient } from "npm:@supabase/supabase-js";
import { verifyWebhook } from "npm:@clerk/backend/webhooks";

Deno.serve(async (req) => {
  // Verify webhook signature
  const webhookSecret = Deno.env.get("CLERK_WEBHOOK_SIGNING_SECRET");

  if (!webhookSecret) {
    return new Response("Webhook secret not configured", { status: 500 });
  }

  const event = await verifyWebhook(req, { signingSecret: webhookSecret });

  // Create supabase client
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !supabaseServiceKey) {
    return new Response("Supabase credentials not configured", { status: 500 });
  }
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  switch (event.type) {
    case "user.created": {
      // Handle user creation
      const { data: user, error } = await supabase
        .from("users")
        .insert([
          {
            id: event.data.id,
            first_name: event.data.first_name,
            last_name: event.data.last_name,
            avatar_url: event.data.image_url,
            created_at: new Date(event.data.created_at).toISOString(),
            updated_at: new Date(event.data.updated_at).toISOString(),
          },
        ])
        .select()
        .single();

      if (error) {
        console.error("Error creating user:", error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
        });
      }

      return new Response(JSON.stringify({ user }), { status: 200 });
    }

    case "user.updated": {
      // Handle user update
      const { data: user, error } = await supabase
        .from("users")
        .update({
          first_name: event.data.first_name,
          last_name: event.data.last_name,
          avatar_url: event.data.image_url,
          updated_at: new Date(event.data.updated_at).toISOString(),
        })
        .eq("id", event.data.id)
        .select()
        .single();

      if (error) {
        console.error("Error updating user:", error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
        });
      }

      return new Response(JSON.stringify({ user }), { status: 200 });
    }

    case "organization.created": {
      // Handle organization creation
      const { data, error } = await supabase
        .from("organizations")
        .insert([
          {
            id: event.data.id,
            name: event.data.name,
            created_at: new Date(event.data.created_at).toISOString(),
            updated_at: new Date(event.data.updated_at).toISOString(),
          },
        ])
        .select()
        .single();

      if (error) {
        console.error("Error updating owner:", error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
        });
      }

      return new Response(JSON.stringify({ data }), { status: 200 });
    }

    case "organization.updated": {
      const { data, error } = await supabase
        .from("organizations")
        .update({
          name: event.data.name,
          updated_at: new Date(event.data.updated_at).toISOString(),
        })
        .eq("id", event.data.id)
        .select()
        .single();

      if (error) {
        console.error("Error updating owner:", error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
        });
      }

      return new Response(JSON.stringify({ data }), { status: 200 });
    }

    case "organizationMembership.created": {
      const { data, error } = await supabase
        .from("members")
        .insert([
          {
            id: event.data.id,
            user_id: event.data.public_user_data?.user_id,
            organization_id: event.data.organization?.id,
            created_at: new Date(event.data.created_at).toISOString(),
            updated_at: new Date(event.data.updated_at).toISOString(),
          },
        ])
        .select()
        .single();

      if (error) {
        console.error("Error updating member:", error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
        });
      }

      return new Response(JSON.stringify({ data }), { status: 200 });
    }

    case "organizationMembership.updated": {
      const { data, error } = await supabase
        .from("members")
        .update({
          user_id: event.data.public_user_data?.user_id,
          organization_id: event.data.organization?.id,
          updated_at: new Date(event.data.updated_at).toISOString(),
        })
        .eq("id", event.data.id)
        .select()
        .single();

      if (error) {
        console.error("Error updating member:", error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
        });
      }

      return new Response(JSON.stringify({ data }), { status: 200 });
    }

    default: {
      // Unhandled event type
      console.log("Unhandled event type:", JSON.stringify(event, null, 2));
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }
  }
});
