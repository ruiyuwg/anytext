# Why and when to use Topics?

Source: https://resend.com/docs/knowledge-base/why-use-topics

Learn when to use Topics to improve deliverability and give recipients control over their email preferences.

When you send an email, you make one primary decision: **who is this for?** Those recipients—a person, a list, or a Segment—are the core of sending. By default, everyone in that recipient group receives the message, but not everyone in that group may want that message.

Topics give recipients a way to say "don't send me this kind of email" without unsubscribing from everything. Think of Topics as **contracts with your recipients**: a promise that if they opt out of a content type, you'll respect it.

Topics don't define who receives a message—they **define who asked not to receive that message**. This guide explains why Topics matter for deliverability, when you should use them, and how they differ from Segments.

## Why Topics improve deliverability

Deliverability focuses on landing in the inbox instead of the spam folder. And *recipient engagement* is a key factor in deliverability. Mailbox providers like Gmail and Outlook track whether people open, click, or mark your emails as spam.

When you send all your marketing emails to everyone on your list, a subsection of your recipients will not engage with your content. This leads to:

- **Lower open rates**: recipients ignore emails that don't interest them
- **Higher spam complaints**: frustrated recipients mark emails as spam instead of unsubscribing
- **Decreased sender reputation**: mailbox providers see low engagement and filter your emails to spam

Topics give your recipients agency, and they give you signals. When a recipient says "I don't want promotional emails," the system honors that request while continuing to send them content they do want. Topics let them decline one without losing the other.

## Without topics: global unsubscribe

Without Topics, your unsubscribe page offers only one option: **unsubscribe from everything**. This is a blunt instrument. Many recipients who would have gladly kept receiving some of your content will unsubscribe entirely because they received one too many emails about something they didn't want.

With Topics, recipients can say "no" to specific content types while staying connected to what they value. You retain more engaged subscribers.

## When to use Topics

Topics are most valuable when you send **multiple types of marketing content** to the same audience. Consider using Topics if you send:

| Topic Example        | Description                                   |
| -------------------- | --------------------------------------------- |
| **Newsletter**       | Regular updates, articles, or curated content |
| **Product Updates**  | New features, releases, and announcements     |
| **Promotions**       | Discounts, sales, and special offers          |
| **Events**           | Webinars, conferences, and meetups            |
| **Tips & Tutorials** | Educational content and how-to guides         |

## When you might not need Topics

If you only send one type of marketing email (for example, a monthly newsletter and nothing else), Topics add complexity without much benefit. In that case, a simple subscribe/unsubscribe model is sufficient.

## Topics vs Segments: What's the difference?

Topics and Segments serve fundamentally different purposes. Understanding this distinction is key to using them effectively.

| Aspect              | Topics                             | Segments                                   |
| ------------------- | ---------------------------------- | ------------------------------------------ |
| **Who controls it** | Your recipients                    | You (the sender)                           |
| **Visibility**      | Shown on the unsubscribe page      | Internal only—recipients never see them    |
| **Purpose**         | Let users manage their preferences | Organize contacts for targeted sending     |
| **Example**         | "Newsletter", "Product Updates"    | "Enterprise customers", "Free trial users" |

## How Segments and Topics work together

Think of Segments as **who you're sending to** and Topics as **what you're sending**.

When you send a Broadcast:

1. You choose a **Segment** as your recipients (your sender intent).
2. You label the content with a **Topic** (so the system can respect recipient preferences).
3. Everyone in the Segment receives the message, **except** those who opted out of that Topic.

For example, you might send a product announcement to your "Enterprise Customers" Segment, labeled with the "Product Updates" Topic. Recipients who previously said "don't send me product updates" are automatically excluded.

**Segments are for targeting. Topics are for protecting preferences.** They work together without competing.

## Customizing your unsubscribe page

When a recipient clicks the unsubscribe link in a Broadcast, they see a preference page showing your public Topics. This page is fully customizable to match your brand.

