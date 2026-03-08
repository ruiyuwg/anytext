# Reply to Receiving Emails

Source: https://resend.com/docs/dashboard/receiving/reply-to-emails

Reply to Receiving emails in the same thread.

Email clients thread emails by using the `message_id` metadata.

If you want to reply to an email, you should add the `In-Reply-To` header set to the `message_id` of the received email. We also recommend setting the subject to start with `Re:` so that email clients can group the replies together.

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
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: `Re: ${event.data.subject}`,
      html: 'Thanks for your email!',
      headers: {
        'In-Reply-To': event.data.message_id,
      },
    });

    return NextResponse.json(data);
  }

  return NextResponse.json({});
};
```

```php Laravel theme={"theme":{"light":"github-light","dark":"vesper"}}
// routes/api.php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Resend\Laravel\Facades\Resend;

Route::post('/events', function (Request $request) {
    $event = $request->json()->all();

    if ($event['type'] === 'email.received') {
        try {
            $data = Resend::emails()->send([
                'from'        => 'Acme <onboarding@resend.dev>',
                'to'          => ['delivered@resend.dev'],
                'subject'     => "Re: {$event['data']['subject']}",
                'html'        => 'Thanks for your email!',
                'headers'     => [
                    'In-Reply-To' => $event['data']['message_id'],
                ],
            ]);

            return response()->json($data);
        } catch (Throwable $e) {
            return response("Error: {$e->getMessage()}", 500);
        }
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

    try {
        $data = $resend->emails()->send([
            'from' => 'Acme <onboarding@resend.dev>',
            'to' => ['delivered@resend.dev'],
            'subject' => "Re: {$event['data']['subject']}",
            'html' => 'Thanks for your email!',
            'headers' => [
                'In-Reply-To' => $event['data']['message_id'],
            ],
        ]);

        echo json_encode($data);
    } catch (Throwable $e) {
        http_response_code(500);
        echo "Error: {$e->getMessage()}";
    }

    exit;
}

echo json_encode([]);
```

If you're replying multiple times within the same thread, make sure to also append
the previous `message_id`s to the `References` header, separated by spaces.
This helps email clients maintain the correct threading structure.

```ts Next.js theme={"theme":{"light":"github-light","dark":"vesper"}}
const previousReferences = ['<msg_id1@domain.com>', '<msg_id2@domain.com>'];

const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: `Re: ${event.data.subject}`,
  html: 'Thanks for your email!',
  headers: {
    'In-Reply-To': event.data.message_id,
    'References': [...previousReferences, event.data.message_id].join(' '),
  },
  attachments,
});
```

```php Laravel theme={"theme":{"light":"github-light","dark":"vesper"}}
$previousReferences = ['<msg_id1@domain.com>', '<msg_id2@domain.com>'];

$data = Resend::emails()->send([
    'from'        => 'Acme <onboarding@resend.dev>',
    'to'          => ['delivered@resend.dev'],
    'subject'     => "Re: {$event['data']['subject']}",
    'html'        => 'Thanks for your email!',
    'headers'     => [
        'In-Reply-To' => $event['data']['message_id'],
        'References'  => implode(' ', [...$previousReferences, $event['data']['message_id']]),
    ],
    'attachments' => $attachments,
]);
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
$previousReferences = ['<msg_id1@domain.com>', '<msg_id2@domain.com>'];

$data = $resend->emails()->send([
    'from'        => 'Acme <onboarding@resend.dev>',
    'to'          => ['delivered@resend.dev'],
    'subject'     => "Re: {$event['data']['subject']}",
    'html'        => 'Thanks for your email!',
    'headers'     => [
        'In-Reply-To' => $event['data']['message_id'],
        'References'  => implode(' ', [...$previousReferences, $event['data']['message_id']]),
    ],
]);
```
