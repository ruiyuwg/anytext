This topic describes how to use user-defined functions (UDFs) and the third-party Python libraries.

## Use UDFs

DataFrame allows you to use the `map` method for a Sequence object to call UDFs on all of its elements.

```
>>> iris.sepallength.map(lambda x: x + 1).head(5)
   sepallength
0          6.1
1          5.9
2          5.7
3          5.6
4          6.0
```

**Note**

When you use UDFs, you cannot use List or Dict types as input or output.

If the type of the Sequence is changed after the `map` method is executed, you need to explicitly specify the new type of the Sequence.

```
>>> iris.sepallength.map(lambda x: 't'+str(x), 'string').head(5)
   sepallength
0         t5.1
1         t4.9
2         t4.7
3         t4.6
4         t5.0
```

If a function contains a closure, the change of a closure variable value outside the function causes the variable value within the function to change.

```
>>> dfs = []
>>> for i in range(10):
>>>     dfs.append(df.sepal_length.map(lambda x: x + i))
```

As a result, each `SequenceExpr` object in `dfs` is `df.sepal_length + 9`. To solve this problem, you can use the function as the return value of another function, or use `partial`. See the following two examples.

```
>>> dfs = []
>>> def get_mapper(i):
>>>     return lambda x: x + i
>>> for i in range(10):
>>>     dfs.append(df.sepal_length.map(get_mapper(i)))
```

```
>>> import functools
>>> dfs = []
>>> for i in range(10):
>>>     dfs.append(df.sepal_length.map(functools.partial(lambda v, x: x + v, i)))
```

