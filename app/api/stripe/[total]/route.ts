import { NextRequest, NextResponse } from "next/server";
import { Base64 } from "js-base64";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(
  request: NextRequest,
  { params }: { params: { total: string } }
) {
  const { total } = params;

  console.log(total);
  

  const decodedTotal = Base64.decode(total);

  console.log(decodedTotal);
  

  const payAmount = Number(decodedTotal) * 100;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: payAmount,
    currency: "usd", 
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return new NextResponse(
    JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    { status: 200 }
  );
}
