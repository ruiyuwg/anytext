Supabase Reference (JavaScript)

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

Delete data: delete()

## Examples

### Delete a single record

```ts
const response = await supabase
  .from('countries')
  .delete()
  .eq('id', 1)
```

### Delete a record and return it

```ts
const { data, error } = await supabase
  .from('countries')
  .delete()
  .eq('id', 1)
  .select()
```

### Delete multiple records

```ts
const response = await supabase
  .from('countries')
  .delete()
  .in('id', [1, 2, 3])
```

# JavaScript Reference

Postgres functions: rpc()

## Examples

### Call a Postgres function without arguments

```ts
const { data, error } = await supabase.rpc('hello_world')
```

### Call a Postgres function with arguments

```ts
const { data, error } = await supabase.rpc('echo', { say: '👋' })
```

### Bulk processing

```ts
const { data, error } = await supabase.rpc('add_one_each', { arr: [1, 2, 3] })
```

### Call a Postgres function with filters

```ts
const { data, error } = await supabase
  .rpc('list_stored_countries')
  .eq('id', 1)
  .single()
```

### Call a read-only Postgres function

```ts
const { data, error } = await supabase.rpc('hello_world', undefined, { get: true })
```

# JavaScript Reference

Using Filters

Filters allow you to only return rows that match certain conditions.

Filters can be used on `select()`, `update()`, `upsert()`, and `delete()` queries.

If a Postgres function returns a table response, you can also apply filters.

## Examples

### Applying Filters

```ts
const { data, error } = await supabase
  .from('instruments')
  .select('name, section_id')
  .eq('name', 'violin')    // Correct

const { data, error } = await supabase
  .from('instruments')
  .eq('name', 'violin')    // Incorrect
  .select('name, section_id')
```

### Chaining

```ts
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .gte('population', 1000)
  .lt('population', 10000)
```

### Conditional Chaining

```ts
const filterByName = null
const filterPopLow = 1000
const filterPopHigh = 10000

let query = supabase
  .from('cities')
  .select('name, country_id')

if (filterByName)  { query = query.eq('name', filterByName) }
if (filterPopLow)  { query = query.gte('population', filterPopLow) }
if (filterPopHigh) { query = query.lt('population', filterPopHigh) }

const { data, error } = await query
```

### Filter by values within a JSON column

```ts
const { data, error } = await supabase
  .from('users')
  .select()
  .eq('address->postcode', 90210)
```

### Filter referenced tables

```ts
const { data, error } = await supabase
  .from('orchestral_sections')
  .select(`
    name,
    instruments!inner (
      name
    )
  `)
  .eq('instruments.name', 'flute')
```

# JavaScript Reference

eq()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('characters')
  .select()
  .eq('name', 'Leia')
```

# JavaScript Reference

neq()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('characters')
  .select()
  .neq('name', 'Leia')
```

# JavaScript Reference

gt()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('characters')
  .select()
  .gt('id', 2)
```

# JavaScript Reference

gte()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('characters')
  .select()
  .gte('id', 2)
```

# JavaScript Reference

lt()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('characters')
  .select()
  .lt('id', 2)
```

# JavaScript Reference

lte()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('characters')
  .select()
  .lte('id', 2)
```

# JavaScript Reference

like()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('characters')
  .select()
  .like('name', '%Lu%')
```

# JavaScript Reference

ilike()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('characters')
  .select()
  .ilike('name', '%lu%')
```

# JavaScript Reference

is()

## Examples

### Checking for nullness, true or false

```ts
const { data, error } = await supabase
  .from('countries')
  .select()
  .is('name', null)
```

# JavaScript Reference

in()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('characters')
  .select()
  .in('name', ['Leia', 'Han'])
```

# JavaScript Reference

contains()

## Examples

### On array columns

```ts
const { data, error } = await supabase
  .from('issues')
  .select()
  .contains('tags', ['is:open', 'priority:low'])
```

### On range columns

```ts
const { data, error } = await supabase
  .from('reservations')
  .select()
  .contains('during', '[2000-01-01 13:00, 2000-01-01 13:30)')
```

### On `jsonb` columns

```ts
const { data, error } = await supabase
  .from('users')
  .select('name')
  .contains('address', { postcode: 90210 })
