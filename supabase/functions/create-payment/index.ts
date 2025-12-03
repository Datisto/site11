import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createHmac } from "node:crypto";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface PaymentRequest {
  orderReference: string;
  orderDate: number;
  amount: number;
  currency: string;
  productName: string[];
  productPrice: number[];
  productCount: number[];
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const merchantAccount = Deno.env.get("WAYFORPAY_MERCHANT_ACCOUNT") || "";
    const merchantSecretKey = Deno.env.get("WAYFORPAY_SECRET_KEY") || "";
    const merchantDomainName = Deno.env.get("WAYFORPAY_DOMAIN") || "https://eatfit-recipebook.netlify.app";
    const returnUrl = "https://t.me/asyafitnessart_bot?start=ZGw6MzAwNTI2";

    const paymentData: PaymentRequest = await req.json();

    const signatureString = [
      merchantAccount,
      merchantDomainName,
      paymentData.orderReference,
      paymentData.orderDate.toString(),
      paymentData.amount.toString(),
      paymentData.currency,
      paymentData.productName.join(";"),
      paymentData.productCount.join(";"),
      paymentData.productPrice.join(";")
    ].join(";");

    const hmac = createHmac("md5", merchantSecretKey);
    hmac.update(signatureString);
    const merchantSignature = hmac.digest("hex");

    const wayforpayRequest = {
      transactionType: "CREATE_INVOICE",
      merchantAccount,
      merchantDomainName,
      merchantSignature,
      orderReference: paymentData.orderReference,
      orderDate: paymentData.orderDate,
      amount: paymentData.amount,
      currency: paymentData.currency,
      productName: paymentData.productName,
      productPrice: paymentData.productPrice,
      productCount: paymentData.productCount,
      returnUrl,
      serviceUrl: `${merchantDomainName}/webhook`,
      language: "UA"
    };

    console.log("WayForPay Request:", JSON.stringify(wayforpayRequest, null, 2));

    const response = await fetch("https://api.wayforpay.com/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wayforpayRequest),
    });

    const result = await response.json();

    console.log("WayForPay Response:", JSON.stringify(result, null, 2));

    return new Response(
      JSON.stringify(result),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error creating payment:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});