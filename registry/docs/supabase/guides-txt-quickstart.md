# Quickstart

Learn how to use Supabase Queues to add and read messages

{/\*  \*/}

This guide is an introduction to interacting with Supabase Queues via the Dashboard and official client library. Check out [Queues API Reference](/docs/guides/queues/api) for more details on our API.

## Concepts

Supabase Queues is a pull-based Message Queue consisting of three main components: Queues, Messages, and Queue Types.

### Pull-Based Queue

A pull-based Queue is a Message storage and delivery system where consumers actively fetch Messages when they're ready to process them - similar to constantly refreshing a webpage to display the latest updates. Our pull-based Queues process Messages in a First-In-First-Out (FIFO) manner without priority levels.

### Message

A Message in a Queue is a JSON object that is stored until a consumer explicitly processes and removes it, like a task waiting in a to-do list until someone checks and completes it.

### Queue types

Supabase Queues offers three types of Queues:

- **Basic Queue**: A durable Queue that stores Messages in a logged table.

- **Unlogged Queue**: A transient Queue that stores Messages in an unlogged table for better performance but may result in loss of Queue Messages.

- **Partitioned Queue** (*Coming Soon*): A durable and scalable Queue that stores Messages in multiple table partitions for better performance.

## Create Queues

To get started, navigate to the [Supabase Queues](/dashboard/project/_/integrations/queues/overview) Postgres Module under Integrations in the Dashboard and enable the `pgmq` extension.

`pgmq` extension is available in Postgres version 15.6.1.143 or later.

\<Image
alt="Supabase Dashboard Integrations page, showing the Queues Postgres Module"
src={{
dark: '/docs/img/queues-quickstart-install.png',
light: '/docs/img/queues-quickstart-install.png',
}}
width={2064}
height={1720}
/>

On the [Queues page](/dashboard/project/_/integrations/queues/queues):

- Click **Add a new queue** button

If you've already created a Queue click the **Create a queue** button instead.

- Name your queue

Queue names can only be lowercase and hyphens and underscores are permitted.

