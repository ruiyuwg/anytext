This topic describes the MapReduce API to help you understand how to use it to efficiently process and analyze large datasets.

PyODPS DataFrame supports the MapReduce API. You can separately write the `map` and `reduce` functions, because a `map_reduce` process can contain only `mappers` or `reducers`.

The following example shows how to execute the `WordCount` program:

```
>>> #encoding=utf-8
>>> from odps import ODPS
>>> from odps import options
>>> options.verbose = True
>>> o = ODPS('your-access-id', 'your-secret-access-key',project='DMP_UC_dev', endpoint='http://service-corp.odps.aliyun-inc.com/api')
>>> from odps.df import DataFrame

>>> def mapper(row):
>>>     for word in row[0].split():
>>>         yield word.lower(), 1
>>>
>>> def reducer(keys):
>>>     # A list rather than cnt=0 is used. If you use cnt=0, cnt in the h function is considered a local variable, whose value is not included in the output.
>>>     cnt = [0]
>>>     def h(row, done):  # done indicates that the rows with this key are iterated.
>>>         cnt[0] += row[1]
>>>         if done:
>>>             yield keys[0], cnt[0]
>>>     return h
>>> # The zx_word_count table has only one column, which is of the STRING type.
>>> word_count = DataFrame(o.get_table('zx_word_count'))
>>> table = word_count.map_reduce(mapper, reducer, group=['word', ],
                        mapper_output_names=['word', 'cnt'],
                        mapper_output_types=['string', 'int'],
                        reducer_output_names=['word', 'cnt'],
                        reducer_output_types=['string', 'int'])
         word  cnt
0         are    1
1         day    1
2      doing?    1
3   everybody    1
4       first    1
5       hello    2
6         how    1
7          is    1
8          so    1
9         the    1
10       this    1
11      world    1
12        you    1
```

Use the `group` parameter to specify the field by which you want to use the `reduce` function to group data. If you do not specify this parameter, the data is grouped by all the fields. `Reducers` receive and initialize aggregated `keys`, and process the rows that are aggregated based on the `keys`. `done` indicates that all rows related to these `keys` are iterated.

For ease of understanding, the function is written as a closure in this example. You can also write the function as a `callable` class.

```
class reducer(object):
    def __init__(self, keys):
        self.cnt = 0

    def __call__(self, row, done):  # done indicates that the rows with this key are iterated.
        self.cnt += row.cnt
        if done:
            yield row.word, self.cnt
```

The code is simplified if you use `output` for commenting.

```
>>> from odps.df import output
>>>
>>> @output(['word', 'cnt'], ['string', 'int'])
>>> def mapper(row):
>>>     for word in row[0].split():
>>>         yield word.lower(), 1
>>>
>>> @output(['word', 'cnt'], ['string', 'int'])
>>> def reducer(keys):
>>>     # A list rather than cnt=0 is used. If you use cnt=0, cnt in the h function is considered a local variable, whose value is not included in the output.
>>>     cnt = [0]
>>>     def h(row, done):  # done indicates that the rows with this key are iterated.
>>>         cnt[0] += row.cnt
>>>         if done:
>>>             yield keys.word, cnt[0]
>>>     return h
>>>
>>> word_count = DataFrame(o.get_table('zx_word_count'))
>>> table = word_count.map_reduce(mapper, reducer, group='word')
         word  cnt
0         are    1
1         day    1
2      doing?    1
3   everybody    1
4       first    1
5       hello    2
6         how    1
7          is    1
8          so    1
9         the    1
10       this    1
11      world    1
12        you    1
```

During iteration, you can use the `sort` parameter to sort the data by column and the `ascending` parameter to specify the sorting order. The `ascending` parameter can be a BOOL value, which indicates that all the fields specified by the `sort` parameter are arranged in the same order. The ascending parameter can also be a list. The number of strings in the list must be the same as the number of fields specified by the `sort` parameter.

## Specify a combiner

In the `MapReduce` API, a `combiner` is used to aggregate data in a `mapper`. A combiner is used in the same way as a `reducer`, but a combiner cannot reference resources. The names and data types of the fields generated from a `combiner` must be the same as those from the `mapper` that corresponds to the combiner.

In this example, you can use the `reducer` as the `combiner` to aggregate data in the `mapper` to reduce shuffled data.

```
>>> words_df.map_reduce(mapper, reducer, combiner=reducer, group='word')
```

## Reference resources

In the MapReduce API, you can separately specify the resources referenced by `mappers` and `reducers`.

In the following example, deprecated word filtering is performed in the `mapper`, and the number of words in a whitelist in the `reducer` is plus 5.

