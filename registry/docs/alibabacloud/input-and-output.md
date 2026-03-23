This topic describes the input and output of MapReduce jobs in MaxCompute.

-   The input and output of MapReduce jobs in MaxCompute support built-in data types of MaxCompute, including BIGINT, DOUBLE, STRING, DATETIME, and BOOLEAN. User-defined data types are not supported.
-   MapReduce supports input data from multiple tables with different schemas. You can use the map function to obtain the table information corresponding to the current record.
-   MapReduce supports null values as input data, but does not support views as input data.
-   A reduce job can write outputs to different tables or different partitions of a table. The target tables can have different schemas. Different outputs are distinguished by labels. By default, no label is added to the default output. MapReduce does not support a function without output returned.

For more information about input and output examples, see [MultipleInOut](/help/en/maxcompute/user-guide/multipleinout-example#t12026.html "This topic describes an example of running MultipleInOut in MapReduce.").
