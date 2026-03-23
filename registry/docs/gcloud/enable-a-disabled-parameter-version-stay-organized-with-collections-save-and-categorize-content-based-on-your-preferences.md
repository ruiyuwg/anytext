-   [Home](https://docs.cloud.google.com/)
-   [Technology areas](https://docs.cloud.google.com/docs)
-   [Secret Manager](https://docs.cloud.google.com/secret-manager)
-   [Parameter Manager](https://docs.cloud.google.com/secret-manager/parameter-manager)
-   [Documentation](https://docs.cloud.google.com/secret-manager/parameter-manager/docs)
-   [Parameter Manager guide](https://docs.cloud.google.com/secret-manager/parameter-manager/docs/overview)

Send feedback

# Enable a disabled parameter version Stay organized with collections Save and categorize content based on your preferences.

This page describes how to enable a disabled parameter version.

You might want to enable a previously disabled parameter version for the following reasons:

-   To diagnose a problem with your current configuration, you might re-enable a disabled version that was known to work correctly.
-   To reuse previous configurations as your requirements change.
-   To restore a temporary configuration that you might have disabled after use.

## Required roles

To get the permissions that you need to enabled a disabled parameter version, ask your administrator to grant you the [Parameter Manager Admin](/iam/docs/roles-permissions/parametermanager#parametermanager.admin) (`roles/parametermanager.admin`) IAM role on the parameter, project, folder, or organization. For more information about granting roles, see [Manage access to projects, folders, and organizations](/iam/docs/granting-changing-revoking-access).

You might also be able to get the required permissions through [custom roles](/iam/docs/creating-custom-roles) or other [predefined roles](/iam/docs/roles-overview#predefined).

## Enable a disabled parameter version

To enable a disabled parameter version, use one of the following methods:

**Global parameters**

### Console

1.  In the Google Cloud console, go to the **Secret Manager** page.
    
    [Go to Secret Manager](https://console.cloud.google.com/security/secret-manager)
    
2.  Click **Parameter Manager** to go to the **Parameter Manager** page. You'll see the list of parameters for that project.
    
3.  Click the parameter name to access its versions. The parameter details page opens with the **Versions** tab in focus where you can see all the versions belonging to the selected parameter.
    
4.  Select the parameter version that you want to enable.
    
5.  Click the more\_vert**Actions** menu associated with that version, and then click **Enable**.
    
6.  In the confirmation dialog that appears, click **Enable**.
    

### gcloud

Before using any of the command data below, make the following replacements:

-   PARAMETER\_VERSION\_ID: the ID of the parameter version
-   PARAMETER\_ID: the name of the parameter

Execute the following command:

#### Linux, macOS, or Cloud Shell

**Note:** Ensure you have initialized the Google Cloud CLI with authentication and a project by running either [gcloud init](/sdk/gcloud/reference/init); or [gcloud auth login](/sdk/gcloud/reference/auth/login) and [gcloud config set project](/sdk/gcloud/reference/config/set).

gcloud parametermanager parameters versions update PARAMETER\_VERSION\_ID \--parameter\=PARAMETER\_ID \--location\=global \--no-disabled

#### Windows (PowerShell)

**Note:** Ensure you have initialized the Google Cloud CLI with authentication and a project by running either [gcloud init](/sdk/gcloud/reference/init); or [gcloud auth login](/sdk/gcloud/reference/auth/login) and [gcloud config set project](/sdk/gcloud/reference/config/set).

gcloud parametermanager parameters versions update PARAMETER\_VERSION\_ID \--parameter\=PARAMETER\_ID \--location\=global \--no-disabled

#### Windows (cmd.exe)

**Note:** Ensure you have initialized the Google Cloud CLI with authentication and a project by running either [gcloud init](/sdk/gcloud/reference/init); or [gcloud auth login](/sdk/gcloud/reference/auth/login) and [gcloud config set project](/sdk/gcloud/reference/config/set).

gcloud parametermanager parameters versions update PARAMETER\_VERSION\_ID \--parameter\=PARAMETER\_ID \--location\=global \--no-disabled

You should receive a response similar to the following:

Updated parameterVersion \[range1\].
createTime: '2024-11-14T10:07:12.883361876Z'
name: projects/production-1/locations/global/parameters/allowed\_ip\_ranges/versions/range2
payload:
  data: YWJj
updateTime: '2024-11-14T10:21:00.238113299Z'

### REST

Before using any of the request data, make the following replacements:

-   PROJECT\_ID: the Google Cloud project ID
-   PARAMETER\_ID: the name of the parameter
-   PARAMETER\_VERSION\_ID: the ID of the parameter version

HTTP method and URL:

PATCH https://parametermanager.googleapis.com/v1/projects/PROJECT\_ID/locations/global/parameters/PARAMETER\_ID/versions/PARAMETER\_VERSION\_ID

Request JSON body:

{"disabled": false}

To send your request, choose one of these options:

#### curl

**Note:** The following command assumes that you have logged in to the `gcloud` CLI with your user account by running [`gcloud init`](/sdk/gcloud/reference/init) or [`gcloud auth login`](/sdk/gcloud/reference/auth/login) , or by using [Cloud Shell](/shell/docs), which automatically logs you into the `gcloud` CLI . You can check the currently active account by running [`gcloud auth list`](/sdk/gcloud/reference/auth/list).

Save the request body in a file named `request.json`, and execute the following command:

curl -X PATCH \\  
     -H "Authorization: Bearer $(gcloud auth print-access-token)" \\  
     -H "Content-Type: application/json; charset=utf-8" \\  
     -d @request.json \\  
     "https://parametermanager.googleapis.com/v1/projects/PROJECT\_ID/locations/global/parameters/PARAMETER\_ID/versions/PARAMETER\_VERSION\_ID"

#### PowerShell

**Note:** The following command assumes that you have logged in to the `gcloud` CLI with your user account by running [`gcloud init`](/sdk/gcloud/reference/init) or [`gcloud auth login`](/sdk/gcloud/reference/auth/login) . You can check the currently active account by running [`gcloud auth list`](/sdk/gcloud/reference/auth/list).

Save the request body in a file named `request.json`, and execute the following command:

$cred = gcloud auth print-access-token  
$headers = @{ "Authorization" = "Bearer $cred" }  
  
Invoke-WebRequest \`  
    -Method PATCH \`  
    -Headers $headers \`  
    -ContentType: "application/json; charset=utf-8" \`  
    -InFile request.json \`  
    -Uri "https://parametermanager.googleapis.com/v1/projects/PROJECT\_ID/locations/global/parameters/PARAMETER\_ID/versions/PARAMETER\_VERSION\_ID" | Select-Object -Expand Content

You should receive a JSON response similar to the following:

{
  "name": "projects/production-1/locations/global/parameters/allowed\_ip\_ranges/versions/range1",
  "createTime": "2024-10-15T08:39:05.191747694Z",
  "updateTime": "2024-10-15T08:39:05.530311092Z",
  "payload": {
    "data": "abFmn3dvcmQ68GFiYzEyMwo="
  }
}

### C#

To run this code, first [set up a C# development environment](/dotnet/docs/setup) and [install the Parameter Manager C# SDK](/secret-manager/parameter-manager/docs/reference/libraries#client-libraries-install-csharp). On Compute Engine or GKE, you must [authenticate with the cloud-platform scope](/secret-manager/docs/accessing-the-api#oauth-scopes).

```

using Google.Cloud.ParameterManager.V1;
using Google.Protobuf.WellKnownTypes;

public class EnableParameterVersionSample
{
    /// <summary>
    /// This function enables a parameter version using the Parameter Manager SDK for GCP.
    /// </summary>
    /// <param name="projectId">The ID of the project where the parameter is located.</param>
    /// <param name="parameterId">The ID of the parameter for which the version is to be enabled.</param>
    /// <param name="versionId">The ID of the version to be enabled.</param>
    /// <returns>The updated ParameterVersion object.</returns>
    public ParameterVersion EnableParameterVersion(
        string projectId,
        string parameterId,
        string versionId)
    {
        // Create the client.
        ParameterManagerClient client = ParameterManagerClient.Create();

        // Build the resource name for the parameter version.
        ParameterVersionName parameterVersionName = new ParameterVersionName(projectId, "global", parameterId, versionId);

        // Create the request to enable the parameter version.
        UpdateParameterVersionRequest request = new UpdateParameterVersionRequest
        {
            ParameterVersion = new ParameterVersion
            {
                Name = parameterVersionName.ToString(),
                Disabled = false
            },
            UpdateMask = new FieldMask
            {
                Paths = { "disabled" }
            }
        };

        // Call the API to update (enable) the parameter version.
        ParameterVersion updatedParameterVersion = client.UpdateParameterVersion(request);

        // Print the updated parameter version name.
        Console.WriteLine($"Enabled parameter version {versionId} for parameter {parameterId}");

        // Return the updated parameter version.
        return updatedParameterVersion;
    }
}
```

### Go

To run this code, first [set up a Go development environment](/go/docs/setup) and [install the Parameter Manager Go SDK](/secret-manager/parameter-manager/docs/reference/libraries#client-libraries-install-go). On Compute Engine or GKE, you must [authenticate with the cloud-platform scope](/secret-manager/docs/accessing-the-api#oauth-scopes).

```
import (
	"context"
	"fmt"
	"io"

	parametermanager "cloud.google.com/go/parametermanager/apiv1"
	parametermanagerpb "cloud.google.com/go/parametermanager/apiv1/parametermanagerpb"
	"google.golang.org/genproto/protobuf/field_mask"
)

// enableParamVersion enables a parameter version.
//
// w: The io.Writer object used to write the output.
// projectID: The ID of the project where the parameter is located.
// parameterID: The ID of the parameter for which the version is to be enabled.
// versionID: The ID of the version to be enabled.
//
// The function returns an error if the parameter version update fails.
func enableParamVersion(w io.Writer, projectID, parameterID, versionID string) error {
	// Create the client.
	ctx := context.Background()
	client, err := parametermanager.NewClient(ctx)
	if err != nil {
		return fmt.Errorf("failed to create parametermanager client: %w", err)
	}
	defer client.Close()

	// Construct the name of the parameter version to enable.
	name := fmt.Sprintf("projects/%s/locations/global/parameters/%s/versions/%s", projectID, parameterID, versionID)

	// Build the request to enable the parameter version by updating the parameter version.
	req := &parametermanagerpb.UpdateParameterVersionRequest{
		UpdateMask: &field_mask.FieldMask{
			Paths: []string{"disabled"},
		},
		ParameterVersion: &parametermanagerpb.ParameterVersion{
			Name:     name,
			Disabled: false,
		},
	}

	// Call the API to enable the parameter version.
	if _, err := client.UpdateParameterVersion(ctx, req); err != nil {
		return fmt.Errorf("failed to enable parameter version: %w", err)
	}

	fmt.Fprintf(w, "Enabled parameter version %s for parameter %s\n", name, parameterID)
	return nil
}
```

### Java

To run this code, first [set up a Java development environment](/java/docs/setup) and [install the Parameter Manager Java SDK](/secret-manager/parameter-manager/docs/reference/libraries#client-libraries-install-java). On Compute Engine or GKE, you must [authenticate with the cloud-platform scope](/secret-manager/docs/accessing-the-api#oauth-scopes).

```

import com.google.cloud.parametermanager.v1.ParameterManagerClient;
import com.google.cloud.parametermanager.v1.ParameterVersion;
import com.google.cloud.parametermanager.v1.ParameterVersionName;
import com.google.protobuf.FieldMask;
import com.google.protobuf.util.FieldMaskUtil;
import java.io.IOException;

/**
 * This class demonstrates how to enable a parameter version using the Parameter Manager SDK for
 * GCP.
 */
public class EnableParamVersion {

  public static void main(String[] args) throws IOException {
    // TODO(developer): Replace these variables before running the sample.
    String projectId = "your-project-id";
    String parameterId = "your-parameter-id";
    String versionId = "your-version-id";

    // Call the method to enable a parameter version.
    enableParamVersion(projectId, parameterId, versionId);
  }

  // This is an example snippet for enabling a parameter version.
  public static ParameterVersion enableParamVersion(
      String projectId, String parameterId, String versionId) throws IOException {
    // Initialize the client that will be used to send requests. This client only
    // needs to be created once, and can be reused for multiple requests.
    try (ParameterManagerClient client = ParameterManagerClient.create()) {
      String locationId = "global";

      // Build the parameter version name.
      ParameterVersionName parameterVersionName =
          ParameterVersionName.of(projectId, locationId, parameterId, versionId);

      // Set the parameter version to enable.
      ParameterVersion parameterVersion =
          ParameterVersion.newBuilder()
              .setName(parameterVersionName.toString())
              .setDisabled(false)
              .build();

      // Build the field mask for the disabled field.
      FieldMask fieldMask = FieldMaskUtil.fromString("disabled");

      // Update the parameter version to enable it.
      ParameterVersion enabledParameterVersion =
          client.updateParameterVersion(parameterVersion, fieldMask);
      System.out.printf(
          "Enabled parameter version %s for parameter %s\n",
          enabledParameterVersion.getName(), parameterId);

      return enabledParameterVersion;
    }
  }
}
```

### Node.js

To run this code, first [set up a Node.js development environment](/nodejs/docs/setup) and [install the Parameter Manager Node.js SDK](/secret-manager/parameter-manager/docs/reference/libraries#client-libraries-install-nodejs). On Compute Engine or GKE, you must [authenticate with the cloud-platform scope](/secret-manager/docs/accessing-the-api#oauth-scopes).

```
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const projectId = 'my-project';
// const parameterId = 'my-parameter';
// const versionId = 'v1';

// Imports the Parameter Manager library
const {ParameterManagerClient} = require('@google-cloud/parametermanager');

// Instantiates a client
const client = new ParameterManagerClient();

async function enableParamVersion() {
  // Construct the full resource name
  const name = client.parameterVersionPath(
    projectId,
    'global',
    parameterId,
    versionId
  );

  // Construct the request
  const request = {
    parameterVersion: {
      name: name,
      disabled: false,
    },
    updateMask: {
      paths: ['disabled'],
    },
  };

  // Make the API call to update the parameter version
  const [parameterVersion] = await client.updateParameterVersion(request);

  console.log(
    `Enabled parameter version ${parameterVersion.name} for parameter ${parameterId}`
  );
  return parameterVersion;
}

return await enableParamVersion();
```

### PHP

To run this code, first learn about [using PHP on Google Cloud](/php/docs) and [install the Parameter Manager PHP SDK](/secret-manager/parameter-manager/docs/reference/libraries#client-libraries-install-php). On Compute Engine or GKE, you must [authenticate with the cloud-platform scope](/secret-manager/docs/accessing-the-api#oauth-scopes).

```
// Import necessary classes for enable a parameter version.
use Google\Cloud\ParameterManager\V1\Client\ParameterManagerClient;
use Google\Cloud\ParameterManager\V1\ParameterVersion;
use Google\Cloud\ParameterManager\V1\UpdateParameterVersionRequest;
use Google\Protobuf\FieldMask;

/**
 * Enables a parameter version using the Parameter Manager SDK for GCP.
 *
 * @param string $projectId The Google Cloud Project ID (e.g. 'my-project')
 * @param string $parameterId The Parameter ID (e.g. 'my-param')
 * @param string $versionId The Version ID (e.g. 'my-param-version')
 */
function enable_param_version(string $projectId, string $parameterId, string $versionId): void
{
    // Create a client for the Parameter Manager service.
    $client = new ParameterManagerClient();

    // Build the resource name of the parameter version.
    $parameterVersionName = $client->parameterVersionName($projectId, 'global', $parameterId, $versionId);

    // Update the parameter version.
    $parameterVersion = (new ParameterVersion())
        ->setName($parameterVersionName)
        ->setDisabled(false);

    $updateMask = (new FieldMask())
        ->setPaths(['disabled']);

    // Prepare the request to enable the parameter version.
    $request = (new UpdateParameterVersionRequest())
        ->setUpdateMask($updateMask)
        ->setParameterVersion($parameterVersion);

    // Enable the parameter version using the client.
    $client->updateParameterVersion($request);

    // Print the parameter version details.
    printf('Enabled parameter version %s for parameter %s' . PHP_EOL, $versionId, $parameterId);
}
```

### Python

To run this code, first [set up a Python development environment](/python/docs/setup) and [install the Parameter Manager Python SDK](/secret-manager/parameter-manager/docs/reference/libraries#client-libraries-install-python). On Compute Engine or GKE, you must [authenticate with the cloud-platform scope](/secret-manager/docs/accessing-the-api#oauth-scopes).

```
def enable_param_version(
    project_id: str, parameter_id: str, version_id: str
) -> parametermanager_v1.ParameterVersion:
    """
    Enables a specific version of a specified global parameter in the
    specified project using the Google Cloud Parameter Manager SDK.

    Args:
        project_id (str): The ID of the project where the parameter is located.
        parameter_id (str): The ID of the parameter for
        which version is to be enabled.
        version_id (str): The ID of the version to be enabled.

    Returns:
        parametermanager_v1.ParameterVersion: An object representing the
        enabled parameter version.

    Example:
        enable_param_version(
            "my-project",
            "my-global-parameter",
            "v1"
        )
    """
    # Import the necessary library for Google Cloud Parameter Manager.
    from google.cloud import parametermanager_v1
    from google.protobuf import field_mask_pb2

    # Create the Parameter Manager client.
    client = parametermanager_v1.ParameterManagerClient()

    # Build the resource name of the parameter version.
    name = client.parameter_version_path(project_id, "global", parameter_id, version_id)

    # Get the current parameter version details.
    parameter_version = client.get_parameter_version(name=name)

    # Set the disabled field to False to enable the version.
    parameter_version.disabled = False

    # Define the update mask for the disabled field.
    update_mask = field_mask_pb2.FieldMask(paths=["disabled"])

    # Define the request to update the parameter version.
    request = parametermanager_v1.UpdateParameterVersionRequest(
        parameter_version=parameter_version, update_mask=update_mask
    )

    # Call the API to update (enable) the parameter version.
    response = client.update_parameter_version(request=request)

    # Print the parameter version ID that it was enabled.
    print(f"Enabled parameter version {version_id} for parameter {parameter_id}")
```

### Ruby

To run this code, first [set up a Ruby development environment](/ruby/docs/setup) and [install the Parameter Manager Ruby SDK](/secret-manager/parameter-manager/docs/reference/libraries#client-libraries-install-ruby). On Compute Engine or GKE, you must [authenticate with the cloud-platform scope](/secret-manager/docs/accessing-the-api#oauth-scopes).

```
require "google/cloud/parameter_manager"

##
# Enable a parameter version
#
# @param project_id [String] The Google Cloud project (e.g. "my-project")
# @param parameter_id [String] The parameter name (e.g. "my-parameter")
# @param version_id [String] The version name (e.g. "my-version")
#
def enable_param_version project_id:, parameter_id:, version_id:
  # Create a Parameter Manager client.
  client = Google::Cloud::ParameterManager.parameter_manager

  # Build the resource name of the parent project.
  name = client.parameter_version_path project: project_id, location: "global", parameter: parameter_id,
                                       parameter_version: version_id

  parameter_version = {
    name: name,
    disabled: false
  }

  update_mask = {
    paths: ["disabled"]
  }

  # Enabled the parameter version.
  param_version = client.update_parameter_version parameter_version: parameter_version, update_mask: update_mask

  # Print the parameter version name.
  puts "Enabled parameter version #{version_id} for parameter #{parameter_id}"
end
```

**Regional parameters**

### Console

1.  In the Google Cloud console, go to the **Secret Manager** page.
    
    [Go to Secret Manager](https://console.cloud.google.com/security/secret-manager)
    
2.  Click **Parameter Manager** to go to the **Parameter Manager** page. You'll see the list of parameters for that project.
    
3.  Click the parameter name to access its versions. The parameter details page opens with the **Versions** tab in focus where you can see all the versions belonging to the selected parameter.
    
4.  Select the parameter version that you want to enable.
    
5.  Click the more\_vert**Actions** menu associated with that version, and then click **Enable**.
    
6.  In the confirmation dialog that appears, click **Enable**.
    

### gcloud

Before using any of the command data below, make the following replacements:

-   PARAMETER\_VERSION\_ID: the ID of the parameter version
-   PARAMETER\_ID: the name of the parameter
-   LOCATION: the Google Cloud [location](/secret-manager/docs/locations) of the parameter

Execute the following command:

#### Linux, macOS, or Cloud Shell

**Note:** Ensure you have initialized the Google Cloud CLI with authentication and a project by running either [gcloud init](/sdk/gcloud/reference/init); or [gcloud auth login](/sdk/gcloud/reference/auth/login) and [gcloud config set project](/sdk/gcloud/reference/config/set).

gcloud parametermanager parameters versions update PARAMETER\_VERSION\_ID \--parameter\=PARAMETER\_ID \--location\=LOCATION \--no-disabled

#### Windows (PowerShell)

**Note:** Ensure you have initialized the Google Cloud CLI with authentication and a project by running either [gcloud init](/sdk/gcloud/reference/init); or [gcloud auth login](/sdk/gcloud/reference/auth/login) and [gcloud config set project](/sdk/gcloud/reference/config/set).

gcloud parametermanager parameters versions update PARAMETER\_VERSION\_ID \--parameter\=PARAMETER\_ID \--location\=LOCATION \--no-disabled

#### Windows (cmd.exe)

**Note:** Ensure you have initialized the Google Cloud CLI with authentication and a project by running either [gcloud init](/sdk/gcloud/reference/init); or [gcloud auth login](/sdk/gcloud/reference/auth/login) and [gcloud config set project](/sdk/gcloud/reference/config/set).

gcloud parametermanager parameters versions update PARAMETER\_VERSION\_ID \--parameter\=PARAMETER\_ID \--location\=LOCATION \--no-disabled

You should receive a response similar to the following:

Updated parameterVersion \[range1\].
createTime: '2024-11-14T10:07:12.883361876Z'
payload:
  data: YWJj
name: projects/production-1/locations/us-central1/parameters/p1/versions/v4
updateTime: '2024-11-14T10:21:00.238113299Z'

### REST

Before using any of the request data, make the following replacements:

-   LOCATION: the Google Cloud [location](/secret-manager/docs/locations) of the parameter
-   PROJECT\_ID: the Google Cloud project ID
-   PARAMETER\_ID: the name of the parameter
-   PARAMETER\_VERSION\_ID: the ID of the parameter version

HTTP method and URL:

PATCH https://parametermanager.LOCATION.rep.googleapis.com/v1/projects/PROJECT\_ID/locations/LOCATION/parameters/PARAMETER\_ID/versions/PARAMETER\_VERSION\_ID

Request JSON body:

{"disabled": false}

To send your request, choose one of these options:

#### curl

**Note:** The following command assumes that you have logged in to the `gcloud` CLI with your user account by running [`gcloud init`](/sdk/gcloud/reference/init) or [`gcloud auth login`](/sdk/gcloud/reference/auth/login) , or by using [Cloud Shell](/shell/docs), which automatically logs you into the `gcloud` CLI . You can check the currently active account by running [`gcloud auth list`](/sdk/gcloud/reference/auth/list).

Save the request body in a file named `request.json`, and execute the following command:

curl -X PATCH \\  
     -H "Authorization: Bearer $(gcloud auth print-access-token)" \\  
     -H "Content-Type: application/json; charset=utf-8" \\  
     -d @request.json \\  
     "https://parametermanager.LOCATION.rep.googleapis.com/v1/projects/PROJECT\_ID/locations/LOCATION/parameters/PARAMETER\_ID/versions/PARAMETER\_VERSION\_ID"

#### PowerShell

**Note:** The following command assumes that you have logged in to the `gcloud` CLI with your user account by running [`gcloud init`](/sdk/gcloud/reference/init) or [`gcloud auth login`](/sdk/gcloud/reference/auth/login) . You can check the currently active account by running [`gcloud auth list`](/sdk/gcloud/reference/auth/list).

Save the request body in a file named `request.json`, and execute the following command:

$cred = gcloud auth print-access-token  
$headers = @{ "Authorization" = "Bearer $cred" }  
  
Invoke-WebRequest \`  
    -Method PATCH \`  
    -Headers $headers \`  
    -ContentType: "application/json; charset=utf-8" \`  
    -InFile request.json \`  
    -Uri "https://parametermanager.LOCATION.rep.googleapis.com/v1/projects/PROJECT\_ID/locations/LOCATION/parameters/PARAMETER\_ID/versions/PARAMETER\_VERSION\_ID" | Select-Object -Expand Content

You should receive a JSON response similar to the following:

{
  "name": "projects/production-1/locations/us-central1/parameters/p1/versions/v1",
  "createTime": "2024-11-22T05:24:41.338299211Z",
  "updateTime": "2024-11-22T05:37:59.274260429Z",
  "payload": {
    "data": "cGFzc3dvcmQ6IGFiYzEyMwo="
  }
}

### C#

To run this code, first [set up a C# development environment](/dotnet/docs/setup) and [install the Parameter Manager C# SDK](/secret-manager/parameter-manager/docs/reference/libraries#client-libraries-install-csharp). On Compute Engine or GKE, you must [authenticate with the cloud-platform scope](/secret-manager/docs/accessing-the-api#oauth-scopes).

```

using Google.Cloud.ParameterManager.V1;
using Google.Protobuf.WellKnownTypes;

public class EnableRegionalParameterVersionSample
{
    /// <summary>
    /// This function enables a regional parameter version using the Parameter Manager SDK for GCP.
    /// </summary>
    /// <param name="projectId">The ID of the project where the parameter is located.</param>
    /// <param name="locationId">The ID of the region where the parameter is located.</param>
    /// <param name="parameterId">The ID of the parameter for which the version is to be enabled.</param>
    /// <param name="versionId">The ID of the version to be enabled.</param>
    public ParameterVersion EnableRegionalParameterVersion(
        string projectId,
        string locationId,
        string parameterId,
        string versionId)
    {
        // Define the regional endpoint
        string regionalEndpoint = $"parametermanager.{locationId}.rep.googleapis.com";

        // Create the client with the regional endpoint
        ParameterManagerClient client = new ParameterManagerClientBuilder
        {
            Endpoint = regionalEndpoint
        }.Build();

        // Build the resource name for the parameter version in the specified regional locationId
        ParameterVersionName parameterVersionName = new ParameterVersionName(projectId, locationId, parameterId, versionId);

        UpdateParameterVersionRequest request = new UpdateParameterVersionRequest
        {
            ParameterVersion = new ParameterVersion
            {
                Name = parameterVersionName.ToString(),
                Disabled = false
            },
            UpdateMask = new FieldMask
            {
                Paths = { "disabled" }
            }
        };

        // Call the API to update (disable) the parameter version.
        ParameterVersion updatedParameterVersion = client.UpdateParameterVersion(request);

        Console.WriteLine($"Enabled regional parameter version {versionId} for parameter {parameterId}");

        return updatedParameterVersion;
    }
}
```

### Go

To run this code, first [set up a Go development environment](/go/docs/setup) and [install the Parameter Manager Go SDK](/secret-manager/parameter-manager/docs/reference/libraries#client-libraries-install-go). On Compute Engine or GKE, you must [authenticate with the cloud-platform scope](/secret-manager/docs/accessing-the-api#oauth-scopes).

```
import (
	"context"
	"fmt"
	"io"

	parametermanager "cloud.google.com/go/parametermanager/apiv1"
	parametermanagerpb "cloud.google.com/go/parametermanager/apiv1/parametermanagerpb"
	"google.golang.org/api/option"
	"google.golang.org/genproto/protobuf/field_mask"
)

// enableRegionalParamVersion enables a regional parameter version using the Parameter Manager SDK for GCP.
//
// w: The io.Writer object used to write the output.
// projectID: The ID of the project where the parameter is located.
// locationID: The ID of the region where the parameter is located.
// parameterID: The ID of the parameter for which the version is to be enabled.
// versionID: The ID of the version to be enabled.
//
// The function returns an error if the parameter version update fails.
func enableRegionalParamVersion(w io.Writer, projectID, locationID, parameterID, versionID string) error {
	// Create a new context.
	ctx := context.Background()

	// Create a Parameter Manager client.
	endpoint := fmt.Sprintf("parametermanager.%s.rep.googleapis.com:443", locationID)
	client, err := parametermanager.NewClient(ctx, option.WithEndpoint(endpoint))
	if err != nil {
		return fmt.Errorf("failed to create Parameter Manager client: %w", err)
	}
	defer client.Close()

	// Construct the name of the parameter version to enable.
	name := fmt.Sprintf("projects/%s/locations/%s/parameters/%s/versions/%s", projectID, locationID, parameterID, versionID)

	// Build the request to enable the parameter version by updating the parameter version.
	req := &parametermanagerpb.UpdateParameterVersionRequest{
		UpdateMask: &field_mask.FieldMask{
			Paths: []string{"disabled"},
		},
		ParameterVersion: &parametermanagerpb.ParameterVersion{
			Name:     name,
			Disabled: false,
		},
	}

	// Call the API to enable the parameter version.
	if _, err := client.UpdateParameterVersion(ctx, req); err != nil {
		return fmt.Errorf("failed to enable parameter version: %w", err)
	}

	fmt.Fprintf(w, "Enabled regional parameter version: %s for parameter %s\n", name, parameterID)
	return nil
}
```

### Java

To run this code, first [set up a Java development environment](/java/docs/setup) and [install the Parameter Manager Java SDK](/secret-manager/parameter-manager/docs/reference/libraries#client-libraries-install-java). On Compute Engine or GKE, you must [authenticate with the cloud-platform scope](/secret-manager/docs/accessing-the-api#oauth-scopes).

```

import com.google.cloud.parametermanager.v1.ParameterManagerClient;
import com.google.cloud.parametermanager.v1.ParameterManagerSettings;
import com.google.cloud.parametermanager.v1.ParameterVersion;
import com.google.cloud.parametermanager.v1.ParameterVersionName;
import com.google.protobuf.FieldMask;
import com.google.protobuf.util.FieldMaskUtil;
import java.io.IOException;

/**
 * This class demonstrates how to enable a regional parameter version using the Parameter Manager
 * SDK for GCP.
 */
public class EnableRegionalParamVersion {

  public static void main(String[] args) throws IOException {
    // TODO(developer): Replace these variables before running the sample.
    String projectId = "your-project-id";
    String locationId = "your-location-id";
    String parameterId = "your-parameter-id";
    String versionId = "your-version-id";

    // Call the method to enable a regional parameter version.
    enableRegionalParamVersion(projectId, locationId, parameterId, versionId);
  }

  // This is an example snippet that enables a regional parameter version.
  public static ParameterVersion enableRegionalParamVersion(
      String projectId, String locationId, String parameterId, String versionId)
      throws IOException {
    // Endpoint to call the regional parameter manager server
    String apiEndpoint = String.format("parametermanager.%s.rep.googleapis.com:443", locationId);
    ParameterManagerSettings parameterManagerSettings =
        ParameterManagerSettings.newBuilder().setEndpoint(apiEndpoint).build();

    // Initialize the client that will be used to send requests. This client only
    // needs to be created once, and can be reused for multiple requests.
    try (ParameterManagerClient client = ParameterManagerClient.create(parameterManagerSettings)) {
      // Build the parameter version name.
      ParameterVersionName parameterVersionName =
          ParameterVersionName.of(projectId, locationId, parameterId, versionId);

      // Set the parameter version to enable.
      ParameterVersion parameterVersion =
          ParameterVersion.newBuilder()
              .setName(parameterVersionName.toString())
              .setDisabled(false)
              .build();

      // Build the field mask for the disabled field.
      FieldMask fieldMask = FieldMaskUtil.fromString("disabled");

      // Update the parameter version to enable it.
      ParameterVersion enabledParameterVersion =
          client.updateParameterVersion(parameterVersion, fieldMask);
      System.out.printf(
          "Enabled regional parameter version %s for regional parameter %s\n",
          enabledParameterVersion.getName(), parameterId);

      return enabledParameterVersion;
    }
  }
}
```

### Node.js

To run this code, first [set up a Node.js development environment](/nodejs/docs/setup) and [install the Parameter Manager Node.js SDK](/secret-manager/parameter-manager/docs/reference/libraries#client-libraries-install-nodejs). On Compute Engine or GKE, you must [authenticate with the cloud-platform scope](/secret-manager/docs/accessing-the-api#oauth-scopes).

```
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const projectId = 'my-project';
// const locationId = 'us-central1';
// const parameterId = 'my-parameter';
// const versionId = 'v1';

// Imports the Parameter Manager library
const {ParameterManagerClient} = require('@google-cloud/parametermanager');

// Adding the endpoint to call the regional parameter manager server
const options = {
  apiEndpoint: `parametermanager.${locationId}.rep.googleapis.com`,
};

// Instantiates a client with regional endpoint
const client = new ParameterManagerClient(options);

async function enableRegionalParamVersion() {
  // Construct the full resource name
  const name = client.parameterVersionPath(
    projectId,
    locationId,
    parameterId,
    versionId
  );

  // Construct the request
  const request = {
    parameterVersion: {
      name: name,
      disabled: false,
    },
    updateMask: {
      paths: ['disabled'],
    },
  };

  // Make the API call to update the parameter version
  const [paramVersion] = await client.updateParameterVersion(request);

  console.log(
    `Enabled regional parameter version ${paramVersion.name} for parameter ${parameterId}`
  );
  return paramVersion;
}

return await enableRegionalParamVersion();
```

### PHP

To run this code, first learn about [using PHP on Google Cloud](/php/docs) and [install the Parameter Manager PHP SDK](/secret-manager/parameter-manager/docs/reference/libraries#client-libraries-install-php). On Compute Engine or GKE, you must [authenticate with the cloud-platform scope](/secret-manager/docs/accessing-the-api#oauth-scopes).

```
// Import necessary classes for enable a parameter version.
use Google\Cloud\ParameterManager\V1\Client\ParameterManagerClient;
use Google\Cloud\ParameterManager\V1\ParameterVersion;
use Google\Cloud\ParameterManager\V1\UpdateParameterVersionRequest;
use Google\Protobuf\FieldMask;

/**
 * Enables a regional parameter version using the Parameter Manager SDK for GCP.
 *
 * @param string $projectId The Google Cloud Project ID (e.g. 'my-project')
 * @param string $locationId The Parameter Location (e.g. 'us-central1')
 * @param string $parameterId The Parameter ID (e.g. 'my-param')
 * @param string $versionId The Version ID (e.g. 'my-param-version')
 */
function enable_regional_param_version(string $projectId, string $locationId, string $parameterId, string $versionId): void
{
    // Specify regional endpoint.
    $options = ['apiEndpoint' => "parametermanager.$locationId.rep.googleapis.com"];

    // Create a client for the Parameter Manager service.
    $client = new ParameterManagerClient($options);

    // Build the resource name of the parameter version.
    $parameterVersionName = $client->parameterVersionName($projectId, $locationId, $parameterId, $versionId);

    // Update the parameter version.
    $parameterVersion = (new ParameterVersion())
        ->setName($parameterVersionName)
        ->setDisabled(false);

    $updateMask = (new FieldMask())
        ->setPaths(['disabled']);

    // Prepare the request to enable the parameter version.
    $request = (new UpdateParameterVersionRequest())
        ->setUpdateMask($updateMask)
        ->setParameterVersion($parameterVersion);

    // Enable the parameter version using the client.
    $client->updateParameterVersion($request);

    // Print the parameter version details.
    printf('Enabled regional parameter version %s for parameter %s' . PHP_EOL, $versionId, $parameterId);
}
```

### Python

To run this code, first [set up a Python development environment](/python/docs/setup) and [install the Parameter Manager Python SDK](/secret-manager/parameter-manager/docs/reference/libraries#client-libraries-install-python). On Compute Engine or GKE, you must [authenticate with the cloud-platform scope](/secret-manager/docs/accessing-the-api#oauth-scopes).

```
def enable_regional_param_version(
    project_id: str, location_id: str, parameter_id: str, version_id: str
) -> parametermanager_v1.ParameterVersion:
    """
    Enables a regional parameter version in the given project.

    Args:
        project_id (str): The ID of the GCP project
        where the parameter is located.
        location_id (str): The region where the parameter is stored.
        parameter_id (str): The ID of the parameter for
        which version is to be enabled.
        version_id (str): The version ID of the parameter to be enabled.

    Returns:
        parametermanager_v1.ParameterVersion: An object representing the
        enabled parameter version.

    Example:
        enable_regional_param_version(
            "my-project",
            "us-central1",
            "my-regional-parameter",
            "v1"
        )
    """

    # Import the Parameter Manager client library.
    from google.cloud import parametermanager_v1
    from google.protobuf import field_mask_pb2

    # Endpoint to call the regional parameter manager server.
    api_endpoint = f"parametermanager.{location_id}.rep.googleapis.com"

    # Create the Parameter Manager client for the specified region.
    client = parametermanager_v1.ParameterManagerClient(
        client_options={"api_endpoint": api_endpoint}
    )

    # Build the resource name of the parameter version for the specified region.
    name = client.parameter_version_path(
        project_id, location_id, parameter_id, version_id
    )

    # Get the current parameter version to update its state.
    parameter_version = client.get_parameter_version(request={"name": name})

    # Enable the parameter version.
    parameter_version.disabled = False

    # Create a field mask to specify which fields to update.
    update_mask = field_mask_pb2.FieldMask(paths=["disabled"])

    # Define the parameter version update request.
    request = parametermanager_v1.UpdateParameterVersionRequest(
        parameter_version=parameter_version,
        update_mask=update_mask,
    )

    # Update the parameter version.
    response = client.update_parameter_version(request=request)

    # Print the parameter version ID that it was enabled.
    print(
        f"Enabled regional parameter version {version_id} "
        f"for regional parameter {parameter_id}"
    )
```

### Ruby

To run this code, first [set up a Ruby development environment](/ruby/docs/setup) and [install the Parameter Manager Ruby SDK](/secret-manager/parameter-manager/docs/reference/libraries#client-libraries-install-ruby). On Compute Engine or GKE, you must [authenticate with the cloud-platform scope](/secret-manager/docs/accessing-the-api#oauth-scopes).

```
require "google/cloud/parameter_manager"

##
# Enable a regional parameter version
#
# @param project_id [String] The Google Cloud project (e.g. "my-project")
# @param location_id [String] The location name (e.g. "us-central1")
# @param parameter_id [String] The parameter name (e.g. "my-parameter")
# @param version_id [String] The version name (e.g. "my-version")
#
def enable_regional_param_version project_id:, location_id:, parameter_id:, version_id:
  # Endpoint for the regional parameter manager service.
  api_endpoint = "parametermanager.#{location_id}.rep.googleapis.com"

  # Create the Parameter Manager client.
  client = Google::Cloud::ParameterManager.parameter_manager do |config|
    config.endpoint = api_endpoint
  end

  # Build the resource name of the parent project.
  name = client.parameter_version_path project: project_id, location: location_id, parameter: parameter_id,
                                       parameter_version: version_id

  parameter_version = {
    name: name,
    disabled: false
  }

  update_mask = {
    paths: ["disabled"]
  }

  # Enabled the parameter version
  param_version = client.update_parameter_version parameter_version: parameter_version, update_mask: update_mask

  # Print the parameter version name.
  puts "Enabled regional parameter version #{version_id} for parameter #{parameter_id}"
end
```

## What's next

-   [Delete a parameter version](/secret-manager/parameter-manager/docs/delete-parameter-version)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
