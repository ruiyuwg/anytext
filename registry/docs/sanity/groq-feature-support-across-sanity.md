# GROQ feature support across Sanity

#### New to GROQ?

If you are just getting started with GROQ, check out the getting started guide first.
[Get started with GROQ](https://www.sanity.io/docs/content-lake/groq-introduction)

GROQ is available across many parts of the Sanity platform, but not every feature or tool supports the full language. This summary maps out what's available where.

## Query API and @sanity/client

The Query HTTP API (`/query` endpoint) and `@sanity/client`'s `fetch` method provide the most complete GROQ support. This includes the full pipeline syntax, joins and sub-queries, reference dereferencing (`->`), all built-in functions and namespaces (`string::`, `array::`, `math::`, `pt::`, `geo::`, `dateTime::`, etc.), the `score()` and `order()` pipe functions, custom GROQ functions (`fn`), and perspectives.

**Not available:** Delta functions (`before()`, `after()`, `delta::changedAny()`, etc.) as there's no change event in this context.

## Webhooks (filters and projections)

Webhook filters and projections operate in a **delta context** scoped to the document that triggered the event. This is the main place where Delta-GROQ shines.

**Available:** All standard filter operators, `before()` and `after()` for comparing document states, `delta::changedAny()`, `delta::changedOnly()`, `delta::operation()`, reference dereferencing in projections, the `sanity::` namespace functions, and string/array manipulation.

**Not available:** Sub-queries are not supported in webhook projections or filters. You cannot use `*[...]` inside a projection to query other documents. If you need data from other documents, the recommended approach is to handle the sub-query in your receiving endpoint after the webhook fires.

## Sanity Functions (filters and projections)

Functions use the same delta-context model as webhooks, with filters and projections configured separately in the function definition.

**Available:** All standard filter operators, `before()` and `after()` for comparing document states, `delta::changedAny()`, `delta::changedOnly()`, `delta::operation()`, reference dereferencing in projections (`->`) syntax), the `sanity::` namespace functions, and string/array manipulation.

**Not available:** Sub-queries are not supported in projections or filters. You cannot use `*[...]` inside a projection to query other documents. If you need data from other documents, the recommended approach is to handle the sub-query in the function.

**Current caveat:** Locally invoked functions (via `npx sanity functions test` or `npx sanity functions dev`) do not yet support the expanded GROQ features (delta functions, dereferences, etc.) and may return errors. Sanity recommends testing locally without these features and using logs to test deployed functions with the added features.

## Listen API (client.listen())

The Listen API establishes real-time subscriptions via HTTP GET requests with the GROQ query passed as a URL parameter.

**Limitations:**

- Joins and complex projections are ignored. The API only uses the filter portion to determine which document changes to stream.
- No Delta-GROQ support.

**Recommendation:** For real-time use cases, the [Live Content API](https://www.sanity.io/docs/content-lake/live-content-api) is the preferred modern alternative. It uses a different architecture integrates directly with framework-specific tooling.

## groq-js (JavaScript GROQ implementation)

`groq-js` is the open-source JavaScript implementation of GROQ used by tools like the [functions dev playground](https://www.sanity.io/docs/functions/functions-local-testing) and the [GROQ Arcade](https://www.groq.dev). It evaluates queries against an in-memory dataset rather than the Content Lake.

**Limitations:**

- While `groq-js` does support many functions like `sanity::projectId()`, `sanity::dataset()`, and Delta functions, these may not return the expected results when not used with in conjunction with the Content Lake.
- Performance characteristics differ from the Content Lake engine; it runs against local data in the browser or Node.js.

## TypeGen

Sanity TypeGen generates TypeScript types from GROQ queries but only [supports a subset of the language](https://www.sanity.io/docs/apis-and-sdks/sanity-typegen) for type inference.

**Supported:** Basic data types, selectors (`*`, `@`, `^`), common functions (`coalesce()`, `select()`, `round()`, `upper()`, `lower()`, array functions), traversals, pipe functions, most operators, and most named functions.

**Limitations:** Any unsupported functions, complex expressions, and newer GROQ features are typed as `unknown`.

## Access control (role filters)

GROQ filters used in [custom content resources](https://www.sanity.io/docs/user-guides/roles) for role-based access control have their own constraints. They only support simple expressions, such as field comparisons (*type == “article”), boolean composition (*`type == “article” && defined(example)`), and checks with `in` (`”example-id-” in store[]._ref`).

**Not supported:** Dereferencing (`->`) is not allowed in access control filters. Instead of `referenceField->`, you must check against the `_ref` property directly.

## Custom GROQ functions

[Custom functions](https://www.sanity.io/docs/content-lake/custom-groq-functions) (`fn namespace::name($param) = ...;`) work anywhere you can send a full GROQ query (client, HTTP API, Vision), but have [their own limitations](https://www.sanity.io/docs/content-lake/custom-groq-functions).

**Not supported**: Places where sending a full GROQ query isn’t available, such as when projections or filters are defined separately.

## Summary table

The following table summarizes feature support across the different contexts where GROQ is used.

##### GROQ support by context

| Feature | Query API | Webhooks | Functions (deployed) | Listen API | groq-js | TypeGen | Access control |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Filters | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Projections | ✅ | ✅ | ✅ | Ignored | ✅ | ✅ | N/A |
| Joins / sub-queries | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | N/A |
| Dereferences (->) | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ |
| Delta functions | ❌ | ✅ | ✅ | ❌ | Partial | ❌ | ❌ |
| Custom GROQ functions (fn) | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ |
| sanity:: namespace | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
