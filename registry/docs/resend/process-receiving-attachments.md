# Process Receiving Attachments

Source: https://resend.com/docs/dashboard/receiving/attachments

Process attachments from receiving emails.

A common use case for Receiving emails is to process attachments.

Webhooks do not include the actual content of attachments, only their
metadata. You must call the [Attachments
API](/api-reference/emails/list-received-email-attachments) to retrieve the
content. This design choice supports large attachments in serverless
environments that have limited request body sizes.

Users can forward airplane tickets, receipts, and expenses to you. Then, you can extract key information from attachments and use that data.

To do this, call the [Attachments API](/api-reference/emails/list-received-email-attachments) after receiving the webhook event. That API will return a list of attachments with their metadata and a `download_url` that you can use to download the actual content.

Note that the `download_url` is valid for 1 hour. After that, you will need to call the
[Attachments API](/api-reference/emails/list-received-email-attachments)
again to get a new `download_url`. You can also check the `expires_at` field on
each attachment to see exactly when it will expire.

Here's how you can implement this:

```ts Next.js theme={"theme":{"light":"github-light","dark":"vesper"}}
// app/api/events/route.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

export const POST = async (request: NextRequest) => {
  const event = await request.json();

  if (event.type === 'email.received') {
    const { data: attachments } =
      await resend.emails.receiving.attachments.list({
        emailId: event.data.email_id,
      });

    for (const attachment of attachments) {
      // use the download_url to download attachments however you want
      const response = await fetch(attachment.download_url);
      if (!response.ok) {
        console.error(`Failed to download ${attachment.filename}`);
        continue;
      }

      // get the file's contents
      const buffer = Buffer.from(await response.arrayBuffer());

      // process the content (e.g., save to storage, analyze, etc.)
    }

    return NextResponse.json({ attachmentsProcessed: attachments.length });
  }

  return NextResponse.json({});
};
```

```php Laravel theme={"theme":{"light":"github-light","dark":"vesper"}}
// routes/api.php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Resend\Laravel\Facades\Resend;

Route::post('/events', function (Request $request) {
  $event = $request->json()->all();

    if ($event['type'] === 'email.received') {
        $attachments = Resend::emails()->receiving->attachments->list(
            emailId: $event['data']['email_id']
        );

        foreach ($attachments->data as $attachment) {
            $response = Http::get($attachment->download_url);

            if ($response->failed()) {
                Log::error("Failed to download {$attachment->filename}");
                continue;
            }

            // get the file's contents
            $contents = $response->body();

            // process the content (e.g., save to storage, analyze, etc.)
        }

        return response()->json($event);
    }

    return response()->json([]);
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
// index.php
// Include Composer autoload file to load Resend SDK classes...
require __DIR__ . '/vendor/autoload.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

$body = file_get_contents('php://input');
$event = json_decode($body, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

if ($event['type'] === 'email.received') {
    $resend = Resend::client('re_xxxxxxxxx');

    $attachments = $resend->emails->receiving->attachments->list(
        emailId: $event['data']['email_id']
    );

    foreach ($attachments->data as $attachment) {
        $ch = curl_init($attachment->download_url);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
        ]);

        $contents = curl_exec($ch);
        $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $ch = null;

        if ($contents === false || $statusCode !== 200) {
            error_log("Failed to download {$attachment->filename}");
            continue;
        }

        // process the content (e.g., save to disk, analyze, etc.)
    }

    echo json_encode($event);
    exit;
}

echo json_encode([]);
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use axum::{
    extract::State,
    response::{IntoResponse, Json, Response},
};
use resend_rs::{json, list_opts::ListOptions, Resend};
use serde::Serialize;
use std::sync::Arc;

#[derive(Serialize)]
struct Empty {}

async fn example(
    State(state): State<Arc>,
    Json(event): Json<resend_rs::events::EmailEvent>,
) -> Response {
    if matches!(
        event.r#type,
        resend_rs::events::EmailEventType::EmailReceived
    ) {
        let attachments = state
            .resend
            .receiving
            .list_attachments(&event.data.email_id, ListOptions::default())
            .await
            .unwrap();

        for attachment in &attachments.data {
            // use the download_url to download attachments however you want
            let response = reqwest::get(&attachment.download_url).await;

            if response.is_err() {
                dbg!(format!(
                    "Failed to download {}",
                    attachment.filename.clone().unwrap()
                ));
            }

            // get the file's contents
            let _buffer = response.unwrap().bytes().await.unwrap();

            // process the content (e.g., save to storage, analyze, etc.)
        }

        Json(json!({
            "attachmentsProcessed": attachments.len()
        }))
        .into_response()
    } else {
        Json(Empty {}).into_response()
    }
}
```

Once you process attachments, you may want to forward the email to another address. Learn more about [forwarding emails](/dashboard/receiving/forward-emails).
