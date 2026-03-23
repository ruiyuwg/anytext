-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application hosting](https://docs.cloud.google.com/docs/application-hosting)
-   [App Engine](https://docs.cloud.google.com/appengine/docs)
-   [Standard environment](https://docs.cloud.google.com/appengine/docs/standard)
-   [Reference](https://docs.cloud.google.com/appengine/docs/standard/apis)

Send feedback

# appengine-apis overview (5.0.0) Stay organized with collections Save and categorize content based on your preferences.

## [com.google.appengine.api](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api)

Provides facilities for server lifecycle management, threading and namespaces/multitenancy. These facilities, along with the services defined in subpackages, make up the Google App Engine API. See Also: [Multitenancy and the Namespaces Java API in the _Google App Engine Developer's Guide_](http://cloud.google.com/appengine/docs/java/multitenancy/).

## [com.google.appengine.api.appidentity](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.appidentity)

Provides a service to sign arbitrary byte arrays using an internally-generated, rotated private key. See Also: [com.google.appengine.api.appidentity.AppIdentityService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.appidentity.AppIdentityService), [The App Identity Java API in the _Google App Engine Developer's Guide_](http://cloud.google.com/appengine/docs/java/appidentity/).

## [com.google.appengine.api.backends](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.backends)

Provides access to long-running, addressable servers. See Also: [com.google.appengine.api.backends.BackendService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.backends.BackendService), [Backends (Java) in the _Google App Engine Developer's Guide_](http://cloud.google.com/appengine/docs/java/backends/).

## [com.google.appengine.api.blobstore](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore)

Provides management and persistent storage of large, immutable byte arrays. This allows applications to accept, save, and later serve files of any size. See Also: [com.google.appengine.api.blobstore.BlobstoreService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreService), [The Blobstore Java API in the _Google App Engine Developer's Guide_](http://cloud.google.com/appengine/docs/java/blobstore/).

## [com.google.appengine.api.blobstore.jakarta](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.jakarta)

Provides management and persistent storage of large, immutable byte arrays. This allows applications to accept, save, and later serve files of any size. See Also: [com.google.appengine.api.blobstore.BlobstoreService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreService), [The Blobstore Java API in the _Google App Engine Developer's Guide_](http://cloud.google.com/appengine/docs/java/blobstore/).

## [com.google.appengine.api.capabilities](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.capabilities)

Provides status information about the services available via the GAE APIs. Status details include current availability, scheduled downtime and outages. See Also: [com.google.appengine.api.capabilities.CapabilitiesService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.capabilities.CapabilitiesService), [The Capabilities Java API in the _Google App Engine Developer's Guide_](http://cloud.google.com/appengine/docs/java/capabilities/).

## [com.google.appengine.api.datastore](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.datastore)

Provides persistent storage, also accessible via [JDO](http://www.oracle.com/technetwork/java/index-jsp-135919.html) or [JPA](http://www.oracle.com/technetwork/articles/javaee/jpa-137156.html) interfaces. It provides redundant storage for fault-tolerance.

A common pattern of usage is:

 ```

 // Get a handle on the datastore itself
 DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

 // Lookup data by known key name
 Entity userEntity = datastore.get(KeyFactory.createKey("UserInfo", email));

 // Or perform a query
 Query query = new Query("Task");
 query.addFilter("dueDate", Query.FilterOperator.LESS_THAN, today);
 for (Entity taskEntity : datastore.prepare(query).asIterable()) {
   if ("done".equals(taskEntity.getProperty("status"))) {
     datastore.delete(taskEntity);
   } else {
     taskEntity.setProperty("status", "overdue");
     datastore.put(taskEntity);
   }
 }
 
```
 

This illustrates several basic points:

-   The actual datastore itself is accessed through a [com.google.appengine.api.datastore.DatastoreService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.datastore.DatastoreService) object, produced from a [com.google.appengine.api.datastore.DatastoreServiceFactory](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.datastore.DatastoreServiceFactory).
-   The unit of storage is the [com.google.appengine.api.datastore.Entity](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.datastore.Entity) object, which are of named kinds ("UserInfo" and "Task" above).
-   Entities have a [com.google.appengine.api.datastore.Key](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.datastore.Key) value, which can be created by a [com.google.appengine.api.datastore.KeyFactory](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.datastore.KeyFactory) to retrieve a specific known entity. If the key is not readily determined, then [com.google.appengine.api.datastore.Query](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.datastore.Query) objects can be used to retrieve one Entity, multiple as a list, [java.lang.Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html), or [java.util.Iterator](https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html), or to retrieve the count of matching entities.
-   Entities have named properties, the values of which may be basic types or collections of basic types. Richer objects, of course, may be stored if serialized as byte arrays, although that may prevent effective querying by those properties.
-   Entities may be associated in a tree structure; the [com.google.appengine.api.datastore.Query](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.datastore.Query) in the snippet above searches only for Task entities associated with a specific UserInfo entity, and then filters those for Tasks due before today.

In production, non-trivial queries cannot be performed until one or more indexes have been built to ensure that the individual queries can be processed efficiently. You can specify the set of indexes your application requires in a `WEB-INF/datastore-indexes.xml` file, or they can be generated automatically as you test your application in the Development Server. If a query requires an index that cannot be found, a [com.google.appengine.api.datastore.DatastoreNeedIndexException](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.datastore.DatastoreNeedIndexException) will be thrown at runtime.

Although Google App Engine allows many versions of your application to be accessible, there is only one datastore for your application, shared by all versions. Similarly, the set of indexes is shared by all application versions.

Application authors may also consider using either of the provided JDO or JPA interfaces to the datastore. See Also: [com.google.appengine.api.datastore.DatastoreService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.datastore.DatastoreService), [JPA API](http://www.oracle.com/technetwork/articles/javaee/jpa-137156.html), [JDO API](http://www.oracle.com/technetwork/java/index-jsp-135919.html), [The Datastore Java API in the Google App Engine Developers Guide](http://cloud.google.com/appengine/docs/java/datastore/)

## [com.google.appengine.api.images](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.images)

Provides facilities for the creation and manipulation of images. The starting point is the [com.google.appengine.api.images.ImagesServiceFactory](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.images.ImagesServiceFactory) class, which can produce the [com.google.appengine.api.images.ImagesService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.images.ImagesService), but also the basic [com.google.appengine.api.images.Image](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.images.Image) object and [com.google.appengine.api.images.Transform](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.images.Transform) classes. More information is available in the [on-line documentation](http://cloud.google.com/appengine/docs/java/images/).

Image data is represented as a `byte[]` of data, in any of the supported formats: JPEG, PNG, GIF (including animated GIF), BMP, TIFF, and ICO formats. The format can be accessed via the com.google.appengine.api.images.Image#getFormat() method. The image format may be converted during transformation.

Supported transformations include cropping, resizing, rotating in 90-degree increments, horizontal and vertical flips, and automated color enhancement. See Also: [The Images Java API in the _Google App Engine Developer's Guide_](http://cloud.google.com/appengine/docs/java/images/)., [com.google.appengine.api.images.ImagesService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.images.ImagesService)

## [com.google.appengine.api.log](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.log)

Provides access to request logs and application logs. See Also: [com.google.appengine.api.log.LogService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.log.LogService)

## [com.google.appengine.api.mail](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.mail)

Provides a service to send email messages on behalf of administrators or authenticated users, also accessible via a [JavaMail](http://www.oracle.com/technetwork/java/javamail/index.html) interface. Receiving messages is not supported via the JavaMail API but is supported via [an HTTP interface](http://cloud.google.com/appengine/docs/java/mail/receiving.html).

This low-level API is intended primarily for framework authors. For application developers we provide a custom `javax.mail.Transport` that allows the standard `javax.mail` interface to be used to send emails. No special configuration is required to send emails via this interface.

The MailService.Message class represents a message, including sender and recipient information, and possibly attachments as MailService.Attachment objects. These can be independently created via their respective constructors.

Sending a message requires a MailService object, created by the MailServiceFactory. Messages are sent asynchronously, so the `MailService` methods will always succeed immediately. Any errors in the mail message will be returned to the sender's address as "bounce" messages. See Also: [JavaMail API](http://www.oracle.com/technetwork/java/javamail/index.html), [com.google.appengine.api.mail.MailService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.mail.MailService), [The Mail Java API in the _Google App Engine Developer's Guide_](http://cloud.google.com/appengine/docs/java/mail/)

## [com.google.appengine.api.mail.jakarta](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.mail.jakarta)

Provides a service to send email messages on behalf of administrators or authenticated users, also accessible via a [JavaMail](http://www.oracle.com/technetwork/java/javamail/index.html) interface. Receiving messages is not supported via the JavaMail API but is supported via [an HTTP interface](http://cloud.google.com/appengine/docs/java/mail/receiving.html).

This low-level API is intended primarily for framework authors. For application developers we provide a custom `javax.mail.Transport` that allows the standard `javax.mail` interface to be used to send emails. No special configuration is required to send emails via this interface.

The [com.google.appengine.api.mail.MailService.Message](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.mail.MailService.Message) class represents a message, including sender and recipient information, and possibly attachments as [com.google.appengine.api.mail.MailService.Attachment](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.mail.MailService.Attachment) objects. These can be independently created via their respective constructors.

Sending a message requires a [com.google.appengine.api.mail.MailService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.mail.MailService) object, created by the [com.google.appengine.api.mail.MailServiceFactory](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.mail.MailServiceFactory). Messages are sent asynchronously, so the `MailService` methods will always succeed immediately. Any errors in the mail message will be returned to the sender's address as "bounce" messages. See Also: [JavaMail API](http://www.oracle.com/technetwork/java/javamail/index.html), [com.google.appengine.api.mail.MailService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.mail.MailService), [The Mail Java API in the _Google App Engine Developer's Guide_](http://cloud.google.com/appengine/docs/java/mail/)

## [com.google.appengine.api.mail.stdimpl](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.mail.stdimpl)

## [com.google.appengine.api.memcache](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.memcache)

Provides fast but unreliable data storage, also accessible via a [JCache](http://jcp.org/en/jsr/detail?id=107) interface. Objects may be stored in the cache with an explicit expiration time, but may also be evicted before that expiration to make room for newer, more active entries.

The cache is accessed via a MemcacheService object, obtained from the MemcacheServiceFactory. It offers the cache as a map from key Object to value Object.

In the Development Server, the system property `memcache.maxsize` can be set to limit the available cache, taking values like "100M" (the default), "10K", or "768" (bytes).

Because the cache offers best-effort data storage, by default most errors are treated as a cache miss. More explicit error handling can be installed via MemcacheService#setErrorHandler(ErrorHandler). See Also: [com.google.appengine.api.memcache.MemcacheService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.memcache.MemcacheService), [The Memcache Java API in the _Google App Engine Developer's Guide_](http://cloud.google.com/appengine/docs/java/memcache/)., [JCache API](http://jcp.org/en/jsr/detail?id=107)

## [com.google.appengine.api.modules](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.modules)

Utility functions for working with App Engine services (previously known as modules).

A common pattern of usage is:

// Get a handle of the ModulesService. ModulesService modules = ModulesServiceFactory.getModulesService();

// Lookup the versions associated with the current service/module. for (String version : modules.getVersions(modules.getCurrentModule())) { // Process version. }

See Also: [com.google.appengine.api.modules.ModulesService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.modules.ModulesService)

## [com.google.appengine.api.oauth](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.oauth)

Provides a method for clients to access server resources on behalf of a resource owner, as well as a process for end-users to authorize third-party access to their server resources without sharing their credentials. See Also: [com.google.appengine.api.oauth.OAuthService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.oauth.OAuthService), [The OAuth Java API in the _Google App Engine Developer's Guide_](http://cloud.google.com/appengine/docs/java/oauth/).

## [com.google.appengine.api.quota](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.quota)

Provides measurement of API and CPU usage during requests. See Also: [com.google.appengine.api.quota.QuotaService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.quota.QuotaService), [Quotas in the _Google App Engine Developer's Guide_](http://cloud.google.com/appengine/docs/quotas.html).

## [com.google.appengine.api.search](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.search)

Provides a service for indexing documents and retrieving them using search queries. This is a low-level API that allows users to directly create Documents which can be indexed and retrieved with the help of Index.

A Document is a collection of Fields. Each field is a named and typed value. A document is uniquely identified by its ID and may contain zero or more fields. A field with a given name can have multiple occurrences. Once documents are put into the Index, they can be retrieved via search queries. Typically, a program creates an index. This operation does nothing if the index was already created. Next, a number of documents are inserted into the index. Finally, index is searched and matching documents, or their snippets are returned to the user.

 ```

 public List<ScoredDocument> indexAndSearch(
     String query, Document... documents) {
     SearchService searchService = SearchServiceFactory.getSearchService();
     Index index = searchService.getIndex(
         IndexSpec.newBuilder().setIndexName("indexName"));
     for (Document document : documents) {
       PutResponse response = index.put(document);
       assert response.getResults().get(0).getCode().equals(StatusCode.OK);
     }
     Results<ScoredDocument> results =
         index.search(Query.newBuilder().build(query));
     List<ScoredDocument> matched = new ArrayList<ScoredDocument>(
         results.getNumberReturned());
     for (ScoredDocument result : results) {
       matched.add(result);
     }
     return matched;
 }
 
```
 

See Also: [com.google.appengine.api.search.SearchServiceFactory](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.search.SearchServiceFactory)

## [com.google.appengine.api.search.checkers](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.search.checkers)

## [com.google.appengine.api.search.query](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.search.query\(package\))

## [com.google.appengine.api.taskqueue](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.taskqueue)

Provides a mechanism to perform work initiated by a user request, outside of that request. See Also: [com.google.appengine.api.taskqueue.Queue](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.taskqueue.Queue), [The Task Queue Java API in the _Google App Engine Developer's Guide_](http://cloud.google.com/appengine/docs/java/taskqueue/).

## [com.google.appengine.api.taskqueue.jakarta](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.taskqueue.jakarta)

Provides a mechanism to perform work initiated by a user request, outside of that request. See Also: [com.google.appengine.api.taskqueue.Queue](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.taskqueue.Queue), [The Task Queue Java API in the _Google App Engine Developer's Guide_](http://cloud.google.com/appengine/docs/java/taskqueue/).

## [com.google.appengine.api.urlfetch](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.urlfetch)

Provides a service to make HTTP/S requests of other servers on the internet. The java.net.URLConnection class can also be used to do this, and in App Engine is implemented by using URL Fetch. Chunked and hanging requests, however, are not supported.

As is typical for App Engine services, the URLFetchServiceFactory returns a URLFetchService, which is used to actually make requests of the service. See Also: [The URL Fetch Java API in the _Google App Engine Developer's Guide_](http://cloud.google.com/appengine/docs/java/urlfetch/)., [com.google.appengine.api.urlfetch.URLFetchService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.urlfetch.URLFetchService)

## [com.google.appengine.api.users](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.users)

Provides facilities to check if a user has authenticated, retrieve their email address, and check if they are an administrator for this application. It can also be used to construct a URL for users to login or logout.

As an example, your application might, in a JSP file, have code like this:

 ```

 <%
   UserService userService = UserServiceFactory.getUserService();
   if (!userService.isUserLoggedIn()) {
 %>
    Please {@code ">log in>}
 <% } else { %>
    Welcome, <%= userService.getCurrentUser().getNickname(); %>!
      {@code (">log out>)}
 <%
   }
 %>>
```

See Also: [com.google.appengine.api.users.UserService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.users.UserService), [The Users Java API in the _Google App Engine Developer's Guide_](http://cloud.google.com/appengine/docs/java/users/).

## [com.google.appengine.api.utils](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.utils)

Provides common utility classes.

## [com.google.appengine.api.utils.jakarta](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.utils.jakarta)

## [com.google.appengine.setup](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.setup)

## [com.google.appengine.setup.timer](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.setup.timer)

## [com.google.appengine.setup.utils.http](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.setup.utils.http)

## [com.google.appengine.spi](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.spi)

Support for alternate implementations of Google App Engine services. **_This package is not intended for use by application code._**

If, for example, vendor X wanted to provide an alternate implementation of the DatastoreService, they would have to provide an implementation of [com.google.appengine.api.datastore.IDatastoreServiceFactory](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.datastore.IDatastoreServiceFactory) that returns their implementation for [com.google.appengine.api.datastore.DatastoreService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.datastore.DatastoreService).

Factory implementations are acquired using a [FactoryProvider](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.spi.FactoryProvider) registered with [ServiceFactoryFactory](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.spi.ServiceFactoryFactory). These providers are typically discovered using java.util.ServiceLoader; see [com.google.appengine.spi.ServiceFactoryFactory](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.spi.ServiceFactoryFactory) for details.

This package includes the utility ([ServiceProvider](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.spi.ServiceProvider) for inserting the appropriate "service" entries into a jar file.

## [com.google.appengine.tools.compilation](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.tools.compilation)

## [com.google.apphosting.api](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.apphosting.api)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-02-28 UTC.
