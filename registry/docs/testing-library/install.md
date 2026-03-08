-   npm
-   Yarn

```
npm install --save-dev @testing-library/user-event
```

```
yarn add --dev @testing-library/user-event
```

Note that `@testing-library/user-event` requires `@testing-library/dom`.

If you use one of the [framework wrappers](/docs/dom-testing-library/install#wrappers), it is important that `@testing-library/dom` is resolved to the same installation required by the framework wrapper of your choice.  
Usually this means that if you use one of the framework wrappers, you should not add `@testing-library/dom` to your project dependencies.
