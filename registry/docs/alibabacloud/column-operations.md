This topic describes how to call the DataFrame API to perform column operations.

## Column operations

```
from odps.df import DataFrame
iris = DataFrame(o.get_table('pyodps_iris'))
lens = DataFrame(o.get_table('pyodps_ml_100k_lens'))
```

If you add a constant or execute a sin function to a sequence object, you add the constant or execute the sin function to all the elements of the sequence object.

## Null-related functions

The DataFrame API provides null-related built-in functions, including isnull, notnull, and fillna. You can use the `isnull` function to check whether the value of a field is null. You can use the `notnull` function to check whether the value of a field is not null. You can use the `fillna` function to replace null values with specified values.

```
>>> iris.sepallength.isnull().head(5)
   sepallength
0        False
1        False
2        False
3        False
4        False
```

## Logic functions

`ifelse` applies to BOOLEAN type fields. When the condition is true, it returns the first parameter. Otherwise, it returns the second parameter.

```
>>> (iris.sepallength > 5).ifelse('gt5', 'lte5').rename('cmp5').head(5)
   cmp5
0   gt5
1  lte5
2  lte5
3  lte5
4  lte5
```

You can use the `switch` function to handle multiple conditions.

```
>>> iris.sepallength.switch(4.9, 'eq4.9', 5.0, 'eq5.0', default='noeq').rename('equalness').head(5)
   equalness
0       noeq
1      eq4.9
2       noeq
3       noeq
4      eq5.0
```

```
>>> from odps.df import switch
>>> switch(iris.sepallength == 4.9, 'eq4.9', iris.sepallength == 5.0, 'eq5.0', default='noeq').rename('equalness').head(5)
   equalness
0       noeq
1      eq4.9
2       noeq
3       noeq
4      eq5.0
```

In Python on MaxCompute (PyODPS) V0.7.8 and later, you can modify the values of a column in a dataset based on the specified conditions.

```
>>> iris[iris.sepallength > 5, 'cmp5'] = 'gt5'
>>> iris[iris.sepallength <= 5, 'cmp5'] = 'lte5'
>>> iris.head(5)
   cmp5
0   gt5
1  lte5
2  lte5
3  lte5
4  lte5
```

## Mathematical operations

In numerical fields, a sequence object supports mathematical operations such as addition (+), subtraction (-), multiplication (\*), and division (/). The log and sin functions are also supported.

```
>>> (iris.sepallength * 10).log().head(5)
   sepallength
0     3.931826
1     3.891820
2     3.850148
3     3.828641
4     3.912023
```

```
>>> fields = [iris.sepallength,
>>>           (iris.sepallength / 2).rename('sepallength divided by 2'),
>>>           (iris.sepallength ** 2).rename('sepallength squared')]
>>> iris[fields].head(5)
   sepallength  sepallength divided by 2  sepallength squared
0          5.1              2.55             26.01
1          4.9              2.45             24.01
2          4.7              2.35             22.09
3          4.6              2.30             21.16
4          5.0              2.50             25.00
```

The following table describes the supported arithmetic operations.

**Arithmetic operation**

**Description**

abs

Returns the absolute value of the given number.

sqrt

Returns the square root of the given number.

sin

N/A

sinh

N/A

cos

N/A

cosh

N/A

tan

N/A

tanh

N/A

arccos

N/A

arccosh

N/A

arcsin

N/A

arcsinh

N/A

arctan

N/A

arctanh

N/A

exp

Returns e raised to the power of the given number.

expm1

Returns e raised to the power of the given number, minus 1.

log

Returns the logarithm of the given number by using a supplied base.

log2

N/A

log10

N/A

log1p

log(1+x)

radians

Converts the values in radians to degrees.

degrees

Converts the values in degrees to radians.

ceil

Returns the smallest integer that is no less than the given number.

floor

Returns the largest integer that is no greater than the given number.

trunc

Returns a number truncated to the specified decimal place.

You can compare a sequence object with another sequence or scalar objects.

```
>>> (iris.sepallength < 5).head(5)
   sepallength
0        False
1         True
2         True
3         True
4        False
```

