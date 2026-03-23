# Conditional functions

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/pipelines/sql-reference/scalar-functions/conditional.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Conditional functions

*Cloudflare Pipelines scalar function implementations are based on[Apache DataFusion ↗](https://arrow.apache.org/datafusion/) (via [Arroyo ↗](https://www.arroyo.dev/)) and these docs are derived from the DataFusion function reference.*

## `coalesce`

Returns the first of its arguments that is not *null*. Returns *null* if all arguments are *null*. This function is often used to substitute a default value for *null* values.

```

coalesce(expression1[, ..., expression_n])


```

**Arguments**

- **expression1, expression\_n**: Expression to use if previous expressions are *null*. Can be a constant, column, or function, and any combination of arithmetic operators. Pass as many expression arguments as necessary.

## `nullif`

Returns *null* if *expression1* equals *expression2*; otherwise it returns *expression1*. This can be used to perform the inverse operation of [coalesce](#coalesce).

```

nullif(expression1, expression2)


```

**Arguments**

- **expression1**: Expression to compare and return if equal to expression2. Can be a constant, column, or function, and any combination of arithmetic operators.
- **expression2**: Expression to compare to expression1. Can be a constant, column, or function, and any combination of arithmetic operators.

## `nvl`

Returns *expression2* if *expression1* is NULL; otherwise it returns *expression1*.

```

nvl(expression1, expression2)


```

**Arguments**

- **expression1**: return if expression1 not is NULL. Can be a constant, column, or function, and any combination of arithmetic operators.
- **expression2**: return if expression1 is NULL. Can be a constant, column, or function, and any combination of arithmetic operators.

## `nvl2`

Returns *expression2* if *expression1* is not NULL; otherwise it returns *expression3*.

```

nvl2(expression1, expression2, expression3)


```

**Arguments**

- **expression1**: conditional expression. Can be a constant, column, or function, and any combination of arithmetic operators.
- **expression2**: return if expression1 is not NULL. Can be a constant, column, or function, and any combination of arithmetic operators.
- **expression3**: return if expression1 is NULL. Can be a constant, column, or function, and any combination of arithmetic operators.

## `ifnull`

*Alias of [nvl](#nvl).*

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/pipelines/","name":"Pipelines"}},{"@type":"ListItem","position":3,"item":{"@id":"/pipelines/sql-reference/","name":"SQL reference"}},{"@type":"ListItem","position":4,"item":{"@id":"/pipelines/sql-reference/scalar-functions/","name":"Scalar functions"}},{"@type":"ListItem","position":5,"item":{"@id":"/pipelines/sql-reference/scalar-functions/conditional/","name":"Conditional functions"}}]}
```
