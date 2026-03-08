Skip to main content

menu

menuDocs

- Introduction

  - [What is Angular?](/overview)
  - [Installation](/installation)
  - Essentials
  - [Start coding! 🚀](/tutorials/learn-angular)

- In-depth Guides

  - Signals Updated
  - Components
  - Templates
  - Directives
  - Dependency Injection Updated
  - Routing Updated
  - Forms Updated
  - HTTP Client
  - Server-side & hybrid-rendering
  - Testing
  - Angular Aria New
  - Internationalization
  - Animations Updated
  - [Drag and drop](/guide/drag-drop)

- Build with AI New

  - [Get Started](/ai)
  - [LLM prompts and AI IDE setup](/ai/develop-with-ai)
  - [Design Patterns](/ai/design-patterns)
  - [Angular CLI MCP Server setup](/ai/mcp)
  - [Angular AI Tutor](/ai/ai-tutor)

- Developer Tools

  - Angular CLI
  - Libraries
  - DevTools
  - [Language Service](/tools/language-service)

- Best Practices

  - [Style Guide Updated](/style-guide)
  - [Security](/best-practices/security)
  - [Accessibility](/best-practices/a11y)
  - [Unhandled errors in Angular](/best-practices/error-handling)
  - Performance
  - [Keeping up-to-date](/update)

- Developer Events

  - [Angular v21 Release New](/events/v21)

