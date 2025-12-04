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
    const url = new URL(req.url);
    console.log("Payment redirect called:", {
      method: req.method,
      url: url.toString(),
      searchParams: Object.fromEntries(url.searchParams)
    });

    const contentType = req.headers.get("content-type");

    if (contentType?.includes("application/x-www-form-urlencoded")) {
      const formData = await req.formData();
      console.log("Payment callback (form):", Object.fromEntries(formData));
    } else if (contentType?.includes("application/json")) {
      const data = await req.json();
      console.log("Payment callback (json):", data);
    }

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Redirecting...</title>
          <script>
            window.location.href = "https://asya-recipes.netlify.app/success";
          </script>
        </head>
        <body>
          <p>Redirecting to success page...</p>
        </body>
      </html>
    `;

    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Error processing redirect:", error);

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Redirecting...</title>
          <script>
            window.location.href = "https://asya-recipes.netlify.app/success";
          </script>
        </head>
        <body>
          <p>Redirecting to success page...</p>
        </body>
      </html>
    `;

    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  }
});