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

- arrow\_back Performance
  - [Overview](/best-practices/performance)
  - Loading Performance
  - [Lazy-loaded routes](/best-practices/performance/lazy-loaded-routes)
  - [Deferred loading with @defer](/best-practices/performance/defer)
  - [Image optimization](/best-practices/performance/image-optimization)
  - [Server-side rendering](/best-practices/performance/ssr)
  - Runtime Performance
  - [Overview](/best-practices/runtime-performance)
  - [Zoneless](/guide/zoneless)
  - [Slow computations](/best-practices/slow-computations)
  - [Skipping component subtrees](/best-practices/skipping-subtrees)
  - [Zone pollution](/best-practices/zone-pollution)
  - [Chrome DevTools profiling](/best-practices/profiling-with-chrome-devtools)

arrow\_upward\_alt Back to the top

## [Why use Zoneless?](#why-use-zoneless)

The main advantages to removing ZoneJS as a dependency are:

- **Improved performance**: ZoneJS uses DOM events and async tasks as indicators of when application state *might* have updated and subsequently triggers application synchronization to run change detection on the application's views. ZoneJS does not have any insight into whether application state actually changed and so this synchronization is triggered more frequently than necessary.
- **Improved Core Web Vitals**: ZoneJS brings a fair amount of overhead, both in payload size and in startup time cost.
- **Improved debugging experience**: ZoneJS makes debugging code more difficult. Stack traces are harder to understand with ZoneJS. It's also difficult to understand when code breaks as a result of being outside the Angular Zone.
- **Better ecosystem compatibility**: ZoneJS works by patching browser APIs but does not automatically have patches for every new browser API. Some APIs cannot be patched effectively, such as `async`/`await`, and have to be downleveled to work with ZoneJS. Sometimes libraries in the ecosystem are also incompatible with the way ZoneJS patches the native APIs. Removing ZoneJS as a dependency ensures better long-term compatibility by removing a source of complexity, monkey patching, and ongoing maintenance.

## [Enabling Zoneless in an application](#enabling-zoneless-in-an-application)

Zoneless is the default in Angular v21+ so you do not need to do anything to enable it. You should verify that [`provideZoneChangeDetection`](/api/core/provideZoneChangeDetection) is not used anywhere to override the default configuration.

If you are using Angular v20, enable zoneless change detection by adding [`provideZonelessChangeDetection()`](/api/core/provideZonelessChangeDetection) at bootstrap:

### standalone bootstrap

```
bootstrapApplication(MyApp, {providers: [provideZonelessChangeDetection()]});
```

### NgModule bootstrap

```
platformBrowser().bootstrapModule(AppModule);@NgModule({  providers: [provideZonelessChangeDetection()],})export class AppModule {}
```

## [Removing ZoneJS](#removing-zonejs)

Zoneless applications should remove ZoneJS entirely from the build to reduce bundle size. ZoneJS is typically loaded via the `polyfills` option in `angular.json`, both in the `build` and `test` targets. Remove `zone.js` and `zone.js/testing` from both to remove it from the build. Projects which use an explicit `polyfills.ts` file should remove `import 'zone.js';` and `import 'zone.js/testing';` from the file.

After removing ZoneJS from the build, there is no longer a need for a `zone.js` dependency either and the package can be removed entirely:

```
npm uninstall zone.js
```

## [Requirements for Zoneless compatibility](#requirements-for-zoneless-compatibility)

Angular relies on notifications from core APIs in order to determine when to run change detection and on which views. These notifications include:

