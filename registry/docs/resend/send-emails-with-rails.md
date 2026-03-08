# Send emails with Rails

Source: https://resend.com/docs/send-with-rails

Learn how to send your first email using Rails and the Resend Ruby SDK.

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

## 2. Send email using Rails Action Mailer

This gem can be used as an Action Mailer delivery method.

First, let's update or create your mailer initializer file with your Resend API Key.

```rb config/initializers/mailer.rb theme={"theme":{"light":"github-light","dark":"vesper"}}
Resend.api_key = "re_xxxxxxxxx"
```

Add these lines of code into your environment config file.

```rb config/environments/environment.rb theme={"theme":{"light":"github-light","dark":"vesper"}}
config.action_mailer.delivery_method = :resend
```

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

```
Full Rails web application



Basic email sending



Send emails with file attachments



Send emails using Resend hosted templates



Schedule emails for future delivery



Manage contacts and audiences



Create and manage sending domains



Receive and process inbound emails



Double opt-in subscription flow
```
