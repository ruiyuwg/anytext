This topic describes how to create and manage a DataFrame object and how to use DataFrame to process data.

## **Prepare data**

This topic use [u.user](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20241029/glcyhs/u.user), [u.item](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20241029/rhaubr/u.item), and [u.data](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20241029/jjleek/u.data) as examples. The u.user file stores user-related data. The u.item file stores movie-related data. The u.data file stores rating-related data.

1.  Create the following tables:
    
    -   `pyodps_ml_100k_users`: stores user-related data.
        
        ```
        CREATE TABLE IF NOT EXISTS pyodps_ml_100k_users
        (
          user_id    BIGINT COMMENT 'User ID',
          age        BIGINT COMMENT 'Age',
          sex        STRING COMMENT 'Gender',
          occupation STRING COMMENT 'Occupation',
          zip_code   STRING COMMENT 'Zip code'
        );
        ```
        
    -   `pyodps_ml_100k_movies`: stores movie-related data.
        
        ```
        CREATE TABLE IF NOT EXISTS pyodps_ml_100k_movies
        (
            movie_id            BIGINT COMMENT 'Movie ID',
            title              STRING COMMENT 'Movie title',
            release_date       STRING COMMENT 'Release date',
            video_release_date STRING COMMENT 'Video release date',
            IMDb_URL           STRING COMMENT 'IMDb URL',
            unknown            TINYINT COMMENT 'Unknown',
            Action             TINYINT COMMENT 'Action',
            Adventure          TINYINT COMMENT 'Adventure',
            Animation          TINYINT COMMENT 'Animation',
            Children           TINYINT COMMENT 'Children',
            Comedy             TINYINT COMMENT 'Comedy',
            Crime              TINYINT COMMENT 'Crime',
            Documentary        TINYINT COMMENT 'Documentary',
            Drama              TINYINT COMMENT 'Drama',
            Fantasy            TINYINT COMMENT 'Fantasy',
            FilmNoir           TINYINT COMMENT 'Film noir',
            Horror             TINYINT COMMENT 'Horror',
            Musical            TINYINT COMMENT 'Music',
            Mystery            TINYINT COMMENT 'Mystery',
            Romance            TINYINT COMMENT 'Romance',
            SciFi              TINYINT COMMENT 'Science fiction',
            Thriller           TINYINT COMMENT 'Thriller',
            War                TINYINT COMMENT 'War',
            Western            TINYINT COMMENT 'West'
        );
        ```
        
    -   `pyodps_ml_100k_ratings`: stores rating-related data.
        
        ```
        CREATE TABLE IF NOT EXISTS pyodps_ml_100k_ratings
        (
            user_id    BIGINT COMMENT 'User ID',
            movie_id  BIGINT COMMENT 'Movie ID',
            rating    BIGINT COMMENT 'Score',
            timestamp BIGINT COMMENT 'Timestamp'
        )
        ```
        
