# Send emails with .NET

Source: https://resend.com/docs/send-with-dotnet

Learn how to send your first email using the Resend .NET SDK.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

Prefer watching a video? Check out our video walkthrough below.

## 1. Install

```bash dotnet CLI theme={"theme":{"light":"github-light","dark":"vesper"}}
dotnet add package Resend
```

```bash Visual Studio (Package Manager Console) theme={"theme":{"light":"github-light","dark":"vesper"}}
PM> Install-Package Resend
```

## 2. Send emails using HTML

In the startup of your application, configure the DI container as follows:

```csharp theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

builder.Services.AddOptions();
builder.Services.AddHttpClient<ResendClient>();
builder.Services.Configure<ResendClientOptions>( o =>
{
    o.ApiToken = Environment.GetEnvironmentVariable( "RESEND_APITOKEN" )!;
} );
builder.Services.AddTransient<IResend, ResendClient>();
```

Send an email using the injected `IResend` instance:

```csharp theme={"theme":{"light":"github-light","dark":"vesper"}}
using Resend;

public class FeatureImplementation
{
    private readonly IResend _resend;


    public FeatureImplementation( IResend resend )
    {
        _resend = resend;
    }


    public Task Execute()
    {
        var message = new EmailMessage();
        message.From = "Acme <onboarding@resend.dev>";
        message.To.Add( "delivered@resend.dev" );
        message.Subject = "hello world";
        message.HtmlBody = "<strong>it works!</strong>";

        await _resend.EmailSendAsync( message );
    }
}
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



ASP.NET Minimal API application



ASP.NET MVC application
```

# Send emails with Elixir

Source: https://resend.com/docs/send-with-elixir

Learn how to send your first email using the Resend Elixir SDK.

This guides utilizes an [open source
library](https://github.com/elixir-saas/resend-elixir) contributed by a
community member. It's not developed, maintained, or supported by Resend
directly.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Install

Install by adding `resend` to your list of dependencies in `mix.exs`:

```elixir mix.exs theme={"theme":{"light":"github-light","dark":"vesper"}}
def deps do
  [
    {:resend, "~> 0.4.0"}
  ]
end
```

## 2. Send email using HTML

The easiest way to send an email is by using the `html` parameter.

```elixir send.exs theme={"theme":{"light":"github-light","dark":"vesper"}}
client = Resend.client(api_key: System.get_env("RESEND_API_KEY"))

Resend.Emails.send(client, %{
  from: "Acme <onboarding@resend.dev>",
  to: ["delivered@resend.dev"],
  subject: "hello world",
  html: "<strong>it works!</strong>"
})
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



Full Phoenix web framework application
```

# Send emails with Express

Source: https://resend.com/docs/send-with-express

Learn how to send your first email using Express and the Resend Node.js SDK.
