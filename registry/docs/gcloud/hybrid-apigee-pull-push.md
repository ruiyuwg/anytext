-   [Home](https://docs.cloud.google.com/?hl=zh-tw)
-   [Documentation](https://docs.cloud.google.com/docs?hl=zh-tw)
-   [Application development](https://docs.cloud.google.com/docs/application-development?hl=zh-tw)
-   [Apigee](https://docs.cloud.google.com/apigee/docs?hl=zh-tw)
-   [指南](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee?hl=zh-tw)

提供意見

# apigee-pull-push 透過集合功能整理內容 你可以依據偏好儲存及分類內容。

您目前查看的是 Apigee Hybrid 說明文件的 1.13 版本。 **This version is end of life.** You should upgrade to a newer version. 詳情請參閱「[支援的版本](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms?hl=zh-tw#supported-versions)」。

Version 1.13 keyboard\_arrow\_down

   支援的版本：

-   [v1.16 (最新)](https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/apigee-pull-push.html?hl=zh-tw)                        
-   [v1.15](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/apigee-pull-push.html?hl=zh-tw)                         
-   [v1.14](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/apigee-pull-push.html?hl=zh-tw)                        
-   [支援的版本清單](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms?hl=zh-tw#supported-versions)

   不支援的版本：

-   [v1.13](https://docs.cloud.google.com/apigee/docs/hybrid/v1.13/apigee-pull-push.html?hl=zh-tw)                         
-   [v1.12](https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/apigee-pull-push.html?hl=zh-tw)                         
-   [v1.11](https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/apigee-pull-push.html?hl=zh-tw)                         
-   [v1.10](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/apigee-pull-push.html?hl=zh-tw)                                      
-   [v1.9](https://docs.cloud.google.com/apigee/docs/hybrid/v1.9/apigee-pull-push.html?hl=zh-tw)                                         
-   [v1.8](https://docs.cloud.google.com/apigee/docs/hybrid/v1.8/apigee-pull-push.html?hl=zh-tw)                                         
-   [v1.7](https://docs.cloud.google.com/apigee/docs/hybrid/v1.7/apigee-pull-push.html?hl=zh-tw)                                         
-   [v1.6](https://docs.cloud.google.com/apigee/docs/hybrid/v1.6/apigee-pull-push.html?hl=zh-tw)                                         
-   [v1.5](https://docs.cloud.google.com/apigee/docs/hybrid/v1.5/apigee-pull-push.html?hl=zh-tw)                                         
-   [v1.4](https://docs.cloud.google.com/apigee/docs/hybrid/v1.4/apigee-pull-push.html?hl=zh-tw)                                         
-   [v1.3](https://docs.cloud.google.com/apigee/docs/hybrid/v1.3/apigee-pull-push.html?hl=zh-tw)                                         
-   [v1.2](https://docs.cloud.google.com/apigee/docs/hybrid/v1.2/apigee-pull-push.html?hl=zh-tw)                                         
-   [v1.1](https://docs.cloud.google.com/apigee/docs/hybrid/v1.1/apigee-pull-push.html?hl=zh-tw)                                         

`apigee-pull-push.sh` 是一項公用程式，可從 [Google Cloud Container Registry](https://cloud.google.com/container-registry/?hl=zh-tw) 提取目前 Google Cloud 專案的所有映像檔，並推送至您指定的存放區。

**注意：**您可以使用 `gcloud config set project` 或 `gcloud init` 設定目前的專案。

## 需求條件

-   存取 [Google Cloud Container Registry](https://cloud.google.com/container-registry/?hl=zh-tw)
-   `gcloud`。
    
    如要安裝或升級 `gcloud`，請參閱「[安裝 Google Cloud SDK](https://docs.cloud.google.com/sdk/docs/install?hl=zh-tw)」一文。
    

## 檔案位置

`apigee-pull-push.sh`可在 `$APIGEE_HELM_CHARTS_HOME/apigee-operator/etc/tools/`

## 用量

### 語法

`**apigee-pull-push [REPO] [--list] [--help]**`

### _選用：_在 `gcloud` 環境中檢查目前的專案

這個步驟為選用步驟，因為 `apigee-pull-push.sh` 會確認專案，並允許您繼續或中止。

`apigee-pull-push.sh` 會在 `gcloud` 環境中提取目前專案的映像檔。使用下列指令檢查專案：

gcloud config list core/project --format='value(core.project)'

您可以使用下列指令設定目前的專案：

gcloud config set project PROJECT\_ID

其中 PROJECT\_ID 是 Apigee Hybrid 安裝作業的 Google Cloud 專案 ID。

### 將 Apigee Hybrid 映像檔推送至您命名的存放區

apigee-pull-push.sh REPO

其中 REPO 是存放區的網址，例如 `/gcr.io/apigee-release`。

**注意：**存放區必須是不含通訊協定的網址 (沒有 `HTTP` 或 `HTTPS`)。

例如，使用 `./apigee-pull-push.sh us-central1-docker.pkg.dev/apigee-hybrid-support-amer-01/hybrid`，而不是 `./apigee-pull-push.sh https://us-central1-docker.pkg.dev/apigee-hybrid-support-amer-01/hybrid`。

### 將 Apigee 映像檔推送至預設存放區

apigee-pull-push.sh 

這項指令會將映像檔推送至 `us.gcr.io/PROJECT_ID`，例如 `us.gcr.io/my-project`。

### 列出存放區中的映像檔

使用 `--list` 或 `-l` 選項列出存放區中的所有映像檔。

apigee-pull-push.sh --list

輸出範例：

apigee:
        gcr.io/apigee-release/hybrid/apigee-mart-server:1.8.0
        gcr.io/apigee-release/hybrid/apigee-synchronizer:1.8.0
        gcr.io/apigee-release/hybrid/apigee-runtime:1.8.0
        gcr.io/apigee-release/hybrid/apigee-hybrid-cassandra-client:1.8.0
        gcr.io/apigee-release/hybrid/apigee-hybrid-cassandra:1.8.0
        gcr.io/apigee-release/hybrid/apigee-cassandra-backup-utility:1.8.0
        gcr.io/apigee-release/hybrid/apigee-udca:1.8.0
        gcr.io/apigee-release/hybrid/apigee-connect-agent:1.8.0
        gcr.io/apigee-release/hybrid/apigee-watcher:1.8.0
        gcr.io/apigee-release/hybrid/apigee-operators:1.8.0
        gcr.io/apigee-release/hybrid/apigee-installer:1.8.0
        gcr.io/apigee-release/hybrid/apigee-redis:1.8.0
        gcr.io/apigee-release/hybrid/apigee-diagnostics-collector:1.8.0
        gcr.io/apigee-release/hybrid/apigee-diagnostics-runner:1.8.0
third party:
        gcr.io/apigee-release/hybrid/apigee-stackdriver-logging-agent:1.8.9
        gcr.io/apigee-release/hybrid/apigee-prom-prometheus:v2.33.5
        gcr.io/apigee-release/hybrid/apigee-stackdriver-prometheus-sidecar:0.9.0
        gcr.io/apigee-release/hybrid/apigee-kube-rbac-proxy:v0.8.0
        gcr.io/apigee-release/hybrid/apigee-envoy:v1.16-latest
        gcr.io/apigee-release/hybrid/apigee-prometheus-adapter:v0.9.1
        gcr.io/apigee-release/hybrid/apigee-asm-ingress:1.12.6-asm.2-distroless
        gcr.io/apigee-release/hybrid/apigee-asm-istiod:1.12.6-asm.2

### 取得「`apigee-pull-push.sh`」的相關說明

apigee-pull-push.sh --help

提供意見

除非另有註明，否則本頁面中的內容是採用[創用 CC 姓名標示 4.0 授權](https://creativecommons.org/licenses/by/4.0/)，程式碼範例則為[阿帕契 2.0 授權](https://www.apache.org/licenses/LICENSE-2.0)。詳情請參閱《[Google Developers 網站政策](https://developers.google.com/site-policies?hl=zh-tw)》。Java 是 Oracle 和/或其關聯企業的註冊商標。

上次更新時間：2026-03-18 (世界標準時間)。
