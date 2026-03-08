# Presence

Share state between users with Realtime Presence.

Let's explore how to implement Realtime Presence to track state between multiple users.

## Usage

You can use the Supabase client libraries to track Presence state between users.

### How Presence works

Presence lets each connected client publish a small piece of state—called a “presence payload”—to a shared channel. Supabase stores each client’s payload under a unique presence key and keeps a merged view of all connected clients.

When any client subscribes, disconnects, or updates their presence payload, Supabase triggers one of three events:

- **`sync`** — the full presence state has been updated
- **`join`** — a new client has started tracking presence
- **`leave`** — a client has stopped tracking presence

During a `sync` event, you may receive `join` and `leave` events simultaneously, even though no users are actually joining or leaving. This is expected behavior—Presence reconciles its local state with the server state, which can trigger these events as part of the synchronization process. This reflects state reconciliation, not real user movement.

The complete presence state returned by `presenceState()` looks like this:

```json
{
  "client_key_1": [{ "userId": 1, "typing": false }],
  "client_key_2": [{ "userId": 2, "typing": true }]
}
```

### Initialize the client

{/\* TODO: Further consolidate partial \*/}

Get the Project URL and key from [the project's **Connect** dialog](/dashboard/project/_?showConnect=true).

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

````
```js
````

````
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://.supabase.co'
const SUPABASE_KEY = '<sb_publishable_... or anon key>'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
```



```dart
void main() {
  Supabase.initialize(
    url: 'https://.supabase.co',
    anonKey: '<sb_publishable_... or anon key>',
  );

  runApp(MyApp());
}

final supabase = Supabase.instance.client;
```



```swift
let supabaseURL = "https://.supabase.co"
let supabaseKey = "<sb_publishable_... or anon key>"
let supabase = SupabaseClient(supabaseURL: URL(string: supabaseURL)!, supabaseKey: supabaseKey)

let realtime = supabase.realtime
```



```kotlin
val supabaseUrl = "https://.supabase.co"
val supabaseKey = "<sb_publishable_... or anon key>"
val supabase = createSupabaseClient(supabaseUrl, supabaseKey) {
    install(Realtime)
}
```



```python
from supabase import create_client

SUPABASE_URL = 'https://.supabase.co'
SUPABASE_KEY = '<sb_publishable_... or anon key>'

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
```
````

### Sync and track state

````
Listen to the `sync`, `join`, and `leave` events triggered whenever any client joins or leaves the channel or changes their slice of state:

```js
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('your_project_url', 'your_supabase_api_key')

// ---cut---
const roomOne = supabase.channel('room_01')

roomOne
  .on('presence', { event: 'sync' }, () => {
    const newState = roomOne.presenceState()
    console.log('sync', newState)
  })
  .on('presence', { event: 'join' }, ({ key, newPresences }) => {
    console.log('join', key, newPresences)
  })
  .on('presence', { event: 'leave' }, ({ key, leftPresences }) => {
    console.log('leave', key, leftPresences)
  })
  .subscribe()
```



```dart
final supabase = Supabase.instance.client;

final roomOne = supabase.channel('room_01');

roomOne.onPresenceSync((_) {
  final newState = roomOne.presenceState();
  print('sync: $newState');
}).onPresenceJoin((payload) {
  print('join: $payload');
}).onPresenceLeave((payload) {
  print('leave: $payload');
}).subscribe();
```



Listen to the presence change stream, emitting a new `PresenceAction` whenever someone joins or leaves:

```swift
let roomOne = await supabase.channel("room_01")
let presenceStream = await roomOne.presenceChange()

await roomOne.subscribe()

for await presence in presenceStream {
  print(presence.join) // You can also use presence.decodeJoins(as: MyType.self)
  print(presence.leaves) // You can also use presence.decodeLeaves(as: MyType.self)
}
```



Listen to the presence change flow, emitting new a new `PresenceAction` whenever someone joins or leaves:

```kotlin
val roomOne = supabase.channel("room_01")
val presenceFlow: Flow = roomOne.presenceChangeFlow()
presenceFlow
    .onEach {
        println(it.joins) //You can also use it.decodeJoinsAs()
        println(it.leaves) //You can also use it.decodeLeavesAs()
    }
    .launchIn(yourCoroutineScope) //You can also use .collect { } here

roomOne.subscribe()
```



Listen to the `sync`, `join`, and `leave` events triggered whenever any client joins or leaves the channel or changes their slice of state:

```python
room_one = supabase.channel('room_01')

room_one
  .on_presence_sync(lambda: print('sync', room_one.presenceState()))
  .on_presence_join(lambda key, curr_presences, joined_presences: print('join', key, curr_presences, joined_presences))
  .on_presence_leave(lambda key, curr_presences, left_presences: print('leave', key, curr_presences, left_presences))
  .subscribe()
```
````

### Sending state

You can send state to all subscribers using `track()`:

````
{/* prettier-ignore */}

```js
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('your_project_url', 'your_supabase_api_key')

// ---cut---
const roomOne = supabase.channel('room_01')

const userStatus = {
  user: 'user-1',
  online_at: new Date().toISOString(),
}

roomOne.subscribe(async (status) => {
  if (status !== 'SUBSCRIBED') { return }

  const presenceTrackStatus = await roomOne.track(userStatus)
  console.log(presenceTrackStatus)
})
```



```dart
final roomOne = supabase.channel('room_01');

final userStatus = {
  'user': 'user-1',
  'online_at': DateTime.now().toIso8601String(),
};

roomOne.subscribe((status, error) async {
  if (status != RealtimeSubscribeStatus.subscribed) return;

  final presenceTrackStatus = await roomOne.track(userStatus);
  print(presenceTrackStatus);
});
```



```swift
let roomOne = await supabase.channel("room_01")

// Using a custom type
let userStatus = UserStatus(
    user: "user-1",
    onlineAt: Date().timeIntervalSince1970
)

await roomOne.subscribe()

try await roomOne.track(userStatus)

// Or using a raw JSONObject.
await roomOne.track(
  [
    "user": .string("user-1"),
    "onlineAt": .double(Date().timeIntervalSince1970)
  ]
)
```



```kotlin
val roomOne = supabase.channel("room_01")

val userStatus = UserStatus( //Your custom class
    user = "user-1",
    onlineAt = Clock.System.now().toEpochMilliseconds()
)

roomOne.subscribe(blockUntilSubscribed = true) //You can also use the roomOne.status flow instead, but this parameter will block the coroutine until the status is joined.

roomOne.track(userStatus)
```



```python
room_one = supabase.channel('room_01')

user_status = {
  "user": 'user-1',
  "online_at": datetime.datetime.now().isoformat(),
}

def on_subscribe(status, err):
  if status != RealtimeSubscribeStates.SUBSCRIBED:
    return

  room_one.track(user_status)

room_one.subscribe(on_subscribe)
```
````

A client will receive state from any other client that is subscribed to the same topic (in this case `room_01`). It will also automatically trigger its own `sync` and `join` event handlers.

### Stop tracking

You can stop tracking presence using the `untrack()` method. This will trigger the `sync` and `leave` event handlers.

````
```js
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('your_project_url', 'your_supabase_api_key')
const roomOne = supabase.channel('room_01')

// ---cut---
const untrackPresence = async () => {
  const presenceUntrackStatus = await roomOne.untrack()
  console.log(presenceUntrackStatus)
}

untrackPresence()
```



```dart
final roomOne = supabase.channel('room_01');

untrackPresence() async {
  final presenceUntrackStatus = await roomOne.untrack();
  print(presenceUntrackStatus);
}

untrackPresence();
```



```swift
await roomOne.untrack()
```



```kotlin
suspend fun untrackPresence() {
	roomOne.untrack()
}

untrackPresence()
```



```python
room_one.untrack()
```
````

## Presence options

You can pass configuration options while initializing the Supabase Client.

### Presence key

By default, Presence will generate a unique `UUIDv1` key on the server to track a client channel's state. If you prefer, you can provide a custom key when creating the channel. This key should be unique among clients.

````
```js
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('SUPABASE_URL', 'SUPABASE_PUBLISHABLE_KEY')

const channelC = supabase.channel('test', {
  config: {
    presence: {
      key: 'userId-123',
    },
  },
})
```



```dart
final channelC = supabase.channel(
  'test',
  opts: const RealtimeChannelConfig(key: 'userId-123'),
);
```



```swift
let channelC = await supabase.channel("test") {
  $0.presence.key = "userId-123"
}
```



```kotlin
val channelC = supabase.channel("test") {
    presence {
        key = "userId-123"
    }
}
```



```python
channel_c = supabase.channel('test', {
  "config": {
    "presence": {
      "key": 'userId-123',
    },
  },
})
```
````

# Realtime Pricing

You are charged for the number of Realtime messages and the number of Realtime peak connections.

## Messages

per 1 million messages. You are only charged for usage exceeding your subscription
plan's quota.

| Plan       | Quota     | Over-Usage                                    |
| ---------- | --------- | --------------------------------------------- |
| Free       | 2 million | -                                             |
| Pro        | 5 million |  per 1 million messages |
| Team       | 5 million |  per 1 million messages |
| Enterprise | Custom    | Custom                                        |

For a detailed explanation of how charges are calculated, refer to [Manage Realtime Messages usage](/docs/guides/platform/manage-your-usage/realtime-messages).

## Peak connections

per 1,000 peak connections. You are only charged for usage exceeding your subscription
plan's quota.

| Plan       | Quota  | Over-Usage                                      |
| ---------- | ------ | ----------------------------------------------- |
| Free       | 200    | -                                               |
| Pro        | 500    |  per 1,000 peak connections |
| Team       | 500    |  per 1,000 peak connections |
| Enterprise | Custom | Custom                                          |

For a detailed explanation of how charges are calculated, refer to [Manage Realtime Peak Connections usage](/docs/guides/platform/manage-your-usage/realtime-peak-connections).
