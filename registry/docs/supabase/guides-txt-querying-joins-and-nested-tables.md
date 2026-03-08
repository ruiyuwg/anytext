# Querying Joins and Nested tables

The data APIs automatically detect relationships between Postgres tables. Since Postgres is a relational database, this is a very common scenario.

## One-to-many joins

Let's use an example database that stores `orchestral_sections` and `instruments`:

````
**Orchestral sections**

| `id` | `name`    |
| ---- | --------- |
| 1    | strings   |
| 2    | woodwinds |

**Instruments**

| `id` | `name` | `section_id` |
| ---- | ------ | ------------ |
| 1    | violin | 1            |
| 2    | viola  | 1            |
| 3    | flute  | 2            |
| 4    | oboe   | 2            |



```sql
create table orchestral_sections (
  "id" serial primary key,
  "name" text
);

insert into orchestral_sections
  (id, name)
values
  (1, 'strings'),
  (2, 'woodwinds');

create table instruments (
  "id" serial primary key,
  "name" text,
  "section_id" int references "orchestral_sections"
);

insert into instruments
  (name, section_id)
values
  ('violin', 1),
  ('viola', 1),
  ('flute', 2),
  ('oboe', 2);
```
````

The APIs will automatically detect relationships based on the foreign keys:

````
```js
const { data, error } = await supabase.from('orchestral_sections').select(`
  id,
  name,
  instruments ( id, name )
`)
```

### TypeScript types for joins

`supabase-js` always returns a `data` object (for success), and an `error` object (for unsuccessful requests).

These helper types provide the result types from any query, including nested types for database joins.

Given the following schema with a relation between orchestral sections and instruments:

```sql
create table orchestral_sections (
  "id" serial primary key,
  "name" text
);

create table instruments (
  "id" serial primary key,
  "name" text,
  "section_id" int references "orchestral_sections"
);
```

We can get the nested `SectionsWithInstruments` type like this:

```ts
import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'

const sectionsWithInstrumentsQuery = supabase.from('orchestral_sections').select(`
  id,
  name,
  instruments (
    id,
    name
  )
`)
type SectionsWithInstruments = QueryData

const { data, error } = await sectionsWithInstrumentsQuery
if (error) throw error
const sectionsWithInstruments: SectionsWithInstruments = data
```



```dart
final data = await supabase.from('orchestral_sections').select('id, name, instruments(id, name)');
```



```swift
struct OrchestralSection: Codable {
  let id: Int
  let name: String
  let instruments: [Instrument]

  struct Instrument: Codable {
    let id: Int
    let name: String
  }
}

let orchestralSections: [OrchestralSection] = try await supabase
  .from("orchestral_sections")
  .select("id, name, instruments(id, name)")
  .execute()
  .value
```



```kotlin
val data = supabase.from("orchestral_sections").select(Columns.raw("id, name, instruments(id, name)"))
```



```python
data = supabase.from_('orchestral_sections').select('id, name, instruments(id, name)').execute()
```



```javascript
const Query = `
  query {
    orchestral_sectionsCollection {
      edges {
        node {
          id
          name
          instruments {
            id,
            name
          }
        }
      }
    }
  }
`
```



```bash
GET https://[REF].supabase.co/rest/v1/orchestral_sections?select=id,name,instruments(id,name)
```
````

## Join types and join modifiers

By default, embedded relations use **left join** semantics from the parent table:

- Parent rows are returned even if no related rows match.
- The embedded relation is `[]` for one-to-many joins and `null` for many-to-one joins when nothing matches.

To filter out parent rows that do not match the related table, use `!inner` on the embedded relation.

### What `:` and `!` mean in join syntax

| Syntax                          | Meaning                                                                                 | Example                                 |
| ------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------- |
| `alias:relation(columns)`       | Rename the embedded relation in the response.                                           | `start_scan:scans(id, badge_scan_time)` |
| `relation!inner(columns)`       | Use `inner join` behavior for that embedded relation.                                   | `instruments!inner(id, name)`           |
| `relation!foreign_key(columns)` | Choose which foreign key relationship to use when multiple foreign keys match the join. | `scans!scan_id_start(id)`               |

### Example data for join types

````
#### Orchestral sections

| `id` | `name`     |
| ---- | ---------- |
| 1    | strings    |
| 2    | woodwinds  |
| 3    | percussion |

#### Instruments

| `id` | `name` | `section_id` |
| ---- | ------ | ------------ |
| 1    | violin | 1            |
| 2    | viola  | 1            |
| 3    | flute  | 2            |
| 4    | oboe   | 2            |



```sql
create table orchestral_sections (
  "id" serial primary key,
  "name" text
);

insert into orchestral_sections
  (id, name)
values
  (1, 'strings'),
  (2, 'woodwinds'),
  (3, 'percussion');

create table instruments (
  "id" serial primary key,
  "name" text,
  "section_id" int references orchestral_sections
);

insert into instruments
  (id, name, section_id)
values
  (1, 'violin', 1),
  (2, 'viola', 1),
  (3, 'flute', 2),
  (4, 'oboe', 2);
```
````