- Select your [Queue Type](#queue-types)

\<Image
alt="Create a Queue from the Supabase Dashboard"
src={{
dark: '/docs/img/queues-quickstart-create.png',
light: '/docs/img/queues-quickstart-create.png',
}}
className="max-w-lg !mx-auto"
width={1456}
height={1420}
/>

### What happens when you create a queue?

Every new Queue creates two tables in the `pgmq` schema. These tables are `pgmq.q_<queue_name>` to store and process active messages and `pgmq.a_<queue_name>` to store any archived messages.

A "Basic Queue" will create `pgmq.q_<queue_name>` and `pgmq.a_<queue_name>` tables as logged tables.

However, an "Unlogged Queue" will create `pgmq.q_<queue_name>` as an unlogged table for better performance while sacrificing durability. The `pgmq.a_<queue_name>` table will still be created as a logged table so your archived messages remain safe and secure.

## Expose Queues to client-side consumers

Queues, by default, are not exposed over Supabase Data API and are only accessible via Postgres clients.

However, you may grant client-side consumers access to your Queues by enabling the Supabase Data API and granting permissions to the Queues API, which is a collection of database functions in the `pgmq_public` schema that wraps the database functions in the `pgmq` schema.

This is to prevent direct access to the `pgmq` schema and its tables (RLS is not enabled by default on any tables) and database functions.

To get started, navigate to the Queues [Settings page](/dashboard/project/_/integrations/queues/settings) and toggle on “Expose Queues via PostgREST”. Once enabled, Supabase creates and exposes a `pgmq_public` schema containing database function wrappers to a subset of `pgmq`'s database functions.

\<Image
alt="Screenshot of Queues settings with toggle to expose to PostgREST"
src={{
dark: '/docs/img/queues-quickstart-settings.png',
light: '/docs/img/queues-quickstart-settings.png',
}}
width={2140}
height={1642}
/>

### Enable RLS on your tables in `pgmq` schema

For security purposes, you must enable Row Level Security (RLS) on all Queue tables (all tables in `pgmq` schema that begin with `q_`) if the Data API is enabled.

You’ll want to create RLS policies for any Queues you want your client-side consumers to interact with.

\<Image
alt="Screenshot of creating an RLS policy from the Queues settings"
src={{
dark: '/docs/img/queues-quickstart-rls.png',
light: '/docs/img/queues-quickstart-rls.png',
}}
width={2130}
height={1508}
/>

### Grant permissions to `pgmq_public` database functions

On top of enabling RLS and writing RLS policies on the underlying Queue tables, you must grant the correct permissions to the `pgmq_public` database functions for each Data API role.

The permissions required for each Queue API database function:

| **Operations**      | **Permissions Required** |
| ------------------- | ------------------------ |
| `send` `send_batch` | `Select` `Insert`        |
| `read` `pop`        | `Select` `Update`        |
| `archive` `delete`  | `Select` `Delete`        |

To manage your queue permissions, click on the Queue Settings button.

\<Image
alt="Screenshot of accessing queue settings"
src={{
dark: '/docs/img/queues-quickstart-queue-settings.png',
light: '/docs/img/queues-quickstart-queue-settings.png',
}}
width={2150}
height={1192}
/>

Then enable the required roles permissions.

\<Image
alt="Screenshot of configuring API access for roles from the Queues settings"
src={{
dark: '/docs/img/queues-quickstart-roles.png',
light: '/docs/img/queues-quickstart-roles-light.png',
}}
width={1271}
height={1315}
/>

`postgres` and `service_role` roles should never be exposed client-side.

### Enqueueing and dequeueing messages

Once your Queue has been created, you can begin enqueueing and dequeueing Messages.

````
```tsx
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'supabaseURL'
const supabaseKey = 'supabaseKey'

const supabase = createClient(supabaseUrl, supabaseKey)

const QueuesTest: React.FC = () => {
  //Add a Message
  const sendToQueue = async () => {
    const result = await supabase.schema('pgmq_public').rpc('send', {
      queue_name: 'foo',
      message: { hello: 'world' },
      sleep_seconds: 30,
    })
    console.log(result)
  }

  //Dequeue Message
  const popFromQueue = async () => {
    const result = await supabase.schema('pgmq_public').rpc('pop', { queue_name: 'foo' })
    console.log(result)
  }

  return (
    
      Queue Test Component
      <button
        onClick={sendToQueue}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-4"
      >
        Add Message
      
      <button
        onClick={popFromQueue}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Pop Message
      
    
  )
}

export default QueuesTest
```



```dart
import 'package:supabase_flutter/supabase_flutter.dart';

final supabase = Supabase.instance.client;

// Add a Message
Future sendToQueue() async {
  final result = await supabase.schema('pgmq_public').rpc('send', params: {
    'queue_name': 'foo',
    'message': {'hello': 'world'},
    'sleep_seconds': 30,
  });
  print(result);
}

// Dequeue Message
Future popFromQueue() async {
  final result = await supabase.schema('pgmq_public').rpc('pop', params: {
    'queue_name': 'foo',
  });
  print(result);
}
```



```swift
import Supabase

let supabase = SupabaseClient(
  supabaseURL: URL(string: "supabaseURL")!,
  supabaseKey: "supabaseKey"
)

// Add a Message
func sendToQueue() async throws {
  let result = try await supabase
    .schema("pgmq_public")
    .rpc("send", params: [
      "queue_name": AnyJSON.string("foo"),
      "message": AnyJSON.object(["hello": "world"]),
      "sleep_seconds": AnyJSON.integer(30)
    ])
    .execute()
  print(result)
}

// Dequeue Message
func popFromQueue() async throws {
  let result = try await supabase
    .schema("pgmq_public")
    .rpc("pop", params: ["queue_name": "foo"])
    .execute()
  print(result)
}
```



```python
from supabase import create_client, Client

supabase_url = "supabaseURL"
supabase_key = "supabaseKey"

supabase: Client = create_client(supabase_url, supabase_key)

# Add a Message
def send_to_queue():
    result = supabase.schema("pgmq_public").rpc(
        "send",
        {
            "queue_name": "foo",
            "message": {"hello": "world"},
            "sleep_seconds": 30,
        }
    ).execute()
    print(result)

# Dequeue Message
def pop_from_queue():
    result = supabase.schema("pgmq_public").rpc(
        "pop",
        {"queue_name": "foo"}
    ).execute()
    print(result)
```
````

# Access Control

Supabase provides granular access controls to manage permissions across your organizations and projects.

For each organization and project, a member can have one of the following roles:

- **Owner**: full access to everything in organization and project resources.
- **Administrator**: full access to everything in organization and project resources **except** updating organization settings, transferring projects outside of the organization, and adding new owners.
- **Developer**: read-only access to organization resources and content access to project resources but cannot change any project settings.
- **Read-Only**: read-only access to organization and project resources.

Read-Only role is only available on the [Team and Enterprise plans](/pricing).

When you first create an account, a default organization is created for you and you'll be assigned as the **Owner**. Any organizations you create will assign you as **Owner** as well.

## Manage organization members

To invite others to collaborate, visit your organization's team [settings](/dashboard/org/_/team) to send an invite link to another user's email. The invite is valid for 24 hours. For project scoped roles, you may only assign a role to a single project for the user when sending the invite. You can assign roles to multiple projects after the user accepts the invite.

Invites sent from a SAML SSO account can only be accepted by another SAML SSO account from the same identity provider.

This is a security measure to prevent accidental invites to accounts not managed by your enterprise's identity provider.

### Viewing organization members using the Management API

You can also view organization members using the Management API:

```bash
# Get your access token from https://supabase.com/dashboard/account/tokens
export SUPABASE_ACCESS_TOKEN="your-access-token"
export ORG_ID="your-organization-id"

# List organization members
curl "https://api.supabase.com/v1/organizations/$ORG_ID/members" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN"
```

### Transferring ownership of an organization

Each Supabase organization must have at least one owner. If your organization has other owners then you can relinquish ownership and leave the organization by clicking **Leave team** in your organization's team [settings](/dashboard/org/_/team).

Otherwise, you'll need to invite a user as **Owner**, and they need to accept the invitation, or promote an existing organization member to **Owner** before you can leave the organization.

### Organization scoped roles vs project scoped roles

Project scoped roles are only available on the [Team and Enterprise plans](/pricing).

Each member in the organization can be assigned a role that is scoped either to the entire organization or to specific projects.

- If a member has an organization-level role, they will have the corresponding permissions across all current and future projects within that organization.
- If a member is assigned a project-scoped role, they will only have access to the specific projects they've been assigned to. They will not be able to view, access, or even see other projects within the organization on the Supabase Dashboard.

This allows for more granular control, ensuring that users only have visibility and access to the projects relevant to their role.
