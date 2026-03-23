This topic describes the performance of ossfs 2.0 in different scenarios, including file read and write speeds and performance in concurrent scenarios. This information provides accurate performance references to help you better select and use ossfs 2.0 for your business operations.

## **Test environment**

-   Hardware
    
    -   Instance type: ecs.g7.32xlarge
        
    -   vCPU: 128 vCPUs
        
    -   Memory: 512 GiB
        
-   Software
    
    -   Operating system: Alibaba Cloud Linux 3.2104 LTS 64-bit
        
    -   Kernel version: 5.10.134-18.al8.x86\_64
        
    -   ossfs versions: ossfs 2.0.0beta, ossfs 1.91.4
        

## **Mount configuration**

Assume that the mount path of the OSS volume in the container is `/mnt/oss`.

-   ossfs 2.0
    
    In this test, add the `otherOpts` parameter to specify the multipart upload size as 33554432 bytes.
    
    ```
    upload_buffer_size=33554432
    ```
    
-   ossfs 1.0
    
    In this test, add the `otherOpts` parameter to enable direct read mode and cache optimization.
    
    ```
    -o direct_read -o readdir_optimize
    ```
    

## **Test scenarios**

After buckets are mounted using ossfs 2.0.0beta and ossfs 1.91.4, flexible I/O tester (FIO) is used to test the basic read and write capabilities of ossfs 2.0 and ossfs 1.0. The test scenarios and results are as follows.

### **Directly write 100 GB of data in sequence using a single thread**

**Note**

The write performance of ossfs 1.0 is limited by the disk performance.

-   Test command
    
    Use FIO to run a single-thread test task named file-100G to directly write 100 GB of data with a part size of 1 MB to the /mnt/oss/fio\_direct\_write directory and output the test results.
    
    ```
    fio --name=file-100G --ioengine=libaio --rw=write --bs=1M --size=100G --numjobs=1 --direct=1 --directory=/mnt/oss/fio_direct_write --group_reporting
    ```
    
-   Test results
    
    **ossfs version**
    
    **Bandwidth**
    
    **CPU core usage (the full capacity of a core is 100%)**
    
    **Peak memory**
    
    ossfs 2.0
    
    2.2 GB/s
    
    207%
    
    2,167 MB
    
    ossfs 1.0
    
    118 MB/s
    
    5%
    
    15 MB
    

### **Read 100 GB of data in sequence using a single thread**

-   Test command
    
    After clearing the page cache, use FIO to read 100 GB of data with a part size of 1 MB from the /mnt/oss/fio\_direct\_write directory in sequence using a single thread and output the test results.
    
    ```
    echo 1 > /proc/sys/vm/drop_caches
    fio --name=file-100G --ioengine=libaio --direct=1 --rw=read --bs=1M --directory=/mnt/oss/fio_direct_write --group_reporting --numjobs=1
    ```
    
-   Test results
    
    **ossfs version**
    
    **Bandwidth**
    
    **CPU core usage (the full capacity of a core is 100%)**
    
    **Peak memory**
    
    ossfs 2.0
    
    3.0 GB/s
    
    378%
    
    1,617 MB
    
    ossfs 1.0
    
    355 MB/s
    
    50%
    
    400 MB
    

### **Read 100 GB of data in sequence using multiple threads**

-   Generate test files
    
    Create 4 files, with 100 GB each, in the `/mnt/oss/fio` mount directory.
    
    ```
    fio --name=file-100g --ioengine=libaio --direct=1 --iodepth=1 --numjobs=4 --nrfiles=1 --rw=write --bs=1M  --size=100G --group_reporting --thread --directory=/mnt/oss/fio
    ```
    
-   Test command
    
    After clearing the page cache, use FIO to concurrently read the 4 created files with a part size of 1 MB in the `/mnt/oss/fio` directory in 30 seconds using 4 threads and output the results.
    
    ```
    echo 1 > /proc/sys/vm/drop_caches
    fio --name=file-100g --ioengine=libaio --direct=1 --iodepth=1 --numjobs=4 --nrfiles=1 --rw=read --bs=1M  --size=100G --group_reporting --thread --directory=/mnt/oss/fio --time_based --runtime=30
    ```
    
-   Test results
    
    **ossfs version**
    
    **Bandwidth**
    
    **CPU core usage (the full capacity of a core is 100%)**
    
    **Peak memory**
    
    ossfs 2.0
    
    7.1 GB/s
    
    1,187%
    
    6.2 GB
    
    ossfs 1.0
    
    1.4 GB/s
    
    210%
    
    1.6 GB
    

### **Concurrently read 100,000 files with 128 KB each using 128 threads**

**Note**

