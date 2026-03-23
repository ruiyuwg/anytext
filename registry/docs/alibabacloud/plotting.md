This topic describes the plotting feature that is provided by Alibaba Cloud MaxCompute SDK for Python (PyODPS) DataFrame.

To enable the plotting feature, install the pandas and Matplotlib libraries.

Run the `pip install matplotlib` command to install the Matplotlib library, and run the following sample code in Jupyter to create plots.

## Sample code for plotting

-   Single-line plot
    
    ```
    >>> from odps.df import DataFrame
    >>> iris = DataFrame(o.get_table('pyodps_iris'))
    >>> %matplotlib inline
    >>> iris.sepalwidth.plot()
    <matplotlib.axes._subplots.AxesSubplot at 0x10c2b3510>
    ```
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4046472061/p11823.png)
-   Multi-line plot
    
    ```
    >>> iris.plot()
    <matplotlib.axes._subplots.AxesSubplot at 0x10db7e690>
    ```
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4046472061/p11824.png)
-   Vertical bar plot
    
    ```
    >>> iris.groupby('name').sum().plot(kind='bar', x='name', stacked=True, rot=30)
    <matplotlib.axes._subplots.AxesSubplot at 0x10c5f2090>
    ```
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4046472061/p11825.png)
-   Histogram
    
    ```
    >>> iris.hist(sharex=True)
    array([[<matplotlib.axes._subplots.AxesSubplot object at 0x10e013f90>,
            <matplotlib.axes._subplots.AxesSubplot object at 0x10e2d1c10>],
           [<matplotlib.axes._subplots.AxesSubplot object at 0x10e353f10>,
            <matplotlib.axes._subplots.AxesSubplot object at 0x10e3c4410>]], dtype=object)
    ```
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4046472061/p11826.png)

The `kind` parameter specifies the plot type. The following table lists the plot types that are supported by PyODPS DataFrame. For more information, see [pandas.DataFrame.plot](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.plot.html).

 

kind

Description

line

The line plot

bar

The vertical bar plot

barh

The horizontal bar plot

hist

The histogram

box

The box plot

kde

The kernel density estimation plot

density

The kernel density estimation plot

area

The area plot

pie

The pie plot

scatter

The scatter plot

hexbin

The hexagonal bin plot

The `plot` function also supports the following parameters.

 

Parameter

Description

xlabel

Specifies the label for the x-axis.

ylabel

Specifies the label for the y-axis.

xlabelsize

Specifies the size of label for the x-axis.

ylabelsize

Specifies the size of the label for the y-axis.

labelsize

Specifies the size of the label for the axis.

title

Specifies the name of the title.

titlesize

Specifies the size of the title.

annotate

Specifies whether to add an annotation.
