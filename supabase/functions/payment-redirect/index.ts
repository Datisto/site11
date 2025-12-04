import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const contentType = req.headers.get("content-type");

    if (contentType?.includes("application/x-www-form-urlencoded")) {
      const formData = await req.formData();
      console.log("Payment callback received:", Object.fromEntries(formData));
    } else if (contentType?.includes("application/json")) {
      const data = await req.json();
      console.log("Payment callback received:", data);
    }

    return new Response(null, {
      status: 302,
      headers: {
        "Location": "https://asya-recipes.netlify.app/success",
      },
    });
  } catch (error) {
    console.error("Error processing redirect:", error);

    return new Response(null, {
      status: 302,
      headers: {
        "Location": "https://asya-recipes.netlify.app/success",
      },
    });
  }
});