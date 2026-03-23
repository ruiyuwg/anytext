# JavaScript Reference

on().subscribe()

## Examples

### Listen to broadcast messages

```js
const channel = supabase.channel("room1")

channel.on("broadcast", { event: "cursor-pos" }, (payload) => {
  console.log("Cursor position received!", payload);
}).subscribe((status) => {
  if (status === "SUBSCRIBED") {
    channel.send({
      type: "broadcast",
      event: "cursor-pos",
      payload: { x: Math.random(), y: Math.random() },
    });
  }
});
```

### Listen to presence sync

```js
const channel = supabase.channel('room1')
channel
  .on('presence', { event: 'sync' }, () => {
    console.log('Synced presence state: ', channel.presenceState())
  })
  .subscribe(async (status) => {
    if (status === 'SUBSCRIBED') {
      await channel.track({ online_at: new Date().toISOString() })
    }
  })
```

### Listen to presence join

```js
const channel = supabase.channel('room1')
channel
  .on('presence', { event: 'join' }, ({ newPresences }) => {
    console.log('Newly joined presences: ', newPresences)
  })
  .subscribe(async (status) => {
    if (status === 'SUBSCRIBED') {
      await channel.track({ online_at: new Date().toISOString() })
    }
  })
```

### Listen to presence leave

```js
const channel = supabase.channel('room1')
channel
  .on('presence', { event: 'leave' }, ({ leftPresences }) => {
    console.log('Newly left presences: ', leftPresences)
  })
  .subscribe(async (status) => {
    if (status === 'SUBSCRIBED') {
      await channel.track({ online_at: new Date().toISOString() })
      await channel.untrack()
    }
  })
```

### Listen to all database changes

```js
supabase
  .channel('room1')
  .on('postgres_changes', { event: '*', schema: '*' }, payload => {
    console.log('Change received!', payload)
  })
  .subscribe()
```

### Listen to a specific table

```js
supabase
  .channel('room1')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'countries' }, payload => {
    console.log('Change received!', payload)
  })
  .subscribe()
```

### Listen to inserts

```js
supabase
  .channel('room1')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'countries' }, payload => {
    console.log('Change received!', payload)
  })
  .subscribe()
```

### Listen to updates

```js
supabase
  .channel('room1')
  .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'countries' }, payload => {
    console.log('Change received!', payload)
  })
  .subscribe()
```

### Listen to deletes

```js
supabase
  .channel('room1')
  .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'countries' }, payload => {
    console.log('Change received!', payload)
  })
  .subscribe()
```

### Listen to multiple events

```js
supabase
  .channel('room1')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'countries' }, handleRecordInserted)
  .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'countries' }, handleRecordDeleted)
  .subscribe()
```

### Listen to row level changes

```js
supabase
  .channel('room1')
  .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'countries', filter: 'id=eq.200' }, handleRecordUpdated)
  .subscribe()
```

# JavaScript Reference

removeChannel()

## Examples

### Removes a channel

```js
supabase.removeChannel(myChannel)
```

# JavaScript Reference

removeAllChannels()

## Examples

### Remove all channels

```js
supabase.removeAllChannels()
```

# JavaScript Reference

getChannels()

## Examples

### Get all channels

```js
const channels = supabase.getChannels()
```

# JavaScript Reference

broadcastMessage()

## Examples

### Send a message via websocket

```js
supabase
  .channel('room1')
  .subscribe((status) => {
    if (status === 'SUBSCRIBED') {
      channel.send({
        type: 'broadcast',
        event: 'cursor-pos',
        payload: { x: Math.random(), y: Math.random() },
      })
    }
  })
```

### Send a message via REST

```js
supabase
  .channel('room1')
  .httpSend('cursor-pos', { x: Math.random(), y: Math.random() })
```

# JavaScript Reference

## Examples

# JavaScript Reference

Overview

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

listBuckets()

## Examples

# JavaScript Reference

getBucket()

## Examples

# JavaScript Reference

createBucket()

## Examples

# JavaScript Reference

emptyBucket()

## Examples

# JavaScript Reference

updateBucket()

## Examples

# JavaScript Reference

deleteBucket()

## Examples

# JavaScript Reference

from.upload()

## Examples

# JavaScript Reference

from.update()

## Examples

# JavaScript Reference

from.move()

## Examples

# JavaScript Reference

from.copy()

## Examples

# JavaScript Reference

from.createSignedUrl()

## Examples

# JavaScript Reference

from.createSignedUrls()

## Examples

# JavaScript Reference

from.createSignedUploadUrl()

## Examples

# JavaScript Reference

from.uploadToSignedUrl()

## Examples

# JavaScript Reference

from.getPublicUrl()

## Examples

# JavaScript Reference

from.download()

## Examples

# JavaScript Reference

from.remove()

## Examples

# JavaScript Reference

from.list()

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

Overview

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

Overview

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

VectorBucketScope.createIndex()

## Examples

# JavaScript Reference

VectorBucketScope.deleteIndex()

## Examples

# JavaScript Reference

VectorBucketScope.getIndex()

## Examples

# JavaScript Reference

VectorBucketScope.listIndexes()

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

## Examples

# JavaScript Reference

## Examples