The DataFrame API does not support sequential comparison, such as `3 <= iris.sepallength <= 5`. However, you can use the `between` function to check whether the value of `iris.sepallength` is within a specified interval.

```
>>> (iris.sepallength.between(3, 5)).head(5)
   sepallength
0        False
1         True
2         True
3         True
4         True
```

By default, the `between` function specifies an interval that includes endpoints. To specify an open interval, set the `inclusive` parameter to False.

```
>>> (iris.sepallength.between(3, 5, inclusive=False)).head(5)
   sepallength
0        False
1         True
2         True
3         True
4        False
```

## String-related operations

The DataFrame API provides a number of string-related operations for sequence or scalar objects.

```
>>> fields = [
>>>     iris.name.upper().rename('upper_name'),
>>>     iris.name.extract('Iris(.*)', group=1)
>>> ]
>>> iris[fields].head(5)
    upper_name     name
0  IRIS-SETOSA  -setosa
1  IRIS-SETOSA  -setosa
2  IRIS-SETOSA  -setosa
3  IRIS-SETOSA  -setosa
4  IRIS-SETOSA  -setosa
```

The following table describes the string-related operations.

**Operation**

**Description**

capitalize

N/A

contains

Returns whether the given string contains a substring. The substring is a regular expression if the `regex` parameter is set to True. The regex parameter is set to True by default.

count

Returns the number of occurrences of the specified string.

endswith

Ends the given string with the specified string.

startswith

Starts the given string with the specified string.

extract

Extracts a regular expression. If the group is not specified, substrings that satisfy the pattern of a regular expression are returned. If the group is specified, the specified group is returned.

find

Searches from left to right and returns the position of the first occurrence of the specified substring. If no matching substring exists, the value -1 is returned.

rfind

Searches from right to left and returns the position of the first occurrence of the specified substring. If no matching substring exists, the value -1 is returned.

replace

Replaces the substrings that satisfy the pattern of a regular expression with another substring. If you specify the n parameter, the substrings are replaced n times.

get

Returns the string at the specified position.

len

Returns the length of the given string.

ljust

Pads the given string with the character specified by `fillchar` on the right until the string reaches the length specified by `width`. The default pad character is a space.

rjust

Pads the given string with the character specified by `fillchar` on the left until the string reaches the length specified by `width`. The default pad character is a space.

lower

Converts the given string to lowercase.

upper

Converts the given string to uppercase.

lstrip

Removes spaces on the left side of the given string, including blank lines.

rstrip

Removes spaces on the right side of the given string, including blank lines.

strip

Removes spaces on both sides of the given string, including blank lines.

split

Splits the given string at the specified delimiter and returns a value of LIST<STRING> type.

pad

Pads the given string with the character specified by `fillchar` at the specified position, which can be on the left side, right side, or both sides of the string. The default pad character is a space.

repeat

Repeats n times.

slice

Performs slice operations.

swapcase

Converts all the uppercase characters to lowercase and all the lowercase characters to uppercase in the given string.

title

Returns a titlecased version of the given string where words start with an uppercase character and the remaining characters are lowercase. This operation is the same as the `str.title` operation.

zfill

Pads the given string with the character 0 on the left side of the string until the string reaches the length specified by `width`.

isalnum

Returns True if all characters in the given string are alphanumeric. Otherwise, False is returned. This operation is the same as the `str.isalnum` operation.

isalpha

Returns True if all characters in the given string are alphabetic. Otherwise, False is returned. This operation is the same as the `str.isalpha` operation.

isdigit

Returns True if all the characters in the given string are digits. Otherwise, False is returned. This operation is the same as the `str.isdigit` operation.

isspace

Returns True if all the characters in the given string are spaces. Otherwise, False is returned. This operation is the same as the `str.isspace` operation.

islower

Returns True if all the cased characters in the given string are lowercase. Otherwise, False is returned. This operation is the same as the `str.islower` operation.

isupper

Returns True if all the cased characters in the given string are uppercase. Otherwise, False is returned. This operation is the same as the `str.isupper` operation.