- Extended Ecosystem

  - [NgModules](/guide/ngmodules/overview)
  - Legacy Animations
  - Using RxJS with Angular
  - Service Workers & PWAs
  - [Web workers](/ecosystem/web-workers)
  - [Custom build pipeline](/ecosystem/custom-build-pipeline)
  - [Tailwind New](/guide/tailwind)
  - [Angular Fire](https://github.com/angular/angularfire#readme)
  - [Google Maps](https://github.com/angular/components/tree/main/src/google-maps#readme)
  - [Google Pay](https://github.com/google-pay/google-pay-button#angular)
  - [YouTube player](https://github.com/angular/components/blob/main/src/youtube-player/README.md)
  - [Angular CDK](https://material.angular.dev/cdk/categories)
  - [Angular Material](https://material.angular.dev/)

- arrow\_back HTTP Client
  - [Overview](/guide/http)
  - [Setting up HttpClient](/guide/http/setup)
  - [Making requests](/guide/http/making-requests)
  - [Reactive data fetching with httpResource](/guide/http/http-resource)
  - [Intercepting requests and responses](/guide/http/interceptors)
  - [Testing](/guide/http/testing)

As for any external dependency, you must mock the HTTP backend so your tests can simulate interaction with a remote server. The `@angular/common/http/testing` library provides tools to capture requests made by the application, make assertions about them, and mock the responses to emulate your backend's behavior.

The testing library is designed for a pattern in which the app executes code and makes requests first. The test then expects that certain requests have or have not been made, performs assertions against those requests, and finally provides responses by "flushing" each expected request.

At the end, tests can verify that the app made no unexpected requests.

arrow\_upward\_alt Back to the top

## [Setup for testing](#setup-for-testing)

To begin testing usage of [`HttpClient`](/api/common/http/HttpClient), configure [`TestBed`](/api/core/testing/TestBed) and include [`provideHttpClient()`](/api/common/http/provideHttpClient) and [`provideHttpClientTesting()`](/api/common/http/testing/provideHttpClientTesting) in your test's setup. This configures [`HttpClient`](/api/common/http/HttpClient) to use a test backend instead of the real network. It also provides [`HttpTestingController`](/api/common/http/testing/HttpTestingController), which you'll use to interact with the test backend, set expectations about which requests have been made, and flush responses to those requests. [`HttpTestingController`](/api/common/http/testing/HttpTestingController) can be injected from [`TestBed`](/api/core/testing/TestBed) once configured.

**IMPORTANT:** Keep in mind to provide [`provideHttpClient()`](/api/common/http/provideHttpClient) **before** [`provideHttpClientTesting()`](/api/common/http/testing/provideHttpClientTesting), as [`provideHttpClientTesting()`](/api/common/http/testing/provideHttpClientTesting) will overwrite parts of [`provideHttpClient()`](/api/common/http/provideHttpClient). Doing it the other way around can potentially break your tests.

```
TestBed.configureTestingModule({  providers: [    // ... other test providers    provideHttpClient(),    provideHttpClientTesting(),  ],});const httpTesting = TestBed.inject(HttpTestingController);
```

Now when your tests make requests, they will hit the testing backend instead of the normal one. You can use `httpTesting` to make assertions about those requests.

## [Expecting and answering requests](#expecting-and-answering-requests)

For example, you can write a test that expects a GET request to occur and provides a mock response:

```
TestBed.configureTestingModule({  providers: [ConfigService, provideHttpClient(), provideHttpClientTesting()],});const httpTesting = TestBed.inject(HttpTestingController);// Load `ConfigService` and request the current configuration.const service = TestBed.inject(ConfigService);const config$ = service.getConfig<Config>();// `firstValueFrom` subscribes to the `Observable`, which makes the HTTP request,// and creates a `Promise` of the response.const configPromise = firstValueFrom(config$);// At this point, the request is pending, and we can assert it was made// via the `HttpTestingController`:const req = httpTesting.expectOne('/api/config', 'Request to load the configuration');// We can assert various properties of the request if desired.expect(req.request.method).toBe('GET');// Flushing the request causes it to complete, delivering the result.req.flush(DEFAULT_CONFIG);// We can then assert that the response was successfully delivered by the `ConfigService`:expect(await configPromise).toEqual(DEFAULT_CONFIG);// Finally, we can assert that no other requests were made.httpTesting.verify();
```

**NOTE:** `expectOne` will fail if the test has made more than one request which matches the given criteria.

As an alternative to asserting on `req.method`, you could instead use an expanded form of `expectOne` to also match the request method:

```
const req = httpTesting.expectOne(  {    method: 'GET',    url: '/api/config',  },  'Request to load the configuration',);
```

**HELPFUL:** The expectation APIs match against the full URL of requests, including any query parameters.

The last step, verifying that no requests remain outstanding, is common enough for you to move it into an `afterEach()` step:

```
afterEach(() => {  // Verify that none of the tests make any extra HTTP requests.  TestBed.inject(HttpTestingController).verify();});
```

## [Handling more than one request at once](#handling-more-than-one-request-at-once)

If you need to respond to duplicate requests in your test, use the `match()` API instead of `expectOne()`. It takes the same arguments but returns an array of matching requests. Once returned, these requests are removed from future matching and you are responsible for flushing and verifying them.

```
const allGetRequests = httpTesting.match({method: 'GET'});for (const req of allGetRequests) {  // Handle responding to each request.}
```

## [Advanced matching](#advanced-matching)

All matching functions accept a predicate function for custom matching logic:

```
// Look for one request that has a request body.const requestsWithBody = httpTesting.expectOne((req) => req.body !== null);
```

The `expectNone` function asserts that no requests match the given criteria.

```
// Assert that no mutation requests have been issued.httpTesting.expectNone((req) => req.method !== 'GET');
```

## [Testing error handling](#testing-error-handling)

You should test your app's responses when HTTP requests fail.

### [Backend errors](#backend-errors)

To test handling of backend errors (when the server returns a non-successful status code), flush requests with an error response that emulates what your backend would return when a request fails.

```
const req = httpTesting.expectOne('/api/config');req.flush('Failed!', {status: 500, statusText: 'Internal Server Error'});// Assert that the application successfully handled the backend error.
```

### [Network errors](#network-errors)

Requests can also fail due to network errors, which surface as `ProgressEvent` errors. These can be delivered with the `error()` method:

```
const req = httpTesting.expectOne('/api/config');req.error(new ProgressEvent('network error!'));// Assert that the application successfully handled the network error.
```

## [Testing an Interceptor](#testing-an-interceptor)

You should test that your interceptors work under the desired circumstances.

For example, an application may be required to add an authentication token generated by a service to each outgoing request. This behavior can be enforced with the use of an interceptor:

```
export function authInterceptor(  request: HttpRequest<unknown>,  next: HttpHandlerFn,): Observable<HttpEvent<unknown>> {  const authService = inject(AuthService);  const clonedRequest = request.clone({    headers: request.headers.append('X-Authentication-Token', authService.getAuthToken()),  });  return next(clonedRequest);}
```

The [`TestBed`](/api/core/testing/TestBed) configuration for this interceptor should rely on the [`withInterceptors`](/api/common/http/withInterceptors) feature.

```
TestBed.configureTestingModule({  providers: [    AuthService,    // Testing one interceptor at a time is recommended.    provideHttpClient(withInterceptors([authInterceptor])),    provideHttpClientTesting(),  ],});
```

The [`HttpTestingController`](/api/common/http/testing/HttpTestingController) can retrieve the request instance which can then be inspected to ensure that the request was modified.

```
const service = TestBed.inject(AuthService);const req = httpTesting.expectOne('/api/config');expect(req.request.headers.get('X-Authentication-Token')).toEqual(service.getAuthToken());
```

A similar interceptor could be implemented with class based interceptors:

```
@Injectable()export class AuthInterceptor implements HttpInterceptor {  private authService = inject(AuthService);  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {    const clonedRequest = request.clone({      headers: request.headers.append('X-Authentication-Token', this.authService.getAuthToken()),    });    return next.handle(clonedRequest);  }}
```

In order to test it, the [`TestBed`](/api/core/testing/TestBed) configuration should instead be:

```
TestBed.configureTestingModule({  providers: [    AuthService,    provideHttpClient(withInterceptorsFromDi()),    provideHttpClientTesting(),    // We rely on the HTTP_INTERCEPTORS token to register the AuthInterceptor as an HttpInterceptor    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},  ],});
```
