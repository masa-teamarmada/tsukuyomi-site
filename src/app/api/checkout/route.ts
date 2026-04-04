import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getTemplate } from "@/lib/templates";

export async function POST(req: NextRequest) {
  try {
    const { templateId } = await req.json();

    const template = getTemplate(templateId);
    if (!template) {
      return NextResponse.json({ error: "Template not found" }, { status: 404 });
    }

    const origin = req.headers.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "jpy",
            product_data: {
              name: template.title,
              description: template.description,
            },
            unit_amount: template.priceInYen,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/templates/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/templates`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
