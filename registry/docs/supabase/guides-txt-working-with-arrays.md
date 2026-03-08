# Working With Arrays

Postgres supports flexible [array types](https://www.postgresql.org/docs/12/arrays.html). These arrays are also supported in the Supabase Dashboard and in the JavaScript API.

## Create a table with an array column

Create a test table with a text array (an array of strings):

````
1.  Go to the [Table editor](/dashboard/project/_/editor) page in the Dashboard.
2.  Click **New Table** and create a table with the name `arraytest`.
3.  Click **Save**.
4.  Click **New Column** and create a column with the name `textarray`, type `text`, and select **Define as array**.
5.  Click **Save**.



```sql
create table arraytest (
  id integer not null,
  textarray text array
);
```
````

## Insert a record with an array value

````
1.  Go to the [Table editor](/dashboard/project/_/editor) page in the Dashboard.
2.  Select the `arraytest` table.
3.  Click **Insert row** and add `["Harry", "Larry", "Moe"]`.
4.  Click **Save.**



```sql
INSERT INTO arraytest (id, textarray) VALUES (1, ARRAY['Harry', 'Larry', 'Moe']);
```



Insert a record from the JavaScript client:

```js
const { data, error } = await supabase
  .from('arraytest')
  .insert([{ id: 2, textarray: ['one', 'two', 'three', 'four'] }])
```



Insert a record from the Swift client:

```swift
struct ArrayTest: Encodable {
  let id: Int
  let textarray: [String]
}

try await supabase
  .from("arraytest")
  .insert(
    [
      ArrayTest(
        id: 2,
        textarray: ["one", "two", "three", "four"]
      )
    ]
  )
  .execute()
```



Insert a record from the Python client:

```python
supabase.from_('arraytest').insert(
  [
    {
      id: 2,
      textarray: ["one", "two", "three", "four"]
    }
  ]
)
.execute()
```
````

## View the results

````
1.  Go to the [Table editor](/dashboard/project/_/editor) page in the Dashboard.
2.  Select the `arraytest` table.

You should see:

```
| id  | textarray               |
| --- | ----------------------- |
| 1   | ["Harry","Larry","Moe"] |
```



```sql
select * from arraytest;
```

You should see:

```
| id  | textarray               |
| --- | ----------------------- |
| 1   | ["Harry","Larry","Moe"] |
```
````

## Query array data

Postgres uses 1-based indexing (e.g., `textarray[1]` is the first item in the array).

````
To select the first item from the array and get the total length of the array:

```js
SELECT textarray[1], array_length(textarray, 1) FROM arraytest;
```

returns:

```
| textarray | array_length |
| --------- | ------------ |
| Harry     | 3            |
```



This returns the entire array field:

```js
const { data, error } = await supabase.from('arraytest').select('textarray')
console.log(JSON.stringify(data, null, 2))
```

returns:

```json
[
  {
    "textarray": ["Harry", "Larry", "Moe"]
  }
]
```



This returns the entire array field:

```swift
struct Response: Decodable {
  let textarray: [String]
}

let response: [Response] = try await supabase.from("arraytest").select("textarray").execute().value
dump(response)
```

returns:

```
[
  Response(
    textarray: ["Harry", "Larry", "Moe"],
  )
]
```
````

## Resources

- [Supabase JS Client](https://github.com/supabase/supabase-js)
- [Supabase - Get started for free](https://supabase.com)
- [Postgres Arrays](https://www.postgresql.org/docs/15/arrays.html)

# Connecting with Beekeeper Studio

[`Beekeeper Studio Community`](https://www.beekeeperstudio.io/get-community) is a free GUI tool for interacting with databases.

\<StepHikeCompact.Step step={1}>
\<StepHikeCompact.Details title="Create a new connection">
In Beekeeper, create a new Postgres connection.
\</StepHikeCompact.Details>

```
<StepHikeCompact.Code>
  ![Postgres connection](/docs/img/guides/database/connecting-to-postgres/beekeeper-studio/new-connection.png)
</StepHikeCompact.Code>
```

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={2}>
\<StepHikeCompact.Details title="Get your connection credentials">
Get your connection credentials from the [**Connect** panel](/dashboard/project/_/?showConnect=true). You will need:

```
  *   host
  *   username
  *   password
  *   port
</StepHikeCompact.Details>

<StepHikeCompact.Code>
  Add your credentials to Beekeeper's connection form

  ![Credentials](/docs/img/guides/database/connecting-to-postgres/beekeeper-studio/beekeeper-credentials.png)
</StepHikeCompact.Code>
```

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={3}>
\<StepHikeCompact.Details title="Download your SSL Certificate">
Download your SSL certificate from the Dashboard's [`Database Settings`](/dashboard/project/_/database/settings)
![SSL](/docs/img/guides/database/connecting-to-postgres/beekeeper-studio/certificate.png)
\</StepHikeCompact.Details>

```
<StepHikeCompact.Code>
  Add your SSL to the connection form
  ![SSL](/docs/img/guides/database/connecting-to-postgres/beekeeper-studio/certificate-beekeeper.png)
</StepHikeCompact.Code>
```

\</StepHikeCompact.Step>

\<StepHikeCompact.Step step={4}>
\<StepHikeCompact.Details title="Test and connect">
Test your connection and then connect
\</StepHikeCompact.Details>

```
<StepHikeCompact.Code>
  ![SSL](/docs/img/guides/database/connecting-to-postgres/beekeeper-studio/connect.png)
</StepHikeCompact.Code>
```

\</StepHikeCompact.Step>
