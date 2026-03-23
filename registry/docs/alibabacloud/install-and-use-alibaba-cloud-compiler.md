Alibaba Cloud Compiler is a C++ compiler developed by Alibaba Cloud based on Clang/LLVM 13, which is an open source community version of Clang/LLVM. It inherits all options and parameters from Clang/LLVM 13, is deeply optimized for the Alibaba Cloud infrastructure, and provides additional features to deliver better user experience. This topic describes how to install and use Alibaba Cloud Compiler on Alibaba Cloud Linux 3 to quickly build high-performance C++ applications.

## **Background information**

-   Compared with GNU Compiler Collection (GCC) and other Clang/LLVM versions, Alibaba Cloud Compiler provides significant improvements in compilation and build speeds.
    
    -   Alibaba Cloud Compiler adopts different techniques, such as profile-guided optimization (PGO), for faster compilation and writes large-scale C++ code faster than other compilers, such as GCC.
        
    -   The Clang/LLVM linker (LLD) outperforms the GNU linker used by GCC, especially in processing large binary files.
        
    -   Alibaba Cloud Compiler supports C++20 Modules and allows a standard C++ library to be modularized into `std-module`. You can use `std-module` to transform business code at a low cost and accelerate compilation.
        
-   Alibaba Cloud Compiler leverages technologies, such as Alibaba Cloud Compiler (LLVM) ThinLTO, and AutoFDO, to improve program performance. Alibaba Cloud Compiler can run on different architectures, such as x86 and Arm64, and is tuned for YiTian 710 processors to further improve performance.
    
