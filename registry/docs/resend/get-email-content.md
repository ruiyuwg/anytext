# Get Email Content

Source: https://resend.com/docs/dashboard/receiving/get-email-content

Get the body and headers of a received email.

Receiving emails contain the HTML and Plain Text body of the email, as well as the headers.

Webhooks do not include the actual HTML or Plain Text body of the email. You
must call the [received emails
API](/api-reference/emails/retrieve-received-email) to retrieve them. This
design choice supports large payloads in serverless environments that have
limited request body sizes.

After receiving the webhook event, call the [Receiving API](/api-reference/emails/retrieve-received-email).

Here's an example in a Next.js application:

```ts Next.js theme={"theme":{"light":"github-light","dark":"vesper"}}
// app/api/events/route.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

export const POST = async (request: NextRequest) => {
  const event = await request.json();

  if (event.type === 'email.received') {
    const { data: email } = await resend.emails.receiving.get(
      event.data.email_id,
    );

    console.log(email.html);
    console.log(email.text);
    console.log(email.headers);

    return NextResponse.json(email);
  }

  return NextResponse.json({});
};
```

```php Laravel theme={"theme":{"light":"github-light","dark":"vesper"}}
// routes/api.php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Resend\Laravel\Facades\Resend;

Route::post('/events', function (Request $request) {
    $event = $request->json()->all();

    if ($event['type'] === 'email.received') {
        $email = Resend::emails()->receiving->get($event['data']['email_id']);

        Log::info($email->html);
        Log::info($email->text);
        Log::info($email->headers);

        return response()->json($email);
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

    $email = $resend->emails->receiving->get($event['data']['email_id']);

    echo json_encode($email);
    exit;
}

echo json_encode([]);
```
