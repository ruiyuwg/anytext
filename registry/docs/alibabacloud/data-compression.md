LZ4 is a lossless data compression algorithm, which is used to compress and decompress data with high efficiency. Some API operations of Simple Log Service support LZ4. Using LZ4 to compress data can reduce network traffic, decrease traffic costs, and increase the speed to access the Simple Log Service API.

## Compress an HTTP request body

When you call the following API operations, the HTTP request body can be compressed by using LZ4:

-   PutLogs (PutLogStoreLogs)
    
-   PutWebtracking
    

To use LZ4 to compress an HTTP request body, perform the following steps:

1.  Add `x-log-compresstype: lz4` to the HTTP request header.
    
2.  Use LZ4 to compress the HTTP request body.
    
3.  Set the `x-log-bodyrawsize` parameter in the HTTP request header to the original size of the request body.
    
4.  Set the `Content-Length` parameter in the HTTP request header to the compression size of the request body.
    

## Compress a response

When you call the PullLogs operation, the response can be compressed by using LZ4.

Method:

-   Set the `Accept-Encoding` parameter to `lz4` in the request header. Then, the server side returns a response that is compressed by using LZ4.
    
-   The `x-log-bodyrawsize` parameter in the returned request header specifies the original size of the request body. You can use the parameter when you decompress the request body.
    

## Examples

-   Raw log
    
    Take the log-sample.json file as an example. The following example is for reference only. The information contained in the request and response varies with the actual data structure of the raw log when you call the API operations of Simple Log Service:
    
    ```
    {
      "__tags__": {},
      "__topic__": "",
      "__source__": "47.100.XX.XX",
      "__logs__": [
        {
          "__time__": "03/22 08:51:01",
          "content": "*************** RSVP Agent started ***************",
          "method": "main",
          "level": "INFO"
        },
        {
          "__time__": "03/22 08:51:01",
          "content": "Specified configuration file: /u/user10/rsvpd1.conf",
          "method": "locate_configFile",
          "level": "INFO"
        },
        {
          "__time__": "03/22 08:51:01",
          "content": "Using log level 511",
          "method": "main",
          "level": "INFO"
        },
        {
          "__time__": "03/22 08:51:01",
          "content": "Get TCP images rc - EDC8112I Operation not supported on socket",
          "method": "settcpimage",
          "level": "INFO"
        },
        {
          "__time__": "03/22 08:51:01",
          "content": "Associate with TCP/IP image name = TCPCS",
          "method": "settcpimage",
          "level": "INFO"
        },
        {
          "__time__": "03/22 08:51:02",
          "content": "registering process with the system",
          "method": "reg_process",
          "level": "INFO"
        },
        {
          "__time__": "03/22 08:51:02",
          "content": "attempt OS/390 registration",
          "method": "reg_process",
          "level": "INFO"
        },
        {
          "__time__": "03/22 08:51:02",
          "content": "return from registration rc=0",
          "method": "reg_process",
          "level": "INFO"
        }
      ]
    }
    ```
    
-   Test procedure
    
    The following Python code shows the procedure of data compression:
    
    ```
    from lz4 import block
    with open('log-sample.json', 'rb') as f:
        data = f.read()
        compressed=block.compress (data, store_size=False) # Compress data:
        print(f'out/in: {len(compressed)}/{len(data)} Bytes')
        print(f'Compression ratio: {len(compressed)/len(data):.2%}')
    ```
    
-   Result
    
    The compression result of the log-sample.json file is returned. The compression ratio is 39.30%. The compression ratio depends on the content of data. If the data contains a number of repetitive content, the compression ratio is high:
    
    ```
    out/in: 542/1379 Bytes
    Compression ratio: 39.30%
    ```
    

## Sample code

-   Go
    
    -   Install dependent libraries:
        
        ```
        go get github.com/pierrec/lz4
        ```
        
    -   Sample code:
        
        ```
        import (
            "fmt"
            "log"
        
            lz4 "github.com/cloudflare/golz4"
        )
        
        func main() {
            data := []byte("hello world, hello golang")
            // Compress data.
            compressed := make([]byte, lz4.CompressBound(data))
            compressedSize, err := lz4.Compress(data, compressed)
            if err != nil {
                log.Fatal(err)
            }
            compressed = compressed[:compressedSize]
        
            // Decompress data.
            bodyRawSize := len(data) // You can use the x-log-bodyrawsize parameter in the returned HTTP request header to decompress data. 
            decompressed := make([]byte, bodyRawSize)
            err = lz4.Uncompress(compressed, decompressed)
            if err != nil {
                log.Fatal(err)
            }
            decompressed = decompressed[:bodyRawSize]
        }
        ```
        
    