```

# JavaScript Reference

containedBy()

## Examples

### On array columns

```ts
const { data, error } = await supabase
  .from('classes')
  .select('name')
  .containedBy('days', ['monday', 'tuesday', 'wednesday', 'friday'])
```

### On range columns

```ts
const { data, error } = await supabase
  .from('reservations')
  .select()
  .containedBy('during', '[2000-01-01 00:00, 2000-01-01 23:59)')
```

### On `jsonb` columns

```ts
const { data, error } = await supabase
  .from('users')
  .select('name')
  .containedBy('address', {})
```

# JavaScript Reference

rangeGt()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('reservations')
  .select()
  .rangeGt('during', '[2000-01-02 08:00, 2000-01-02 09:00)')
```

# JavaScript Reference

rangeGte()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('reservations')
  .select()
  .rangeGte('during', '[2000-01-02 08:30, 2000-01-02 09:30)')
```

# JavaScript Reference

rangeLt()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('reservations')
  .select()
  .rangeLt('during', '[2000-01-01 15:00, 2000-01-01 16:00)')
```

# JavaScript Reference

rangeLte()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('reservations')
  .select()
  .rangeLte('during', '[2000-01-01 14:00, 2000-01-01 16:00)')
```

# JavaScript Reference

rangeAdjacent()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('reservations')
  .select()
  .rangeAdjacent('during', '[2000-01-01 12:00, 2000-01-01 13:00)')
```

# JavaScript Reference

overlaps()

## Examples

### On array columns

```ts
const { data, error } = await supabase
  .from('issues')
  .select('title')
  .overlaps('tags', ['is:closed', 'severity:high'])
```

### On range columns

```ts
const { data, error } = await supabase
  .from('reservations')
  .select()
  .overlaps('during', '[2000-01-01 12:45, 2000-01-01 13:15)')
```

# JavaScript Reference

textSearch()

## Examples

### Text search

```ts
const result = await supabase
  .from("texts")
  .select("content")
  .textSearch("content", `'eggs' & 'ham'`, {
    config: "english",
  });
```

### Basic normalization

```ts
const { data, error } = await supabase
  .from('quotes')
  .select('catchphrase')
  .textSearch('catchphrase', `'fat' & 'cat'`, {
    type: 'plain',
    config: 'english'
  })
```

### Full normalization

```ts
const { data, error } = await supabase
  .from('quotes')
  .select('catchphrase')
  .textSearch('catchphrase', `'fat' & 'cat'`, {
    type: 'phrase',
    config: 'english'
  })
```

### Websearch

```ts
const { data, error } = await supabase
  .from('quotes')
  .select('catchphrase')
  .textSearch('catchphrase', `'fat or cat'`, {
    type: 'websearch',
    config: 'english'
  })
```

# JavaScript Reference

match()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('characters')
  .select('name')
  .match({ id: 2, name: 'Leia' })
```

# JavaScript Reference

not()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('countries')
  .select()
  .not('name', 'is', null)
```

# JavaScript Reference

or()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('characters')
  .select('name')
  .or('id.eq.2,name.eq.Han')
```

### Use `or` with `and`

```ts
const { data, error } = await supabase
  .from('characters')
  .select('name')
  .or('id.gt.3,and(id.eq.1,name.eq.Luke)')
```

### Use `or` on referenced tables

```ts
const { data, error } = await supabase
  .from('orchestral_sections')
  .select(`
    name,
    instruments!inner (
      name
    )
  `)
  .or('section_id.eq.1,name.eq.guzheng', { referencedTable: 'instruments' })
```

# JavaScript Reference

filter()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('characters')
  .select()
  .filter('name', 'in', '("Han","Yoda")')
```

### On a referenced table

```ts
const { data, error } = await supabase
  .from('orchestral_sections')
  .select(`
    name,
    instruments!inner (
      name
    )
  `)
  .filter('instruments.name', 'eq', 'flute')
```

# JavaScript Reference

Using Modifiers

Filters work on the row level—they allow you to return rows that
only match certain conditions without changing the shape of the rows.
Modifiers are everything that don't fit that definition—allowing you to
change the format of the response (e.g., returning a CSV string).

