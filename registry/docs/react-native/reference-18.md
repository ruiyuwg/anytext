# Reference

## Props[​](#props "Direct link to Props")

### `backfaceVisibility`[​](#backfacevisibility "Direct link to backfacevisibility")

The property defines whether or not the back face of a rotated image should be visible.

| Type                          | Default     |
| ----------------------------- | ----------- |
| enum(`'visible'`, `'hidden'`) | `'visible'` |

***

### `backgroundColor`[​](#backgroundcolor "Direct link to backgroundcolor")

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `borderBottomLeftRadius`[​](#borderbottomleftradius "Direct link to borderbottomleftradius")

| Type   |
| ------ |
| number |

***

### `borderBottomRightRadius`[​](#borderbottomrightradius "Direct link to borderbottomrightradius")

| Type   |
| ------ |
| number |

***

### `borderColor`[​](#bordercolor "Direct link to bordercolor")

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `borderRadius`[​](#borderradius "Direct link to borderradius")

| Type   |
| ------ |
| number |

***

### `borderTopLeftRadius`[​](#bordertopleftradius "Direct link to bordertopleftradius")

| Type   |
| ------ |
| number |

***

### `borderTopRightRadius`[​](#bordertoprightradius "Direct link to bordertoprightradius")

| Type   |
| ------ |
| number |

***

### `borderWidth`[​](#borderwidth "Direct link to borderwidth")

| Type   |
| ------ |
| number |

***

### `opacity`[​](#opacity "Direct link to opacity")

Set an opacity value for the image. The number should be in the range from `0.0` to `1.0`.

| Type   | Default |
| ------ | ------- |
| number | `1.0`   |

***

### `overflow`[​](#overflow "Direct link to overflow")

| Type                          | Default     |
| ----------------------------- | ----------- |
| enum(`'visible'`, `'hidden'`) | `'visible'` |

***

### `overlayColor`Android[​](#overlaycolor-android "Direct link to overlaycolor-android")

When the image has rounded corners, specifying an overlayColor will cause the remaining space in the corners to be filled with a solid color. This is useful in cases which are not supported by the Android implementation of rounded corners:

- Certain resize modes, such as `'contain'`
- Animated GIFs

A typical way to use this prop is with images displayed on a solid background and setting the `overlayColor` to the same color as the background.

For details of how this works under the hood, see [Fresco documentation](https://frescolib.org/docs/rounded-corners-and-circles.html).

| Type   |
| ------ |
| string |

***

### `resizeMode`[​](#resizemode "Direct link to resizemode")

Determines how to resize the image when the frame doesn't match the raw image dimensions. Defaults to `cover`.

- `cover`: Scale the image uniformly (maintain the image's aspect ratio) so that:

  - Both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding)
  - At least one dimension of the scaled image will be equal to the corresponding dimension of the view (minus padding)

- `contain`: Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).

- `stretch`: Scale width and height independently, This may change the aspect ratio of the src.

- `repeat`: Repeat the image to cover the frame of the view. The image will keep its size and aspect ratio, unless it is larger than the view, in which case it will be scaled down uniformly so that it is contained in the view.

- `center`: Center the image in the view along both dimensions. If the image is larger than the view, scale it down uniformly so that it is contained in the view.

| Type                                                              | Default   |
| ----------------------------------------------------------------- | --------- |
| enum(`'cover'`, `'contain'`, `'stretch'`, `'repeat'`, `'center'`) | `'cover'` |

***

### `objectFit`[​](#objectfit "Direct link to objectfit")

Determines how to resize the image when the frame doesn't match the raw image dimensions.

| Type                                                   | Default   |
| ------------------------------------------------------ | --------- |
| enum(`'cover'`, `'contain'`, `'fill'`, `'scale-down'`) | `'cover'` |

***

### `tintColor`[​](#tintcolor "Direct link to tintcolor")

Changes the color of all the non-transparent pixels to the tintColor.

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

# ImageBackground

A common feature request from developers familiar with the web is `background-image`. To handle this use case, you can use the `<ImageBackground>` component, which has the same props as `<Image>`, and add whatever children to it you would like to layer on top of it.

You might not want to use `<ImageBackground>` in some cases, since the implementation is basic. Refer to `<ImageBackground>`'s [source code](https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Image/ImageBackground.js) for more insight, and create your own custom component when needed.

Note that you must specify some width and height style attributes.

## Example[​](#example "Direct link to Example")

***

# Reference

## Props[​](#props "Direct link to Props")

### [Image Props](/docs/image.md#props)[​](#image-props "Direct link to image-props")

Inherits [Image Props](/docs/image.md#props).

***

### `imageStyle`[​](#imagestyle "Direct link to imagestyle")

| Type                                      |
| ----------------------------------------- |
| [Image Style](/docs/image-style-props.md) |

***

### `imageRef`[​](#imageref "Direct link to imageref")

A ref setter that will be assigned the [element node](/docs/element-nodes.md) of the inner `Image` component when mounted.

***

### `style`[​](#style "Direct link to style")

| Type                                    |
| --------------------------------------- |
| [View Style](/docs/view-style-props.md) |

***

# ❌ ImagePickerIOS

Removed from React Native

Use one of the [community packages](https://reactnative.directory/?search=image+picker) instead.

***