istitle

Returns True if the given string is a titlecased string. Otherwise, False is returned. This operation is the same as the `str.istitle` operation.

isnumeric

Returns True if all characters in the given string are numeric. Otherwise, False is returned. This operation is the same as the `str.isnumeric` operation.

isdecimal

Returns True if all characters in the given string are decimal characters. Otherwise, False is returned. This operation is the same as the `str.isdecimal` operation.

todict

Splits the given string at the specified delimiter into a dict and returns a value of DICT<STRING, STRING> type. The two input parameters are the project delimiter and key-value delimiter.

strptime

Converts the given string representing a time to the specified format. The time format is the same as the time format in the standard Python library. For more information about the time formats in Python, see [Basic date and time types](https://docs.python.org/2/library/datetime.html#strftime-and-strptime-behavior).

## Time-related operations

You can call time-related built-in functions to manage sequence or scalar objects of DATETIME type.

```
>>> df = lens[[lens.unix_timestamp.astype('datetime').rename('dt')]]
>>> df[df.dt,
>>>    df.dt.year.rename('year'),
>>>    df.dt.month.rename('month'),
>>>    df.dt.day.rename('day'),
>>>    df.dt.hour.rename('hour')].head(5)
                    dt  year  month  day  hour
0  1998-04-08 11:02:00  1998      4    8    11
1  1998-04-08 10:57:55  1998      4    8    10
2  1998-04-08 10:45:26  1998      4    8    10
3  1998-04-08 10:25:52  1998      4    8    10
4  1998-04-08 10:44:19  1998      4    8    10
```

The following table describes the time-related attributes.

**Time-related attribute**

**Description**

year

N/A

month

N/A

day

N/A

hour

N/A

minute

N/A

second

N/A

weekofyear

Returns a number representing the week of the year where the provided date falls. Monday is taken as the first day of a week.

weekday

Returns a number representing the day of the week where the provided date falls.

dayofweek

Returns a number representing the day of the week where the provided date falls.

strftime

Converts the given string representing a time to the specified format. The time format is the same as the time in the standard Python library. For more information about the time formats in Python, see [Basic date and time types](https://docs.python.org/2/library/datetime.html#strftime-and-strptime-behavior).

PyODPS also supports the addition and subtraction of time. For example, you can retrieve the date three days before the current date. You can subtract one date column from another to obtain the difference in the number of milliseconds.

```
>>> df
                           a                          b
0 2016-12-06 16:43:12.460001 2016-12-06 17:43:12.460018
1 2016-12-06 16:43:12.460012 2016-12-06 17:43:12.460021
2 2016-12-06 16:43:12.460015 2016-12-06 17:43:12.460022
>>> from odps.df import day
>>> df.a - day(3)
                           a
0 2016-12-03 16:43:12.460001
1 2016-12-03 16:43:12.460012
2 2016-12-03 16:43:12.460015
>>> (df.b - df.a).dtype
int64
>>> (df.b - df.a).rename('a')
         a
0  3600000
1  3600000
2  3600000
```

The following table describes the supported DATETIME types.

**Type**

**Description**

year

N/A

month

N/A

day

N/A

hour

N/A

minute

N/A

second

N/A

millisecond

N/A

## Collection-related operations

PyODPS supports collections of LIST and DICT types. You can use subscripts to retrieve an item from both types. You can also use the `len` method to retrieve the number of items in each collection.

In addition, collections of LIST and DICT types support the `explode` method. You can use the explode method to display the content of a collection. For collections of LIST type, the `explode` method returns one column by default. If you set the `pos` parameter to True, the explode method returns two columns. One of the columns indicates the serial number of each value in the array. The explode method is similar to the `enumerate` method in Python. For collections of DICT type, the `explode` method returns two columns. The two columns indicate the keys and values, respectively. You can pass in column names to the `explode` method as the names of the generated columns.

The following examples show how to use the explode method:

```
>>> df
   id         a                            b
0   1  [a1, b1]  {'a2': 0, 'b2': 1, 'c2': 2}
1   2      [c1]           {'d2': 3, 'e2': 4}
>>> df[df.id, df.a[0], df.b['b2']]
   id   a    b
0   1  a1    1
1   2  c1  NaN
>>> df[df.id, df.a.len(), df.b.len()]
   id  a  b
0   1  2  3
1   2  1  2
>>> df.a.explode()
    a
0  a1
1  b1
2  c1
>>> df.a.explode(pos=True)
   a_pos   a
0      0  a1
1      1  b1
2      0  c1
>>> # Specify column names.
>>> df.a.explode(['pos', 'value'], pos=True)
   pos value
0    0    a1
1    1    b1
2    0    c1
>>> df.b.explode()
  b_key  b_value
0    a2        0
1    b2        1
2    c2        2
3    d2        3
4    e2        4
>>> # Specify column names.
>>> df.b.explode(['key', 'value'])
  key  value
0  a2      0
1  b2      1
2  c2      2
3  d2      3
4  e2      4
```

You can use the `explode` method with [Collection](/help/en/maxcompute/user-guide/collection#section-ndh-rw4-cfb) together. In this way, the columns generated by the `explode` method are combined with the original columns.

```
>>> df[df.id, df.a.explode()]
   id   a
0   1  a1
1   1  b1
2   2  c1
>>> df[df.id, df.a.explode(), df.b.explode()]
   id   a b_key  b_value
0   1  a1    a2        0
1   1  a1    b2        1
2   1  a1    c2        2
3   1  b1    a2        0
4   1  b1    b2        1
5   1  b1    c2        2
6   2  c1    d2        3
7   2  c1    e2        4
```

In addition to the `len` and `explode` methods, collections of LIST type support the following two methods.

**Method**

**Description**

contains(v)

Checks whether the given list contains a specified element.

sort

Sorts the given list and returns a value of LIST type.

Collections of DICT type also support the following two methods.

**Method**

**Description**

keys

Retrieves DICT keys and returns a value of LIST type.

values

Retrieves DICT values and returns a value of LIST type.

## Other operations

You can use the `isin` operation to check whether the elements of a sequence object exist in a specified collection. You can use the `notin` operation to check whether the elements of a sequence object do not exist in a specified collection.

```
>>> iris.sepallength.isin([4.9, 5.1]).rename('sepallength').head(5)
   sepallength
0         True
1         True
2        False
3        False
4        False
```

You can use the `cut` operation to divide data in a sequence object into several segments.

```
>>> iris.sepallength.cut(range(6), labels=['0-1', '1-2', '2-3', '3-4', '4-5']).rename('sepallength_cut').head(5)
   sepallength_cut
0             None
1              4-5
2              4-5
3              4-5
4              4-5
```

You can use the `include_under` and `include_over` operations to specify the maximum and minimum values, respectively.

```
>>> labels = ['0-1', '1-2', '2-3', '3-4', '4-5', '5-']
>>> iris.sepallength.cut(range(6), labels=labels, include_over=True).rename('sepallength_cut').head(5)
   sepallength_cut
0               5-
1              4-5
2              4-5
3              4-5
4              4-5
```

## Call built-in functions or UDFs in MaxCompute

To call built-in functions or user defined functions (UDFs) in MaxCompute to create columns, you can use the `func` function. The returned value of the func function is of STRING type by default. You can use the `rtype` parameter to specify the type of the returned value.

```
>>> from odps.df import func
>>>
>>> iris[iris.name, func.rand(rtype='float').rename('rand')][:4]
>>> iris[iris.name, func.rand(10, rtype='float').rename('rand')][:4]
>>> # Call UDFs defined in MaxCompute. You must specify the column name if the column name cannot be automatically determined.
>>> iris[iris.name, func.your_udf(iris.sepalwidth, iris.sepallength, rtype='float').rename('new_col')]
>>> # Call UDFs from other projects. You can specify the column name by using the name parameter.
>>> iris[iris.name, func.your_udf(iris.sepalwidth, iris.sepallength, rtype='float', project='udf_project', name='new_col')]
```

**Note**

The Pandas backend does not allow you to execute expressions that contain the `func` function.
