-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Python](https://docs.cloud.google.com/python/docs)
-   [Client libraries](https://docs.cloud.google.com/python/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [4.2.0 (latest)](/python/docs/reference/cloudasset/latest)
-   [4.1.0](/python/docs/reference/cloudasset/4.1.0)
-   [4.0.0](/python/docs/reference/cloudasset/4.0.0)
-   [3.30.1](/python/docs/reference/cloudasset/3.30.1)
-   [3.29.2](/python/docs/reference/cloudasset/3.29.2)
-   [3.28.0](/python/docs/reference/cloudasset/3.28.0)
-   [3.27.1](/python/docs/reference/cloudasset/3.27.1)
-   [3.26.4](/python/docs/reference/cloudasset/3.26.4)
-   [3.25.1](/python/docs/reference/cloudasset/3.25.1)
-   [3.24.3](/python/docs/reference/cloudasset/3.24.3)
-   [3.23.0](/python/docs/reference/cloudasset/3.23.0)
-   [3.22.0](/python/docs/reference/cloudasset/3.22.0)
-   [3.21.0](/python/docs/reference/cloudasset/3.21.0)
-   [3.20.1](/python/docs/reference/cloudasset/3.20.1)
-   [3.19.1](/python/docs/reference/cloudasset/3.19.1)
-   [3.18.1](/python/docs/reference/cloudasset/3.18.1)
-   [3.17.1](/python/docs/reference/cloudasset/3.17.1)
-   [3.16.0](/python/docs/reference/cloudasset/3.16.0)
-   [3.15.0](/python/docs/reference/cloudasset/3.15.0)
-   [3.14.2](/python/docs/reference/cloudasset/3.14.2)
-   [3.13.1](/python/docs/reference/cloudasset/3.13.1)
-   [3.12.0](/python/docs/reference/cloudasset/3.12.0)
-   [3.11.0](/python/docs/reference/cloudasset/3.11.0)
-   [3.10.0](/python/docs/reference/cloudasset/3.10.0)
-   [3.9.1](/python/docs/reference/cloudasset/3.9.1)
-   [3.8.1](/python/docs/reference/cloudasset/3.8.1)
-   [3.7.1](/python/docs/reference/cloudasset/3.7.1)
-   [3.6.1](/python/docs/reference/cloudasset/3.6.1)
-   [3.5.0](/python/docs/reference/cloudasset/3.5.0)
-   [3.4.0](/python/docs/reference/cloudasset/3.4.0)
-   [3.3.0](/python/docs/reference/cloudasset/3.3.0)
-   [3.2.1](/python/docs/reference/cloudasset/3.2.1)
-   [3.1.0](/python/docs/reference/cloudasset/3.1.0)
-   [2.2.2](/python/docs/reference/cloudasset/2.2.2)
-   [2.1.0](/python/docs/reference/cloudasset/2.1.0)
-   [2.0.0](/python/docs/reference/cloudasset/2.0.0)
-   [1.3.2](/python/docs/reference/cloudasset/1.3.2)
-   [1.2.0](/python/docs/reference/cloudasset/1.2.0)
-   [1.1.0](/python/docs/reference/cloudasset/1.1.0)
-   [1.0.0](/python/docs/reference/cloudasset/1.0.0)
-   [0.10.0](/python/docs/reference/cloudasset/0.10.0)
-   [0.9.0](/python/docs/reference/cloudasset/0.9.0)
-   [0.8.0](/python/docs/reference/cloudasset/0.8.0)
-   [0.7.0](/python/docs/reference/cloudasset/0.7.0)
-   [0.6.0](/python/docs/reference/cloudasset/0.6.0)
-   [0.5.0](/python/docs/reference/cloudasset/0.5.0)
-   [0.4.1](/python/docs/reference/cloudasset/0.4.1)
-   [0.3.0](/python/docs/reference/cloudasset/0.3.0)

# Python Client for Cloud Asset Inventory

[![image](https://img.shields.io/badge/support-stable-gold.svg)](https://github.com/googleapis/google-cloud-python/blob/main/README.rst#stability-levels) [![image](https://img.shields.io/pypi/v/google-cloud-asset.svg)](https://pypi.org/project/google-cloud-asset/) [![image](https://img.shields.io/pypi/pyversions/google-cloud-asset.svg)](https://pypi.org/project/google-cloud-asset/)

[Cloud Asset Inventory](https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview): provides inventory services based on a time series database. This database keeps a five week history of Google Cloud asset metadata. The Cloud Asset Inventory export service allows you to export all asset metadata at a certain timestamp or export event change history during a timeframe.

-   [Client Library Documentation](https://cloud.google.com/python/docs/reference/cloudasset/latest/summary_overview)
    
-   [Product Documentation](https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview)
    

## Quick Start

In order to use this library, you first need to go through the following steps:

1.  [Select or create a Cloud Platform project.](https://console.cloud.google.com/project)
    
2.  [Enable billing for your project.](https://cloud.google.com/billing/docs/how-to/modify-project#enable_billing_for_a_project)
    
3.  [Enable the Cloud Asset Inventory.](https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview)
    
4.  [Set up Authentication.](https://googleapis.dev/python/google-api-core/latest/auth.html)
    

### Installation

Install this library in a virtual environment using [venv](https://docs.python.org/3/library/venv.html). [venv](https://docs.python.org/3/library/venv.html) is a tool that creates isolated Python environments. These isolated environments can have separate versions of Python packages, which allows you to isolate one project’s dependencies from the dependencies of other projects.

With [venv](https://docs.python.org/3/library/venv.html), it’s possible to install this library without needing system install permissions, and without clashing with the installed system dependencies.

### Code samples and snippets

Code samples and snippets live in the [samples/](https://github.com/googleapis/google-cloud-python/tree/main/packages/google-cloud-asset/samples) folder.

#### Supported Python Versions

Our client libraries are compatible with all current [active](https://devguide.python.org/devcycle/#in-development-main-branch) and [maintenance](https://devguide.python.org/devcycle/#maintenance-branches) versions of Python.

Python >= 3.7, including 3.14

#### Unsupported Python Versions

Python <= 3.6

If you are using an [end-of-life](https://devguide.python.org/devcycle/#end-of-life-branches) version of Python, we recommend that you update as soon as possible to an actively supported version.

#### Mac/Linux

```
python3 -m venv <your-env>
source <your-env>/bin/activate
pip install google-cloud-asset
```

#### Windows

```
py -m venv <your-env>
.\<your-env>\Scripts\activate
pip install google-cloud-asset
```

### Next Steps

-   Read the [Client Library Documentation](https://cloud.google.com/python/docs/reference/cloudasset/latest/summary_overview) for Cloud Asset Inventory to see other available methods on the client.
    
-   Read the [Cloud Asset Inventory Product documentation](https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview) to learn more about the product and see How-to Guides.
    
-   View this [README](https://github.com/googleapis/google-cloud-python/blob/main/README.rst) to see the full list of Cloud APIs that we cover.
    

## Logging

This library uses the standard Python `logging` functionality to log some RPC events that could be of interest for debugging and monitoring purposes. Note the following:

1.  Logs may contain sensitive information. Take care to **restrict access to the logs** if they are saved, whether it be on local storage or on Google Cloud Logging.
    
2.  Google may refine the occurrence, level, and content of various log messages in this library without flagging such changes as breaking. **Do not depend on immutability of the logging events**.
    
3.  By default, the logging events from this library are not handled. You must **explicitly configure log handling** using one of the mechanisms below.
    

### Simple, environment-based configuration

To enable logging for this library without any changes in your code, set the `GOOGLE_SDK_PYTHON_LOGGING_SCOPE` environment variable to a valid Google logging scope. This configures handling of logging events (at level `logging.DEBUG` or higher) from this library in a default manner, emitting the logged messages in a structured format. It does not currently allow customizing the logging levels captured nor the handlers, formatters, etc. used for any logging event.

A logging scope is a period-separated namespace that begins with `google`, identifying the Python module or package to log.

-   Valid logging scopes: `google`, `google.cloud.asset.v1`, `google.api`, `google.auth`, etc.
    
-   Invalid logging scopes: `foo`, `123`, etc.
    

**NOTE**: If the logging scope is invalid, the library does not set up any logging handlers.

#### Environment-Based Examples

-   Enabling the default handler for all Google-based loggers

```
export GOOGLE_SDK_PYTHON_LOGGING_SCOPE=google
```

-   Enabling the default handler for a specific Google module (for a client library called `library_v1`):

```
export GOOGLE_SDK_PYTHON_LOGGING_SCOPE=google.cloud.library_v1
```

### Advanced, code-based configuration

You can also configure a valid logging scope using Python’s standard logging mechanism.

#### Code-Based Examples

-   Configuring a handler for all Google-based loggers

```
import logging

from google.cloud import library_v1

base_logger = logging.getLogger("google")
base_logger.addHandler(logging.StreamHandler())
base_logger.setLevel(logging.DEBUG)
```

-   Configuring a handler for a specific Google module (for a client library called `library_v1`):

```
import logging

from google.cloud import library_v1

base_logger = logging.getLogger("google.cloud.library_v1")
base_logger.addHandler(logging.StreamHandler())
base_logger.setLevel(logging.DEBUG)
```

### Logging details

1.  Regardless of which of the mechanisms above you use to configure logging for this library, by default logging events are not propagated up to the root logger from the google-level logger. If you need the events to be propagated to the root logger, you must explicitly set `logging.getLogger("google").propagate = True` in your code.
    
2.  You can mix the different logging configurations above for different Google modules. For example, you may want use a code-based logging configuration for one library, but decide you need to also set up environment-based logging configuration for another library.
    
    1.  If you attempt to use both code-based and environment-based configuration for the same module, the environment-based configuration will be ineffectual if the code -based configuration gets applied first.
3.  The Google-specific logging configurations (default handlers for environment-based configuration; not propagating logging events to the root logger) get executed the first time _any_ client library is instantiated in your application, and only if the affected loggers have not been previously configured. (This is the reason for 2.i. above.)
    

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