### Left join (default)

This query filters on a joined field (`instruments.name`) but still returns all parent rows:

````
```js
const { data, error } = await supabase
  .from('orchestral_sections')
  .select(
    `
    id,
    name,
    instruments ( id, name )
  `
  )
  .eq('instruments.name', 'flute')
```



```dart
final data = await supabase
  .from('orchestral_sections')
  .select('''
    id,
    name,
    instruments ( id, name )
  ''')
  .eq('instruments.name', 'flute');
```



```swift
try await supabase
  .from("orchestral_sections")
  .select(
    """
      id,
      name,
      instruments ( id, name )
    """
  )
  .eq("instruments.name", value: "flute")
  .execute()
```



```kotlin
val columns = Columns.raw("""
    id,
    name,
    instruments ( id, name )
""".trimIndent())

val data = supabase.from("orchestral_sections").select(
  columns = columns
) {
  filter {
    eq("instruments.name", "flute")
  }
}
```



```python
data = (
  supabase.from_('orchestral_sections')
  .select('id, name, instruments(id, name)')
  .eq('instruments.name', 'flute')
  .execute()
)
```



```bash
GET https://[REF].supabase.co/rest/v1/orchestral_sections?select=id,name,instruments(id,name)&instruments.name=eq.flute
```
````

#### Result

```json
[
  {
    "id": 1,
    "name": "strings",
    "instruments": []
  },
  {
    "id": 2,
    "name": "woodwinds",
    "instruments": [{ "id": 3, "name": "flute" }]
  },
  {
    "id": 3,
    "name": "percussion",
    "instruments": []
  }
]
```

### Inner join (`!inner`)

Adding `!inner` filters out parent rows that don't match the joined filter:

````
```js
const { data, error } = await supabase
  .from('orchestral_sections')
  .select(
    `
    id,
    name,
    instruments!inner ( id, name )
  `
  )
  .eq('instruments.name', 'flute')
```



```dart
final data = await supabase
  .from('orchestral_sections')
  .select('''
    id,
    name,
    instruments!inner ( id, name )
  ''')
  .eq('instruments.name', 'flute');
```



```swift
try await supabase
  .from("orchestral_sections")
  .select(
    """
      id,
      name,
      instruments!inner ( id, name )
    """
  )
  .eq("instruments.name", value: "flute")
  .execute()
```



```kotlin
val columns = Columns.raw("""
    id,
    name,
    instruments!inner ( id, name )
""".trimIndent())

val data = supabase.from("orchestral_sections").select(
  columns = columns
) {
  filter {
    eq("instruments.name", "flute")
  }
}
```



```python
data = (
  supabase.from_('orchestral_sections')
  .select('id, name, instruments!inner(id, name)')
  .eq('instruments.name', 'flute')
  .execute()
)
```



```bash
GET https://[REF].supabase.co/rest/v1/orchestral_sections?select=id,name,instruments!inner(id,name)&instruments.name=eq.flute
```
````

#### Result

```json
[
  {
    "id": 2,
    "name": "woodwinds",
    "instruments": [{ "id": 3, "name": "flute" }]
  }
]
```

### Filtering using joined fields

Use `joined_table.column` in filters (for example `eq`, `neq`, and `in`):

````
```js
const { data, error } = await supabase
  .from('instruments')
  .select(
    `
    id,
    name,
    orchestral_sections!inner ( id, name )
  `
  )
  .eq('orchestral_sections.name', 'woodwinds')
```



```dart
final data = await supabase
  .from('instruments')
  .select('''
    id,
    name,
    orchestral_sections!inner ( id, name )
  ''')
  .eq('orchestral_sections.name', 'woodwinds');
```



```swift
try await supabase
  .from("instruments")
  .select(
    """
      id,
      name,
      orchestral_sections!inner ( id, name )
    """
  )
  .eq("orchestral_sections.name", value: "woodwinds")
  .execute()
```



```kotlin
val columns = Columns.raw("""
    id,
    name,
    orchestral_sections!inner ( id, name )
""".trimIndent())

val data = supabase.from("instruments").select(
  columns = columns
) {
  filter {
    eq("orchestral_sections.name", "woodwinds")
  }
}
```



```python
data = (
  supabase.from_('instruments')
  .select('id, name, orchestral_sections!inner(id, name)')
  .eq('orchestral_sections.name', 'woodwinds')
  .execute()
)
```



```bash
GET https://[REF].supabase.co/rest/v1/instruments?select=id,name,orchestral_sections!inner(id,name)&orchestral_sections.name=eq.woodwinds
```
````

#### Result

```json
[
  {
    "id": 3,
    "name": "flute",
    "orchestral_sections": {
      "id": 2,
      "name": "woodwinds"
    }
  },
  {
    "id": 4,
    "name": "oboe",
    "orchestral_sections": {
      "id": 2,
      "name": "woodwinds"
    }
  }
]
```

