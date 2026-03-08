## Props

To accept props in your feature, type them as a generic.

Server Feature:

```ts
createServerFeature<UnSanitizedProps, SanitizedProps, UnSanitizedClientProps>({
  //...
})
```

Client Feature:

```ts
createClientFeature<UnSanitizedClientProps, SanitizedClientProps>({
  //...
})
```

The unSanitized props are what the user will pass to the feature when they call its provider function and add it to their editor config. You then have an option to sanitize those props.
To sanitize those in the server feature, you can pass a function to `feature` instead of an object:

```ts
createServerFeature<UnSanitizedProps, SanitizedProps, UnSanitizedClientProps>({
  //...
  feature: async ({
    config,
    isRoot,
    props,
    resolvedFeatures,
    unSanitizedEditorConfig,
    featureProviderMap,
  }) => {
    const sanitizedProps = doSomethingWithProps(props)

    return {
      sanitizedServerFeatureProps: sanitizedProps,
      //Actual server feature here...
    }
  },
})
```

Keep in mind that any sanitized props then have to be returned in the `sanitizedServerFeatureProps` property.

In the client feature, it works similarly:

```ts
createClientFeature<UnSanitizedClientProps, SanitizedClientProps>(
  ({
    clientFunctions,
    featureProviderMap,
    props,
    resolvedFeatures,
    unSanitizedEditorConfig,
  }) => {
    const sanitizedProps = doSomethingWithProps(props)
    return {
      sanitizedClientFeatureProps: sanitizedProps,
      //Actual client feature here...
    }
  },
)
```

### Bringing props from the server to the client

By default, the client feature will never receive any props from the server feature. In order to pass props from the server to the client, you can need to return those props in the server feature:

```ts
type UnSanitizedClientProps = {
  test: string
}

createServerFeature<UnSanitizedProps, SanitizedProps, UnSanitizedClientProps>({
  //...
  feature: {
    clientFeatureProps: {
      test: 'myValue',
    },
  },
})
```

The reason the client feature does not have the same props available as the server by default is because all client props need to be serializable. You can totally accept things like functions or Maps as props in your server feature, but you will not be able to send those to the client. In the end, those props are sent from the server to the client over the network, so they need to be serializable.

## More information

Have a look at the [features we've already built](https://github.com/payloadcms/payload/tree/main/packages/richtext-lexical/src/features) - understanding how they work will help you understand how to create your own. There is no difference between the features included by default and the ones you create yourself - since those features are all isolated from the "core", you have access to the same APIs, whether the feature is part of Payload or not!
