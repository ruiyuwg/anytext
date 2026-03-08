## Declaring New Data Types

### Primitive Data Types

To declare a schema for a primitive data type, such as `File`, you can use the `Schema.declare` function along with a type guard.

**Example** (Declaring a Schema for `File`)

```ts twoslash
import { Schema } from "effect"

// Declare a schema for the File type using a type guard
const FileFromSelf = Schema.declare(
  (input: unknown): input is File => input instanceof File
)

const decode = Schema.decodeUnknownSync(FileFromSelf)

// Decoding a valid File object
console.log(decode(new File([], "")))
/*
Output:
File { size: 0, type: '', name: '', lastModified: 1724774163056 }
*/

// Decoding an invalid input
decode(null)
/*
throws
ParseError: Expected <declaration schema>, actual null
*/
```

Annotations like `identifier` and `description` are useful for improving
error messages and making schemas self-documenting.

To enhance the default error message, you can add annotations, particularly the `identifier`, `title`, and `description` annotations (none of these annotations are required, but they are encouraged for good practice and can make your schema "self-documenting"). These annotations will be utilized by the messaging system to return more meaningful messages.

- **Identifier**: a unique name for the schema
- **Title**: a brief, descriptive title
- **Description**: a detailed explanation of the schema's purpose

**Example** (Declaring a Schema with Annotations)

```ts twoslash
import { Schema } from "effect"

// Declare a schema for the File type with additional annotations
const FileFromSelf = Schema.declare(
  (input: unknown): input is File => input instanceof File,
  {
    // A unique identifier for the schema
    identifier: "FileFromSelf",
    // Detailed description of the schema
    description: "The `File` type in JavaScript"
  }
)

const decode = Schema.decodeUnknownSync(FileFromSelf)

// Decoding a valid File object
console.log(decode(new File([], "")))
/*
Output:
File { size: 0, type: '', name: '', lastModified: 1724774163056 }
*/

// Decoding an invalid input
decode(null)
/*
throws
ParseError: Expected FileFromSelf, actual null
*/
```

### Type Constructors

Type constructors are generic types that take one or more types as arguments and return a new type. To define a schema for a type constructor, you can use the `Schema.declare` function.

**Example** (Declaring a Schema for `ReadonlySet<A>`)

```ts twoslash
import { ParseResult, Schema } from "effect"

export const MyReadonlySet = <A, I, R>(
  // Schema for the elements of the Set
  item: Schema.Schema<A, I, R>
): Schema.Schema<ReadonlySet<A>, ReadonlySet<I>, R> =>
  Schema.declare(
    // Store the schema for the Set's elements
    [item],
    {
      // Decoding function
      decode: (item) => (input, parseOptions, ast) => {
        if (input instanceof Set) {
          // Decode each element in the Set
          const elements = ParseResult.decodeUnknown(Schema.Array(item))(
            Array.from(input.values()),
            parseOptions
          )
          // Return a ReadonlySet containing the decoded elements
          return ParseResult.map(
            elements,
            (as): ReadonlySet<A> => new Set(as)
          )
        }
        // Handle invalid input
        return ParseResult.fail(new ParseResult.Type(ast, input))
      },
      // Encoding function
      encode: (item) => (input, parseOptions, ast) => {
        if (input instanceof Set) {
          // Encode each element in the Set
          const elements = ParseResult.encodeUnknown(Schema.Array(item))(
            Array.from(input.values()),
            parseOptions
          )
          // Return a ReadonlySet containing the encoded elements
          return ParseResult.map(
            elements,
            (is): ReadonlySet<I> => new Set(is)
          )
        }
        // Handle invalid input
        return ParseResult.fail(new ParseResult.Type(ast, input))
      }
    },
    {
      description: `ReadonlySet<${Schema.format(item)}>`
    }
  )

// Define a schema for a ReadonlySet of numbers
const setOfNumbers = MyReadonlySet(Schema.NumberFromString)

const decode = Schema.decodeUnknownSync(setOfNumbers)

console.log(decode(new Set(["1", "2", "3"]))) // Set(3) { 1, 2, 3 }

// Decode an invalid input
decode(null)
/*
throws
ParseError: Expected ReadonlySet<NumberFromString>, actual null
*/

// Decode a Set with an invalid element
decode(new Set(["1", null, "3"]))
/*
throws
ParseError: ReadonlyArray<NumberFromString>
└─ [1]
   └─ NumberFromString
      └─ Encoded side transformation failure
         └─ Expected string, actual null
*/
```

The decoding and encoding functions cannot rely on context (the
`Requirements` type parameter) and cannot handle asynchronous effects.
This means that only synchronous operations are supported within these
functions.

### Adding Compilers Annotations

When defining a new data type, some compilers like [Arbitrary](/docs/schema/arbitrary/) or [Pretty](/docs/schema/pretty/) may not know how to handle the new type.
This can result in an error, as the compiler may lack the necessary information for generating instances or producing readable output:

**Example** (Attempting to Generate Arbitrary Values Without Required Annotations)

```ts twoslash
import { Arbitrary, Schema } from "effect"

// Define a schema for the File type
const FileFromSelf = Schema.declare(
  (input: unknown): input is File => input instanceof File,
  {
    identifier: "FileFromSelf"
  }
)

// Try creating an Arbitrary instance for the schema
const arb = Arbitrary.make(FileFromSelf)
/*
throws:
Error: Missing annotation
details: Generating an Arbitrary for this schema requires an "arbitrary" annotation
schema (Declaration): FileFromSelf
*/
```

In the above example, attempting to generate arbitrary values for the `FileFromSelf` schema fails because the compiler lacks necessary annotations. To resolve this, you need to provide annotations for generating arbitrary data:

**Example** (Adding Arbitrary Annotation for Custom `File` Schema)

```ts twoslash
import { Arbitrary, FastCheck, Pretty, Schema } from "effect"

const FileFromSelf = Schema.declare(
  (input: unknown): input is File => input instanceof File,
  {
    identifier: "FileFromSelf",
    // Provide a function to generate random File instances
    arbitrary: () => (fc) =>
      fc
        .tuple(fc.string(), fc.string())
        .map(([content, path]) => new File([content], path))
  }
)

// Create an Arbitrary instance for the schema
const arb = Arbitrary.make(FileFromSelf)

// Generate sample files using the Arbitrary instance
const files = FastCheck.sample(arb, 2)
console.log(files)
/*
Example Output:
[
  File { size: 5, type: '', name: 'C', lastModified: 1706435571176 },
  File { size: 1, type: '', name: '98Ggmc', lastModified: 1706435571176 }
]
*/
```

For more details on how to add annotations for the Arbitrary compiler, refer to the [Arbitrary](/docs/schema/arbitrary/) documentation.
