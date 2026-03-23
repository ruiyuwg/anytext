-   [Home](https://docs.cloud.google.com/?hl=zh-tw)
-   [Documentation](https://docs.cloud.google.com/docs?hl=zh-tw)
-   [Industry solutions](https://docs.cloud.google.com/docs/industry?hl=zh-tw)
-   [Cloud Healthcare API](https://docs.cloud.google.com/healthcare-api/docs?hl=zh-tw)
-   [範例](https://docs.cloud.google.com/healthcare-api/docs/samples?hl=zh-tw)

# 擷取 DICOM 研究 透過集合功能整理內容 你可以依據偏好儲存及分類內容。

傳回指定研究中的所有 DICOM 執行個體。

## 深入探索

如需包含這個程式碼範例的詳細說明文件，請參閱下列文章：

-   [使用 DICOMweb 標準](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb?hl=zh-tw)

## 程式碼範例

### Go

在試用這個範例之前，請先按照「[使用用戶端程式庫的 Cloud Healthcare API 快速入門導覽課程](https://cloud.google.com/healthcare-api/docs/store-healthcare-data-client-library?hl=zh-tw)」中的 Go 設定說明操作。詳情請參閱「[Cloud Healthcare API Go API 參考文件](https://pkg.go.dev/google.golang.org/api/healthcare/v1)」。

如要向 Cloud Healthcare API 進行驗證，請設定應用程式預設憑證。詳情請參閱「[為本機開發環境設定驗證機制](https://docs.cloud.google.com/docs/authentication/set-up-adc-local-dev-environment?hl=zh-tw)」。

```
import (
	"context"
	"fmt"
	"io"
	"os"

	healthcare "google.golang.org/api/healthcare/v1"
)

// dicomWebRetrieveStudy retrieves all instances in the given dicomWebPath
// study.
func dicomWebRetrieveStudy(w io.Writer, projectID, location, datasetID, dicomStoreID, dicomWebPath string, outputFile string) error {
	// projectID := "my-project"
	// location := "us-central1"
	// datasetID := "my-dataset"
	// dicomStoreID := "my-dicom-store"
	// dicomWebPath := "studies/1.3.6.1.4.1.11129.5.5.111396399857604"
	// outputFile := "study.multipart"
	ctx := context.Background()

	healthcareService, err := healthcare.NewService(ctx)
	if err != nil {
		return fmt.Errorf("healthcare.NewService: %w", err)
	}

	storesService := healthcareService.Projects.Locations.Datasets.DicomStores.Studies

	parent := fmt.Sprintf("projects/%s/locations/%s/datasets/%s/dicomStores/%s", projectID, location, datasetID, dicomStoreID)

	resp, err := storesService.RetrieveStudy(parent, dicomWebPath).Do()
	if err != nil {
		return fmt.Errorf("RetrieveStudy: %w", err)
	}

	defer resp.Body.Close()

	if resp.StatusCode > 299 {
		return fmt.Errorf("RetrieveStudy: status %d %s: %s", resp.StatusCode, resp.Status, resp.Body)
	}

	file, err := os.Create(outputFile)
	if err != nil {
		return fmt.Errorf("os.Create: %w", err)
	}
	defer file.Close()
	if _, err := io.Copy(file, resp.Body); err != nil {
		return fmt.Errorf("io.Copy: %w", err)
	}

	// When specifying the output file, use an extension like ".multipart".
	// Then, parse the downloaded multipart file to get each individual DICOM
	// file.
	fmt.Fprintf(w, "Study retrieved and downloaded to file: %v\n", outputFile)

	return nil
}
```

### Java

在試用這個範例之前，請先按照「[使用用戶端程式庫的 Cloud Healthcare API 快速入門導覽課程](https://cloud.google.com/healthcare-api/docs/store-healthcare-data-client-library?hl=zh-tw)」中的 Java 設定說明操作。詳情請參閱「[Cloud Healthcare API Java API 參考文件](https://googleapis.dev/java/google-api-services-healthcare/latest/index.html)」。

如要向 Cloud Healthcare API 進行驗證，請設定應用程式預設憑證。詳情請參閱「[為本機開發環境設定驗證機制](https://docs.cloud.google.com/docs/authentication/set-up-adc-local-dev-environment?hl=zh-tw)」。

```
import com.google.api.client.http.HttpHeaders;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.HttpResponse;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.healthcare.v1.CloudHealthcare;
import com.google.api.services.healthcare.v1.CloudHealthcare.Projects.Locations.Datasets.DicomStores.Studies;
import com.google.api.services.healthcare.v1.CloudHealthcareScopes;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Collections;

public class DicomWebRetrieveStudy {
  private static final String DICOM_NAME = "projects/%s/locations/%s/datasets/%s/dicomStores/%s";
  private static final JsonFactory JSON_FACTORY = new GsonFactory();
  private static final NetHttpTransport HTTP_TRANSPORT = new NetHttpTransport();

  public static void dicomWebRetrieveStudy(String dicomStoreName, String studyId)
      throws IOException {
    // String dicomStoreName =
    //    String.format(
    //        DICOM_NAME, "your-project-id", "your-region-id", "your-dataset-id", "your-dicom-id");
    // String studyId = "your-study-id";

    // Initialize the client, which will be used to interact with the service.
    CloudHealthcare client = createClient();

    // Create request and configure any parameters.
    Studies.RetrieveStudy request =
        client
            .projects()
            .locations()
            .datasets()
            .dicomStores()
            .studies()
            .retrieveStudy(dicomStoreName, "studies/" + studyId);

    // Execute the request and process the results.
    HttpResponse response = request.executeUnparsed();

    // When specifying the output file, use an extension like ".multipart".
    // Then, parse the downloaded multipart file to get each individual
    // DICOM file.
    String outputPath = "study.multipart";
    OutputStream outputStream = new FileOutputStream(new File(outputPath));
    try {
      response.download(outputStream);
      System.out.println("DICOM study written to file " + outputPath);
    } finally {
      outputStream.close();
    }

    if (!response.isSuccessStatusCode()) {
      System.err.print(
          String.format("Exception retrieving DICOM study: %s\n", response.getStatusMessage()));
      throw new RuntimeException();
    }
  }

  private static CloudHealthcare createClient() throws IOException {
    // Use Application Default Credentials (ADC) to authenticate the requests
    // For more information see https://cloud.google.com/docs/authentication/production
    GoogleCredentials credential =
        GoogleCredentials.getApplicationDefault()
            .createScoped(Collections.singleton(CloudHealthcareScopes.CLOUD_PLATFORM));

    HttpHeaders headers = new HttpHeaders();
    // The response's default transfer syntax is Little Endian Explicit.
    // As a result, if the file was uploaded using a compressed transfer syntax,
    // the returned object will be decompressed. This can negatively impact performance and lead
    // to errors for transfer syntaxes that the Cloud Healthcare API doesn't support.
    // To avoid these issues, and if the returned object's transfer syntax doesn't matter to
    // your application, use the
    // multipart/related; type="application/dicom"; transfer-syntax=* Accept Header.
    headers.setAccept("multipart/related; type=application/dicom; transfer-syntax=*");
    // Create a HttpRequestInitializer, which will provide a baseline configuration to all requests.
    HttpRequestInitializer requestInitializer =
        request -> {
          new HttpCredentialsAdapter(credential).initialize(request);
          request.setConnectTimeout(60000); // 1 minute connect timeout
          request.setReadTimeout(60000); // 1 minute read timeout
        };

    // Build the client for interacting with the service.
    return new CloudHealthcare.Builder(HTTP_TRANSPORT, JSON_FACTORY, requestInitializer)
        .setApplicationName("your-application-name")
        .build();
  }
}
```

### Node.js

在試用這個範例之前，請先按照「[使用用戶端程式庫的 Cloud Healthcare API 快速入門導覽課程](https://cloud.google.com/healthcare-api/docs/store-healthcare-data-client-library?hl=zh-tw)」中的 Node.js 設定說明操作。詳情請參閱「[Cloud Healthcare API Node.js API 參考文件](https://github.com/googleapis/google-api-nodejs-client/blob/main/src/apis/healthcare/README.md)」。

如要向 Cloud Healthcare API 進行驗證，請設定應用程式預設憑證。詳情請參閱「[為本機開發環境設定驗證機制](https://docs.cloud.google.com/docs/authentication/set-up-adc-local-dev-environment?hl=zh-tw)」。

```
const google = require('@googleapis/healthcare');
const healthcare = google.healthcare({
  version: 'v1',
  auth: new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  }),
});
const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
// When specifying the output file, use an extension like ".multipart."
// Then, parse the downloaded multipart file to get each individual
// DICOM file.
const fileName = 'study_file.multipart';

const dicomWebRetrieveStudy = async () => {
  // TODO(developer): uncomment these lines before running the sample
  // const cloudRegion = 'us-central1';
  // const projectId = 'adjective-noun-123';
  // const datasetId = 'my-dataset';
  // const dicomStoreId = 'my-dicom-store';
  // const studyUid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0';
  const parent = `projects/${projectId}/locations/${cloudRegion}/datasets/${datasetId}/dicomStores/${dicomStoreId}`;
  const dicomWebPath = `studies/${studyUid}`;
  const request = {parent, dicomWebPath};

  const study =
    await healthcare.projects.locations.datasets.dicomStores.studies.retrieveStudy(
      request,
      {
        headers: {
          Accept:
            'multipart/related; type=application/dicom; transfer-syntax=*',
        },
        responseType: 'arraybuffer',
      }
    );

  const fileBytes = Buffer.from(study.data);

  await writeFile(fileName, fileBytes);
  console.log(
    `Retrieved study and saved to ${fileName} in current directory`
  );
};

dicomWebRetrieveStudy();
```

### Python

在試用這個範例之前，請先按照「[使用用戶端程式庫的 Cloud Healthcare API 快速入門導覽課程](https://cloud.google.com/healthcare-api/docs/store-healthcare-data-client-library?hl=zh-tw)」中的 Python 設定說明操作。詳情請參閱「[Cloud Healthcare API Python API 參考文件](https://googleapis.github.io/google-api-python-client/docs/dyn/healthcare_v1)」。

如要向 Cloud Healthcare API 進行驗證，請設定應用程式預設憑證。詳情請參閱「[為本機開發環境設定驗證機制](https://docs.cloud.google.com/docs/authentication/set-up-adc-local-dev-environment?hl=zh-tw)」。

```
def dicomweb_retrieve_study(
    project_id, location, dataset_id, dicom_store_id, study_uid
):
    """Handles the GET requests specified in the DICOMweb standard.

    See https://github.com/GoogleCloudPlatform/python-docs-samples/tree/main/healthcare/api-client/v1/dicom
    before running the sample."""

    # Imports the google.auth.transport.requests transport
    from google.auth.transport import requests

    # Imports a module to allow authentication using Application Default Credentials (ADC)
    import google.auth

    # Gets credentials from the environment. google.auth.default() returns credentials and the
    # associated project ID, but in this sample, the project ID is passed in manually.
    credentials, _ = google.auth.default()

    scoped_credentials = credentials.with_scopes(
        ["https://www.googleapis.com/auth/cloud-platform"]
    )
    # Creates a requests Session object with the credentials.
    session = requests.AuthorizedSession(scoped_credentials)

    # URL to the Cloud Healthcare API endpoint and version
    base_url = "https://healthcare.googleapis.com/v1"

    # TODO(developer): Uncomment these lines and replace with your values.
    # project_id = 'my-project'  # replace with your GCP project ID
    # location = 'us-central1'  # replace with the parent dataset's location
    # dataset_id = 'my-dataset'  # replace with the parent dataset's ID
    # dicom_store_id = 'my-dicom-store' # replace with the DICOM store ID
    # study_uid = '1.3.6.1.4.1.5062.55.1.227'  # replace with the study UID
    url = f"{base_url}/projects/{project_id}/locations/{location}"

    dicomweb_path = "{}/datasets/{}/dicomStores/{}/dicomWeb/studies/{}".format(
        url, dataset_id, dicom_store_id, study_uid
    )

    # When specifying the output file, use an extension like ".multipart."
    # Then, parse the downloaded multipart file to get each individual
    # DICOM file.
    file_name = "study.multipart"

    response = session.get(dicomweb_path)

    response.raise_for_status()

    with open(file_name, "wb") as f:
        f.write(response.content)
        print(f"Retrieved study and saved to {file_name} in current directory")

    return response

```

## 後續步驟

如要搜尋及篩選其他 Google Cloud 產品的程式碼範例，請參閱[Google Cloud 瀏覽器範例](https://docs.cloud.google.com/docs/samples?product=healthcare&hl=zh-tw)。

除非另有註明，否則本頁面中的內容是採用[創用 CC 姓名標示 4.0 授權](https://creativecommons.org/licenses/by/4.0/)，程式碼範例則為[阿帕契 2.0 授權](https://www.apache.org/licenses/LICENSE-2.0)。詳情請參閱《[Google Developers 網站政策](https://developers.google.com/site-policies?hl=zh-tw)》。Java 是 Oracle 和/或其關聯企業的註冊商標。
