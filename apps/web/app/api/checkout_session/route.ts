import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { stripe } from "../../../lib/stripe";

export async function POST() {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");

    if (!origin) {
      throw new Error("Missing origin header");
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1RsMudPyklfIpJIr1RZ5COf6",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
    });

    return NextResponse.redirect(session.url!, 303);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: err.statusCode || 500 }
    );
  }
}