You can customize:

- **Title and description**
- **Logo**
- **Background color, text color, and accent color**

A branded unsubscribe page looks more professional and trustworthy, which can encourage recipients to adjust their preferences rather than unsubscribe entirely.

Learn more about [customizing your unsubscribe page](/dashboard/settings/unsubscribe-page).

Pro plan users or higher can remove the "Powered by Resend" footer from the
unsubscribe page.

## Opt-in vs Opt-out Topics

When creating a Topic, choose between two default subscription behaviors:

- **Opt-in (default)**: All contacts receive emails for this Topic unless they explicitly unsubscribe (applies retroactively to all contacts)
- **Opt-out**: Contacts do NOT receive emails for this Topic unless they explicitly subscribe

Use **Opt-in** for content that's broadly relevant to your audience (like product updates). Use **Opt-out** for niche content that only some users will want (like a beta program or developer-focused updates).

You cannot change the default subscription type after creating a Topic.

## Public vs Private Topics

When creating a Topic, you can set its visibility:

- **Public**: All contacts see this Topic on the unsubscribe page
- **Private**: Only contacts who are opted in to the Topic can see it

Private Topics are useful for exclusive content, like a beta program or VIP announcements, where you don't want to advertise the Topic to everyone.

## Best practices for Topics

### Keep it simple

Don't create too many Topics. Recipients get overwhelmed when faced with a long list of checkboxes. Aim for 3-5 distinct content types that clearly communicate what the recipient will receive.

### Use clear, descriptive names

Topic names should be immediately understandable. "Newsletter" and "Product Updates" are clear. "Category A" and "Misc" are not.

### Add descriptions

The optional description field helps recipients understand the topic. Use it to set expectations about frequency and content.

### Always label your Broadcasts with a Topic

Whenever you send a Broadcast, label it with a Topic. This ensures:

1. Recipients who declined that content type won't receive the email.
2. If someone unsubscribes, they can opt out of that Topic only, rather than unsubscribe from all your emails.

If you send a Broadcast without a Topic and someone unsubscribes, they'll be
unsubscribed from **all** your emails. Labeling your content protects both you
and your recipients.

## Getting started with Topics

1. [Create your Topics](/dashboard/topics/introduction) in the Resend dashboard
2. [Customize your unsubscribe page](/dashboard/settings/unsubscribe-page) with your branding
3. Use [Segments](/dashboard/segments/introduction) to define who you're sending to
4. When sending [Broadcasts](/dashboard/broadcasts/introduction), always label them with a Topic

By using Segments for targeting and Topics for respecting preferences, you send to the right people while honoring those who said no—improving engagement and protecting your sender reputation.

# Send emails with Leap and Resend

Source: https://resend.com/docs/leap-new-integration

Learn how to add the Resend integration to your Leap.new project.

[Leap](https://leap.new) is a platform for building full-stack web and mobile apps via chat.

## 1. Ask Leap to add Resend

You can add Resend in a Leap project by asking the chat to add email sending with Resend.

**Example prompt**

```
When someone fills out the contact form, send an email using Resend.
```

## 2. Add your Resend API key

To use Resend with Leap, you'll need to add a Resend API key, which you can create in the [Resend Dashboard](https://resend.com/api-keys). Do not share your API key with others or expose it in the browser or other client-side code.

Leap will prompt you to set a secret value on the Infrastructure page. Paste your key value and click **Update secret**.

Learn more about the Resend integration in the [Leap
documentation](https://docs.leap.new/integrations/resend).

## 3. Add a custom domain to your Resend account

By default, you can only send emails to your own email address.

To send emails to other email addresses:

1. Add a [custom domain to your Resend account](https://resend.com/domains).
2. Add the custom domain to the `from` field in the `resend` function in Leap (or ask the chat to update these fields).

Get more help adding a custom domain in [Resend's documentation](/dashboard/domains/introduction).
