# Handling Routing in Functions

Handle custom routing within Edge Functions.

Usually, an Edge Function is written to perform a single action (e.g. write a record to the database). However, if your app's logic is split into multiple Edge Functions, requests to each action may seem slower.

Each Edge Function needs to be booted before serving a request (known as cold starts). If an action is performed less frequently (e.g. deleting a record), there is a high chance of that function experiencing a cold start.

One way to reduce cold starts and increase performance is to combine multiple actions into a single Edge Function. This way only one instance needs to be booted and it can handle multiple requests to different actions.

This allows you to:

- Reduce cold starts by combining multiple actions into one function
- Build complete REST APIs in a single function
- Improve performance by keeping one instance warm for multiple endpoints

***

For example, we can use a single Edge Function to create a typical CRUD API (create, read, update, delete records).

To combine multiple endpoints into a single Edge Function, you can use web application frameworks such as [Express](https://expressjs.com/), [Oak](https://oakserver.github.io/oak/), or [Hono](https://hono.dev).

***

## Basic routing example

Here's a simple hello world example using some popular web frameworks:

````
```ts
Deno.serve(async (req) => {
  if (req.method === 'GET') {
    return new Response('Hello World!')
  }
  const { name } = await req.json()
  if (name) {
    return new Response(`Hello ${name}!`)
  }
  return new Response('Hello World!')
})
```



```ts
import express from 'npm:express@4.18.2'

const app = express()
app.use(express.json())
// If you want a payload larger than 100kb, then you can tweak it here:
// app.use( express.json({ limit : "300kb" }));

const port = 3000

app.get('/hello-world', (req, res) => {
  res.send('Hello World!')
})

app.post('/hello-world', (req, res) => {
  const { name } = req.body
  res.send(`Hello ${name}!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```



```ts
import { Application } from 'jsr:@oak/oak@15/application'
import { Router } from 'jsr:@oak/oak@15/router'

const router = new Router()

router.get('/hello-world', (ctx) => {
  ctx.response.body = 'Hello world!'
})

router.post('/hello-world', async (ctx) => {
  const { name } = await ctx.request.body.json()
  ctx.response.body = `Hello ${name}!`
})

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

app.listen({ port: 3000 })
```



```ts
import { Hono } from 'jsr:@hono/hono'

const app = new Hono()

app.post('/hello-world', async (c) => {
  const { name } = await c.req.json()
  return new Response(`Hello ${name}!`)
})

app.get('/hello-world', (c) => {
  return new Response('Hello World!')
})

Deno.serve(app.fetch)
```
````

Within Edge Functions, paths should always be prefixed with the function name (in this case `hello-world`).

***

## Using route parameters

You can use route parameters to capture values at specific URL segments (e.g. `/tasks/:taskId/notes/:noteId`).

Keep in mind paths must be prefixed by function name. Route parameters can only be used after the function name prefix.

````
```ts
interface Task {
  id: string
  name: string
}

let tasks: Task[] = []

const router = new Map<string, (req: Request) => Promise>()

async function getAllTasks(): Promise {
  return new Response(JSON.stringify(tasks))
}

async function getTask(id: string): Promise {
  const task = tasks.find((t) => t.id === id)
  if (task) {
    return new Response(JSON.stringify(task))
  } else {
    return new Response('Task not found', { status: 404 })
  }
}

async function createTask(req: Request): Promise {
  const id = Math.random().toString(36).substring(7)
  const task = { id, name: '' }
  tasks.push(task)
  return new Response(JSON.stringify(task), { status: 201 })
}

async function updateTask(id: string, req: Request): Promise {
  const index = tasks.findIndex((t) => t.id === id)
  if (index !== -1) {
    tasks[index] = { ...tasks[index] }
    return new Response(JSON.stringify(tasks[index]))
  } else {
    return new Response('Task not found', { status: 404 })
  }
}

async function deleteTask(id: string): Promise {
  const index = tasks.findIndex((t) => t.id === id)
  if (index !== -1) {
    tasks.splice(index, 1)
    return new Response('Task deleted successfully')
  } else {
    return new Response('Task not found', { status: 404 })
  }
}

Deno.serve(async (req) => {
  const url = new URL(req.url)
  const method = req.method
  // Extract the last part of the path as the command
  const command = url.pathname.split('/').pop()
  // Assuming the last part of the path is the task ID
  const id = command
  try {
    switch (method) {
      case 'GET':
        if (id) {
          return getTask(id)
        } else {
          return getAllTasks()
        }
      case 'POST':
        return createTask(req)
      case 'PUT':
        if (id) {
          return updateTask(id, req)
        } else {
          return new Response('Bad Request', { status: 400 })
        }
      case 'DELETE':
        if (id) {
          return deleteTask(id)
        } else {
          return new Response('Bad Request', { status: 400 })
        }
      default:
        return new Response('Method Not Allowed', { status: 405 })
    }
  } catch (error) {
    return new Response(`Internal Server Error: ${error}`, { status: 500 })
  }
})
```



```ts
import express from 'npm:express@4.18.2'

const app = express()
app.use(express.json())

app.get('/tasks', async (req, res) => {
  // return all tasks
})

app.post('/tasks', async (req, res) => {
  // create a task
})

app.get('/tasks/:id', async (req, res) => {
  const id = req.params.id
  const task = {} // get task

  res.json(task)
})

app.patch('/tasks/:id', async (req, res) => {
  const id = req.params.id
  // modify task
})

app.delete('/tasks/:id', async (req, res) => {
  const id = req.params.id
  // delete task
})
```



```ts
import { Application } from 'jsr:@oak/oak/application'
import { Router } from 'jsr:@oak/oak/router'

const router = new Router()

let tasks: { [id: string]: any } = {}

router
  .get('/tasks', (ctx) => {
    ctx.response.body = Object.values(tasks)
  })
  .post('/tasks', async (ctx) => {
    const body = ctx.request.body()
    const { name } = await body.value
    const id = Math.random().toString(36).substring(7)
    tasks[id] = { id, name }
    ctx.response.body = tasks[id]
  })
  .get('/tasks/:id', (ctx) => {
    const id = ctx.params.id
    const task = tasks[id]
    if (task) {
      ctx.response.body = task
    } else {
      ctx.response.status = 404
      ctx.response.body = 'Task not found'
    }
  })
  .patch('/tasks/:id', async (ctx) => {
    const id = ctx.params.id
    const body = ctx.request.body()
    const updates = await body.value
    const task = tasks[id]
    if (task) {
      tasks[id] = { ...task, ...updates }
      ctx.response.body = tasks[id]
    } else {
      ctx.response.status = 404
      ctx.response.body = 'Task not found'
    }
  })
  .delete('/tasks/:id', (ctx) => {
    const id = ctx.params.id
    if (tasks[id]) {
      delete tasks[id]
      ctx.response.body = 'Task deleted successfully'
    } else {
      ctx.response.status = 404
      ctx.response.body = 'Task not found'
    }
  })

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

app.listen({ port: 3000 })
```



```ts
import { Hono } from 'jsr:@hono/hono'

// You can set the basePath with Hono
const functionName = 'tasks'
const app = new Hono().basePath(`/${functionName}`)

// /tasks/id
app.get('/:id', async (c) => {
  const id = c.req.param('id')
  const task = {} // Fetch task by id here
  if (task) {
    return new Response(JSON.stringify(task))
  } else {
    return new Response('Task not found', { status: 404 })
  }
})

app.patch('/:id', async (c) => {
  const id = c.req.param('id')
  const body = await c.req.body()
  const updates = body.value
  const task = {} // Fetch task by id here
  if (task) {
    Object.assign(task, updates)
    return new Response(JSON.stringify(task))
  } else {
    return new Response('Task not found', { status: 404 })
  }
})

app.delete('/:id', async (c) => {
  const id = c.req.param('id')
  const task = {} // Fetch task by id here
  if (task) {
    // Delete task
    return new Response('Task deleted successfully')
  } else {
    return new Response('Task not found', { status: 404 })
  }
})

Deno.serve(app.fetch)
```
````

***

{/\* supa-mdx-lint-disable Rule001HeadingCase \*/}

## URL Patterns API

If you prefer not to use a web framework, you can directly use [URL Pattern API](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API) within your Edge Functions to implement routing.

This works well for small apps with only a couple of routes:

```typescript restful-tasks/index.ts
// ...

    )

    // For more details on URLPattern, check https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API
    const taskPattern = new URLPattern({ pathname: '/restful-tasks/:id' })
    const matchingPath = taskPattern.exec(url)
    const id = matchingPath ? matchingPath.pathname.groups.id : null

    let task = null
    if (method === 'POST' || method === 'PUT') {
      const body = await req.json()
      task = body.task
    }

    // call relevant method based on method and id
    switch (true) {
      case id && method === 'GET':
        return getTask(supabaseClient, id as string)
      case id && method === 'PUT':
        return updateTask(supabaseClient, id as string, task)
      case id && method === 'DELETE':
        return deleteTask(supabaseClient, id as string)
      case method === 'POST':
        return createTask(supabaseClient, task)
      case method === 'GET':
        return getAllTasks(supabaseClient)

    // ...
```

# Scheduling Edge Functions

The hosted Supabase Platform supports the [`pg_cron` extension](/docs/guides/database/extensions/pgcron), a recurring job scheduler in Postgres.

In combination with the [`pg_net` extension](/docs/guides/database/extensions/pgnet), this allows us to invoke Edge Functions periodically on a set schedule.

To access the auth token securely for your Edge Function call, we recommend storing them in [Supabase Vault](/docs/guides/database/vault).

## Examples

### Invoke an Edge Function every minute

Store `project_url` and `anon_key` in Supabase Vault:

```sql
select vault.create_secret('https://project-ref.supabase.co', 'project_url');
select vault.create_secret('YOUR_SUPABASE_PUBLISHABLE_KEY', 'publishable_key');
```

Make a POST request to a Supabase Edge Function every minute:

```sql
select
  cron.schedule(
    'invoke-function-every-minute',
    '* * * * *', -- every minute
    $$
    select
      net.http_post(
          url:= (select decrypted_secret from vault.decrypted_secrets where name = 'project_url') || '/functions/v1/function-name',
          headers:=jsonb_build_object(
            'Content-type', 'application/json',
            'Authorization', 'Bearer ' || (select decrypted_secret from vault.decrypted_secrets where name = 'anon_key')
          ),
          body:=concat('{"time": "', now(), '"}')::jsonb
      ) as request_id;
    $$
  );
```

## Resources

- [`pg_net` extension](/docs/guides/database/extensions/pgnet)
- [`pg_cron` extension](/docs/guides/database/extensions/pgcron)
