# Animated

The `Animated` library is designed to make animations fluid, powerful, and painless to build and maintain. `Animated` focuses on declarative relationships between inputs and outputs, configurable transforms in between, and `start`/`stop` methods to control time-based animation execution.

The core workflow for creating an animation is to create an `Animated.Value`, hook it up to one or more style attributes of an animated component, and then drive updates via animations using `Animated.timing()`.

note

Don't modify the animated value directly. You can use the [`useRef` Hook](https://react.dev/reference/react/useRef) to return a mutable ref object. This ref object's `current` property is initialized as the given argument and persists throughout the component lifecycle.

## Example[​](#example "Direct link to Example")

The following example contains a `View` which will fade in and fade out based on the animated value `fadeAnim`

Refer to the [Animations](/docs/animations.md#animated-api) guide to see additional examples of `Animated` in action.

## Overview[​](#overview "Direct link to Overview")

There are two value types you can use with `Animated`:

- [`Animated.Value()`](/docs/animated.md#value) for single values
- [`Animated.ValueXY()`](/docs/animated.md#valuexy) for vectors

`Animated.Value` can bind to style properties or other props, and can be interpolated as well. A single `Animated.Value` can drive any number of properties.

### Configuring animations[​](#configuring-animations "Direct link to Configuring animations")

`Animated` provides three types of animation types. Each animation type provides a particular animation curve that controls how your values animate from their initial value to the final value:

- [`Animated.decay()`](/docs/animated.md#decay) starts with an initial velocity and gradually slows to a stop.
- [`Animated.spring()`](/docs/animated.md#spring) provides a basic spring physics model.
- [`Animated.timing()`](/docs/animated.md#timing) animates a value over time using [easing functions](/docs/easing.md).

In most cases, you will be using `timing()`. By default, it uses a symmetric easeInOut curve that conveys the gradual acceleration of an object to full speed and concludes by gradually decelerating to a stop.

### Working with animations[​](#working-with-animations "Direct link to Working with animations")

Animations are started by calling `start()` on your animation. `start()` takes a completion callback that will be called when the animation is done. If the animation finished running normally, the completion callback will be invoked with `{finished: true}`. If the animation is done because `stop()` was called on it before it could finish (e.g. because it was interrupted by a gesture or another animation), then it will receive `{finished: false}`.

tsx

```
Animated.timing({}).start(({finished}) => {
  /* completion callback */
});
```

### Using the native driver[​](#using-the-native-driver "Direct link to Using the native driver")

By using the native driver, we send everything about the animation to native before starting the animation, allowing native code to perform the animation on the UI thread without having to go through the bridge on every frame. Once the animation has started, the JS thread can be blocked without affecting the animation.

You can use the native driver by specifying `useNativeDriver: true` in your animation configuration. See the [Animations](/docs/animations.md#using-the-native-driver) guide to learn more.

### Animatable components[​](#animatable-components "Direct link to Animatable components")

Only animatable components can be animated. These unique components do the magic of binding the animated values to the properties, and do targeted native updates to avoid the cost of the React render and reconciliation process on every frame. They also handle cleanup on unmount so they are safe by default.

- [`createAnimatedComponent()`](/docs/animated.md#createanimatedcomponent) can be used to make a component animatable.

`Animated` exports the following animatable components using the above wrapper:

- `Animated.Image`
- `Animated.ScrollView`
- `Animated.Text`
- `Animated.View`
- `Animated.FlatList`
- `Animated.SectionList`

### Composing animations[​](#composing-animations "Direct link to Composing animations")

Animations can also be combined in complex ways using composition functions:

- [`Animated.delay()`](/docs/animated.md#delay) starts an animation after a given delay.
- [`Animated.parallel()`](/docs/animated.md#parallel) starts a number of animations at the same time.
- [`Animated.sequence()`](/docs/animated.md#sequence) starts the animations in order, waiting for each to complete before starting the next.
- [`Animated.stagger()`](/docs/animated.md#stagger) starts animations in order and in parallel, but with successive delays.

Animations can also be chained together by setting the `toValue` of one animation to be another `Animated.Value`. See [Tracking dynamic values](/docs/animations.md#tracking-dynamic-values) in the Animations guide.

By default, if one animation is stopped or interrupted, then all other animations in the group are also stopped.

### Combining animated values[​](#combining-animated-values "Direct link to Combining animated values")

You can combine two animated values via addition, subtraction, multiplication, division, or modulo to make a new animated value:

- [`Animated.add()`](/docs/animated.md#add)
- [`Animated.subtract()`](/docs/animated.md#subtract)
- [`Animated.divide()`](/docs/animated.md#divide)
- [`Animated.modulo()`](/docs/animated.md#modulo)
- [`Animated.multiply()`](/docs/animated.md#multiply)

### Interpolation[​](#interpolation "Direct link to Interpolation")

The `interpolate()` function allows input ranges to map to different output ranges. By default, it will extrapolate the curve beyond the ranges given, but you can also have it clamp the output value. It uses linear interpolation by default but also supports easing functions.

- [`interpolate()`](/docs/animatedvalue.md#interpolate)

Read more about interpolation in the [Animation](/docs/animations.md#interpolation) guide.

### Handling gestures and other events[​](#handling-gestures-and-other-events "Direct link to Handling gestures and other events")

Gestures, like panning or scrolling, and other events can map directly to animated values using `Animated.event()`. This is done with a structured map syntax so that values can be extracted from complex event objects. The first level is an array to allow mapping across multiple args, and that array contains nested objects.

- [`Animated.event()`](/docs/animated.md#event)

For example, when working with horizontal scrolling gestures, you would do the following in order to map `event.nativeEvent.contentOffset.x` to `scrollX` (an `Animated.Value`):

tsx

```
 onScroll={Animated.event(
   // scrollX = e.nativeEvent.contentOffset.x
   [{nativeEvent: {
        contentOffset: {
          x: scrollX
        }
      }
    }]
 )}
```

***
