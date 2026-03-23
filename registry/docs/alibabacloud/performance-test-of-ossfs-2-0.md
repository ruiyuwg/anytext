This test compares the performance of different versions of ossfs and the open-source tool goofys in various scenarios, including file read and write speeds and concurrent operations. The results provide a performance reference to help you select the right tool for your business.

## **Test environment**

-   Hardware environment
    
    -   Instance type: ecs.g9i.48xlarge
        
    -   vCPU: 192 vCPUs
        
    -   Memory: 768 GiB
        
    -   Network bandwidth: 64 Gbps
        
-   Software environment
    
    -   Operating system: Alibaba Cloud Linux 3.2104 LTS 64-bit
        
    -   Kernel version: 5.10.134-18.al8.x86\_64
        
    -   Tool versions: ossfs 2.0.4, ossfs 1.91.8, and goofys 0.24.0
        

## **Mount configurations**

The following examples show the mount options used for the performance test.

**Note**

This test uses HTTPS domain names. In a trusted environment, you can mount with HTTP domain names. This method consumes fewer CPU resources for the same throughput.

## ossfs 2.0.4

-   Mount configuration file (ossfs2.conf)
    
    When the bucket is mounted, the upload part size is set to 33554432 bytes.
    
    ```
    # The endpoint of the bucket's region
    --oss_endpoint=https://oss-cn-hangzhou-internal.aliyuncs.com
    
    # The bucket name
    --oss_bucket=bucket-test
    
    # The AccessKey ID and AccessKey secret
    --oss_access_key_id=yourAccessKeyID
    --oss_access_key_secret=yourAccessKeySecret
    
    # The upload part size, in bytes
    --upload_buffer_size=33554432
    ```
    
-   Mount command
    
    The following command uses the `ossfs2.conf` configuration file to mount the `bucket-test` bucket to the local `/mnt/ossfs2/` directory.
    
    ```
    ossfs2 mount /mnt/ossfs2/ -c /etc/ossfs2.conf
    ```
    

## ossfs 1.91.8

The following command mounts the `bucket-test` bucket to the local `/mnt/ossfs` directory and enables direct read mode and cache optimization.

```
ossfs bucket-test /mnt/ossfs -ourl=https://oss-cn-hangzhou-internal.aliyuncs.com -odirect_read -oreaddir_optimize
```

## goofys 0.24.0

The following command mounts the `bucket-test` bucket to the local `/mnt/goofys` directory.

```
goofys --endpoint https://oss-cn-hangzhou-internal.aliyuncs.com --subdomain bucket-test --stat-cache-ttl 60s --type-cache-ttl 60s /mnt/goofys
```

## **Test scenarios**

After a bucket was mounted using ossfs 2.0.4, ossfs 1.91.8, and goofys 0.24.0, the FIO test tool was used to evaluate the basic read and write capabilities of each tool. The test scenarios and results are described in the following sections.

### **Single-threaded sequential direct write of a 100 GB file**

**Note**

The write performance of ossfs 1.0 is limited by disk performance.

-   Test command
    
    The following command uses the FIO tool to run a single-threaded direct write test named file-100G. It writes a total of 100 GB of data with a block size of 1 MB to the /mnt/oss/fio\_direct\_write directory and outputs the results.
    
    ```
    fio --name=file-100G --ioengine=libaio --rw=write --bs=1M --size=100G --numjobs=1 --direct=1 --directory=/mnt/oss/fio_direct_write --group_reporting
    ```
    
-   Test results
    
    **Tool**
    
    **Bandwidth**
    
    **CPU core utilization (100% for a single fully loaded core)**
    
    **Peak memory**
    
    ossfs 2.0
    
    2.2 GB/s
    
    207%
    
    2167 MB
    
    ossfs 1.0
    
    118 MB/s
    
    5%
    
    15 MB
    
    goofys
    
    450 MB/s
    
    250%
    
    7.5 GB
    

### **Single-threaded sequential read of a 100 GB file**

