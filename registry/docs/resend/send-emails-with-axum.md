# Send emails with Axum

Source: https://resend.com/docs/send-with-axum

Send your first email using Axum and the Resend Rust SDK.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Install

Get the Resend Rust SDK and the [Tokio](https://tokio.rs) runtime.

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
cargo add resend-rs
cargo add tokio -F macros,rt-multi-thread
```

## 2. Send an Email

```rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use std::sync::Arc;

use axum::{extract::State, http::StatusCode, routing::get, Router};
use resend_rs::types::CreateEmailBaseOptions;
use resend_rs::{Resend, Result};

// Cloning the Resend client is fine and cheap as the internal HTTP client is
// not cloned.
#[derive(Clone)]
struct AppState {
  resend: Resend,
}

#[tokio::main]
async fn main() {
  let shared_state = Arc::new(AppState {
    resend: Resend::new("re_xxxxxxxxx"),
  });

  // build our application with a single route
  let app = Router::new()
    .route("/", get(endpoint))
    // provide the state so the router can access it
    .with_state(shared_state);

  // run our app with hyper, listening globally on port 3000
  let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
  axum::serve(listener, app).await.unwrap();
}

async fn endpoint(State(state): State<Arc<AppState>>) -> Result<String, StatusCode> {
  let from = "Acme <onboarding@resend.dev>";
  let to = ["delivered@resend.dev"];
  let subject = "Hello World";

  let email = CreateEmailBaseOptions::new(from, to, subject)
    .with_html("<strong>It works!</strong>");

  // access the state via the `State` extractor and handle the error
  match state.resend.emails.send(email).await {
    Ok(email) => Ok(email.id.to_string()),
    Err(_) => Err(StatusCode::INTERNAL_SERVER_ERROR),
  }
}
```

Opening your browser at `http://localhost:3000` (or running `curl localhost:3000`) should send an
email and return you its id!

## 3. Try it yourself!

```
Full Axum web framework application



Basic email sending



Send emails with file attachments



Send emails using Resend hosted templates



Schedule emails for future delivery



Manage contacts and audiences



Create and manage sending domains



Receive and process inbound emails



Double opt-in subscription flow
```

# Send emails with Bun

Source: https://resend.com/docs/send-with-bun

Learn how to send your first email using Bun and the Resend Node.js SDK.
