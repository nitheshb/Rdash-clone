// import fetch from "node-fetch";

// export async function POST(req) {
//   try {
//     const token = process.env.OUTLOOK_ACCESS_TOKEN;

//     if (!token) {
//       return new Response(JSON.stringify({ error: "Token is missing" }), {
//         status: 400,
//       });
//     }

//     const { body } = await req.json();

//     if (!body) {
//       return new Response(JSON.stringify({ error: "Email body is required" }), {
//         status: 400,
//       });
//     }

//     const response = await fetch(
//       "https://graph.microsoft.com/v1.0/me/messages",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           message: {
//             subject: "No Subject",
//             body: {
//               contentType: "Text",
//               content: body,
//             },
//             toRecipients: [
//               {
//                 emailAddress: {
//                   address: "",
//                 },
//               },
//             ],
//           },
//         }),
//       }
//     );

//     if (!response.ok) {
//       return new Response(JSON.stringify({ error: "Failed to create draft" }), {
//         status: response.status,
//       });
//     }

//     const draft = await response.json();

//     return new Response(
//       JSON.stringify({
//         message: "Draft created successfully",
//         draftId: draft.id,
//       }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error creating draft:", error);
//     return new Response(JSON.stringify({ error: "Internal server error" }), {
//       status: 500,
//     });
//   }
// }

import fetch from "node-fetch"; // Use node-fetch to make HTTP requests on the server

export async function POST(req) {
  try {
    const token = process.env.OUTLOOK_ACCESS_TOKEN; // Retrieve the token from environment variables

    if (!token) {
      return new Response(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    // Extract the required fields from the request body
    const { body, recipient, subject } = await req.json();

    if (!body) {
      return new Response(JSON.stringify({ error: "Email body is required" }), {
        status: 400,
      });
    }

    if (!recipient) {
      return new Response(
        JSON.stringify({ error: "Recipient email is required" }),
        { status: 400 }
      );
    }

    // Construct the API request to create a draft
    const response = await fetch(
      "https://graph.microsoft.com/v1.0/me/messages",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Make sure the token is included in the header
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: subject || "No Subject", // Default subject if not provided
          body: {
            contentType: "Text", // Or "HTML" if the body is HTML
            content: body, // The content of the body (from ChatGPT or wherever)
          },
          toRecipients: [
            {
              emailAddress: {
                address: recipient, // Recipient email address (required)
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json(); // Capture the error response from Graph API
      return new Response(
        JSON.stringify({ error: "Failed to create draft", details: errorData }),
        { status: response.status }
      );
    }

    const draft = await response.json(); // Parse the draft response

    return new Response(
      JSON.stringify({
        message: "Draft created successfully",
        draftId: draft.id, // Return the draft ID for reference
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating draft:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