## Many-to-many joins

The data APIs will detect many-to-many joins. For example, if you have a database which stored teams of users (where each user could belong to many teams):

```sql
create table users (
  "id" serial primary key,
  "name" text
);

create table teams (
  "id" serial primary key,
  "team_name" text
);

create table members (
  "user_id" int references users,
  "team_id" int references teams,
  primary key (user_id, team_id)
);
```

In these cases you don't need to explicitly define the joining table (members). If we wanted to fetch all the teams and the members in each team:

`````
```js
const { data, error } = await supabase.from('teams').select(`
  id,
  team_name,
  users ( id, name )
`)
```



```dart
final data = await supabase.from('teams').select('id, team_name, users(id, name)');
```



```swift
struct Team: Codable {
  let id: Int
  let name: String
  let users: [User]

  struct User: Codable {
    let id: Int
    let name: String
  }

  enum CodingKeys: String, CodingKey {
    case id, users
    case name = "team_name"
  }
}
let teams [Team] = try await supabase
  .from("teams")
  .select(
    """
      id,
      team_name,
      users ( id, name )
    """
  )
  .execute()
  .value
```



```kotlin
val data = supabase.from("teams").select(Columns.raw("id, team_name, users(id, name)"));
```



```python
data = supabase.from_('teams').select('id, team_name, users(id, name)').execute()
```



````javascript
const Query = `
  query {




```javascript
const Query = `
  query {
    teamsCollection {
      edges {
        node {
          id
          team_name
          users {
            id,
            name
          }
        }
      }
    }
  }
`
````



```bash
GET https://[REF].supabase.co/rest/v1/teams?select=id,team_name,users(id,name)
```
`````

## Specifying the `ON` clause for joins with multiple foreign keys

For example, if you have a project that tracks when employees check in and out of work shifts:

```sql
-- Employees
create table users (
  "id" serial primary key,
  "name" text
);

-- Badge scans
create table scans (
  "id" serial primary key,
  "user_id" int references users,
  "badge_scan_time" timestamp
);

-- Work shifts
create table shifts (
  "id" serial primary key,
  "user_id" int references users,
  "scan_id_start" int references scans, -- clocking in
  "scan_id_end" int references scans, -- clocking out
  "attendance_status" text
);
```

In this case, you need to explicitly define the join because the joining column on `shifts` is ambiguous as they are both referencing the `scans` table.

To fetch all the `shifts` with `scan_id_start` and `scan_id_end` related to a specific `scan`, use the following syntax:

````
```js
const { data, error } = await supabase.from('shifts').select(
  `
    *,
    start_scan:scans!scan_id_start (
      id,
      user_id,
      badge_scan_time
    ),
   end_scan:scans!scan_id_end (
     id,
     user_id,
     badge_scan_time
    )
  `
)
```



```dart
final data = await supabase.from('shifts').select('''
  *,
  start_scan:scans!scan_id_start (
    id,
    user_id,
    badge_scan_time
  ),
end_scan:scans!scan_id_end (
    id,
    user_id,
    badge_scan_time
  )
''');
```



```swift
struct Shift: Codable {
  let id: Int
  let userId: Int
  let attendanceStatus: String?

  let scans: [Scan]

  struct Scan: Codable {
    let id: Int
    let userId: Int
    let badgeScanTime: TimeInterval

    enum CodingKeys: String, CodingKey {
      case id
      case userId = "user_id"
      case badgeScanTime = "badge_scan_time"
    }
  }

  enum CodingKeys: String, CodingKey {
    case id
    case userId = "user_id"
    case attendanceStatus = "attendance_status"
  }
}

let shifts: [Shift] = try await supabase
  .from("shifts")
  .select(
    """
      *,
      start_scan:scans!scan_id_start (
        id,
        user_id,
        badge_scan_time
      ),
     scans: scan_id_end (
        id,
        user_id,
        badge_scan_time
     )
    """
  )
  .execute()
  .value
```



```kotlin
val data = supabase.from("shifts").select(Columns.raw('''
  *,
  start_scan:scans!scan_id_start (
    id,
    user_id,
    badge_scan_time
  ),
end_scan:scans!scan_id_end (
    id,
    user_id,
    badge_scan_time
  )
'''));
```



```python
data = supabase.from_('shifts').select("""
  *,
  start_scan:scans!scan_id_start (
    id,
    user_id,
    badge_scan_time
  ),
  end_scan:scans!scan_id_end (
    id,
    user_id,
    badge_scan_time
  )
""").execute()
```



```javascript
const Query = `
  query {
    shiftsCollection {
      edges {
        node {
          id
          user_id
          attendance_status
          scan_id_start {
            id
            user_id
            badge_scan_time
          }
          scan_id_end {
            id
            user_id
            badge_scan_time
          }
        }
      }
    }
  }
`
```
````
