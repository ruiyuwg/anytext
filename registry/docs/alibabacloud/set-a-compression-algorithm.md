To improve compression efficiency of an IMCI and reduce storage costs, you can set a compression algorithm for an IMCI. This topic describes how to set and modify the compression algorithm for an IMCI.

## Supported compression algorithms

PolarDB for MySQL supports two IMCI compression algorithms: LZ4 and ZSTD.

-   LZ4: a lossless data compression algorithm with a compression speed greater than 500 MB/s per core. For more information, see [LZ4 GitHub](https://github.com/lz4/lz4#readme).
    
-   ZSTD (or Zstandard): a lossless data compression algorithm with a similar compression speed to LZ4. For more information, see [Zstandard GitHub](http://facebook.github.io/zstd/).
    

## Set a compression algorithm when creating a table

-   Syntax:
    
    When you execute the CREATE TABLE statement to create a table, you can specify the codec\_opt parameter in the COMMENT field to set a compression algorithm.
    
    ```
    COMMENT 'COLUMNAR=1 codec_opt={LZ4}'
    ```
    
    Valid values of the codec\_opt parameter: `LZ4`, `ZSTD`, and `NONE`, corresponding to LZ4 compression, ZSTD compression, and no compression.
    
    **Note**
    
    -   The imci\_default\_codec parameter defines the default compression algorithm. When the codec\_opt parameter in the COMMENT field uses the default compression algorithm, the compression algorithm is defined by the imci\_default\_codec parameter. The default value of the imci\_default\_codec parameter is ZSTD.
        
    -   You can execute the SET statement to modify the value of the imci\_default\_codec parameter at the session level, or
        
    
    The compression algorithm specified in the COMMENT field of a table is applied to all IMCIs of the table. If a compression algorithm is also set in the COMMENT field of a column, the compression algorithm of the IMCI valid for the column takes precedence.
    
-   Example:
    
    ```
    CREATE TABLE t12(
      col1 INT,
      col2 DATETIME,
      col3 VARCHAR(200)
    ) ENGINE InnoDB COMMENT 'COLUMNAR=1 codec_opt={LZ4}';
    
    SET imci_default_codec="{LZ4}";
    
    CREATE TABLE t13(
      col1 INT COMMENT 'codec_opt={NONE}',
      col2 DATETIME,
      col3 VARCHAR(200) 'codec_opt={ZSTD}'
    ) ENGINE InnoDB COMMENT 'COLUMNAR=1';
    ```
    
    In the preceding example:
    
    -   The default compression algorithm specified in the COMMENT field of the `t12` table is LZ4. Therefore, data in the col1, col2, and col3 columns uses the LZ4 compression algorithm.
        
    -   No compression algorithm is set for the `t13` table. Compression is disabled for the col1 column. The codec\_opt parameter is not set for the col2 column, so the LZ4 compression algorithm specified by the imci\_default\_codec parameter is used. The col3 column uses the ZSTD compression algorithm because the codec\_opt={ZSTD} string is added for the col3 column and the compression algorithm specified for a column has a higher priority than the compression algorithm specified by the imci\_default\_codec parameter.
        

## Modify the compression algorithm of the IMCI valid for a column

You cannot modify the compression algorithm of the IMCI valid for a column. To this end, you must delete the original data of the column, and then use the table creation statement to specify a new compression algorithm of the IMCI valid for the column. Modifying the compression method of the IMCI valid for a column will be available later.

Example:

```
CREATE TABLE t14(
  col1 INT COMMENT 'COLUMNAR=1 codec_opt={ZSTD}',
  col2 DATETIME COMMENT 'COLUMNAR=1 codec_opt={ZSTD}',
  col3 VARCHAR(200)
) ENGINE InnoDB;

-- Modify the compression algorithm of the IMCI valid for a column.
ALTER TABLE t14 COMMENT 'COLUMNAR=1', MODIFY COLUMN col2 DATETIME COMMENT 'codec_opt={LZ4}';
```

In the preceding example, an IMCI is created for the col2 column in the `t14` table, and the compression algorithm is ZSTD. If you execute the ALTER TABLE statement to try to modify the compression algorithm to LZ4, the new compression algorithm does not take effect immediately, but when you rebuild data. The original compression algorithm is used for existing data and subsequently added data because the ALTER TABLE statement does not trigger a rebuild data operation.
