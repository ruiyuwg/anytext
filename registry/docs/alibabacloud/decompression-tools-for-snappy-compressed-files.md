When you ship data from Simple Log Service to Object Storage Service (OSS), you can use Snappy to compress the data. After the data is shipped to OSS, you can use decompression tools to decompress the data. The decompression tools include the Snappy library for C++, Snappy library for Java, Snappy library for Python, and Linux-based Snappy tool.

**Important**

The old version of shipping logs to OSS is discontinued. Refer to the [new version](/help/en/sls/shipping-logs-to-oss-new-version/).

## Snappy library for C++

1.  Download and install the Snappy library for C++ from [Snappy](https://github.com/google/snappy).
    
2.  Use the `snappy.uncompress` method to decompress Snappy-compressed files.
    

## Snappy library for Java

1.  Select one of the following methods to download the Snappy library for Java.
    
    **Note**
    
    If you use the library of 1.1.2.1, some Snappy-compressed files may fail to be decompressed. To prevent this issue, we recommend that you use the library of 1.1.2.6 or later. For more information about the issue, visit [bad handling of the MAGIC HEADER](https://github.com/xerial/snappy-java/issues/142).
    
    -   Click the following link to manually download the library:
        
        [xerial snappy-java](https://github.com/xerial/snappy-java)
        
    -   Add the following dependency to a Maven project to download the library:
        
        ```
        <dependency>
        <groupId>org.xerial.snappy</groupId>
        <artifactId>snappy-java</artifactId>
        <version>1.0.4.1</version>
        <type>jar</type>
        <scope>compile</scope>
        </dependency>
        ```
        
2.  Select one of the following methods to decompress the Snappy-compressed files.
    
    **Note**
    
    SnappyFramedInputStream is not supported.
    
    -   `Snappy.uncompress`
        
        Sample code:
        
        ```
        String fileName = "C:\\Downloads\\36_1474212963188600684_4451886.snappy";
        RandomAccessFile randomFile = new RandomAccessFile(fileName, "r");
        int fileLength = (int) randomFile.length();
        randomFile.seek(0);
        byte[] bytes = new byte[fileLength];
        int byteread = randomFile.read(bytes);
        System.out.println(fileLength);
        System.out.println(byteread);
        byte[] uncompressed = Snappy.uncompress(bytes);
        String result = new String(uncompressed, "UTF-8");
        System.out.println(result);
        ```
        
    -   `Snappy.SnappyInputStream`
        
        Sample code:
        
        ```
        String fileName = "C:\\Downloads\\36_1474212963188600684_4451886.snappy";
        SnappyInputStream sis = new SnappyInputStream(new FileInputStream(fileName));
        byte[] buffer = new byte[4096];
        int len = 0;
        while ((len = sis.read(buffer)) != -1) {
            System.out.println(new String(buffer, 0, len));
        }
        ```
        

## Snappy library for Python

1.  Download and install the Snappy library for Python from [python-snappy](https://pypi.org/project/python-snappy/).
    
2.  Use the `snappy.uncompress` method to decompress Snappy-compressed files.
    
    -   Sample code for Python 2:
        
        ```
        import snappy
        compressed = open('/tmp/temp.snappy').read()
        snappy.uncompress(compressed)
        ```
        
    -   Sample code for Python 3:
        
        ```
        import snappy
        compressed = open('/tmp/temp.snappy','rb').read()
        print(snappy.uncompress(compressed).decode(encoding='utf-8',errors="ignore"))
        ```
        
    
    **Note**
    
    -   If you use the snappy.uncompress method to decompress files in a Windows system, an error may occur. For example, the error `UnicodeDecodeError: 'gbk' codec can't decode byte 0xff in position 0: illegal multibyte sequence` may occur because the files in the Windows file system start with byte order mark (BOM). We recommend that you use a UNIX-like system or specify a valid encoding format in the encoding parameter of the open function.
        
    -   The following command cannot be used to decompress Snappy-compressed OSS files. If you want to decompress data by using a CLI, you must use the Hadoop mode (hadoop\_stream\_decompress) or the streaming mode (stream\_decompress).
        
        ```
        python -m snappy -d compressed_file.snappy uncompressed_file                            
        ```
        
    

## Open source Snappy tool for PHP

You can use the open source Snappy tool for PHP to decompress Snappy-compressed files.

1.  Download the source code of the tool from [php-ext-snappy](https://github.com/kjdev/php-ext-snappy).
    
    You can also run the following command to download the source code:
    
    ```
    git clone --recursive --depth=1 https://github.com/kjdev/php-ext-snappy.git
    ```
    
2.  Compile the source code.
    
    ```
    % cd php-ext-snappy
    % phpize
    % ./configure
    % make
    % make install
    ```
    
3.  Configure an extension in the php.ini file.
    
    ```
    extension=snappy.so
    ```
    
    After the configuration, you can compress files by using Snappy and decompress the Snappy-compressed files based on the following code:
    
    ```
    $file_path = "test.snappy" ;
    if (file_exists($file_path)) {
      $str = file_get_contents($file_path); // Read the content of the file into a string. 
      $uncompressed = snappy_uncompress($str);
      echo $uncompressed;
    }
    ```
    

## References

You can view Snappy-related open source projects on GitHub for more support. For more information, see [snappy](https://github.com/google/snappy).