Object Storage Service (OSS) provides up to 10,000 queries per second (QPS) for each Alibaba Cloud account. For more information, see [QPS](/help/en/oss/user-guide/limits#406d9aee78lbl). To achieve the desired performance in the test, make sure that the QPS for your Alibaba Cloud account is not used by other business.

-   Test procedure
    
    1.  Create a Go program named `rw-bench.go`.
        
        This program has the following core features: 1. It can concurrently create multiple files with the same size in the destination file directory. 2. It can concurrently read all files in the destination file directory, assign the files to n threads for reading, and record the bandwidth data.
        
        **Sample code**
        
        ```
        package main
        
        import (
        	"flag"
        	"fmt"
        	"io"
        	"log"
        	"os"
        	"path/filepath"
        	"sync"
        	"time"
        )
        
        var dir = flag.String("dir", "", "work dir")
        var threads = flag.Int("threads", 128, "concurrency threads count")
        var isWrite = flag.Bool("write", false, "test write files")
        var fileSize = flag.Int64("file-size-KB", 128, "file size in KBytes")
        var fileCount = flag.Int("file-count", 0, "file count")
        
        type fileInfo struct {
        	Name string
        	Size int64
        }
        
        func getFileList(dir string, isWrite bool) []fileInfo {
        	var files []fileInfo
        
        	if isWrite {
        		for i := 0; i < *fileCount; i++ {
        			files = append(files, fileInfo{
        				Name: fmt.Sprintf("%v/%v.dat", dir, i),
        				Size: *fileSize * 1024,
        			})
        		}
        	} else {
        		err := filepath.Walk(dir, func(path string, info os.FileInfo, err error) error {
        			if err != nil {
        				return err
        			}
        			if !info.IsDir() {
        				files = append(files, fileInfo{
        					Name: path,
        					Size: info.Size(),
        				})
        			}
        			return nil
        		})
        
        		if err != nil {
        			log.Fatalf("Error walking the path %v: %v\n", dir, err)
        		}
        	}
        
        	return files
        }
        
        func worker(taskChan <-chan fileInfo, wg *sync.WaitGroup, bytesChan chan<- int64, isWrite bool) {
        	defer wg.Done()
        	buffer := make([]byte, 1024*1024)
        
        	for fInfo := range taskChan {
        		var fd *os.File
        		var err error
        		if isWrite {
        			fd, err = os.OpenFile(fInfo.Name, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, 0644)
        			if err != nil {
        				fmt.Printf("Failed to create/open %v with %v\n", fInfo.Name, err)
        				continue
        			}
        		} else {
        			fd, err = os.OpenFile(fInfo.Name, os.O_RDONLY, 0)
        			if err != nil {
        				fmt.Printf("Failed to open %v with %v\n", fInfo.Name, err)
        				continue
        			}
        		}
        
        		offset := int64(0)
        		var totalBytes int64
        		for offset < fInfo.Size {
        			var n int
        
        			if offset+int64(len(buffer)) > fInfo.Size {
        				buffer = buffer[:fInfo.Size-offset]
        			}
        
        			if isWrite {
        				n, err = fd.WriteAt(buffer, offset)
        				if err != nil {
        					fmt.Printf("Failed to write file %v at %v, with %v\n", fInfo.Name, offset, err)
        					break
        				}
        			} else {
        				n, err = fd.ReadAt(buffer, offset)
        				if err != nil && err != io.EOF {
        					fmt.Printf("Failed to read file %v at %v, with %v\n", fInfo.Name, offset, err)
        					break
        				}
        			}
        
        			totalBytes += int64(n)
        			offset += int64(n)
        		}
        
        		fd.Close()
        		bytesChan <- totalBytes
        	}
        }
        
        func doBench(dir string, isWrite bool) {
        	files := getFileList(dir, isWrite)
        	var wg sync.WaitGroup
        
        	if isWrite {
        		fmt.Printf("start write bench with %v files\n", len(files))
        	} else {
        		fmt.Printf("start read bench with %v files\n", len(files))
        	}
        
        	taskChan := make(chan fileInfo, 1024)
        
        	go func(taskChan chan<- fileInfo) {
        		for _, fInfo := range files {
        			taskChan <- fInfo
        		}
        		close(taskChan)
        	}(taskChan)
        
        	bytesChan := make(chan int64, 1024)
        	for i := 0; i < *threads; i++ {
        		wg.Add(1)
        		go worker(taskChan, &wg, bytesChan, isWrite)
        	}
        
        	st := time.Now()
        	go func() {
        		wg.Wait()
        		close(bytesChan)
        	}()
        
        	var totalBytes int64
        	for bytes := range bytesChan {
        		totalBytes += bytes
        	}
        
        	ed := time.Now()
        	duration := ed.Sub(st)
        	throughput := float64(totalBytes) / (float64(duration.Nanoseconds()) / 1e9)
        
        	fmt.Printf("Total time: %v\n", duration)
        	if isWrite {
        		fmt.Printf("Write throughput: %.2f MBytes/s\n", throughput/1000/1000)
        	} else {
        		fmt.Printf("Read throughput: %.2f MBytes/s\n", throughput/1000/1000)
        	}
        }
        
        func main() {
        	flag.Parse()
        
        	workdir := *dir
        	if workdir == "" {
        		flag.Usage()
        		os.Exit(1)
        	}
        
        	if _, err := os.Stat(workdir); err != nil {
        		fmt.Printf("Failed to access %v with %v\n", workdir, err)
        		os.Exit(1)
        	}
        
        	doBench(workdir, *isWrite)
        }
        ```
        
    2.  Compile the `rw-bench.go` program file.
        
        ```
        go build rw-bench.go
        ```
        
    3.  Create 100,000 files with 128 KB each in the OSS bucket directory mounted to the local file system.
        
        ```
        mkdir -p <The path of the mounted test file> && ./rw-bench --dir <The path of the mounted test file> --file-size-KB 128 --file-count 100000 --write
        ```
        
    4.  Clear the page cache and execute the program. After performing the test for 5 times in a row, use the test data obtained from the test with stable latency on the server.
        
        ```
        echo 1 > /proc/sys/vm/drop_caches
        ./rw-bench --dir <The path of the mounted test file> --threads 128
        ```
        
-   Test results
    
    **ossfs version**
    
    **Bandwidth**
    
    **CPU core usage (the full capacity of a core is 100%)**
    
    **Peak memory**
    
    ossfs 2.0
    
    1 GB/s
    
    247%
    
    212 MB
    
    ossfs 1.0
    
    3.5 MB/s
    
    3%
    
    200 MB
