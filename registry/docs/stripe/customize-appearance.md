# Customize appearance

Customize your mobile integration with the Appearance API.

# iOS

> This is a iOS for when platform is ios. View the full page at https://docs.stripe.com/elements/appearance-api/mobile?platform=ios.

The [mobile Payment Element](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=mobile\&platform=ios) supports visual customization, which allows you to match the design of your app. The layout stays consistent, but you can modify colors, fonts, and more by using the [appearance](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Configuration.html#/s:6Stripe12PaymentSheetC13ConfigurationV10appearanceAC10AppearanceVvp) property on your [PaymentSheet.Configuration](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Configuration.html) object.

1. Start by customizing the [font](https://docs.stripe.com/elements/appearance-api/mobile.md#fonts-ios)
2. Customize [colors](https://docs.stripe.com/elements/appearance-api/mobile.md#colors-ios) to match your app
3. Customize [shapes](https://docs.stripe.com/elements/appearance-api/mobile.md#shapes-ios) like corner radius
4. Fine-tune [specific components](https://docs.stripe.com/elements/appearance-api/mobile.md#specific-ui-components-ios)
   ![](https://b.stripecdn.com/docs-statics-srv/assets/ios-appearance-before-after-example.ad6a9aad238be9b198e9ebbc77ebe1d4.png)

```swift
var configuration = PaymentSheet.Configuration()
// The following code creates the appearance shown in the screenshot abovevar appearance = PaymentSheet.Appearance()
appearance.font.base = UIFont(name: "AvenirNext-Regular", size: UIFont.systemFontSize)!
appearance.cornerRadius = 12
appearance.shadow = .disabled
appearance.borderWidth = 0.5
appearance.colors.background = .white
appearance.colors.primary = UIColor(red: 36/255, green: 36/255, blue: 47/255, alpha: 1)
appearance.colors.textSecondary = .black
appearance.colors.componentPlaceholderText = UIColor(red: 115/255, green: 117/255, blue: 123/255, alpha: 1)
appearance.colors.componentText = .black
appearance.colors.componentBorder = .clear
appearance.colors.componentDivider = UIColor(red: 195/255, green: 213/255, blue: 200/255, alpha: 1)
appearance.colors.componentBackground = UIColor(red: 243/255, green: 248/255, blue: 250/247, alpha: 1)
appearance.primaryButton.cornerRadius = 20
configuration.appearance = appearance
let paymentSheet = PaymentSheet(/* ... */, configuration: configuration)
```

## Fonts

Customize the font by setting [font.base](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Appearance/Font.html#/s:6Stripe12PaymentSheetC10AppearanceV4FontV4baseSo6UIFontCvp) to any variant of your custom font at any size and weight. The mobile Payment Element uses the font family of your custom font, but determines sizes and weights itself.

To increase or decrease the size of all text, set [font.sizeScaleFactor](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Appearance/Font.html#/s:6Stripe12PaymentSheetC10AppearanceV4FontV15sizeScaleFactor12CoreGraphics7CGFloatVvp). We multiply font sizes by this value before displaying them. This is useful if your custom font is slightly larger or smaller than the system font.

```swift
var configuration = PaymentSheet.Configuration()
configuration.appearance.font.base = UIFont(name: "CustomFont-Regular", size: UIFont.systemFontSize)
configuration.appearance.font.sizeScaleFactor = 1.15 // Increase the size of all text by 1.15x
```

## Colors

Customize the colors in the mobile Payment Element by modifying the color categories defined in [Appearance.Colors](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Appearance.html#/s:6Stripe12PaymentSheetC10AppearanceV6ColorsV). Each color category determines the color of one or more components in the UI. For example, [primary](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Appearance/Colors.html#/s:6Stripe12PaymentSheetC10AppearanceV6ColorsV7primarySo7UIColorCvp) defines the color of the **Pay** button and selected items like the **Save this card** checkbox. Refer to the diagram below to see some of the UI elements associated with each color category.
![](https://b.stripecdn.com/docs-statics-srv/assets/ios-appearance-colors.2063c1f71eaa17656639098f3f4d29d6.png)

> To support dark mode, initialize your custom UIColors with [init(dynamicProvider:)](https://developer.apple.com/documentation/uikit/uicolor/3238041-init).

## Shapes

Besides fonts and colors, you can also customize the [corner radius](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Appearance.html#/s:6Stripe12PaymentSheetC10AppearanceV12cornerRadius12CoreGraphics7CGFloatVvp), [border width](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Appearance.html#/s:6Stripe12PaymentSheetC10AppearanceV11borderWidth12CoreGraphics7CGFloatVvp), and [shadow](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Appearance.html#/s:6Stripe12PaymentSheetC10AppearanceV6shadowAE6ShadowVvp) used throughout the mobile Payment Element.
![](https://b.stripecdn.com/docs-statics-srv/assets/ios-appearance-shapes.ee37fc31111aa78f26af4045a3857468.png)

## Specific UI components

The sections above describe customization options that affect the mobile Payment Element broadly, across multiple UI components. We also provide customization options specifically for the primary button (for example, the **Pay** button). Refer to [Appearance.PrimaryButton](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Appearance/PrimaryButton.html) for the full list of customization options.

Customization options for specific UI components take precedence over other values. For example, `appearance.primaryButton.cornerRadius` overrides the value of `appearance.cornerRadius`.

> [Let us know](https://github.com/stripe/stripe-ios/issues/new/choose) if you think we need to add more customization options.

# Android

> This is a Android for when platform is android. View the full page at https://docs.stripe.com/elements/appearance-api/mobile?platform=android.

The [mobile Payment Element](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=mobile\&platform=android) supports visual customization, which allows you to match the design of your app. The layout stays consistent, but you can modify colors, fonts, and more by creating your [PaymentSheet.Configuration](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-configuration/index.html) object with an [appearance](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-configuration/index.html#-431946322%2FProperties%2F2002900378) object.

1. Start by customizing the [font](https://docs.stripe.com/elements/appearance-api/mobile.md#fonts-android)
2. Customize [colors](https://docs.stripe.com/elements/appearance-api/mobile.md#colors-android) to match your app
3. Customize [shapes](https://docs.stripe.com/elements/appearance-api/mobile.md#shapes-android) like corner radius
4. Fine-tune [specific components](https://docs.stripe.com/elements/appearance-api/mobile.md#specific-ui-components-android)
   ![](https://b.stripecdn.com/docs-statics-srv/assets/android-appearance-before-after-example.acf584a69eb99f47fe0b5ffab24818b8.png)

```kotlin
// The following code creates the appearance shown in the screenshot aboveval appearance = PaymentSheet.Appearance(
   colorsLight = PaymentSheet.Colors(
       primary = Color(red = 36, green = 36, blue = 47),
       surface = Color.White,
       component = Color(red = 243, green = 248, blue = 245),
       componentBorder = Color.Transparent,
       componentDivider = Color.Black,
       onComponent = Color.Black,
       subtitle = Color.Black,
       placeholderText = Color(red = 115, green = 117, blue = 123),
       onSurface = Color.Black,
       appBarIcon = Color.Black,
       error = Color.Red,
   ),
   shapes = PaymentSheet.Shapes(
       cornerRadiusDp = 12.0f,
       borderStrokeWidthDp = 0.5f
   ),
   typography = PaymentSheet.Typography.default.copy(
       fontResId = R.font.avenir_next
   ),
   primaryButton = PaymentSheet.PrimaryButton(
      shape = PaymentSheet.PrimaryButtonShape(
         cornerRadiusDp = 20f
      ),
   )
)

// ...

paymentSheet.presentWithPaymentIntent(
   clientSecret,
   PaymentSheet.Configuration(
       merchantDisplayName = merchantName,appearance = appearance
   )
)

```

## Fonts

Customize the font by setting [typography.fontResId](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-typography/index.html#-786783041%2FProperties%2F2002900378) to your custom font’s resource ID. The mobile Payment Element uses the font family of your custom font, but determines sizes and weights itself.

To increase or decrease the size of text, set [typography.sizeScaleFactor](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-typography/index.html#1477076499%2FProperties%2F2002900378). Stripe multiplies font sizes by this value before displaying them. This setting is useful if your custom font is slightly larger or smaller than the system font.

```kotlin
val appearance = PaymentSheet.Appearance(
    // …typography = PaymentSheet.Typography.default.copy(
        sizeScaleFactor = 1.15f, // Increase the size of all text by 1.15x
        fontResId = R.font.myFont,
    ),
)
val configuration = PaymentSheet.Configuration.Builder("Example, Inc.")
    // …
    .appearance(appearance)
    .build()
```

## Colors

Customize the colors in the mobile Payment Element by modifying the color categories defined in [PaymentSheet.Colors](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-colors/index.html). Each color category determines the color of one or more components in the UI. For example, [primary](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-colors/index.html#1242160296%2FProperties%2F2002900378) defines the color of the **Pay** button and selected items like the **Save this card** checkbox. Refer to the diagram below to see some of the UI elements associated with each color category.

> To support dark mode, set [appearance.colorsDark](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-appearance/index.html#945237406%2FProperties%2F2002900378). You can effectively disable dark mode by setting [appearance.colorsDark](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-appearance/index.html#945237406%2FProperties%2F2002900378) to the same value as [appearance.colorsLight](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-appearance/index.html#2092498352%2FProperties%2F2002900378)
> ![](https://b.stripecdn.com/docs-statics-srv/assets/android-appearance-colors.413c76aaf01a54c25478cb8d7532c7e7.png)

## Shapes

In addition to customizing fonts and colors, you can also customize the [corner radius](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-shapes/index.html#-1129752289%2FProperties%2F2002900378) and [border width](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-shapes/index.html#495484314%2FProperties%2F2002900378) used throughout the mobile Payment Element by setting [appearance.shapes](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-appearance/index.html#-2108514638%2FProperties%2F2002900378).
![](https://b.stripecdn.com/docs-statics-srv/assets/android-appearance-shapes.800169ea6a81e0bfdbccbb18bfdf7121.png)

## Specific UI components

The sections above describe customization options that affect the mobile Payment Element broadly, across multiple UI components. We also provide customization options specifically for the primary button (for example, the **Pay** button). Refer to [Appearance.PrimaryButton](https://stripe.dev/stripe-android/paymentsheet/com.stripe.android.paymentsheet/-payment-sheet/-primary-button/index.html) for the full list of customization options.

Customization options for specific UI components take precedence over other values. For example, `appearance.primaryButton.shapes.cornerRadius` overrides the value of `appearance.shapes.cornerRadius`.

> If you have ideas for additional customization options, [let us know](https://github.com/stripe/stripe-android/issues/new/choose).

# React Native

> This is a React Native for when platform is react-native. View the full page at https://docs.stripe.com/elements/appearance-api/mobile?platform=react-native.

The [mobile Payment Element](https://docs.stripe.com/payments/accept-a-payment.md?payment-ui=mobile\&platform=react-native) supports visual customization, which allows you to match the design of your app. The layout stays consistent, but you can modify colors, fonts, and more by including the `appearance` parameter when you call [initPaymentSheet()](https://stripe.dev/stripe-react-native/api-reference/index.html#initPaymentSheet).

1. Start by customizing the [font](https://docs.stripe.com/elements/appearance-api/mobile.md#fonts-react-native)
2. Customize [colors](https://docs.stripe.com/elements/appearance-api/mobile.md#colors-react-native) to match your app
3. Customize [shapes](https://docs.stripe.com/elements/appearance-api/mobile.md#shapes-react-native) like the border radius
4. Fine-tune [specific components](https://docs.stripe.com/elements/appearance-api/mobile.md#specific-ui-components-react-native)
   ![](https://b.stripecdn.com/docs-statics-srv/assets/ios-appearance-before-after-example.ad6a9aad238be9b198e9ebbc77ebe1d4.png)

```js
// The following code creates the appearance shown in the screenshot aboveconst customAppearance = {
 font: {
   family:
     Platform.OS === 'android' ? 'avenirnextregular' : 'AvenirNext-Regular',
 },
 shapes: {
   borderRadius: 12,
   borderWidth: 0.5,
 },
 primaryButton: {
   shapes: {
    borderRadius: 20,
   },
 },
 colors: {
   primary: '#fcfdff',
   background: '#ffffff',
   componentBackground: '#f3f8fa',
   componentBorder: '#f3f8fa',
   componentDivider: '#000000',
   primaryText: '#000000',
   secondaryText: '#000000',
   componentText: '#000000',
   placeholderText: '#73757b',
 },
};

const { error } = await initPaymentSheet({
 ...appearance: customAppearance,
});

```

## Fonts

Customize the font by passing a [FontConfig](https://stripe.dev/stripe-react-native/api-reference/modules/PaymentSheet.html#FontConfig) to `font` and setting `family`. On iOS, the value of `family` should be the “PostScript name” found in Font Book. On Android, copy the `.ttf` or `.otf` file from `android/app/src/main/assets/font/<your-font>` to `android/app/src/main/res/font/<your-font>` and use the name of the font file (containing only lowercase, alphanumeric characters). The Mobile Payment Element uses the font family of your custom font, but determines sizes and weights itself.

To increase or decrease the size of text, set `scale`. We multiply font sizes by this value before displaying them. This is useful if your custom font is slightly larger or smaller than the system font.

```js
 ...const appearance: AppearanceParams = {
   font: {
     family: Platform.OS === 'android' ? 'avenirnextregular' : 'AvenirNext-Regular',
     scale: 1.15,
   },
 },
```

## Colors

Customize the colors in the mobile Payment Element by modifying the color categories defined in [Appearance.Colors](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Appearance.html#/s:6Stripe12PaymentSheetC10AppearanceV6ColorsV). Each color category determines the color of one or more components in the UI. For example, [primary](https://stripe.dev/stripe-ios/stripe-paymentsheet/Classes/PaymentSheet/Appearance/Colors.html#/s:6Stripe12PaymentSheetC10AppearanceV6ColorsV7primarySo7UIColorCvp) defines the color of the **Pay** button and selected items like the **Save this card** checkbox. Refer to the diagram below to see some of the UI elements associated with each color category.
![](https://b.stripecdn.com/docs-statics-srv/assets/ios-appearance-colors.2063c1f71eaa17656639098f3f4d29d6.png)

> To support dark mode, initialize your custom UIColors with [init(dynamicProvider:)](https://developer.apple.com/documentation/uikit/uicolor/3238041-init).

## Shapes

Besides fonts and colors, you can also customize the [border radius](https://stripe.dev/stripe-react-native/api-reference/modules/PaymentSheet.html#AppearanceParams), [border width](https://stripe.dev/stripe-react-native/api-reference/modules/PaymentSheet.html#AppearanceParams), and [shadow](https://stripe.dev/stripe-react-native/api-reference/modules/PaymentSheet.html#ShadowConfig) used throughout the mobile Payment Element.
![](https://b.stripecdn.com/docs-statics-srv/assets/react-native-appearance-shapes.a71c754a951ea02fff121f584953ba33.png)

## Specific UI components

The previous sections describe customization options that affect the mobile Payment Element broadly, across multiple UI components. We also provide customization options specifically for the primary button (for example, the **Pay** button). Refer to the [PrimaryButtonConfig](https://stripe.dev/stripe-react-native/api-reference/modules/PaymentSheet.html#PrimaryButtonConfig) for the full list of customization options.

Customization options for specific UI components take precedence over other values. For example, `primaryButton.shapes.borderRadius` overrides the value of `shapes.borderRadius`.

> [Let us know](https://github.com/stripe/stripe-react-native/issues/new/choose) if you think we need to add more customization options.