2.  Run the [Tunnel upload](/help/en/maxcompute/user-guide/tunnel-commands#title-wrf-gnx-itf) command to import data of the files to MaxCompute tables. For more information about Tunnel commands, see [Tunnel commands](/help/en/maxcompute/user-guide/tunnel-commands#concept-rkf-2wc-5db).
    
    ```
    Tunnel upload -fd | path_to_file/u.user pyodps_ml_100k_users;
    Tunnel upload -fd | path_to_file/u.item pyodps_ml_100k_movies;
    Tunnel upload -fd | path_to_file/u.data pyodps_ml_100k_ratings;
    ```
    

## Perform operations on DataFrame objects

In this topic, the following tables are used: `pyodps_ml_100k_movies` (movie-related data), `pyodps_ml_100k_users` (user-related data), and `pyodps_ml_100k_ratings` (rating-related data). The following example shows how to perform the operations on these tables in IPython.

**Note**

Before you use IPython, make sure that Python is installed. IPython is developed based on Python. You must install the Python environment. After the Python environment is installed, you can install IPython by using pip install IPython. After the installation is complete, you can run the IPython command to start the IPython-based interactive environment. Then, you can write and run Python code.

1.  Create a MaxCompute object.
    
    ```
    import os
    from odps import ODPS
    # Set the environment variable ALIBABA_CLOUD_ACCESS_KEY_ID to the AccessKey ID of your Alibaba Cloud account. 
    # Set the environment variable ALIBABA_CLOUD_ACCESS_KEY_SECRET to the AccessKey secret of the Alibaba Cloud account. 
    # We recommend that you do not directly use your AccessKey ID or AccessKey secret.
    o = ODPS(
        os.getenv('ALIBABA_CLOUD_ACCESS_KEY_ID'),
        os.getenv('ALIBABA_CLOUD_ACCESS_KEY_SECRET'),
        project='your-default-project',
        endpoint='your-end-point',
    )
    ```
    
2.  Create a DataFrame object by specifying a table.
    
    ```
    from odps.df import DataFrame
    users = DataFrame(o.get_table('pyodps_ml_100k_users'));
    ```
    
3.  Query the `dtypes` property to view the fields of the DataFrame object and the data types of the fields.
    
    ```
    print(users.dtypes)
    ```
    
    The following result is returned:
    
    ```
    odps.Schema {
      user_id             int64
      age                 int64
      sex                 string
      occupation          string
      zip_code            string
    }
    ```
    
4.  Use the `head` method to retrieve the first N rows of data for a quick preview.
    
    ```
    print(users.head(10))
    ```
    
    The following result is returned:
    
    ```
       user_id  age  sex     occupation  zip_code
    0        1   24    M     technician     85711
    1        2   53    F          other     94043
    2        3   23    M         writer     32067
    3        4   24    M     technician     43537
    4        5   33    F          other     15213
    5        6   42    M      executive     98101
    6        7   57    M  administrator     91344
    7        8   36    M  administrator     05201
    8        9   29    M        student     01002
    9       10   53    M         lawyer     90703
    ```
    
5.  If you do not want to view all the fields, perform the following operations:
    
    -   Specify the fields that you want to query.
        
        ```
        print(users[['user_id', 'age']].head(5))
        ```
        
        The following result is returned:
        
        ```
           user_id  age
        0        1   24
        1        2   53
        2        3   23
        3        4   24
        4        5   33
        ```
        
    -   Exclude specific fields.
        
        ```
        print(users.exclude('zip_code', 'age').head(5))
        ```
        
        The following result is returned:
        
        ```
           user_id  sex  occupation
        0        1    M  technician
        1        2    F       other
        2        3    M      writer
        3        4    M  technician
        4        5    F       other
        ```
        
    -   Exclude specific fields and add new fields based on computation. For example, add the `sex_bool` field and set sex\_bool to True if `sex` is `M`. If the value of sex is not M, set sex\_bool to False.
        
        ```
        print(users.select(users.exclude('zip_code', 'sex'), sex_bool=users.sex == 'M').head(5))
        ```
        
        The following result is returned:
        
        ```
           user_id  age  occupation  sex_bool
        0        1   24  technician      True
        1        2   53       other     False
        2        3   23      writer      True
        3        4   24  technician      True
        4        5   33       other     False
        ```
        
6.  Obtain the numbers of male and female users.
    
    ```
    print(users.groupby(users.sex).agg(count=users.count()))
    ```
    
    The following result is returned:
    
    ```
       sex  count
    0    F    273
    1    M    670
    ```
    
7.  To divide users by occupation, obtain the first 10 occupations that have the largest number of users, and sort the occupations in descending order based on the number of users.
    
    ```
    df = users.groupby('occupation').agg(count=users['occupation'].count())
    df1 = df.sort(df['count'], ascending=False)
    print(df1.head(10))
    ```
    
    The following result is returned:
    
    ```
          occupation  count
    0        student    196
    1          other    105
    2       educator     95
    3  administrator     79
    4       engineer     67
    5     programmer     66
    6      librarian     51
    7         writer     45
    8      executive     32
    9      scientist     31
    ```
    
    Alternatively, you can use the `value_counts` method. The number of records that is returned by using this method is limited by the `options.df.odps.sort.limit` parameter. For more information, see [Configurations](/help/en/maxcompute/user-guide/configurations#concept-zgg-zgg-cfb).
    
    ```
    df = users.occupation.value_counts()[:10]
    print(df.head(10)) 
    ```
    
    The following result is returned:
    
    ```
          occupation  count
    0        student    196
    1          other    105
    2       educator     95
    3  administrator     79
    4       engineer     67
    5     programmer     66
    6      librarian     51
    7         writer     45
    8      executive     32
    9      scientist     31
    ```
    
8.  `Join` the three tables and save the tables as a new table named pyodps\_ml\_100k\_lens.
    
    ```
    movies = DataFrame(o.get_table('pyodps_ml_100k_movies'))
    ratings = DataFrame(o.get_table('pyodps_ml_100k_ratings'))
    
    o.delete_table('pyodps_ml_100k_lens', if_exists=True)
    lens = movies.join(ratings).join(users).persist('pyodps_ml_100k_lens')
    
    print(lens.dtypes)
    ```
    
    The following result is returned:
    
    ```
    odps.Schema {
      movie_id                          int64       
      title                             string      
      release_date                      string      
      ideo_release_date                 string      
      imdb_url                          string      
      unknown                           int64       
      action                            int64       
      adventure                         int64       
      animation                         int64       
      children                          int64       
      comedy                            int64       
      crime                             int64       
      documentary                       int64       
      drama                             int64       
      fantasy                           int64       
      filmnoir                          int64       
      horror                            int64       
      musical                           int64       
      mystery                           int64       
      romance                           int64       
      scifi                             int64       
      thriller                          int64       
      war                               int64       
      western                           int64       
      user_id                           int64       
      rating                            int64       
      timestamp                         int64       
      age                               int64       
      sex                               string      
      occupation                        string      
      zip_code                          string      
    }
    ```
    

## Use DataFrame to process data

Before you perform the following steps, [download the Iris dataset](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20231114/knql/iris.csv). A DataWorks PyODPS node is used in this example. For more information, see [Develop a PyODPS 3 task](/help/en/dataworks/user-guide/create-a-pyodps-3-node#title-80f-r53-j27).

1.  Create a table for storing test data.
    
    Use the table management feature of DataWorks to create a table.
    
    1.  Click the desired workflow in the Business Flow section, right-click **MaxCompute**, and select **Create Table**. In the **Create Table** dialog box, select the path from the **Path** drop-down list, enter a name in the **Name** field, and then click **Create**.
        
    2.  In the upper-left corner of the table editing page, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3925478961/p715417.png) icon.
        
    3.  Execute the following statement to create a table:
        
        ```
        CREATE TABLE pyodps_iris (
            sepallength double COMMENT 'sepal length (cm)',
            sepalwidth double COMMENT 'sepal width (cm)',
            petallength double COMMENT 'petal length (cm)',
            petalwidth double COMMENT 'petal width (cm)',
            name string COMMENT 'name'
        ) ;
        ```
        
    
2.  Upload test data.
    
    1.  Right-click the name of the table that you create, and select **Import Data**. In the **Data Import Wizard** dialog box, click Next. Then, click Browse to upload the dataset that you downloaded.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6071520371/p865241.png)
        
    2.  Select **Match by location** and click Import Data.
        
    
3.  Click the desired workflow, right-click **MaxCompute**, and then choose **Create Node** > **PyODPS 3** to create a PyODPS node to store and run code.
    
4.  Write the code and click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9651120071/p715443.png) icon. You can view the result in the **Runtime Log** section in the lower pane. Code details:
    
    ```
    from odps import ODPS
    from odps.df import DataFrame, output
    import os
    
    # Make sure the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is set to the AccessKey ID of the user,
    # and the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is set to the AccessKey Secret of the user,
    # we do not recommend directly using the AccessKey ID and AccessKey Secret strings.
    o = ODPS(
        os.getenv('ALIBABA_CLOUD_ACCESS_KEY_ID'),
        os.getenv('ALIBABA_CLOUD_ACCESS_KEY_SECRET'),
        project='your-default-project',
        endpoint='your-end-point',
    )
    # Create the DataFrame object iris from the MaxCompute table. 
    iris = DataFrame(o.get_table('pyodps_iris'))
    print(iris.head(10))
    # Display part of the iris content. 
    print(iris.sepallength.head(5))
    
    # Use a user-defined function to calculate the sum of two columns of iris. 
    print(iris.apply(lambda row: row.sepallength + row.sepalwidth, axis=1, reduce=True, types='float').rename('sepaladd').head(3))
    
    # Specify the output name and type of the function. 
    @output(['iris_add', 'iris_sub'], ['float', 'float'])
    def handle(row):
        # Use the yield keyword to return multiple rows of results. 
        yield row.sepallength - row.sepalwidth, row.sepallength + row.sepalwidth
        yield row.petallength - row.petalwidth, row.petallength + row.petalwidth
    
    # Display the results of the first five rows. axis=1 indicates that the axis of the column extends horizontally.
      print(iris.apply(handle, axis=1).head(5))
    ```
    
    The following result is returned:
    
    ```
    # print(iris.head(10))
       sepallength  sepalwidth  petallength  petalwidth         name
    0          4.9         3.0          1.4         0.2  Iris-setosa
    1          4.7         3.2          1.3         0.2  Iris-setosa
    2          4.6         3.1          1.5         0.2  Iris-setosa
    3          5.0         3.6          1.4         0.2  Iris-setosa
    4          5.4         3.9          1.7         0.4  Iris-setosa
    5          4.6         3.4          1.4         0.3  Iris-setosa
    6          5.0         3.4          1.5         0.2  Iris-setosa
    7          4.4         2.9          1.4         0.2  Iris-setosa
    8          4.9         3.1          1.5         0.1  Iris-setosa
    9          5.4         3.7          1.5         0.2  Iris-setosa
    
    
    # print(iris.sepallength.head(5))
       sepallength
    0          4.9
    1          4.7
    2          4.6
    3          5.0
    4          5.4
    
    # print(iris.apply(lambda row: row.sepallength + row.sepalwidth, axis=1, reduce=True, types='float').rename('sepaladd').head(3))
       sepaladd
    0       7.9
    1       7.9
    2       7.7
    
    # print(iris.apply(handle,axis=1).head(5))
       iris_add  iris_sub
    0       1.9       7.9
    1       1.2       1.6
    2       1.5       7.9
    3       1.1       1.5
    4       1.5       7.7
    ```