```
>>> white_list_file = o.create_resource('pyodps_white_list_words', 'file', file_obj='Python\nWorld')
>>>
>>> @output(['word', 'cnt'], ['string', 'int'])
>>> def mapper(resources):
>>>     stop_words = set(r[0].strip() for r in resources[0])
>>>     def h(row):
>>>         for word in row[0].split():
>>>             if word not in stop_words:
>>>                 yield word, 1
>>>     return h
>>>
>>> @output(['word', 'cnt'], ['string', 'int'])
>>> def reducer(resources):
>>>     d = dict()
>>>     d['white_list'] = set(word.strip() for word in resources[0])
>>>     d['cnt'] = 0
>>>     def inner(keys):
>>>         d['cnt'] = 0
>>>         def h(row, done):
>>>             d['cnt'] += row.cnt
>>>             if done:
>>>                 if row.word in d['white_list']:
>>>                     d['cnt'] += 5
>>>                 yield keys.word, d['cnt']
>>>         return h
>>>     return inner
>>>
>>> words_df.map_reduce(mapper, reducer, group='word',
>>>                     mapper_resources=[stop_words], reducer_resources=[white_list_file])
     word  cnt
0   hello    2
1    life    1
2  python    7
3   world    6
4   short    1
5     use    1
```

## Use third-party Python libraries

The usage is similar to that of a third-party Python library in map stages.

-   Specify the library globally:
    
    ```
    >>> from odps import options
    >>> options.df.libraries = ['six.whl', 'python_dateutil.whl']
    ```
    
-   If you use an immediately-invoked method, specify the library locally:
    
    ```
    >>> df.map_reduce(mapper=my_mapper, reducer=my_reducer, group='key').execute(libraries=['six.whl', 'python_dateutil.whl'])
    ```
    
    **Note**
    
    Due to the difference in bytecode definitions, if you write code based on new features supported by Python 3, such as `yield from`, an error is reported when the code is executed on a MaxCompute worker of Python 2.7. Before you implement production operations by using the MapReduce API of Python 3, we recommend that you make sure that the code runs normally.
    

## Reshuffle data

If data is unevenly distributed in a cluster, you can call the `reshuffle` method to reshuffle data.

```
>>> df1 = df.reshuffle()
```

By default, data is hashed as random numbers. You can also distribute data by column and sort the reshuffled data in a specific order.

```
>>> df1.reshuffle('name', sort='id', ascending=False)
```

## Bloom filter

PyODPS DataFrame provides the `bloom_filter` interface to calculate data with a Bloom filter.

A Bloom filter can quickly filter out the data that exists in `sequence1` but does not exist in `sequence2`, but the data may not be completely filtered out. This approximate filtering method is particularly useful in `join` scenarios where the data volumes are significantly different. For example, when you `join` user browsing data with transaction data, the volume of browsing data is much larger than that of transaction data. In this case, you can first apply a Bloom filter using the transaction data to pre-filter the browsing data and then perform the `join` operation. This greatly improves performance.

```
>>> df1 = DataFrame(pd.DataFrame({'a': ['name1', 'name2', 'name3', 'name1'], 'b': [1, 2, 3, 4]}))
>>> df1
       a  b
0  name1  1
1  name2  2
2  name3  3
3  name1  4
>>> df2 = DataFrame(pd.DataFrame({'a': ['name1']}))
>>> df2
       a
0  name1
>>> df1.bloom_filter('a', df2.a) # The row 0 can be a computation expression, for example, df1.a + '1'.
       a  b
0  name1  1
1  name1  4
```

Description:

-   Small amounts of data are processed. Therefore, the rows that contain `name2` and `name3` in column `a` of `df1` are filtered out. However, if the system processes large amounts of data, the system may not filter out all the data that meets the specified conditions.
    
-   In the preceding `JOIN` operation, the data that is not filtered out does not affect the data accuracy. However, data filtering greatly enhances the `JOIN` performance.
    
-   You can specify the `capacity` and `error_rate` parameters to configure the data volume and error rate. The default values are `3000` and `0.01`.
    

**Note**

If you increase the value of the `capacity` parameter or decrease the value of the `error_rate` parameter, the usage of memory is increased. Therefore, set the parameters to proper values based on your requirements.