The `map` method also supports existing UDFs. You can pass in str type parameters, which represent function names, or Function objects. For more information, see [Functions](/help/en/maxcompute/user-guide/functions#concept-q3r-cvf-cfb).

When you implement the `map` method for Python functions, you need to use MaxCompute Python UDF. If your project does not support Python UDFs, you cannot use the `map` method. In addition, all Python UDF limits apply.

The only available third-party library (contains the code in C language) is NumPy. For more information about how to use the third-party Python libraries, see [Use the third-party Python libraries](#section-jly-c2v-npi).

In addition to UDFs, DataFrame provides many built-in functions, some of which are implemented by using the `map` function. Therefore, if your project does not support Python UDF, you cannot use these functions. Note that Alibaba Cloud public services do not support Python UDF.

**Note**

Because of the difference in byte code definitions, if you use the new features supported by Python 3 (such as `yield from`), errors may occur when the code is executed on MaxCompute Worker of Python 2.7. Therefore, we recommend that you make sure your code runs normally before you write production code by using MapReduce API in Python 3.

Example of counter usage:

```
from odps.udf import get_execution_context
def h(x):
    ctx = get_execution_context()
    counters = ctx.get_counters()
    counters.get_counter('df', 'add_one').increment(1)
    return x + 1
df.field.map(h)
```

You can find the counter value in JSONSummary of LogView.

## Use UDFs for one row

To use UDFs for one row, you can use the `apply` method. The `axis` parameter must be set to 1 to indicate that the operation is performed on the row. The UDF of the `apply` method takes a parameter, which is a row of data from the preceding Collection object. You can retrieve the data in a field by using the attribute or offset.

-   If `the reduce parameter is set to True, a Sequence object is returned. Otherwise, a Collection object is returned. You can use the` `names` and `types` parameters to specify the field names and types of the returned Sequence or Collection object. By default, if you do not specify a type, STRING type is used.
    
    ```
    >>> iris.apply(lambda row: row.sepallength + row.sepalwidth, axis=1, reduce=True, types='float').rename('sepaladd').head(3)
       sepaladd
    0       8.6
    1       7.9
    2       7.9
    ```
    
-   If `reduce` is False in the UDF of the `apply` method, you can use the `yield` keyword to return multiple rows of results.
    
    ```
    >>> iris.count()
    150
    >>>
    >>> def handle(row):
    >>>     yield row.sepallength - row.sepalwidth, row.sepallength + row.sepalwidth
    >>>     yield row.petallength - row.petalwidth, row.petallength + row.petalwidth
    >>>
    >>> iris.apply(handle, axis=1, names=['iris_add', 'iris_sub'], types=['float', 'float']).count()
    300
    ```
    
-   You can also annotate the returned field names and types in the function. You do not need to specify them when you call the function.
    
    ```
    >>> from odps.df import output
    >>>
    >>> @output(['iris_add', 'iris_sub'], ['float', 'float'])
    >>> def handle(row):
    >>>     yield row.sepallength - row.sepalwidth, row.sepallength + row.sepalwidth
    >>>     yield row.petallength - row.petalwidth, row.petallength + row.petalwidth
    >>>
    >>> iris.apply(handle, axis=1).count()
    300
    ```
    
-   You can also use `map_reduce` of `map-only`, which is equivalent to the `apply` method with `axis=1`.
    
    ```
    >>> iris.map_reduce(mapper=handle).count()
    300
    ```
    
-   To use an existing user-defined table function (UDTF) in MaxCompute, specify the name of the UDTF.
    
    ```
    >>> iris['name', 'sepallength'].apply('your_func', axis=1, names=['name2', 'sepallength2'], types=['string', 'float'])
    ```
    
-   When you use the `apply` method for rows and `reduce` is False, you can use the lateral view with the existing rows for purposes such as aggregation.
    
    ```
    >>> from odps.df import output
    >>>
    >>> @output(['iris_add', 'iris_sub'], ['float', 'float'])
    >>> def handle(row):
    >>>     yield row.sepallength - row.sepalwidth, row.sepallength + row.sepalwidth
    >>>     yield row.petallength - row.petalwidth, row.petallength + row.petalwidth
    >>>
    >>> iris[iris.category, iris.apply(handle, axis=1)]
    ```
    

## Use custom aggregations for all columns

When you use the `apply` method, if `axis` is not specified or the value of `axis` is 0, you can pass in a custom aggregation class to aggregate all Sequence objects.

```
class Agg(object):

    def buffer(self):
        return [0.0, 0]

    def __call__(self, buffer, val):
        buffer[0] += val
        buffer[1] += 1

    def merge(self, buffer, pbuffer):
        buffer[0] += pbuffer[0]
        buffer[1] += pbuffer[1]

    def getvalue(self, buffer):
        if buffer[1] == 0:
            return 0.0
        return buffer[0] / buffer[1]
```

```
>>> iris.exclude('name').apply(Agg)
   sepallength_aggregation  sepalwidth_aggregation  petallength_aggregation  petalwidth_aggregation
0                 5.843333                   3.054                 3.758667                1.198667
```

**Note**

When you use UDFs, you cannot use the LIST or DICT types as input or output.

## Reference resources

UDFs can also read MaxCompute resources (such as table and file resources) or reference a Collection object as resources. To do this, you need to write the UDFs as a closure or callable class. See the following two examples.

```
>>> file_resource = o.create_resource('pyodps_iris_file', 'file', file_obj='Iris-setosa')
>>>
>>> iris_names_collection = iris.distinct('name')[:2]
>>> iris_names_collection
       sepallength
0      Iris-setosa
1  Iris-versicolor
```

```
>>> def myfunc(resources):  # resources are passed in by calling order
>>>     names = set()
>>>     fileobj = resources[0] # file resources are represented by a file-like object
>>>     for l in fileobj:
>>>         names.add(l)
>>>     collection = resources[1]
>>>     for r in collection:
>>>         names.add(r.name)  # retrieve the values by using the field name or offset
>>>     def h(x):
>>>         if x in names:
>>>             return True
>>>         else:
>>>             return False
>>>     return h
>>>
>>> df = iris.distinct('name')
>>> df = df[df.name,
>>>         df.name.map(myfunc, resources=[file_resource, iris_names_collection], rtype='boolean').rename('isin')]
>>>
>>> df
              name   isin
0      Iris-setosa   True
1  Iris-versicolor   True
2   Iris-virginica  False
```

**Note**

When the partitioned tables are read, partition fields are not included.

If `axis` is 1 in a row operation, you need to write a function closure or callable class. For aggregation operations on columns, you only need to use the `__init__` function to read resources.

```
>>> words_df
                     sentence
0                 Hello World
1                Hello Python
2  Life is short I use Python
>>>
>>> import pandas as pd
>>> stop_words = DataFrame(pd.DataFrame({'stops': ['is', 'a', 'I']}))
>>>
>>> @output(['sentence'], ['string'])
>>> def filter_stops(resources):
>>>     stop_words = set([r[0] for r in resources[0]])
>>>     def h(row):
>>>         return ' '.join(w for w in row[0].split() if w not in stop_words),
>>>     return h
>>>
>>> words_df.apply(filter_stops, axis=1, resources=[stop_words])
                sentence
0            Hello World
1           Hello Python
2  Life short use Python
```

**Note**

In this example, `stop_words` is a local variable, which is referenced as a resource in MaxCompute during execution.

## Use the third-party Python libraries

You can upload the third-party Python packages (in the formats of whl, egg, zip, and tar.gz) to MaxCompute. When you use a global method or an immediately-invoked method, you need to specify the package files. You must make sure that all dependent libraries are specified. Otherwise, errors may occur when you import the files.

-   You can upload resources by calling the PyODPS resource upload interface [create\_resource](/help/en/maxcompute/user-guide/resources#concept-zgl-m3t-cfb).
    
    Take a python-dateutil package as an example.
    
    1.  You can run the `pip download` command to download the package and its dependencies to a specific path. Two packages are downloaded: six-1.10.0-py2.py3-none-any.whl and python\_dateutil-2.5.3-py2.py3-none-any.whl. Note that the downloaded packages must support the Linux environment.
        
        ```
        $ pip download python-dateutil -d /to/path/
        ```
        
    2.  Then upload the two files to MaxCompute as resources.
        
        ```
        >>> # Make sure that file name extensions are correct.
        >>> odps.create_resource('six.whl', 'file', file_obj=open('six-1.10.0-py2.py3-none-any.whl', 'rb'))
        >>> odps.create_resource('python_dateutil.whl', 'file', file_obj=open('python_dateutil-2.5.3-py2.py3-none-any.whl', 'rb'))
        ```
        
    3.  Now you have a DataFrame object that only contains a STRING field.
        
        ```
        >>> df
                       datestr
        0  2016-08-26 14:03:29
        1  2015-08-26 14:03:29
        ```
        
    4.  Use the following third-party libraries in global configurations.
        
        ```
        >>> from odps import options
        >>>
        >>> def get_year(t):
        >>>     from dateutil.parser import parse
        >>>     return parse(t).strftime('%Y')
        >>>
        >>> options.df.libraries = ['six.whl', 'python_dateutil.whl']
        >>> df.datestr.map(get_year)
           datestr
        0     2016
        1     2015
        ```
        
        Alternatively, use the `libraries` parameter of a method to specify the third-party libraries.
        
        ```
        >>> def get_year(t):
        >>>     from dateutil.parser import parse
        >>>     return parse(t).strftime('%Y')
        >>>
        >>> df.datestr.map(get_year).execute(libraries=['six.whl', 'python_dateutil.whl'])
           datestr
        0     2016
        1     2015
        ```
        
    
    By default, PyODPS supports the third-party libraries that contain pure Python code but no file operations. In later versions of MaxCompute, PyODPS also supports Python libraries that contain binary code or file operations. These libraries must be suffixed with cp27-cp27m-manylinux1\_x86\_64 and uploaded as archives. The .whl packages must be renamed to .zip files. You also need to set odps.isolation.session.enable to True or enable `isolation` in your project. The following example shows how to upload and use the special functions in `scipy`.
    
    ```
    >>> # packages containing binary code must be uploaded by using the archive method, and the file extension .whl must be replaced with .zip.
    >>> odps.create_resource('scipy.zip', 'archive', file_obj=open('scipy-0.19.0-cp27-cp27m-manylinux1_x86_64.whl', 'rb'))
    >>>
    >>> # if isolation is enabled for your project, the following option is optional.
    >>> options.sql.settings = { 'odps.isolation.session.enable': True }
    >>>
    >>> def psi(value):
    >>>     # we recommend that you import the third-party libraries inside the function to avoid the errors caused by the varying structure of a binary package between different operating systems.
    >>>     from scipy.special import psi
    >>>     return float(psi(value))
    >>>
    >>> df.float_col.map(psi).execute(libraries=['scipy.zip'])
    ```
    
    Binary packages that only contain source code can be packed into Wheel files and uploaded in Linux Shell. The Wheel files generated in Mac and Windows cannot be used in MaxCompute.
    
    ```
    python setup.py bdist_wheel
    ```
    
-   You can also use MaxCompute Console to upload resources.
    
    1.  Most of the Python packages are supplied with .whl packages, including the packages containing binary files on various platforms. Therefore, you need to first find the packages that can run on MaxCompute.
        
    2.  In addition, all dependencies must be included. The following table lists the dependencies of the packages.
        
        **Package name**
        
        **Dependencies**
        
        pandas
        
        numpy, python-dateutil, pytz, six
        
        scipy
        
        numpy
        
        scikit-learn
        
        numpy, scipy
        
        **Note**
        
        The numpy package is already provided. You only need to upload python-dateutil, pytz, pandas, SciPy, sklearn, and six packages to run the pandas, scipy, and scikit-learn packages.
        
    3.  You can find [python-dateutil-2.6.0.zip](https://mirrors.aliyun.com/pypi/packages/95/8e/71125f3f24771f50e630b5a6fa9fd209a9f167dcbc3aad65a48cb3dd5694/python-dateutil-2.6.0.zip#md5=530f7b56e36fa42ada6c02a17b15660c) in [python-dateutil](https://mirrors.aliyun.com/pypi/simple/python-dateutil/) and download it.![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5981680061/p6659.png)
        
    4.  Rename the downloaded file to python-dateutil.zip, and upload the file as a resource in the MaxCompute console.
        
        ```
        add archive python-dateutil.zip;
        ```
        
        **Note**
        
        Find, download, and upload [pytz-2017.2.zip](https://mirrors.aliyun.com/pypi/packages/a4/09/c47e57fc9c7062b4e83b075d418800d322caa87ec0ac21e6308bd3a2d519/pytz-2017.2.zip#md5=f89bde8a811c8a1a5bac17eaaa94383c) and [six-1.11.0.tar.gz](https://mirrors.aliyun.com/pypi/packages/16/d8/bc6316cf98419719bd59c91742194c111b6f2e85abac88e496adefaf7afe/six-1.11.0.tar.gz#md5=d12789f9baf7e9fb2524c0c64f1773f8) files in the same way as you do for the python-dateutil file.
        
    5.  To ensure that the packages that contain code in C language, such as Pandas, run on MaxCompute normally, you need to find the .whl package whose name contains cp27-cp27m-manylinux1\_x86\_64. Therefore, you need to find and download [pandas-0.20.2-cp27-cp27m-manylinux1\_x86\_64.whl](https://mirrors.aliyun.com/pypi/packages/44/39/e71009a0ebdbb6206b9fbde0367fc5cb5bb7fdb4521ae785ca7bd63d36aa/pandas-0.20.2-cp27-cp27m-manylinux1_x86_64.whl#md5=31a4d180048f72337d53cc7b87424568), change its extension to .zip, and run `add archive pandas.zip;` on MaxCompute Console to upload it. Upload scipy and scikit-learn packages to MaxCompute in the same way as you do in the preceding procedure.
        
    
    The following table lists the resources to be downloaded for all packages.
    
    **Package name**
    
    **File name**
    
    **Name of resource for upload**
    
    python-dateutil
    
    [python-dateutil-2.6.0.zip](https://mirrors.aliyun.com/pypi/packages/95/8e/71125f3f24771f50e630b5a6fa9fd209a9f167dcbc3aad65a48cb3dd5694/python-dateutil-2.6.0.zip#md5=530f7b56e36fa42ada6c02a17b15660c)
    
    python-dateutil.zip
    
    pytz
    
    [pytz-2017.2.zip](https://mirrors.aliyun.com/pypi/packages/a4/09/c47e57fc9c7062b4e83b075d418800d322caa87ec0ac21e6308bd3a2d519/pytz-2017.2.zip#md5=f89bde8a811c8a1a5bac17eaaa94383c)
    
    pytz.zip
    
    six
    
    [six-1.11.0.tar.gz](https://mirrors.aliyun.com/pypi/packages/16/d8/bc6316cf98419719bd59c91742194c111b6f2e85abac88e496adefaf7afe/six-1.11.0.tar.gz#md5=d12789f9baf7e9fb2524c0c64f1773f8)
    
    six.tar.gz
    
    pandas
    
    [pandas-0.20.2-cp27-cp27m-manylinux1\_x86\_64.zip](https://mirrors.aliyun.com/pypi/packages/44/39/e71009a0ebdbb6206b9fbde0367fc5cb5bb7fdb4521ae785ca7bd63d36aa/pandas-0.20.2-cp27-cp27m-manylinux1_x86_64.whl#md5=31a4d180048f72337d53cc7b87424568)
    
    pandas.zip
    
    scipy
    
    [scipy-0.19.0-cp27-cp27m-manylinux1\_x86\_64.zip](https://mirrors.aliyun.com/pypi/packages/ae/94/28ca6f9311e2351bb68da41ff8c1bc8f82bb82791f2ecd34efa953e60576/scipy-0.19.0-cp27-cp27m-manylinux1_x86_64.whl#md5=0e49f7fc8d31c1c79f0a4d63b29e8a1f)
    
    scipy.zip
    
    scikit-learn
    
    [scikit\_learn-0.18.1-cp27-cp27m-manylinux1\_x86\_64.zip](https://mirrors.aliyun.com/pypi/packages/ca/dd/a18dba8ab879b13b43c3838a25887585a45101f4bffa398e1883e1e3d395/scikit_learn-0.18.1-cp27-cp27m-manylinux1_x86_64.whl#md5=b068bde57f00d285cc89eb0b8615fcae)
    
    sklearn.zip
    

## Specify the third-party Python libraries

-   Globally specify the libraries to be used.
    
    ```
    >>> from odps import options
    >>> options.df.libraries = ['six.whl', 'python_dateutil.whl']
    ```
    
-   In an immediately-invoked method, locally specify the libraries to be used.
    
    ```
    >>> df.apply(my_func, axis=1).to_pandas(libraries=['six.whl', 'python_dateutil.whl'])
    ```
