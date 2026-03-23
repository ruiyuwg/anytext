# Using Workflows

Source: https://resend.com/docs/dashboard/workflows/introduction

Automate email workflows with custom events.

Workflows are currently in private alpha and only available to a limited
number of users. APIs might change before GA.

To use the methods on this page, you must upgrade your Resend SDK:

````
```bash Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
npm install resend@6.10.0-preview-workflows.1
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
// PHP SDK is not available yet
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
# Python SDK is not available yet
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
# Ruby SDK is not available yet
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
// Go SDK is not available yet
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
// Rust SDK is not available yet
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
// Java SDK is not available yet
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
// C# SDK is not available yet
```
````

[Contact us](https://resend.com/contact) if you're interested in testing
this feature.

Workflows allow you to automate email sending based on custom events from your application.

You can use Workflows for automations like:

- Welcome emails (e.g. `user.created`)
- Feature adoption (e.g. `invite.sent`)
- Payment recovery (e.g. `payment.failed`)
- Abandoned cart (e.g. `cart.abandoned`)
- Trial expiration (e.g. `trial.ended`)
- And more

## Getting started

To start executing a Workflow, you need to:

```
First, you need to build the sequence of steps that will be executed.



Then, you need to define the event name that will trigger the Workflow.



Then, you need to define the actions that will be executed.



Finally, you need to send the event to trigger the Workflow.
```

## 1. Create Workflow

````
The [Workflows page](https://resend.com/workflows) shows all existing workflows.

Click **Create workflow** to start a new Workflow.





You can also programmatically create a Workflow by using the API.


  ```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
  import { Resend } from 'resend';

  const resend = new Resend('re_xxxxxxxxx');

  const { data, error } = await resend.workflows.create({
    name: 'Welcome series',
    status: 'disabled',
    steps: [
      {
        ref: 'trigger',
        type: 'trigger',
        config: { eventName: 'user.created' },
      },
    ],
    edges: [],
  });
  ```

  ```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
  // PHP SDK is not available yet
  ```

  ```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
  # Python SDK is not available yet
  ```

  ```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
  # Ruby SDK is not available yet
  ```

  ```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
  // Go SDK is not available yet
  ```

  ```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
  // Rust SDK is not available yet
  ```

  ```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
  // Java SDK is not available yet
  ```

  ```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
  // C# SDK is not available yet
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
  curl -X POST 'https://api.resend.com/workflows' \
       -H 'Authorization: Bearer re_xxxxxxxxx' \
       -H 'Content-Type: application/json' \
       -d '{
    "name": "Welcome series",
    "status": "disabled",
    "steps": [{
        "ref": "trigger",
        "type": "trigger",
        "config": { "event_name": "user.created" }
      }],
    "edges": []
  }'
  ```


View the [API reference](/api-reference/workflows/create-workflow) for more details.
````

## 2. Add Trigger

A trigger is the first step that will run when the Workflow is executed.

On this example, we will receive an event called `user.created` as a trigger.

Event names cannot start with the `resend:` prefix, which is reserved for
system events.

## 3. Define Actions

Now, we need to define the actions that will be executed.

On this example, we will use the `Send email` action.

But you could also add a `Time delay` or `True/false branch` action.

Once you select the `Send email` action, you will be able to select an existing template.

Note: Only `published` templates are available to be used in a Workflow.

With the template selected, you will be able to configure the email subject and sender address.

Once you're done with the email, you can click on **Start workflow** to enable the Workflow.

## 4. Send an Event

Now, we're ready to send an event to trigger the Workflow.

On your application, you can send an event to trigger the Workflow by using the API.

```ts Node.js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

// Trigger with a contact ID
const { data, error } = await resend.events.send({
  event: 'user.created',
  contactId: '7f2e4a3b-dfbc-4e9a-8b2c-5f3a1d6e7c8b',
  payload: {
    plan: 'pro',
  },
});

// Trigger with an email address
const { data, error } = await resend.events.send({
  event: 'user.created',
  email: 'steve.wozniak@gmail.com',
  payload: {
    plan: 'pro',
  },
});
```

```php PHP theme={"theme":{"light":"github-light","dark":"vesper"}}
// PHP SDK is not available yet
```

```python Python theme={"theme":{"light":"github-light","dark":"vesper"}}
# Python SDK is not available yet
```

```ruby Ruby theme={"theme":{"light":"github-light","dark":"vesper"}}
# Ruby SDK is not available yet
```

```go Go theme={"theme":{"light":"github-light","dark":"vesper"}}
// Go SDK is not available yet
```

```rust Rust theme={"theme":{"light":"github-light","dark":"vesper"}}
// Rust SDK is not available yet
```

```java Java theme={"theme":{"light":"github-light","dark":"vesper"}}
// Java SDK is not available yet
```

```csharp .NET theme={"theme":{"light":"github-light","dark":"vesper"}}
// C# SDK is not available yet
```

```bash cURL theme={"theme":{"light":"github-light","dark":"vesper"}}
# Trigger with a contact ID
curl -X POST 'https://api.resend.com/events/send' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d '{
  "event": "user.created",
  "contact_id": "7f2e4a3b-dfbc-4e9a-8b2c-5f3a1d6e7c8b",
  "payload": {
    "plan": "pro"
  }
}'

# Trigger with an email address
curl -X POST 'https://api.resend.com/events/send' \
     -H 'Authorization: Bearer re_xxxxxxxxx' \
     -H 'Content-Type: application/json' \
     -d '{
  "event": "user.created",
  "email": "steve.wozniak@gmail.com",
  "payload": {
    "plan": "pro"
  }
}'
```

View the [API reference](/api-reference/workflows/send-event) for more details.