-   Alibaba Cloud Compiler supports Coroutines and Modules and provides modularized standard libraries. Alibaba Cloud provides yaLanTingLibs, which includes components commonly used by C++ developers, such as the coroutine library, serialization library, Remote Procedure Call (RPC) library, and HTTP feature.
    
    **Note**
    
    [yaLanTingLibs](https://github.com/alibaba/yalantinglibs) is a collection of high-performance and easy-to-use C++ utility libraries that can be used by developers to build high-performance and modern C++ applications.
    

## **Prerequisites**

An Elastic Compute Service (ECS) instance that runs Alibaba Cloud Linux 3 is created. For more information, see [Create an instance](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard).

**Note**

Alibaba Cloud Compiler supports only Alibaba Cloud Linux 3.

## **Install and use Alibaba Cloud Compiler**

1.  Install Alibaba Cloud Compiler.
    
    ```
    sudo yum install -y alibaba-cloud-compiler
    ```
    
2.  Install `libstdc++-devel`.
    
    `libstdc++-devel` provides header files for the GNU Standard C++ Library.
    
    ```
    sudo yum -y install libstdc++-devel
    ```
    
3.  Import environment variables.
    
    ```
    export PATH=/opt/alibaba-cloud-compiler/bin:$PATH
    ```
    
4.  Use Alibaba Cloud Compiler for compilation.
    
    #### **Simple compilation**
    
    1.  Create the `hello.cpp` file.
        
        ```
        sudo vim hello.cpp
        ```
        
    2.  Press the `i` key to enter Insert mode and then copy and paste the following content to the file:
        
        ```
        #include <iostream>
        int main() {
          std::cout << "hello C++" << std::endl;
          return 0;
        }
        ```
        
    3.  Press the `Esc` key, enter `:wq`, and then press the `Enter` key to save and close the file.
        
    4.  Compile the modularized C++ code.
        
        ```
        clang++ -O2 hello.cpp -o hello.cpp.out
        ```
        
    5.  Run the program.
        
        ```
        ./hello.cpp.out
        ```
        
        The following command output shows that the program is run.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4638594471/p944293.png)
        
    
    #### **Use C++20 Coroutines and Modules**
    
    Alibaba Cloud Compiler supports C++20 Coroutines and Modules, which help improve compilation efficiency and performance. To view examples of coroutines, see [Use the RPC library](#8b498bdd2fj9j) and [Use the HTTP library](#27c940cef077f).
    
    **Note**
    
    -   In traditional function calls, a function, once called, executes until completion. Coroutines are a programming concept that allows function execution to be suspended and resumed. This flexible control flow mechanism simplifies the implementation of asynchronous programming and generator patterns.
        
    -   In the traditional C++ programming paradigm, code is organized into header files (`.h`/`.hpp`) and source files (`.cpp`), and header files are used to contain declarations. You make declarations in a header file and use the `#include` preprocessor directive to insert a copy of the header file into each source file that requires the declarations. Therefore, compilers may repeatedly parse the same header files, which slows down the compilation. Modules are introduced as a method to improve code organization and compilation efficiency.
        
    
    When you use Clang to compile C++ programs, you can configure the parameters in the following table.
    
    **Parameter**
    
    **Description**
    
    `-std=`
    
    Specifies the C++ language standard used for compilation. If you specify `-std=c++20`, C++ Coroutines and Modules take effect.
    
    `--precompile`
    
    Compiles module units into binary module interface (BMI) files.
    
    `-fprebuilt-module-path`
    
    Specifies the path for searching for BMI files.
    
    `-fstd-modules`
    
    Specifies to compile files for std modules.
    
    `-fmodules-export-all`
    
    Marks all declarations in the current modules as `export`.
    
    `-fmodules-export-macros`
    
    Enables modules to export macros.
    
    `-try-load-bmi-when-preprocessing`
    
    Searches for BMI files during preprocessing.
    
    `-fstd-module-path`
    
    Specifies the path for searching for std modules.
    
    `-fcoro-aligned-allocation`
    
    Prefers aligned allocation for C++ Coroutines.
    
    Compilation example:
    
    1.  Create the `Hello.cppm` file.
        
        ```
        sudo vim Hello.cppm
        ```
        
    2.  Press the `i` key to enter Insert mode and then copy and paste the following content to the file:
        
        ```
        module;
        #include <iostream>
        export module Hello;
        export void hello() {
          std::cout << "Hello World!\n";
        }
        ```
        
    3.  Press the `Esc` key, enter `:wq`, and then press the `Enter` key to save and close the file.
        
    4.  Create the `use.cpp` file.
        
        ```
        sudo vim use.cpp
        ```
        
    5.  Press the `i` key to enter Insert mode and then copy and paste the following content to the file:
        
        ```
        import Hello;
        int main() {
          hello();
          return 0;
        }
        ```
        
    6.  Press the `Esc` key, enter `:wq`, and then press the `Enter` key to save and close the file.
        
    7.  Compile the modularized C++ code.
        
        ```
        # Precompile the module interface to create the Hello.pcm file.
        clang++ -std=c++20 Hello.cppm --precompile -o Hello.pcm
        # Compile the main program and link the module to create the executable Hello.out file.
        clang++ -std=c++20 use.cpp -fprebuilt-module-path=. Hello.pcm -o Hello.out
        ```
        
    8.  Run the program.
        
        ```
        ./Hello.out
        ```
        
        The following command output shows that the program is run.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4638594471/p943845.png)
        
    
    ## **(Optional) Use yaLanTingLibs**
    
    You can use yaLanTingLibs, which provides the coroutine library, serialization library, RPC library, and HTTP feature based on C++20 Coroutines and the C++ template metaprogramming feature. For more information, visit [yalantinglibs](https://alibaba.github.io/yalantinglibs/en/) and [async\_simple](https://alibaba.github.io/async_simple/).
    
    -   The serialization library is a software library used to serialize and deserialize data. Serialization is the process of converting a data structure or object status into a format that can be stored in files or buffers or transmitted over networks. Deserialization is the process of restoring the stored or transmitted data structure or object status to the original ones.
        
    -   RPC is a library that is used for interprocess communication (IPC). RPC allows C++ programs to execute functions or methods on a remote machine as if the functions or methods were local. RPC abstracts away from details, such as network transmission, serialization, deserialization, and routes, and allows developers to focus on the business logic of their applications.
        
    -   HTTP is an application-layer protocol for distributed, collaborative, hypermedia information systems. `coro_http` is a high-performance and easy-to-use HTTP library implemented by using C++20 coroutines. It includes an HTTP server and an HTTP client to help users quickly develop HTTP applications.
        
    
    1.  Install yaLanTingLibs.
        
        ```
        sudo yum install -y yalantinglibs-devel
        ```
        
    2.  Use the serialization library, RPC library, and HTTP library of yaLanTingLibs.
        
        #### **Use the serialization library**
        
        1.  Create the `test.cpp` file.
            
            ```
            sudo vim test.cpp
            ```
            
        2.  Press the `i` key to enter Insert mode and then copy and paste the following content to the file:
            
            ```
            #include <iostream>
            #include "ylt/struct_pack.hpp"
            struct person {
              int age;
              std::string name;
            };
            int main() {
              person tom{.age=20,.name="tom"};
              auto buffer = struct_pack::serialize(tom);
              auto tom2 = struct_pack::deserialize<person>(buffer);
              std::cout<<"age: "<<tom2.value().age<<", name: "<<tom2.value().name<<std::endl;
              return 0;
            }
            ```
            
        3.  Press the `Esc` key, enter `:wq`, and then press the `Enter` key to save and close the file.
            
        4.  Compile the program.
            
            ```
            clang++ test.cpp -std=c++20 -o test
            ```
            
        5.  Run the program.
            
            ```
            ./test
            ```
            
            The following command output shows that the program is run.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4638594471/p944327.png)
            
        
        #### **Use the RPC library**
        
        1.  Create the `server.cpp` file on a server.
            
            ```
            sudo vim server.cpp
            ```
            
        2.  Press the `i` key to enter Insert mode and then copy and paste the following content to the file:
            
            ```
            #include "ylt/coro_rpc/coro_rpc_server.hpp"
            std::string ping(std::string ping) {
             return "Receive: " + ping + ". Return pong.";
            }
            int main() {
             coro_rpc::coro_rpc_server server{1 , 8801};
             server.register_handler<ping>();
             return server.start();
            }
            ```
            
        3.  Press the `Esc` key, enter `:wq`, and then press the `Enter` key to save and close the file.
            
        4.  Create the `client.cpp` file.
            
            ```
            sudo vim client.cpp
            ```
            
        5.  Press the `i` key to enter Insert mode and then copy and paste the following content to the file:
            
            ```
            #include <iostream>
            #include "ylt/coro_rpc/coro_rpc_client.hpp" 
            std::string ping(std::string);
            async_simple::coro::Lazy<void> example(){
                coro_rpc::coro_rpc_client client;
                auto ec = co_await client.connect("localhost","8801");
                assert(!ec);
                auto ret = co_await client.call<ping>("ping");
                std::cout << ret.value() << std::endl;
                co_return;
            };
            int main(){
                async_simple::coro::syncAwait(example());
                return 0;
            }
            ```
            
        6.  Press the `Esc` key, enter `:wq`, and then press the `Enter` key to save and close the file.
            
        7.  Compile the server-side program.
            
            ```
            clang++ server.cpp  -I /usr/include/ylt/thirdparty -std=c++20  -o server -lpthread
            ```
            
        8.  Compile the client-side program.
            
            **Note**
            
            Before you compile the client-side program, make sure that Alibaba Cloud Compiler is installed on the client and environment variables are imported to the client. For more information, see [Alibaba Cloud Compiler compilation](#8ea93f55b5y26).
            
            ```
            clang++ client.cpp  -I /usr/include/ylt/thirdparty -std=c++20  -o client -lpthread
            ```
            
        9.  Run the following command on the server and client to start the server and client:
            
            ```
            ./server & ./client
            ```
            
            The following command output is returned. The log entries describe the entire process, which includes starting the RPC server, the RPC server listening to RPC requests, the RPC client sending RPC requests, the RPC server processing the RPC requests, and the RPC client closing the connection.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4638594471/p944445.png)
            
        
        #### **Use the HTTP library**
        
        1.  Create the `http.cpp` file on a server.
            
            ```
            sudo vim http.cpp
            ```
            
        2.  Press the `i` key to enter Insert mode and then copy and paste the following content to the file:
            
            ```
            #include <iostream>
              
            #include "ylt/coro_http/coro_http_client.hpp"
            #include "ylt/coro_http/coro_http_server.hpp"
            
            using namespace std::chrono_literals;
            using namespace coro_http;
            
            async_simple::coro::Lazy<void> basic_usage() {
              coro_http_server server(1, 9001);
              server.set_http_handler<GET>(
                  "/get", [](coro_http_request &req, coro_http_response &resp) {
                    resp.set_status_and_content(status_type::ok, "ok");
                  });
            
              server.async_start();
              std::this_thread::sleep_for(300ms);
            
              coro_http_client client{};
              auto result = co_await client.async_get("http://127.0.0.1:9001/get");
              assert(result.status == 200);
              assert(result.resp_body == "ok");
              for (auto [key, val] : result.resp_headers) {
                std::cout << key << ": " << val << "\n";
              }
            }
            
            int main() {
              async_simple::coro::syncAwait(basic_usage());
            }
            ```
            
        3.  Press the `Esc` key, enter `:wq`, and then press the `Enter` key to save and close the file.
            
        4.  Compile the HTTP program.
            
            ```
            clang++ http.cpp -I /usr/include/ylt/thirdparty -std=c++20 -o http -lpthread
            ```
            
        5.  Run the HTTP program.
            
            ```
            ./http
            ```
            
            The following command output shows that the program is run.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4638594471/p944415.png)
