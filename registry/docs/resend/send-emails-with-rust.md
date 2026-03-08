# Send emails with Rust

Source: https://resend.com/docs/send-with-rust

Learn how to send your first email using the Resend Rust SDK.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)

## Install

First, create a rust project with cargo and `cd` into it.

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
cargo init resend-rust-example
cd resend-rust-example
```

Next, add add the Rust Resend SDK as well as [Tokio](https://tokio.rs):

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
cargo add resend-rs
cargo add tokio -F macros,rt-multi-thread
```

The Rust SDK is Async-first so Tokio is needed.

## Send email

```rust theme={"theme":{"light":"github-light","dark":"vesper"}}
use resend_rs::types::CreateEmailBaseOptions;
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let resend = Resend::new("re_xxxxxxxxx");

  let from = "Acme <onboarding@resend.dev>";
  let to = ["delivered@resend.dev"];
  let subject = "Hello World";

  let email = CreateEmailBaseOptions::new(from, to, subject)
    .with_html("<strong>It works!</strong>");

  let _email = resend.emails.send(email).await?;

  Ok(())
}
```

## Reading the API key

Instead of using `Resend::new` and hardcoding the API key, the `RESEND_API_KEY` environment variable
can be used instead. The `Resend::default()` should be used in that scenario instead.

### Reading the API key from a `.env` file

Another popular option is to use a `.env` file for environment variables. You can use the
[`dotenvy`](https://crates.io/crates/dotenvy) crate for that:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
cargo add dotenvy
```

```rust theme={"theme":{"light":"github-light","dark":"vesper"}}
// main.rs
use dotenvy::dotenv;
use resend_rs::types::CreateEmailBaseOptions;
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
  let _env = dotenv().unwrap();

  let resend = Resend::default();

  let from = "Acme <onboarding@resend.dev>";
  let to = ["delivered@resend.dev"];
  let subject = "Hello World";

  let email = CreateEmailBaseOptions::new(from, to, subject)
    .with_html("<strong>It works!</strong>");

  let _email = resend.emails.send(email).await?;

  Ok(())
}
```

```toml theme={"theme":{"light":"github-light","dark":"vesper"}}
# .env
RESEND_API_KEY=re_xxxxxxxxx
```

## 3. Try it yourself

```
Basic email sending



Send emails with file attachments



Send emails using Resend hosted templates



Schedule emails for future delivery



Manage contacts and audiences



Create and manage sending domains



Receive and process inbound emails



Double opt-in subscription flow



Full Axum web framework application
```

# Send emails with Sinatra

Source: https://resend.com/docs/send-with-sinatra

Learn how to send your first email using Sinatra and the Resend Ruby SDK.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Install

Get the Resend Ruby SDK.

```bash RubyGems theme={"theme":{"light":"github-light","dark":"vesper"}}
gem install resend
```

```bash Gemfile theme={"theme":{"light":"github-light","dark":"vesper"}}
gem 'resend'
```

## 2. Send email using HTML

The easiest way to send an email is by using the `html` parameter.

```rb index.rb theme={"theme":{"light":"github-light","dark":"vesper"}}
require "sinatra"
require "resend"

set :port, 5000
set :bind, "0.0.0.0"

Resend.api_key = ENV["RESEND_API_KEY"]

get "/" do

  content_type :json

  params = {
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'hello world',
    html: '<strong>it works!</strong>',
  }

  Resend::Emails.send(params).to_hash.to_json
end
```

## 3. Try it yourself

```
Full Sinatra web application



Basic email sending



Send emails with file attachments



Send emails using Resend hosted templates



Schedule emails for future delivery



Manage contacts and audiences



Create and manage sending domains



Receive and process inbound emails



Double opt-in subscription flow
```