- [`ChangeDetectorRef.markForCheck`](/api/core/ChangeDetectorRef#markForCheck) (called automatically by [`AsyncPipe`](/api/common/AsyncPipe))
- [`ComponentRef.setInput`](/api/core/ComponentRef#setInput)
- Updating a signal that's read in a template
- Bound host or template listeners callbacks
- Attaching a view that was marked dirty by one of the above

### [`OnPush`-compatible components](#onpush-compatible-components)

One way to ensure that a component is using the correct notification mechanisms from above is to use [ChangeDetectionStrategy.OnPush](/best-practices/skipping-subtrees#using-onpush).

The `OnPush` change detection strategy is not required, but it is a recommended step towards zoneless compatibility for application components. It is not always possible for library components to use [`ChangeDetectionStrategy.OnPush`](/api/core/ChangeDetectionStrategy#OnPush). When a library component is a host for user-components which might use [`ChangeDetectionStrategy.Eager`](/api/core/ChangeDetectionStrategy#Eager)/`Default`, it cannot use `OnPush` because that would prevent the child component from being refreshed if it is not `OnPush` compatible and relies on ZoneJS to trigger change detection. Components can use the `Default` strategy as long as they notify Angular when change detection needs to run (calling `markForCheck`, using signals, [`AsyncPipe`](/api/common/AsyncPipe), etc.). Being a host for a user component means using an API such as [`ViewContainerRef.createComponent`](/api/core/ViewContainerRef#createComponent) and not just hosting a portion of a template from a user component (i.e. content projection or using a template ref input).

### [Remove `NgZone.onMicrotaskEmpty`, `NgZone.onUnstable`, `NgZone.isStable`, or `NgZone.onStable`](#remove-ngzoneonmicrotaskempty-ngzoneonunstable-ngzoneisstable-or-ngzoneonstable)

Applications and libraries need to remove uses of [`NgZone.onMicrotaskEmpty`](/api/core/NgZone#onMicrotaskEmpty), [`NgZone.onUnstable`](/api/core/NgZone#onUnstable) and [`NgZone.onStable`](/api/core/NgZone#onStable). These observables will never emit when an Application enables zoneless change detection. Similarly, [`NgZone.isStable`](/api/core/NgZone#isStable) will always be `true` and should not be used as a condition for code execution.

The [`NgZone.onMicrotaskEmpty`](/api/core/NgZone#onMicrotaskEmpty) and [`NgZone.onStable`](/api/core/NgZone#onStable) observables are most often used to wait for Angular to complete change detection before performing a task. Instead, these can be replaced by [`afterNextRender`](/api/core/afterNextRender) if they need to wait for a single change detection or [`afterEveryRender`](/api/core/afterEveryRender) if there is some condition that might span several change detection rounds. In other cases, these observables were used because they happened to be familiar and have similar timing to what was needed. More straightforward or direct DOM APIs can be used instead, such as `MutationObserver` when code needs to wait for certain DOM state (rather than waiting for it indirectly through Angular's render hooks).

### NgZone.run and NgZone.runOutsideAngular are compatible with Zoneless

[`NgZone.run`](/api/core/NgZone#run) and [`NgZone.runOutsideAngular`](/api/core/NgZone#runOutsideAngular) do not need to be removed in order for code to be compatible with Zoneless applications. In fact, removing these calls can lead to performance regressions for libraries that are used in applications that still rely on ZoneJS.

### [`PendingTasks` for Server Side Rendering (SSR)](#pendingtasks-for-server-side-rendering-ssr)

If you are using SSR with Angular, you may know that it relies on ZoneJS to help determine when the application is "stable" and can be serialized. If there are asynchronous tasks that should prevent serialization, an application not using ZoneJS must make Angular aware of these with the [PendingTasks](/api/core/PendingTasks) service. Serialization will wait for the first moment that all pending tasks have been removed.

The two most straightforward uses of pending tasks are the `run` method:

```
const taskService = inject(PendingTasks);taskService.run(async () => {  const someResult = await doSomeWorkThatNeedsToBeRendered();  this.someState.set(someResult);});
```

For more complicated use-cases, you can manually add and remove a pending task:

```
const taskService = inject(PendingTasks);const taskCleanup = taskService.add();try {  await doSomeWorkThatNeedsToBeRendered();} catch {  // handle error} finally {  taskCleanup();}
```

In addition, the [pendingUntilEvent](/api/core/rxjs-interop/pendingUntilEvent#) helper in `rxjs-interop` ensures the application remains unstable until the observable emits, completes, errors, or is unsubscribed.

```
readonly myObservableState = someObservable.pipe(pendingUntilEvent());
```

The framework uses this service internally as well to prevent serialization until asynchronous tasks are complete. These include, but are not limited to, an ongoing Router navigation and an incomplete [`HttpClient`](/api/common/http/HttpClient) request.

### [Reactive forms in zoneless applications](#reactive-forms-in-zoneless-applications)

Reactive forms model updates (`setValue`, `patchValue`, [`FormArray.push`](/api/forms/FormArray#push), and similar APIs) update form state and emit forms observables, but they do not automatically schedule component change detection.

If a template depends on reactive forms state, connect forms observables to a change-detection notification (for example [`ChangeDetectorRef.markForCheck()`](/api/core/ChangeDetectorRef#markForCheck)), or reflect the data through signals consumed by the template.

## [Testing and Debugging](#testing-and-debugging)

### [Using Zoneless in `TestBed`](#using-zoneless-in-testbed)

[`TestBed`](/api/core/testing/TestBed) uses Zone-based change detection by default when `zone.js` is loaded via the `polyfills`.

If `zone.js` is not present, [`TestBed`](/api/core/testing/TestBed) runs zoneless by default. To force zoneless mode when `zone.js` is loaded, add [`provideZonelessChangeDetection()`](/api/core/provideZonelessChangeDetection):

```
TestBed.configureTestingModule({  // Optional: include the provider to force the testing environment  // uses the same zoneless behavior as a zoneless application.  providers: [provideZonelessChangeDetection()],});const fixture = TestBed.createComponent(MyComponent);await fixture.whenStable();
```

To ensure tests have the most similar behavior to production code, avoid using `fixture.detectChanges()` when possible. This forces change detection to run when Angular might otherwise have not scheduled change detection. Tests should ensure these notifications are happening and allow Angular to handle when to synchronize state rather than manually forcing it to happen in the test.

For existing test suites, using `fixture.detectChanges()` is a common pattern and it is likely not worth the effort of converting these to `await fixture.whenStable()`. [`TestBed`](/api/core/testing/TestBed) will still enforce that the fixture's component is `OnPush` compatible and throws `ExpressionChangedAfterItHasBeenCheckedError` if it finds that template values were updated without a change notification (i.e. `fixture.componentInstance.someValue = 'newValue';`). If the component is used in production, this issue should be addressed by updating the component to use signals for state or call [`ChangeDetectorRef.markForCheck()`](/api/core/ChangeDetectorRef#markForCheck). If the component is only used as a test wrapper and never used in an application, it is acceptable to use `fixture.changeDetectorRef.markForCheck()`.

### [Debug-mode check to ensure updates are detected](#debug-mode-check-to-ensure-updates-are-detected)

Angular also provides an additional tool to help verify that an application is making updates to state in a zoneless-compatible way. `provideCheckNoChangesConfig({exhaustive: true, interval: <milliseconds>})` can be used to periodically check to ensure that no bindings have been updated without a notification. Angular throws `ExpressionChangedAfterItHasBeenCheckedError` if there is an updated binding that would not have refreshed by the zoneless change detection.