-   Python
    
    -   Install dependent libraries:
        
        ```
        python3 -m pip install lz4
        ```
        
    -   Sample code:
        
        ```
        from lz4 import block
        
        data = b'hello world, hello sls'
        # Compress data.
        compressed = block.compress(data, store_size=False)
        
        # Decompress data.
        body_raw_size=len(data) # You can use the x-log-bodyrawsize parameter in the returned HTTP request header to decompress data. 
        decompressed = block.decompress(compressed, uncompressed_size=body_raw_size)
        ```
        
    
-   Java
    
    -   Add Maven dependencies:
        
        ```
        <dependency>
          <groupId>net.jpountz.lz4</groupId>
          <artifactId>lz4</artifactId>
          <version>1.3.0</version>
        </dependency>
        ```
        
    -   Sample code:
        
        ```
        package sample;
        
        import net.jpountz.lz4.LZ4Compressor;
        import net.jpountz.lz4.LZ4Factory;
        import net.jpountz.lz4.LZ4FastDecompressor;
        
        import java.io.File;
        import java.io.IOException;
        import java.nio.file.Files;
        
        public class Sample {
            public static void main(String[] args) throws IOException {
                byte[] data = "hello world, hello sls".getBytes();
                // Compress data.
                LZ4Compressor compressor = LZ4Factory.fastestInstance().fastCompressor();
                int maxLen = compressor.maxCompressedLength(data.length);
                byte[] buffer = new byte[maxLen];
                int compressedSize = compressor.compress(data, 0, data.length, buffer, 0, maxLen);
                // Copy the buffer to the compressed parameter. 
                byte[] compressed = new byte[compressedSize];
                System.arraycopy(buffer, 0, compressed, 0, compressedSize);
        
                // Decompress data.
                int bodyRawSize = data.length; // You can use the x-log-bodyrawsize parameter in the returned HTTP request header to decompress data. 
                LZ4FastDecompressor decompressor = LZ4Factory.fastestInstance().fastDecompressor();
                byte[] decompressed = new byte[bodyRawSize];
                decompressor.decompress(compressed, 0, decompressed, 0, bodyRawSize);
            }
        }
        ```
        
    
-   JavaScript
    
    -   Use npm or Yarn to install the buffer and lz4 dependency libraries:
        
        ```
        npm install buffer lz4
        ```
        
    -   Sample code:
        
        ```
        import lz4 from 'lz4'
        import { Buffer } from 'buffer'
        
        // Compress data.
        const data = 'hello world, hello sls'
        const output = Buffer.alloc(lz4.encodeBound(data.length))
        const compressedSize = lz4.encodeBlock(Buffer.from(data), output)
        const compressed = Uint8Array.prototype.slice.call(output, 0, compressedSize)
        
        // Decompress data.
        const bodyRawSize = data.length; // You can use the x-log-bodyrawsize parameter in the returned HTTP request header to decompress data. 
        const decompressed = Buffer.alloc(bodyRawSize)
        lz4.decodeBlock(Buffer.from(compressed), decompressed)
        const result = decompressed.toString()
        ```
        
    
-   C++
    
    -   Copy the lz4 directory and lib directory from the root directory of the C++ SDK project to the destination directory. When you compile code, add compilation parameters and add the path and link of the lz4 dependency library. For example, you can add the path -L./lib and the link -llz4. For more information, see [Install Simple Log Service SDK for C++](/help/en/sls/developer-reference/install-log-service-sdk-for-cpp#task-2148661):
        
        ```
        g++ -o your_progame your_progame.cpp -std=gnu++11 -llz4 -L./lib/
        ```
        
    -   Sample code:
        
        ```
        #include "lz4/lz4.h"
        #include <string>
        #include <iostream>
        using namespace std;
        
        int main()
        {
            string data = "hello sls, hello lz4";
            // Compress data.
            string compressed;
            compressed.resize(LZ4_compressBound(data.size()));
            int compressed_size = LZ4_compress(data.c_str(), &compressed[0], data.size());
            compressed.resize(compressed_size);
        
            // Decompress data.
            string decompressed;
            int bodyRawSize = data.size();
            decompressed.resize(bodyRawSize);
            LZ4_decompress_safe(compressed.c_str(), &decompressed[0], compressed.size(), bodyRawSize);
            cout << decompressed << endl;
            return 0;
        }
        ```
