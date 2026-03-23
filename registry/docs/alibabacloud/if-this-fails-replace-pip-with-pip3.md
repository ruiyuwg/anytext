Model Studio provides official DashScope SDKs (Python, Java) and supports OpenAI SDKs (Python, Node.js, Java, Go) for OpenAI-compatible API calls.

## **Install the SDK**

## Python

The SDK requires `Python >= 3.8`.

Call Model Studio models using the OpenAI or DashScope Python SDK.

### Install the OpenAI Python SDK

Install or upgrade the OpenAI Python SDK:

```
# If this fails, replace pip with pip3
pip install -U openai
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3859299371/p917092.png)

Look for `Successfully installed ... openai-x.x.x` to confirm installation.

### Install the DashScope Python SDK

Install or upgrade the DashScope Python SDK:

```
# If this fails, replace pip with pip3
pip install -U dashscope
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3859299371/p917093.png)

Look for `Successfully installed ... dashscope-x.x.x` to confirm installation.

## Java

## DashScope

Add the [DashScope Java SDK](https://mvnrepository.com/artifact/com.alibaba/dashscope-sdk-java) dependency. Replace `the-latest-version` with the latest version number from the Maven repository.

### **Gradle**

```
dependencies {
    implementation group: 'com.alibaba', name: 'dashscope-sdk-java', version: 'the-latest-version'
}
```

### **Maven**

```
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>dashscope-sdk-java</artifactId>
    <version>the-latest-version</version>
</dependency>
```

## OpenAI

Add the [OpenAI Java SDK](https://github.com/openai/openai-java?tab=readme-ov-file#openai-java-api-library) dependency (replace `the-latest-version` with the latest version number; recommended: `3.5.0`). The SDK requires `Java 8 or later`.

### **Gradle**

```
dependencies {
    implementation("com.openai:openai-java:the-latest-version")
}
```

### **Maven**

```
<dependency>
  <groupId>com.openai</groupId>
  <artifactId>openai-java</artifactId>
  <version>the-latest-version</version>
</dependency>
```

## Node.js

## OpenAI

Run this command in your terminal:

```
npm install --save openai
# Or
yarn add openai
```

**Note**

If installation fails, configure a registry mirror:

```
npm config set registry https://registry.npmmirror.com/
```

After configuring the mirror, rerun the SDK installation command.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3859299371/p917106.png)

Look for `added xx package in xxs` to confirm installation. Check version: `npm list openai`.

## Go

## OpenAI

Install the [OpenAI Go SDK](https://github.com/openai/openai-go#openai-go-api-library) (which requires `Go 1.22+`) in your project folder:

```
go get 'github.com/openai/openai-go/v3'
```

Or install a specific version:

```
go get -u 'github.com/openai/openai-go/v3@v3.8.1'
```

> If the installation times out, set an Alibaba Cloud mirror: `go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct`

Import the SDK:

```
import (
	"github.com/openai/openai-go/v3" // imported as openai
)
```

## **What to do next**

After installing the SDK:

-   Select a model that fits your scenario from the [model list](/help/en/model-studio/models).
    
-   Start building your application using models for [text generation](/help/en/model-studio/qwen-api-reference/), [image generation](/help/en/model-studio/text-to-image-v2-api-reference), [video generation](/help/en/model-studio/image-to-video-api-reference/), [speech synthesis](/help/en/model-studio/cosyvoice-python-sdk), [speech recognition](/help/en/model-studio/paraformer-real-time-speech-recognition-python-sdk), [embedding](/help/en/model-studio/text-embedding-synchronous-api), or [reranking](/help/en/model-studio/text-rerank-api).
    
-   Learn about the [compatibility details with the OpenAI API](/help/en/model-studio/compatibility-of-openai-with-dashscope).