For more information about collection objects, see [DataFrame execution](/help/en/maxcompute/user-guide/execution#concept-hv4-mx4-cfb).

## Pivot table

PyODPS DataFrame provides the pivot table feature. The following code shows the sample table data:

```
>>> df
     A    B      C  D  E
0  foo  one  small  1  3
1  foo  one  large  2  4
2  foo  one  large  2  5
3  foo  two  small  3  6
4  foo  two  small  3  4
5  bar  one  large  4  5
6  bar  one  small  5  3
7  bar  two  small  6  2
8  bar  two  large  7  1
```

-   If you use the pivot table feature, the `rows` parameter is required to obtain the average value based on one or more fields.
    
    ```
    >>> df['A', 'D', 'E'].pivot_table(rows='A')
         A  D_mean  E_mean
    0  bar     5.5    2.75
    1  foo     2.2    4.40
    ```
    
-   You can specify multiple fields in `rows` to aggregate data based on the fields.
    
    ```
    >>> df.pivot_table(rows=['A', 'B', 'C'])
         A    B      C  D_mean  E_mean
    0  bar  one  large     4.0     5.0
    1  bar  one  small     5.0     3.0
    2  bar  two  large     7.0     1.0
    3  bar  two  small     6.0     2.0
    4  foo  one  large     2.0     4.5
    5  foo  one  small     1.0     3.0
    6  foo  two  small     3.0     5.0
    ```
    
-   You can use the `values` parameter to specify the column that you want to calculate.
    
    ```
    >>> df.pivot_table(rows=['A', 'B'], values='D')
         A    B    D_mean
    0  bar  one  4.500000
    1  bar  two  6.500000
    2  foo  one  1.666667
    3  foo  two  3.000000
    ```
    
-   By default, the average value is calculated. You can use the `aggfunc` parameter to specify one or more aggregate functions.
    
    ```
    >>> df.pivot_table(rows=['A', 'B'], values=['D'], aggfunc=['mean', 'count', 'sum'])
         A    B    D_mean  D_count  D_sum
    0  bar  one  4.500000        2      9
    1  bar  two  6.500000        2     13
    2  foo  one  1.666667        3      5
    3  foo  two  3.000000        2      6
    ```
    
-   You can use the values of an original column as the values of a column in the new collection object.
    
    ```
    >>> df.pivot_table(rows=['A', 'B'], values='D', columns='C')
         A    B  large_D_mean  small_D_mean
    0  bar  one           4.0           5.0
    1  bar  two           7.0           6.0
    2  foo  one           2.0           1.0
    3  foo  two           NaN           3.0
    ```
    
-   You can use `fill_value` to replace empty values.
    
    ```
    >>> df.pivot_table(rows=['A', 'B'], values='D', columns='C', fill_value=0)
         A    B  large_D_mean  small_D_mean
    0  bar  one             4             5
    1  bar  two             7             6
    2  foo  one             2             1
    3  foo  two             0             3
    ```
    

## Key-value string conversion

DataFrame can extract key-value pairs into columns, and convert standard columns to key-value pairs. For more information about how to create and manage a DataFrame object, see [Create a DataFrame object](/help/en/maxcompute/user-guide/create-a-dataframe-object#concept-nfg-tr4-cfb).

-   Extract key-value pairs into columns. Example:
    
    ```
    >>> df
        name               kv
    0  name1  k1=1,k2=3,k5=10
    1  name1    k1=7.1,k7=8.2
    2  name2    k2=1.2,k3=1.5
    3  name2      k9=1.1,k2=1
    ```
    
    Use the `extract_kv` method to extract key-value fields:
    
    ```
    >>> df.extract_kv(columns=['kv'], kv_delim='=', item_delim=',')
       name   kv_k1  kv_k2  kv_k3  kv_k5  kv_k7  kv_k9
    0  name1    1.0    3.0    NaN   10.0    NaN    NaN
    1  name1    7.0    NaN    NaN    NaN    8.2    NaN
    2  name2    NaN    1.2    1.5    NaN    NaN    NaN
    3  name2    NaN    1.0    NaN    NaN    NaN    1.1
    ```
    
    The `columns` parameter specifies the fields that you want to extract. The `kv_delim` parameter specifies the delimiter between the keys and values. The `item_delim` parameter specifies the delimiter between key-value pairs. If you do not specify the parameters, keys and values are separated with colons (:), and key-value pairs are separated with commas (,). The name of the output field is the combination of the original field name and key value. The name and key value are connected by using an underscore (`_`). The default value for a missing column is NONE. You can use `fill_value` to fill the values for missing columns.
    
    ```
    >>> df.extract_kv(columns=['kv'], kv_delim='=', fill_value=0)
       name   kv_k1  kv_k2  kv_k3  kv_k5  kv_k7  kv_k9
    0  name1    1.0    3.0    0.0   10.0    0.0    0.0
    1  name1    7.0    0.0    0.0    0.0    8.2    0.0
    2  name2    0.0    1.2    1.5    0.0    0.0    0.0
    3  name2    0.0    1.0    0.0    0.0    0.0    1.1
    ```
    
-   Convert multiple columns to key-value pairs. Example:
    
    ```
    >>> df
       name    k1   k2   k3    k5   k7   k9
    0  name1  1.0  3.0  NaN  10.0  NaN  NaN
    1  name1  7.0  NaN  NaN   NaN  8.2  NaN
    2  name2  NaN  1.2  1.5   NaN  NaN  NaN
    3  name2  NaN  1.0  NaN   NaN  NaN  1.1
    ```
    
    Use the `to_kv` method to convert data to the key-value format:
    
    ```
    >>> df.to_kv(columns=['k1', 'k2', 'k3', 'k5', 'k7', 'k9'], kv_delim='=')
        name               kv
    0  name1  k1=1,k2=3,k5=10
    1  name1    k1=7.1,k7=8.2
    2  name2    k2=1.2,k3=1.5
    3  name2      k9=1.1,k2=1
    ```
