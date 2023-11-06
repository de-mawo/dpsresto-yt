"use client";

import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import StripeCheckoutForm from "./StripeCheckoutForm";
import { Base64 } from "js-base64";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

type Props = {
  orderId: string;
  total: string;
};

const StripeCheckoutPage = ({ orderId, total }: Props) => {
  const [clientSecret, setClientSecret] = useState("");

  console.log(total);
  

  useEffect(() => {
    const getIntent = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXT_URL}/api/stripe/${total}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }
        );

        console.log(res);
        

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        if (!data || !data.clientSecret) {
          throw new Error("Invalid or empty response from the API.");
        }
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.log(err);
        // Handle the error appropriately (e.g., show an error message to the user).
      }
    };

    getIntent();
  }, [total]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  const decodedTotal = Base64.decode(total as string);

  return (
    <div className="flex flex-col items-center justify-center   py-8 px-6 mb-24">
      <div className="w-full  rounded-lg shadow-xl sm:max-w-md   p-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <button className="bg-slate-200 p-2 rounded-full hover:bg-green-200">
            <Image
              src="/img/logo.png"
              alt="logo"
              width={70}
              height={70}
              className="mx-auto   "
            />
          </button>

          <div>
            <h1 className=" text-lg font-semibold">Amount: {decodedTotal}</h1>
          </div>
        </div>

        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <StripeCheckoutForm orderId={orderId} />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default StripeCheckoutPage;
