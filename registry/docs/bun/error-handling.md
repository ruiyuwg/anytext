## Error Handling

The client provides typed errors for different failure scenarios. Errors are database-specific and extend from base error classes:

### Error Classes

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { SQL } from "bun";

try {
  await sql`SELECT * FROM users`;
} catch (error) {
  if (error instanceof SQL.PostgresError) {
    // PostgreSQL-specific error
    console.log(error.code); // PostgreSQL error code
    console.log(error.detail); // Detailed error message
    console.log(error.hint); // Helpful hint from PostgreSQL
  } else if (error instanceof SQL.SQLiteError) {
    // SQLite-specific error
    console.log(error.code); // SQLite error code (e.g., "SQLITE_CONSTRAINT")
    console.log(error.errno); // SQLite error number
    console.log(error.byteOffset); // Byte offset in SQL statement (if available)
  } else if (error instanceof SQL.SQLError) {
    // Generic SQL error (base class)
    console.log(error.message);
  }
}
```

### PostgreSQL Connection Errors

| Connection Errors                 | Description                                          |
| --------------------------------- | ---------------------------------------------------- |
| `ERR_POSTGRES_CONNECTION_CLOSED`  | Connection was terminated or never established       |
| `ERR_POSTGRES_CONNECTION_TIMEOUT` | Failed to establish connection within timeout period |
| `ERR_POSTGRES_IDLE_TIMEOUT`       | Connection closed due to inactivity                  |
| `ERR_POSTGRES_LIFETIME_TIMEOUT`   | Connection exceeded maximum lifetime                 |
| `ERR_POSTGRES_TLS_NOT_AVAILABLE`  | SSL/TLS connection not available                     |
| `ERR_POSTGRES_TLS_UPGRADE_FAILED` | Failed to upgrade connection to SSL/TLS              |

### Authentication Errors

| Authentication Errors                            | Description                              |
| ------------------------------------------------ | ---------------------------------------- |
| `ERR_POSTGRES_AUTHENTICATION_FAILED_PBKDF2`      | Password authentication failed           |
| `ERR_POSTGRES_UNKNOWN_AUTHENTICATION_METHOD`     | Server requested unknown auth method     |
| `ERR_POSTGRES_UNSUPPORTED_AUTHENTICATION_METHOD` | Server requested unsupported auth method |
| `ERR_POSTGRES_INVALID_SERVER_KEY`                | Invalid server key during authentication |
| `ERR_POSTGRES_INVALID_SERVER_SIGNATURE`          | Invalid server signature                 |
| `ERR_POSTGRES_SASL_SIGNATURE_INVALID_BASE64`     | Invalid SASL signature encoding          |
| `ERR_POSTGRES_SASL_SIGNATURE_MISMATCH`           | SASL signature verification failed       |

### Query Errors

| Query Errors                         | Description                                |
| ------------------------------------ | ------------------------------------------ |
| `ERR_POSTGRES_SYNTAX_ERROR`          | Invalid SQL syntax (extends `SyntaxError`) |
| `ERR_POSTGRES_SERVER_ERROR`          | General error from PostgreSQL server       |
| `ERR_POSTGRES_INVALID_QUERY_BINDING` | Invalid parameter binding                  |
| `ERR_POSTGRES_QUERY_CANCELLED`       | Query was cancelled                        |
| `ERR_POSTGRES_NOT_TAGGED_CALL`       | Query was called without a tagged call     |

### Data Type Errors

| Data Type Errors                                        | Description                           |
| ------------------------------------------------------- | ------------------------------------- |
| `ERR_POSTGRES_INVALID_BINARY_DATA`                      | Invalid binary data format            |
| `ERR_POSTGRES_INVALID_BYTE_SEQUENCE`                    | Invalid byte sequence                 |
| `ERR_POSTGRES_INVALID_BYTE_SEQUENCE_FOR_ENCODING`       | Encoding error                        |
| `ERR_POSTGRES_INVALID_CHARACTER`                        | Invalid character in data             |
| `ERR_POSTGRES_OVERFLOW`                                 | Numeric overflow                      |
| `ERR_POSTGRES_UNSUPPORTED_BYTEA_FORMAT`                 | Unsupported binary format             |
| `ERR_POSTGRES_UNSUPPORTED_INTEGER_SIZE`                 | Integer size not supported            |
| `ERR_POSTGRES_MULTIDIMENSIONAL_ARRAY_NOT_SUPPORTED_YET` | Multidimensional arrays not supported |
| `ERR_POSTGRES_NULLS_IN_ARRAY_NOT_SUPPORTED_YET`         | NULL values in arrays not supported   |

### Protocol Errors

| Protocol Errors                         | Description                 |
| --------------------------------------- | --------------------------- |
| `ERR_POSTGRES_EXPECTED_REQUEST`         | Expected client request     |
| `ERR_POSTGRES_EXPECTED_STATEMENT`       | Expected prepared statement |
| `ERR_POSTGRES_INVALID_BACKEND_KEY_DATA` | Invalid backend key data    |
| `ERR_POSTGRES_INVALID_MESSAGE`          | Invalid protocol message    |
| `ERR_POSTGRES_INVALID_MESSAGE_LENGTH`   | Invalid message length      |
| `ERR_POSTGRES_UNEXPECTED_MESSAGE`       | Unexpected message type     |

### Transaction Errors

| Transaction Errors                       | Description                           |
| ---------------------------------------- | ------------------------------------- |
| `ERR_POSTGRES_UNSAFE_TRANSACTION`        | Unsafe transaction operation detected |
| `ERR_POSTGRES_INVALID_TRANSACTION_STATE` | Invalid transaction state             |

### SQLite-Specific Errors

SQLite errors provide error codes and numbers that correspond to SQLite's standard error codes:

| Error Code          | errno | Description                                          |
| ------------------- | ----- | ---------------------------------------------------- |
| `SQLITE_CONSTRAINT` | 19    | Constraint violation (UNIQUE, CHECK, NOT NULL, etc.) |
| `SQLITE_BUSY`       | 5     | Database is locked                                   |
| `SQLITE_LOCKED`     | 6     | Table in the database is locked                      |
| `SQLITE_READONLY`   | 8     | Attempt to write to a readonly database              |
| `SQLITE_IOERR`      | 10    | Disk I/O error                                       |
| `SQLITE_CORRUPT`    | 11    | Database disk image is malformed                     |
| `SQLITE_FULL`       | 13    | Database or disk is full                             |
| `SQLITE_CANTOPEN`   | 14    | Unable to open database file                         |
| `SQLITE_PROTOCOL`   | 15    | Database lock protocol error                         |
| `SQLITE_SCHEMA`     | 17    | Database schema has changed                          |
| `SQLITE_TOOBIG`     | 18    | String or BLOB exceeds size limit                    |
| `SQLITE_MISMATCH`   | 20    | Data type mismatch                                   |
| `SQLITE_MISUSE`     | 21    | Library used incorrectly                             |
| `SQLITE_AUTH`       | 23    | Authorization denied                                 |

Example error handling:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const sqlite = new SQL("sqlite://app.db");

try {
  await sqlite`INSERT INTO users (id, name) VALUES (1, 'Alice')`;
  await sqlite`INSERT INTO users (id, name) VALUES (1, 'Bob')`; // Duplicate ID
} catch (error) {
  if (error instanceof SQL.SQLiteError) {
    if (error.code === "SQLITE_CONSTRAINT") {
      console.log("Constraint violation:", error.message);
      // Handle unique constraint violation
    }
  }
}
```

***

## Numbers and BigInt

Bun's SQL client includes special handling for large numbers that exceed the range of a 53-bit integer. Here's how it works:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { sql } from "bun";

const [{ x, y }] = await sql`SELECT 9223372036854777 as x, 12345 as y`;

console.log(typeof x, x); // "string" "9223372036854777"
console.log(typeof y, y); // "number" 12345
```

***

## BigInt Instead of Strings

If you need large numbers as BigInt instead of strings, you can enable this by setting the `bigint` option to `true` when initializing the SQL client:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const sql = new SQL({
  bigint: true,
});

const [{ x }] = await sql`SELECT 9223372036854777 as x`;

console.log(typeof x, x); // "bigint" 9223372036854777n
```

***

## Roadmap

There's still some things we haven't finished yet.

- Connection preloading via `--db-preconnect` Bun CLI flag
- Column name transforms (e.g. `snake_case` to `camelCase`). This is mostly blocked on a unicode-aware implementation of changing the case in C++ using WebKit's `WTF::String`.
- Column type transforms

***
