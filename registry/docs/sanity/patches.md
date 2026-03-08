# Patches

It is good practice to use **patches** when modifying Sanity documents programmatically instead of replacing entire documents. Patches should make the smallest, most specific change possible so that if multiple scripts or users are modifying the same documents at the same time, Sanity is able to merge those changes in a sensible way.

A patch is a special mutation you can use with the [Mutations API](https://www.sanity.io/docs/http-reference/mutation),  some actions in the [Actions API](https://www.sanity.io/docs/http-reference/actions), and in [migrations](https://www.sanity.io/docs/content-lake/schema-and-content-migrations). Since these endpoints are transactional, you may submit one or several patches at once, potentially changing any number of documents in one single transaction. Here is an example of a full transaction submitting two patches at once (This sets the name property of the document with id "person-123" to "Remington Steele" and adds a reference to it to the end of the people-array of the document with the id "remingtons":

```json
{
  "mutations": [
    {
      "patch": {
        "id": "person-1234",
        "set": {
          "name": "Remington Steele"
        }
      }
    },
    {
      "patch": {
        "id": "remingtons",
        "insert": {
          "after": "people[-1]",
          "items": [
            {
              "_type": "reference",
              "_ref": "person-1234"
            }
          ]
        }
      }
    }
  ]
}
```

**Note:** Generally the keys of the patches use [JSONMatch syntax](https://www.sanity.io/docs/content-lake/json-match) to target values for change. This syntax generally allows for paths like `some.array[8].attribute`, but can also do pattern matching, recursive search, and target multiple values at once. The full syntax is [documented here](https://www.sanity.io/docs/content-lake/json-match).

> \[!TIP]
> Protip
> `JSONMatch` is a variant of `JSONPath` that simplifies the syntax and eliminating to the maximum extent the number of special characters required to express a path.

## Field Name Restrictions

When using patch operations, field names that start with digits must use bracket notation. For example, if you have a field named `123field` or a UUID like `37819f29-cd8e-438a-bf53-27953351677a`, you cannot use:

```
{
    "set": {
        "123field": "value",
        "37819f29-cd8e-438a-bf53-27953351677a": "value"
    }
}
```

Instead, use bracket notation:

```
{
    "set": {
        "['123field']": "value",
        "['37819f29-cd8e-438a-bf53-27953351677a']": "value"
    }
}
```

This applies to all patch operations (`set`, `setIfMissing`, `inc`, `dec`, etc.). The API will return a helpful error message if you attempt to use numeric field names without brackets, preventing silent failures that could occur in earlier API versions.

**Note**: This validation was introduced in API version 2025-08-18. Earlier versions may silently fail or return unclear errors when using numeric field names.

## Patch types

### set

`set` performs a shallow merge of its argument into the document. Each key in the argument is either an attribute or a JSON path.

#### Usage

```
{
  "set": {
    attributeOrJSONPathExpression: any
  }
}
```

#### Examples

**Object properties**

Set the field `name` to the value `Bob` and the nested field `personalMetrics.height` to `201`:

```json
{
  "set": {
    "name": "Bob",
    "personalMetrics.height": 201
  }
}
```

**Arrays**

Set the `text` property to the value `Do the thing!` in all objects in the `body` array where the `_type` is `cta`:

```json
{ 
  "set": {
    "body[_type==\"cta\"].text": "Do the thing!" 
  }
}
```

> \[!WARNING]
> Gotcha
> Notice that the array filter (`[_type == \"cta\"]`) must use double quotes. If you are in JSON, you must [escape them](https://stackoverflow.com/a/15637481/1285253) (`\"`).

### setIfMissing

`setIfMissing` is like `set`, except existing keys will be preserved and not overwritten.

### unset

Deletes one or more attributes. Each entry in the argument is either an attribute or a JSON path. Missing attributes are ignored. Unset can also be used to delete elements of an array.

#### Usage

```json
{
  "unset": [ attributeOrJSONPathExpression, ... ] 
}
```

#### Example

```json
{ 
  "unset": ["foo", "bar"] 
}
```

### insert

`insert` provides methods for modifying arrays, by inserting, appending and replacing elements via a JSONPath expression.

#### Append to the end of an array

Inserts the string `"a"` at the end of the array `some.array:`

```json
{
  "insert": {
    "after": "some.array[-1]",
    "items": ["a"]
  }
}
```

#### Insert into an array

Inserts the string `"a"` at index 2 before whatever was there:

```json
{
  "insert": {
    "before": "some.array[2]",
    "items": ["a"]
  }
}
```

#### Prepend to the start of an array

This inserts the string `"a"` at the beginning of the array.

```json
{
  "insert": {
    "before": "some.array[0]",
    "items": ["a"]
  }
}
```

#### Replace an item in an array

This removes index 2 through the end of the array, replacing the content with `"a"`.

```json
{
  "insert": {
    "replace": "some.array[2:]",
    "items": ["a"]
  }
}
```

#### Advanced use of JSONMatch

*NOTE: see the article on JSONMatch for more details*

Finds the element that has `key == 'abc-123'` and inserts `"a"` after it.

```json
{
  "insert": {
    "after": "some.array[key == \"abc-123\"]",
    "items": ["a"]
  }
}
```

Finds any object that has `key == 'list-123'` adds `"a"` at the beginning of its items array:

```json
{
  "insert": {
    "before": "blocktext..[key=\"list-123\"].items[0]",
    "items": ["a"]
  }
}
```

> \[!WARNING]
> Gotcha
> Since single quotes are used to denote field names, regular strings *must* be enclosed in double quotes. When defining patches in JSON, the double quotation marks needs to be [escaped](https://stackoverflow.com/a/15637481/1285253) (`\"`).

### inc/dec

`inc` and `dec` change a numeric value. Each entry in the argument is either an attribute or a JSON path. For each entry, the attribute is looked up, modified and stored. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.

`inc` increments; `dec` is the same as `inc`, except the value is decremented.

#### Examples

```json
{
  "inc": {
    "stats.visitorCount": 1
  }
}
```

If it's not certain whether the attribute exists, you can provide a default with `setIfMissing`:

```json
{
  "setIfMissing": {
    "stats.visitorCount": 0
  },
  "inc": {
    "stats.visitorCount": 1
  }
}
```

#### diffMatchPatch

This operation supports robust incremental text patches according to the [Google diff-match-patch algorithm](https://code.google.com/p/google-diff-match-patch/), which has wide library support in practically all programming languages in common use. Given the document:

```json
{
  "_id": "dog-1",
  "_type": "someType",
  "aboutADog": "The rabid dog"
}
```

The following patch applies a diff-match-patch patch to the string:

```json
{
  "patch": {
    "id": "dog-1",
    "diffMatchPatch": {
      "aboutADog": "@@ -1,13 +1,12 @@\n The \n-rabid\n+nice\n  dog\n"
    }
  }
}
```

The document is transformed to read:

```json
{
  "_id": "dog-1",
  "_type": "someType",
  "aboutADog": "The nice dog"
}
```

The beauty of diff-match-patch patches is that they allow you to modify huge strings with small patches, and that they compose well, generally giving sane results even when several users or scripts are modifying the same text.