-   Test command
    
    The following command first clears the system page cache. Then, it uses the FIO tool to run a single-threaded sequential read test on the 100 GB file in the /mnt/oss/fio\_direct\_write directory. The test uses a block size of 1 MB and outputs the results.
    
    ```
    echo 1 > /proc/sys/vm/drop_caches
    fio --name=file-100G --ioengine=libaio --direct=1 --rw=read --bs=1M --directory=/mnt/oss/fio_direct_write --group_reporting --numjobs=1
    ```
    
-   Test results
    
    **Test tool**
    
    **Bandwidth**
    
    **CPU core utilization (100% for a single fully loaded core)**
    
    **Peak memory**
    
    ossfs 2.0
    
    4.3 GB/s
    
    610%
    
    1629 MB
    
    ossfs 1.0
    
    1.0 GB/s
    
    530%
    
    260 MB
    
    goofys
    
    1.3 GB/s
    
    270%
    
    976 MB
    

### **Multi-threaded sequential read of 100 GB files**

-   Generate test files
    
    The following command creates four 100 GB files in the `/mnt/oss/fio` mount directory for the multi-threaded concurrency test.
    
    ```
    fio --name=file-100g --ioengine=libaio --direct=1 --iodepth=1 --numjobs=4 --nrfiles=1 --rw=write --bs=1M  --size=100G --group_reporting --thread --directory=/mnt/oss/fio
    ```
    
-   Test command
    
    The following command first clears the system page cache. Then, it uses the FIO tool to run a 30-second read test with four concurrent threads on the four 100 GB files in the `/mnt/oss/fio` directory. The test uses a block size of 1 MB and outputs the results.
    
    ```
    echo 1 > /proc/sys/vm/drop_caches
    fio --name=file-100g --ioengine=libaio --direct=1 --iodepth=1 --numjobs=4 --nrfiles=1 --rw=read --bs=1M  --size=100G --group_reporting --thread --directory=/mnt/oss/fio --time_based --runtime=30
    ```
    
-   Test results
    
    **Tool**
    
    **Bandwidth**
    
    **CPU core utilization (100% for a single fully loaded core)**
    
    **Peak memory**
    
    ossfs 2.0
    
    7.4 GB/s
    
    890%
    
    6.2 GB
    
    ossfs 1.0
    
    1.8 GB/s
    
    739%
    
    735 MB
    
    goofys
    
    2.8 GB/s
    
    7800%
    
    2.7 GB
    

### **Concurrent read of 100,000 128 KB files with 128 threads**

**Note**

By default, OSS has a [10,000 queries per second (QPS) limit](/help/en/oss/user-guide/limits#406d9aee78lbl). To achieve the performance metrics shown in the test results, ensure that other services do not consume the QPS of the test account.

-   Steps
    
    1.  Create a Go program named `rw-bench.go`.
        
        This program has two main functions: concurrently creating multiple files of the same size in a target directory, and concurrently reading all files in a target directory. During the read operation, the program assigns files to a specified number of threads and records the final bandwidth.
        
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
        var threads = flag.Int("threads", 8, "concurrency threads count")
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
        
    3.  Use the following command to create 100,000 files, each 128 KB in size, in the local directory where the OSS bucket is mounted.
        
        ```
        mkdir -p <path_to_mounted_test_directory> && ./rw-bench --dir <path_to_mounted_test_directory> --file-size-KB 128 --file-count 100000 --write
        ```
        
    4.  Clear the system page cache and run the program. The test is run five consecutive times. After the server-side latency stabilizes, the steady-state test data is recorded.
        
        ```
        echo 1 > /proc/sys/vm/drop_caches
        ./rw-bench --dir <path_to_mounted_test_directory> --threads 128
        ```
        
-   Test results
    
    **Tool**
    
    **Bandwidth**
    
    **CPU core utilization (100% for a single fully loaded core)**
    
    **Peak memory**
    
    ossfs 2.0
    
    1 GB/s
    
    247%
    
    176 MB
    
    ossfs 1.0
    
    45 MB/s
    
    25%
    
    412 MB
    
    goofys
    
    1 GB/s
    
    750%
    
    1.3 GB