Modifiers must be specified after filters. Some modifiers only apply for
queries that return rows (e.g., `select()` or `rpc()` on a function that
returns a table response).

## Examples

# JavaScript Reference

select()

## Examples

### With `upsert()`

```ts
const { data, error } = await supabase
  .from('characters')
  .upsert({ id: 1, name: 'Han Solo' })
  .select()
```

# JavaScript Reference

order()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('characters')
  .select('id, name')
  .order('id', { ascending: false })
```

### On a referenced table

```ts
  const { data, error } = await supabase
    .from('orchestral_sections')
    .select(`
      name,
      instruments (
        name
      )
    `)
    .order('name', { referencedTable: 'instruments', ascending: false })
```

### Order parent table by a referenced table

```ts
  const { data, error } = await supabase
    .from('instruments')
    .select(`
      name,
      section:orchestral_sections (
        name
      )
    `)
    .order('section(name)', { ascending: true })
```

# JavaScript Reference

limit()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('characters')
  .select('name')
  .limit(1)
```

### On a referenced table

```ts
const { data, error } = await supabase
  .from('orchestral_sections')
  .select(`
    name,
    instruments (
      name
    )
  `)
  .limit(1, { referencedTable: 'instruments' })
```

# JavaScript Reference

range()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('characters')
  .select('name')
  .range(0, 1)
```

# JavaScript Reference

abortSignal()

## Examples

### Aborting requests in-flight

```ts
const ac = new AbortController()
ac.abort()
const { data, error } = await supabase
  .from('very_big_table')
  .select()
  .abortSignal(ac.signal)
```

### Set a timeout

```ts
const { data, error } = await supabase
  .from('very_big_table')
  .select()
  .abortSignal(AbortSignal.timeout(1000 /* ms */))
```

# JavaScript Reference

single()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('characters')
  .select('name')
  .limit(1)
  .single()
```

# JavaScript Reference

maybeSingle()

## Examples

### With `select()`

```ts
const { data, error } = await supabase
  .from('characters')
  .select()
  .eq('name', 'Katniss')
  .maybeSingle()
```

# JavaScript Reference

csv()

## Examples

### Return data as CSV

```ts
const { data, error } = await supabase
  .from('characters')
  .select()
  .csv()
```

# JavaScript Reference

returns()

## Examples

### Override type of successful response

```ts
const { data } = await supabase
  .from('countries')
  .select()
  .returns<Array<MyType>>()
```

### Override type of object response

```ts
const { data } = await supabase
  .from('countries')
  .select()
  .maybeSingle()
  .returns<MyType>()
```

# JavaScript Reference

overrideTypes()

## Examples

### Complete Override type of successful response

```ts
const { data } = await supabase
  .from('countries')
  .select()
  .overrideTypes<Array<MyType>, { merge: false }>()
```

### Complete Override type of object response

```ts
const { data } = await supabase
  .from('countries')
  .select()
  .maybeSingle()
  .overrideTypes<MyType, { merge: false }>()
```

### Partial Override type of successful response

```ts
const { data } = await supabase
  .from('countries')
  .select()
  .overrideTypes<Array<{ status: "A" | "B" }>>()
```

### Partial Override type of object response

```ts
const { data } = await supabase
  .from('countries')
  .select()
  .maybeSingle()
  .overrideTypes<{ status: "A" | "B" }>()
```

### Example 5

```typescript
// Merge with existing types (default behavior)
const query = supabase
  .from('users')
  .select()
  .overrideTypes<{ custom_field: string }>()

// Replace existing types completely
const replaceQuery = supabase
  .from('users')
  .select()
  .overrideTypes<{ id: number; name: string }, { merge: false }>()
```

# JavaScript Reference

Using Explain

## Examples

### Get the execution plan

```ts
const { data, error } = await supabase
  .from('characters')
  .select()
  .explain()
```

### Get the execution plan with analyze and verbose

```ts
const { data, error } = await supabase
  .from('characters')
  .select()
  .explain({analyze:true,verbose:true})
```

# JavaScript Reference

Overview

## Examples

### Create auth client

```js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(supabase_url, anon_key)
```

### Create auth client (server-side)

```js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(supabase_url, anon_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false
  }
})
```

# JavaScript Reference

## Examples
