-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class Filter (2.15.1) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

Define the interfaces to create filter expressions.

Example: \`\`\`cpp // Get only data from the "fam" column family, and only the latest value. auto filter = Filter::Chain(Filter::Family("fam"), Filter::Latest(1)); table->ReadRow("foo", std::move(filter));

```

Those filters that use regular expressions, expect the patterns to be in the [RE2](https://github.com/google/re2/wiki/Syntax) syntax.



<aside class="note"><b>Note:</b>
Special care need be used with the expression used. Some of the filtered values (column names, row keys, cell values) are byte sequences, and can contain arbitrary bytes, the `\C` escape sequence must be used if a true wildcard is desired. The `.` character will not match the new line character `\n`, because `.` means `[^\n]` in RE2. As new line characters may be present in a binary value, you may need to explicitly match it using "\\n". The double escape is necessary because RE2 needs to get the escape sequence. 
</aside>
```

## Constructors

### Filter(::google::bigtable::v2::RowFilter)

**Parameter**

**Name**

**Description**

`rhs`

`::google::bigtable::v2::RowFilter`  

### Filter(Filter &&)

**Parameter**

**Name**

**Description**

`Filter &&`  

### Filter(Filter const &)

**Parameter**

**Name**

**Description**

`Filter const &`  

## Operators

### operator=(Filter &&)

**Parameter**

**Name**

**Description**

`Filter &&`  

**Returns**

**Type**

**Description**

`Filter &`

### operator=(Filter const &)

**Parameter**

**Name**

**Description**

`Filter const &`  

**Returns**

**Type**

**Description**

`Filter &`

## Functions

### static ValueRangeLeftOpen(std::string, std::string)

Return a filter that accepts values in the range \[`start`, `end`).

The range must be non-empty. The server will reject empty ranges with a `grpc::StatusCode::INVALID_ARGUMENT` error. This function makes no attempt to validate the timestamp range before sending it to the server.

**Parameters**

**Name**

**Description**

`start`

`std::string`  

`end`

`std::string`  

**Returns**

**Type**

**Description**

`Filter`

### static ValueRangeRightOpen(std::string, std::string)

Return a filter that accepts values in the range \[`start`, `end`\].

The range must be non-empty. The server will reject empty ranges with a `grpc::StatusCode::INVALID_ARGUMENT` error. This function makes no attempt to validate the timestamp range before sending it to the server.

**Parameters**

**Name**

**Description**

`start`

`std::string`  

`end`

`std::string`  

**Returns**

**Type**

**Description**

`Filter`

### static ValueRangeClosed(std::string, std::string)

Return a filter that accepts values in the range \[`start`, `end`\].

The range must be non-empty. The server will reject empty ranges with a `grpc::StatusCode::INVALID_ARGUMENT` error. This function makes no attempt to validate the timestamp range before sending it to the server.

**Parameters**

**Name**

**Description**

`start`

`std::string`  

`end`

`std::string`  

**Returns**

**Type**

**Description**

`Filter`

### static ValueRangeOpen(std::string, std::string)

Return a filter that accepts values in the range (`start`, `end`).

The range must be non-empty. The server will reject empty ranges with a `grpc::StatusCode::INVALID_ARGUMENT` error. This function makes no attempt to validate the timestamp range before sending it to the server.

**Parameters**

**Name**

**Description**

`start`

`std::string`  

`end`

`std::string`  

**Returns**

**Type**

**Description**

`Filter`

### static ColumnRangeRightOpen(std::string, std::string, std::string)

Return a filter that accepts columns in the range \[`start`, `end`) within the `column_family`.

The range must be non-empty. The server will reject empty ranges with a `grpc::StatusCode::INVALID_ARGUMENT` error. This function makes no attempt to validate the timestamp range before sending it to the server.

**Parameters**

**Name**

**Description**

`column_family`

`std::string`  

`start`

`std::string`  

`end`

`std::string`  

**Returns**

**Type**

**Description**

`Filter`

### static ColumnRangeLeftOpen(std::string, std::string, std::string)

Return a filter that accepts columns in the range (`start`, `end`\] within the `column_family`.

The range must be non-empty. The server will reject empty ranges with a `grpc::StatusCode::INVALID_ARGUMENT` error. This function makes no attempt to validate the timestamp range before sending it to the server.

**Parameters**

**Name**

**Description**

`column_family`

`std::string`  

`start`

`std::string`  

`end`

`std::string`  

**Returns**

**Type**

**Description**

`Filter`

### static ColumnRangeClosed(std::string, std::string, std::string)

Return a filter that accepts columns in the range \[`start`, `end`\] within the `column_family`.

The range must be non-empty. The server will reject empty ranges with a `grpc::StatusCode::INVALID_ARGUMENT` error. This function makes no attempt to validate the timestamp range before sending it to the server.

**Parameters**

**Name**

**Description**

`column_family`

`std::string`  

`start`

`std::string`  

`end`

`std::string`  

**Returns**

**Type**

**Description**

`Filter`

### static ColumnRangeOpen(std::string, std::string, std::string)

Return a filter that accepts columns in the range (`start`, `end`) within the `column_family`.

The range must be non-empty. The server will reject empty ranges with a `grpc::StatusCode::INVALID_ARGUMENT` error. This function makes no attempt to validate the timestamp range before sending it to the server.

**Parameters**

**Name**

**Description**

`column_family`

`std::string`  

`start`

`std::string`  

`end`

`std::string`  

**Returns**

**Type**

**Description**

`Filter`

### static Condition(Filter, Filter, Filter)

Returns a per-row conditional filter expression.

For each row the `predicate` filter is evaluated, if it returns any cells, then the cells returned by `true_filter` are returned, otherwise the cells from `false_filter` are returned.

The server validates the tree of filters, and rejects them if any contain invalid values. The server may impose additional restrictions on the resulting collection of filters. This function makes no attempt to validate the input before sending it to the server.

**Parameters**

**Name**

**Description**

`predicate`

`Filter`  

`true_filter`

`Filter`  

`false_filter`

`Filter`  

**Returns**

**Type**

**Description**

`Filter`

### static Chain(FilterTypes &&...)

Return a chain filter.

The filter returned by this function acts like a pipeline. The output row from each stage is passed on as input for the next stage.

**Parameters**

**Name**

**Description**

`stages`

`FilterTypes &&...`  

the filter stages. The filter must contain at least two stages. The server validates each stage, and will reject them as described in their corresponding function. The server may also impose additional restrictions on the composition of the Chain. This function makes no attempt at validating the stages locally, the Chain filter is sent as-is it to the server.

`typename...`

  

**Returns**

**Type**

**Description**

`Filter`

### static ChainFromRange(Iterator, Iterator)

Return a chain filter.

The filter returned by this function acts like a pipeline. The output row from each stage is passed on as input for the next stage.

**Parameters**

**Name**

**Description**

`begin`

`Iterator`  

the start of the range.

`end`

`Iterator`  

the end of the range.

`typename Iterator`

  

an InputIterator whose `value_type` is [`Filter`](/cpp/docs/reference/bigtable/2.15.1/classgoogle_1_1cloud_1_1bigtable_1_1Filter).

**Returns**

**Type**

**Description**

`Filter`

### static Interleave(FilterTypes &&...)

Return a filter that interleaves the results of many other filters.

This filter executes each stream in parallel and then merges the results by interleaving the output from each stream. The [proto file](https://github.com/googleapis/googleapis/blob/master/google/bigtable/v2/data.proto) has a nice illustration in the documentation of `google.bigtable.v2.RowFilter.Interleave`.

In brief, if the input cells are c1, c2, c3, ..., and you have three subfilters S1, S2, and S3, the output of Interleave(S1, S2, S3) is: S1(c1), S2(c1), S3(c1), S1(d2), S2(d2), S3(c2), S1(c3), S2(c3), S3(c2), ... where some of the Si(c\_j) values may be empty if the filter discards the cell altogether.

**Parameters**

**Name**

**Description**

`streams`

`FilterTypes &&...`  

the filters to interleave. The filter must contain at least two streams. The server validates each stream, and will reject them as described in their corresponding function. The server may also impose additional restrictions on the overall composition of the Interleave filter. This function makes no attempt at validating the streams locally, the Interleave filter is sent as-is to the server.

`typename...`

  

**Returns**

**Type**

**Description**

`Filter`

### static InterleaveFromRange(Iterator, Iterator)

Return a filter that interleaves the results of a range of filters.

Similar to [Interleave()](/cpp/docs/reference/bigtable/2.15.1/classgoogle_1_1cloud_1_1bigtable_1_1Filter#classgoogle_1_1cloud_1_1bigtable_1_1Filter_1a49856125015f3d19777e2eef188b4302), except this function accepts a pair of Iterators.

**Parameters**

**Name**

**Description**

`begin`

`Iterator`  

the begin iterator of the range.

`end`

`Iterator`  

the end iterator of the range.

`typename Iterator`

  

**Returns**

**Type**

**Description**

`Filter`

### static Sink()

Return a filter that outputs all cells ignoring intermediate filters.

Please read the documentation in the [proto file](https://github.com/googleapis/googleapis/blob/master/google/bigtable/v2/data.proto) for a detailed description. In short, this is an advanced filter to facilitate debugging. You can explore the intermediate results of a complex filter expression by injecting a filter of this type.

**Returns**

**Type**

**Description**

`Filter`

### as\_proto() const &

Return the filter expression as a protobuf.

**Returns**

**Type**

**Description**

`::google::bigtable::v2::RowFilter const &`

### as\_proto() &&

Move out the underlying protobuf value.

**Returns**

**Type**

**Description**

`::google::bigtable::v2::RowFilter &&`

### static PassAllFilter()

Return a filter that passes on all data.

**Returns**

**Type**

**Description**

`Filter`

### static BlockAllFilter()

Return a filter that blocks all data.

**Returns**

**Type**

**Description**

`Filter`

### static Latest(std::int32\_t)

Return a filter that accepts only the last `n` values of each column.

The server rejects filters where `n` <= 0, any ReadRows() request containing such a filter fails with `grpc::StatusCode::INVALID_ARGUMENT`. This function does not perform any local validation of `n`.

**Parameter**

**Name**

**Description**

`n`

`std::int32_t`  

**Returns**

**Type**

**Description**

`Filter`

### static FamilyRegex(std::string)

Return a filter that matches column families matching the given regexp.

**Parameter**

**Name**

**Description**

`pattern`

`std::string`  

the regular expression. It must be a valid [RE2](https://github.com/google/re2/wiki/Syntax) pattern. For technical reasons, the regex must not contain the ':' character, even if it is not being used as a literal. The server rejects filters with invalid patterns, including patterns containing the ':' character. The server fails the ReadRows() request with a `grpc::StatusCode::INVALID_ARGUMENT` status code. This function makes no attempt to validate the pattern before sending it to the server.

**Returns**

**Type**

**Description**

`Filter`

### static ColumnRegex(std::string)

Return a filter that accepts only columns matching the given regexp.

**Note:** Special care need be used with the expression used. A column name is a byte sequence, and can contain arbitrary bytes, the `\C` escape sequence must be used if a true wildcard is desired. The `.` character will not match the new line character `\n`, because `.` means `[^\n]` in RE2. As new line characters may be present in a binary value, you may need to explicitly match it using "\\n". The double escape is necessary because RE2 needs to get the escape sequence.

**Parameter**

**Name**

**Description**

`pattern`

`std::string`  

the regular expression. It must be a valid [RE2](https://github.com/google/re2/wiki/Syntax) pattern. The server rejects filters with an invalid pattern with a `grpc::StatusCode::INVALID_ARGUMENT` status code. This function makes no attempt to validate the pattern before sending it to the server.

**Returns**

**Type**

**Description**

`Filter`

### static ColumnRange(std::string, std::string, std::string)

Return a filter that accepts columns in the range \[`start`, `end`) within the `family` column family.

The column range must be non-empty, i.e., `start` must be strictly smaller than `end`. The server will reject empty ranges with a `grpc::StatusCode::INVALID_ARGUMENT` status code. This function makes no attempt to validate the column family or column range before sending them to the server.

**Parameters**

**Name**

**Description**

`family`

`std::string`  

`start`

`std::string`  

`end`

`std::string`  

**Returns**

**Type**

**Description**

`Filter`

### static ColumnName(std::string, std::string)

Return the filter that accepts the named `column` within the `family` column family.

This function makes no attempt to validate the column family or column range before sending them to the server.

**Parameters**

**Name**

**Description**

`family`

`std::string`  

`column`

`std::string`  

**Returns**

**Type**

**Description**

`Filter`

### static TimestampRangeMicros(std::int64\_t, std::int64\_t)

Return a filter that accepts cells with timestamps in the range \[`start`, `end`).

The timestamp range must be non-empty, i.e. `start` must be strictly smaller than `end`. The server will reject empty ranges with a `grpc::StatusCode::INVALID_ARGUMENT` status code. This function makes no attempt to validate the timestamp range before sending it to the server.

**Parameters**

**Name**

**Description**

`start`

`std::int64_t`  

`end`

`std::int64_t`  

**Returns**

**Type**

**Description**

`Filter`

### static TimestampRange(std::chrono::duration< Rep1, Period1 >, std::chrono::duration< Rep2, Period2 >)

Return a filter that accepts cells with timestamps in the range \[`start`, `end`).

The function accepts any instantiation of `std::chrono::duration<>` for the `start` and `end` parameters. For example:

```
using namespace std::chrono_literals; // C++14
auto r1 = bigtable::Filter::TimestampRange(10ms, 500ms);
auto r2 = bigtable::Filter::TimestampRange(10min, 10min + 2s);
```

The timestamp range must be non-empty, i.e. `start` must be strictly smaller than `end`. The server will reject empty ranges with a `grpc::StatusCode::INVALID_ARGUMENT` error. This function makes no attempt to validate the timestamp range before sending it to the server.

###### See Also

[`std::chrono::duration<>`](http://en.cppreference.com/w/cpp/chrono/duration) for more details.

**Parameters**

**Name**

**Description**

`start`

`std::chrono::duration< Rep1, Period1 >`  

`end`

`std::chrono::duration< Rep2, Period2 >`  

`typename Rep1`

  

a placeholder to match the Rep tparam for `start` type, the semantics of this template parameter are documented in `std::chrono::duration<>` (in brief, the underlying arithmetic type used to store the number of ticks), for our purposes it is simply a formal parameter.

`typename Period1`

  

a placeholder to match the Period tparam for `start` type, the semantics of this template parameter are documented in `std::chrono::duration<>` (in brief, the length of the tick in seconds, expressed as a `std::ratio<>`), for our purposes it is simply a formal parameter.

`typename Rep2`

  

similar formal parameter for the type of `end`.

`typename Period2`

  

similar formal parameter for the type of `end`.

**Returns**

**Type**

**Description**

`Filter`

### static RowKeysRegex(std::string)

Return a filter that matches keys matching the given regexp.

**Note:** Special care need be used with the expression used. A row key is a byte sequence, and can contain arbitrary bytes, the `\C` escape sequence must be used if a true wildcard is desired. The `.` character will not match the new line character `\n`, because `.` means `[^\n]` in RE2. As new line characters may be present in a binary value, you may need to explicitly match it using "\\n". The double escape is necessary because RE2 needs to get the escape sequence.

**Parameter**

**Name**

**Description**

`pattern`

`std::string`  

the regular expression. It must be a valid RE2 pattern. More details at [https://github.com/google/re2/wiki/Syntax](https://github.com/google/re2/wiki/Syntax)

**Returns**

**Type**

**Description**

`Filter`

### static ValueRegex(std::string)

Return a filter that matches cells with values matching the given regexp.

**Note:** Special care need be used with the expression used. A cell value is a byte sequence, and can contain arbitrary bytes, the `\C` escape sequence must be used if a true wildcard is desired. The `.` character will not match the new line character `\n`, because `.` means `[^\n]` in RE2. As new line characters may be present in a binary value, you may need to explicitly match it using "\\n". The double escape is necessary because RE2 needs to get the escape sequence.

**Parameter**

**Name**

**Description**

`pattern`

`std::string`  

the regular expression. It must be a valid [RE2](https://github.com/google/re2/wiki/Syntax) pattern. The server rejects filters with an invalid pattern with a `grpc::StatusCode::INVALID_ARGUMENT` status code. This function makes no attempt to validate the timestamp range before sending it to the server.

**Returns**

**Type**

**Description**

`Filter`

### static ValueRange(std::string, std::string)

Return filter matching values in the range \[`start`, `end`).

###### See Also

[ValueRangeRightOpen()](/cpp/docs/reference/bigtable/2.15.1/classgoogle_1_1cloud_1_1bigtable_1_1Filter#classgoogle_1_1cloud_1_1bigtable_1_1Filter_1ab6727becf9a1f10e9a01bd47645e8c7a) for more details.

**Parameters**

**Name**

**Description**

`start`

`std::string`  

`end`

`std::string`  

**Returns**

**Type**

**Description**

`Filter`

### static CellsRowLimit(std::int32\_t)

Return a filter that only accepts the first `n` cells in a row.

Note that cells might be repeated, such as when interleaving the results of multiple filters via the [`Interleave()`](/cpp/docs/reference/bigtable/2.15.1/classgoogle_1_1cloud_1_1bigtable_1_1Filter#classgoogle_1_1cloud_1_1bigtable_1_1Filter_1a49856125015f3d19777e2eef188b4302) function. Furthermore, this filter apples to the cells within a row; if there are multiple column families and/or columns in a row, the order is:

-   All the cells for a column family appear together, but there is no guarantee on the order of the column families. Furthermore, column families may appear in different orders in different rows.
-   Within a column family, the cells are ordered by column name, where column names are sorted lexicographically.
-   Within a column, the cells appear in descending order by timestamp.

The server rejects filters where `n` <= 0, any ReadRows() request containing such a filter fails with `grpc::StatusCode::INVALID_ARGUMENT`. This function does not perform any local validation of `n`.

**Parameter**

**Name**

**Description**

`n`

`std::int32_t`  

**Returns**

**Type**

**Description**

`Filter`

### static CellsRowOffset(std::int32\_t)

Return a filter that skips the first `n` cells in a row.

Note that cells might be repeated, such as when interleaving the results of multiple filters via the [`Interleave()`](/cpp/docs/reference/bigtable/2.15.1/classgoogle_1_1cloud_1_1bigtable_1_1Filter#classgoogle_1_1cloud_1_1bigtable_1_1Filter_1a49856125015f3d19777e2eef188b4302) function. Furthermore, this filter apples to the cells within a row; if there are multiple column families and/or columns in a row, the order is:

-   All the cells for a column family appear together, but there is no guarantee on the order of the column families. Furthermore, column families may appear in different orders in different rows.
-   Within a column family, the cells are ordered by column name, where column names are sorted lexicographically.
-   Within a column, the cells appear in descending order by timestamp.

The server rejects filters where `n` <= 0, any ReadRows() request containing such a filter fails with `grpc::StatusCode::INVALID_ARGUMENT`. This function does not perform any local validation of `n`.

**Parameter**

**Name**

**Description**

`n`

`std::int32_t`  

**Returns**

**Type**

**Description**

`Filter`

### static RowSample(double)

Return a filter that samples rows with a given probability.

The server rejects filters where `probability` is outside the range (0.0, 1.0). Any ReadRows() request containing such a filter fails with `grpc::StatusCode::INVALID_ARGUMENT`. This function does not perform any local validation of `probability`.

**Parameter**

**Name**

**Description**

`probability`

`double`  

the probability that any row will be selected. It must be in the range (0.0, 1.0).

**Returns**

**Type**

**Description**

`Filter`

### static StripValueTransformer()

Return a filter that transforms any values into the empty string.

As the name indicates, this acts as a transformer on the data, replacing any values with the empty string.

**Returns**

**Type**

**Description**

`Filter`

### static ApplyLabelTransformer(std::string)

Returns a filter that applies a label to each value.

Each value accepted by previous filters is modified to include the `label`.

**Note:** Currently, it is not possible to apply more than one label in a filter expression, that is, a chain can only contain a single [ApplyLabelTransformer()](/cpp/docs/reference/bigtable/2.15.1/classgoogle_1_1cloud_1_1bigtable_1_1Filter#classgoogle_1_1cloud_1_1bigtable_1_1Filter_1ad7637fe204fa6e7f889467dc6c4455ba) filter. This limitation may be lifted in the future. It is possible to have multiple ApplyLabelTransformer filters in a Union() filter, though in this case, each copy of a cell gets a different label.

**Parameter**

**Name**

**Description**

`label`

`std::string`  

the label applied to each cell. The labels must be at most 15 characters long, and must match the `[a-z0-9\\-]+` pattern. The server validates the filter and will return a `grpc::StatusCode::INVALID_ARGUMENT` if the label does not meet these requirements. This function makes no attempt to validate the `label` parameter before sending it to the server.

**Returns**

**Type**

**Description**

`Filter`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
