This topic describes the join and union operations that are supported by Alibaba Cloud MaxCompute SDK for Python (PyODPS) DataFrame to merge data in tables.

## **Prerequisites**

Table data is imported. You can download the data based on the instructions in the "Prepare data" section in [Getting started](/help/en/maxcompute/user-guide/dataframe-quick-start#92a25b804bdul). The following code shows the structures of the tables.

```
>>> from odps.df import DataFrame
>>> movies = DataFrame(o.get_table('pyodps_ml_100k_movies'))
>>> ratings = DataFrame(o.get_table('pyodps_ml_100k_ratings'))

>>> movies.dtypes
odps.Schema {
  movie_id                            int64
  title                               string
  release_date                        string
  video_release_date                  string
  _url                            string
}

>>> ratings.dtypes
odps.Schema {
  user_id                     int64
  movie_id                    int64
  rating                      int64
  unix_timestamp              int64
}
```

## Join operations

PyODPS DataFrame allows you to `join` two Collection objects.

-   If you do not specify `join` conditions, the DataFrame API uses the columns of the same name to `join` the Collection objects.
    
    ```
    >>> movies.join(ratings).head(3)
       movie_id              title  release_date  video_release_date                                           url  user_id  rating  unix_timestamp
    0         3  Four Rooms (1995)   01-Jan-1995                      http://example.aliyundoc.com/M/title-exact?Four%20Rooms%...       49       3       888068877
    1         3  Four Rooms (1995)   01-Jan-1995                      http://example.aliyundoc.com/M/title-exact?Four%20Rooms%...      621       5       881444887
    2         3  Four Rooms (1995)   01-Jan-1995                      http://example.aliyundoc.com/M/title-exact?Four%20Rooms%...      291       3       874833936
    ```
    
-   You can explicitly specify `join` conditions. For a `join` operation, if the column names specified in the `on` condition for the two DataFrame objects are the same, the system uses the specified columns in one of the two tables for the new table.
    
    ```
    >>> movies.join(ratings, on='movie_id').head(3)
       movie_id              title  release_date  video_release_date                                            url  user_id  rating  unix_timestamp
    0         3  Four Rooms (1995)   01-Jan-1995                      http://example.aliyundoc.com/M/title-exact?Four%20Rooms%...       49       3       888068877
    1         3  Four Rooms (1995)   01-Jan-1995                      http://example.aliyundoc.com/M/title-exact?Four%20Rooms%...      621       5       881444887
    2         3  Four Rooms (1995)   01-Jan-1995                      http://example.aliyundoc.com/M/title-exact?Four%20Rooms%...      291       3       874833936
    ```
    
-   For other types of `join` operations such as `left join`, if the column names specified in the on condition for the two Collection objects are the same, the system renames the specified columns for the new table.
    
    ```
    >>> movies.left_join(ratings, on='movie_id').head(3)
       movie_id_x              title  release_date  video_release_date                                           url  user_id  movie_id_y  rating  unix_timestamp
    0           3  Four Rooms (1995)   01-Jan-1995                      http://example.aliyundoc.com/M/title-exact?Four%20Rooms%...       49           3       3       888068877
    1           3  Four Rooms (1995)   01-Jan-1995                      http://example.aliyundoc.com/M/title-exact?Four%20Rooms%...      621           3       5       881444887
    2           3  Four Rooms (1995)   01-Jan-1995                      http://example.aliyundoc.com/M/title-exact?Four%20Rooms%...      291           3       3       874833936
    ```
    
    In the preceding sample code, the two `movie_id` columns are renamed as `movie_id_x` and `movie_id_y`. The renaming rule depends on the `suffixes` parameter. The default value of the suffixes parameter is `('_x', '_y')`. When columns of the same name are found, the system renames the columns by using the specified suffixes.
    
    ```
    >>> ratings2 = ratings[ratings.exclude('movie_id'), ratings.movie_id.rename('movie_id2')]
    >>> ratings2.dtypes
    odps.Schema {
      user_id                     int64
      rating                      int64
      unix_timestamp              int64
      movie_id2                   int64
    }
    >>> movies.join(ratings2, on=[('movie_id', 'movie_id2')]).head(3)
       movie_id              title  release_date  video_release_date                                           url  user_id  rating  unix_timestamp  movie_id2
    0         3  Four Rooms (1995)   01-Jan-1995                      http://example.aliyundoc.com/M/title-exact?Four%20Rooms%...       49       3       888068877          3
    1         3  Four Rooms (1995)   01-Jan-1995                      http://example.aliyundoc.com/M/title-exact?Four%20Rooms%...      621       5       881444887          3
    2         3  Four Rooms (1995)   01-Jan-1995                      http://example.aliyundoc.com/M/title-exact?Four%20Rooms%...      291       3       874833936          3
    ```
    
-   You can also specify an expression that uses the equality operator in the `on` condition to rename columns for the new table.
    
    ```
    >>> movies.join(ratings2, on=[movies.movie_id == ratings2.movie_id2]).head(3)
       movie_id              title  release_date  video_release_date                                           url  user_id  rating  unix_timestamp  movie_id2
    0         3  Four Rooms (1995)   01-Jan-1995                      http://example.aliyundoc.com/M/title-exact?Four%20Rooms%...       49       3       888068877          3
    1         3  Four Rooms (1995)   01-Jan-1995                      http://example.aliyundoc.com/M/title-exact?Four%20Rooms%...      621       5       881444887          3
    2         3  Four Rooms (1995)   01-Jan-1995                      http://example.aliyundoc.com/M/title-exact?Four%20Rooms%...      291       3       874833936          3
    ```
    
-   If you perform a `self join` operation, you can call the `view` method to retrieve columns from the left and right tables.
    
    ```
    >>> movies2 = movies.view()
    >>> movies.join(movies2, movies.movie_id == movies2.movie_id)[movies, movies2.movie_id.rename('movie_id2')].head(3)
       movie_id            title_x release_date_x video_release_date_x  \
    0         2   GoldenEye (1995)    01-Jan-1995                 True
    1         3  Four Rooms (1995)    01-Jan-1995                 True
    2         4  Get Shorty (1995)    01-Jan-1995                 True
    
                                              url_x  movie_id2
    0  http://example.aliyundoc.com/M/title-exact?GoldenEye%20(...          2
    1  http://example.aliyundoc.comtitle-exact?Four%20Rooms%...          3
    2  http://example.aliyundoc.com/M/title-exact?Get%20Shorty%...          4
    ```
    
    PyODPS DataFrame supports the `left join`, `right join`, and `outer join` operations in addition to the `join` operation. In the left join, right join, and outer join operations, renamed columns are suffixed with `_x` or `_y` by default. You can use a 2-`tuple` to define the suffixes in the `suffixes` parameter.
    
-   When you perform the left join, right join, or outer join operation, you can set the `merge_columns` parameter to True to prevent duplicate columns in the new table. The system then selects non-null values from the duplicate columns as the values in the new column.
    
    ```
    >>> movies.left_join(ratings, on='movie_id', merge_columns=True)
    ```
    

If you want to perform the `mapjoin` operation, set `mapjoin` to True. The system then performs the `mapjoin` operation on the right table. You can separately perform `join` operations on PyODPS and Pandas collections. You can also separately perform `join` operations on PyODPS and database collections. In this case, the calculation is performed on PyODPS.

## Union operations

If the fields and field types of the two tables are the same, you can use `union` or `concat` to merge the two tables into one table, regardless of whether the field sequence in the two tables is the same.

```
>>> mov1 = movies[movies.movie_id < 3]['movie_id', 'title']
>>> mov2 = movies[(movies.movie_id > 3) & (movies.movie_id < 6)]['title', 'movie_id']
>>> mov1.union(mov2)
   movie_id              title
0         1   Toy Story (1995)
1         2   GoldenEye (1995)
2         4  Get Shorty (1995)
3         5     Copycat (1995)
```

You can separately perform `union` operations on PyODPS and Pandas collections. You can also separately perform `union` operations on PyODPS and database collections. In this case, the calculation is performed on PyODPS.
