PyODPS provides a pandas-like API, PyODPS DataFrame, which can make full use of the computing power of MaxCompute. You can also change the data source from MaxCompute tables to pandas DataFrame, so that the same code can be executed on pandas.

**Note**

Maintenance of PyODPS DataFrame is discontinued. For new projects, please do not use this teature.

-   [Getting started](/help/en/maxcompute/user-guide/dataframe-quick-start#concept-odx-wwf-cfb): describes how to create and manage a DataFrame object and how to use DataFrame to process data.
    
-   [Create a DataFrame object](/help/en/maxcompute/user-guide/create-a-dataframe-object#concept-nfg-tr4-cfb): describes how to create a DataFrame project to reference a data source.
    
-   [Sequence](/help/en/maxcompute/user-guide/sequence#concept-ddr-lv4-cfb): introduces sequence objects in DataFrame. SequenceExpr represents a column in a two-dimensional dataset. You are not allowed to manually create SequenceExpr objects. You can only retrieve one from a collection object.
    
-   [Collection](/help/en/maxcompute/user-guide/collection#concept-nsj-ft4-cfb): introduces collection objects in DataFrame. CollectionExpr supports various operations on two-dimensional datasets, such as column operations, data filtering, and data transformation.
    
-   [Execution](/help/en/maxcompute/user-guide/execution#concept-hv4-mx4-cfb): introduces the execution methods that you can call to perform operations in DataFrame.
    
-   [MapReduce API](/help/en/maxcompute/user-guide/mapreduce-api#concept-cyr-tfg-cfb): describes how to use the MapReduce API in DataFrame.
    
-   [Column operations](/help/en/maxcompute/user-guide/column-operations#concept-sx2-sbg-cfb): describes the column operations supported by DataFrame.
    
-   [Aggregation](/help/en/maxcompute/user-guide/aggregation#concept-iv4-kcg-cfb): describes the aggregation operations supported by DataFrame. It also describes how to implement group aggregation and write aggregate functions.
    
-   [Sort, deduplicate, sample, and transform data](/help/en/maxcompute/user-guide/sort-deduplicate-sample-and-transform-data#concept-v31-5gn-cfb): describes how to perform sorting, deduplication, sampling, and data transformation on DataFrame objects.
    
-   [Merge data](/help/en/maxcompute/user-guide/data-merging#concept-gts-wfg-cfb): describes the data merge operations supported by DataFrame. These operations include the JOIN and UNION operations.
    
-   [Window functions](/help/en/maxcompute/user-guide/window-functions#concept-obr-zfg-cfb): describes the window functions supported by DataFrame.
    
-   [Plotting](/help/en/maxcompute/user-guide/plotting#concept-gcb-2gg-cfb): describes the plotting methods provided by DataFrame.
    
-   [Debugging](/help/en/maxcompute/user-guide/debugging#concept-ebz-ggg-cfb): describes how to perform DataFrame debugging. DataFrame can optimize and display the entire execution. You can visualize the execution.
