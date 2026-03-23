-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application hosting](https://docs.cloud.google.com/docs/application-hosting)
-   [App Engine](https://docs.cloud.google.com/appengine/docs)
-   [Standard environment](https://docs.cloud.google.com/appengine/docs/standard)
-   [Referensi](https://docs.cloud.google.com/appengine/docs/standard/apis)

Send feedback

# Module: google.appengine.api.modules Stay organized with collections Save and categorize content based on your preferences.

 

 [![](https://www.tensorflow.org/images/GitHub-Mark-32px.png) View source on GitHub](https://github.com/GoogleCloudPlatform/appengine-python-standard/tree/main/src/google/appengine/api/modules/__init__.py)

Modules API module.

## Modules

[`modules`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/modules) module: Exposes methods to control services (modules) and versions of an app.

[`modules_stub`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/modules_stub) module: Stub implementation of the modules service.

## Classes

[`class Error`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/Error): Base-class for errors in this module.

[`class InvalidInstancesError`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/InvalidInstancesError): The given instances value is not valid.

[`class InvalidModuleError`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/InvalidModuleError): The given module is not known to the system.

[`class InvalidVersionError`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/InvalidVersionError): The given module version is not known to the system.

[`class TransientError`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/TransientError): A transient error was encountered, retry the operation.

[`class UnexpectedStateError`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/UnexpectedStateError): An unexpected current state was found when starting/stopping a module.

## Functions

[`get_current_instance_id(...)`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/get_current_instance_id): Returns the ID of the current instance.

[`get_current_module_name(...)`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/get_current_module_name): Returns the module name of the current instance.

[`get_current_version_name(...)`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/get_current_version_name): Returns the version of the current instance.

[`get_default_version(...)`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/get_default_version): Returns the name of the default version for the module.

[`get_hostname(...)`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/get_hostname): Returns a hostname to use to contact the module.

[`get_modules(...)`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/get_modules): Returns a list of all modules for the application.

[`get_num_instances(...)`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/get_num_instances): Return the number of instances that are set for the given module version.

[`get_versions(...)`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/get_versions): Returns a list of versions for a given module.

[`set_num_instances(...)`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/set_num_instances): Sets the number of instances on the module and version.

[`set_num_instances_async(...)`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/set_num_instances_async): Returns a `UserRPC` to set the number of instances on the module version.

[`start_version(...)`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/start_version): Start all instances for the given version of the module.

[`start_version_async(...)`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/start_version_async): Returns a `UserRPC` to start all instances for the given module version.

[`stop_version(...)`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/stop_version): Stops all instances for the given version of the module.

[`stop_version_async(...)`](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine/api/modules/stop_version_async): Returns a `UserRPC` to stop all instances for the given module version.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-16 UTC.
