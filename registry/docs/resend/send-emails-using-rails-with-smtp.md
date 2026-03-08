# Send emails using Rails with SMTP

Source: https://resend.com/docs/send-with-rails-smtp

Learn how to integrate Rails with Resend SMTP.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Setup your environment

Add these lines of code into your environment config file.

```rb config/environments/environment.rb theme={"theme":{"light":"github-light","dark":"vesper"}}
config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
  :address   => 'smtp.resend.com',
  :port      => 465,
  :user_name => 'resend',
  :password  => ENV['RESEND_API_KEY'],
  :tls => true
}
```

## 2. Send email using Rails Action Mailer

Then create a `UserMailer` class definition.

```rb app/mailers/user_mailer.rb theme={"theme":{"light":"github-light","dark":"vesper"}}
class UserMailer < ApplicationMailer
  default from: 'Acme <onboarding@resend.dev>' # this domain must be verified with Resend
  def welcome_email
    @user = params[:user]
    @url = 'http://example.com/login'
    mail(to: ["delivered@resend.dev"], subject: 'hello world')
  end
end
```

And create your ERB email template.

```html app/views/user_mailer/welcome_email.html.erb theme={"theme":{"light":"github-light","dark":"vesper"}}
<!doctype html>
<html>
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
  </head>
  <body>
    <h1>Welcome to example.com, <%= @user.name %></h1>
    <p>You have successfully signed up to example.com,</p>
    <p>To log in to the site, just follow this link: <%= @url %>.</p>
    <p>Thanks for joining and have a great day!</p>
  </body>
</html>
```

Initialize your `UserMailer` class. This should return a `UserMailer` instance.

```rb theme={"theme":{"light":"github-light","dark":"vesper"}}
u = User.new name: "derich"
mailer = UserMailer.with(user: u).welcome_email

# => #<Mail::Message:153700, Multipart: false, Headers: <From: from@example.com>, <To: to@example.com>, <Subject: hello world>, <Mime-Version: 1.0>...
```

Finally, you can now send emails using the `deliver_now!` method:

```rb theme={"theme":{"light":"github-light","dark":"vesper"}}
mailer.deliver_now!

# => {:id=>"a193c81e-9ac5-4708-a569-5caf14220539", :from=>....}
```

## 3. Try it yourself

See the full source code.

# Send emails with Railway

Source: https://resend.com/docs/send-with-railway

Learn how to send your first email using Railway and the Resend Node.js SDK.

[Railway](https://railway.com/?referralCode=resend) enables you to focus on building product instead of managing infrastructure, automatically scaling to support your needs as you grow.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Install

We've created a [Resend template](https://railway.com/deploy/resend?referralCode=resend\&utm_medium=integration\&utm_source=template\&utm_campaign=generic) using the Resend Node.js SDK as an introduction to using Resend on Railway.

To get started, you deploy the template to Railway.

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/resend?referralCode=resend\&utm_medium=integration\&utm_source=template\&utm_campaign=generic)

## 2. Add your API key

[Add an API key](https://resend.com/api-keys) from Resend and click **Deploy**.

## 3. Send your first email

Once your deployment finishes, click the deploy URL to open the app and send your first email.

While this example uses the [Resend Node.js SDK](https://www.npmjs.com/package/@resend/node), you can add Resend using [any of our Official SDKs](https://resend.com/docs/sdks) that Railway supports.

Keep in mind that as a basic project, this template sends an email with your
account each time someone visits your deployment URL, so share the link with
discretion.

You can also [set up the project locally](https://docs.railway.com/develop/cli) and make changes to the projectusing the Railway CLI.

## 4. Try it yourself

See the full source code.

# Send emails with RedwoodJS

Source: https://resend.com/docs/send-with-redwoodjs

Learn how to send your first email using Redwood.js and the Resend Node.js SDK.
