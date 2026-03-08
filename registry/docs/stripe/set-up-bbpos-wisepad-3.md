# Set up BBPOS WisePad 3

Learn how to set up the BBPOS WisePad 3.
Available in: CA, GB, IE, SG, AU, NZ, FR, DE, NL, BE, AT, ES, DK, SE, NO, CH, IT, LU, PT, FI, MY, CZ, PL, JP![](https://b.stripecdn.com/docs-statics-srv/assets/wisepad-floating-thumb.d6e3015116e0b4295b0106e770b9843e.png)

The BBPOS WisePad 3 is a handheld reader for use with mobile applications. It uses Bluetooth Low Energy (BLE) or USB (Android only) to [connect](https://docs.stripe.com/terminal/payments/connect-reader.md?reader-type=bluetooth) to the Stripe Terminal SDK on a mobile device. The WisePad 3 features a display and PIN pad, which facilitates use in countries where PIN-authenticated transactions are more common.

This reader is compatible with our iOS, Android, and React Native SDKs. To view the reader’s parts and features, see the [BBPOS WisePad 3 product sheet](https://docs.stripecdn.com/d90c245525d03b60db93a9d861197e1c14c7adf0e53c864e62220290a7db8d14.pdf).

> Stripe readers aren’t liquid-proof and we recommend that users make appropriate efforts to make sure their devices remain dry. If your device has experienced liquid ingress, we recommend that you stop using the device and let it dry thoroughly before attempting to re-use or charge the device. If your device doesn’t properly operate or charge properly after drying, you need to replace it.

## Turn the reader on and off

You can turn on the BBPOS WisePad 3 reader by pressing and holding the power button, located at the top right of the PIN pad. The display powers on and shows the device’s splash screen.

The display dims after a few seconds of inactivity. If inactive and disconnected from your application for more than 5 minutes, it beeps and powers off. Turn off the reader manually by pressing and holding the power button until the LED display shows a “Power off?” prompt, then press the green enter button to confirm.

> With typical usage, you generally need to [charge the reader](https://docs.stripe.com/terminal/payments/setup-reader/bbpos-wisepad3.md#charging) once per day. The reader can typically accept approximately 600 contact or 800 contactless transactions in a single charge cycle.

## Charge the reader

To charge the BBPOS WisePad 3, use the included cable or a USB-A to USB-C cable.

## Default reader language

The [BBPOS WisePad 3](https://docs.stripe.com/terminal/readers/bbpos-wisepad3.md) supports changing reader language directly in the reader interface. After you have registered your reader to a [Location](https://docs.stripe.com/api/terminal/locations.md), the reader installs a language pack relevant for your region if one isn’t already in place. To view available language options and to select a language, click the **Power / Settings** button and scroll down using the arrow keys until you reach the language selection menu. Highlight your desired language and press the green **Enter** key.

## Accessories for the reader

You can design your own accessories for the BBPOS WisePad 3. To download the BBPOS WisePad 3 mechanical design files (.STP), you must first review and accept our [Terminal Design File License Agreement](https://stripe.com/legal/terminal-design). By downloading the file below, you agree to the terms outlined in the license.

[Download Stripe design files](https://d37ugbyn3rpeym.cloudfront.net/terminal/bbpos_wp3_mechanical_design_files_and_guidelines.zip)

## See also

- [Set up your integration](https://docs.stripe.com/terminal/payments/setup-integration.md)
- [WisePad 3 reference](https://docs.stripe.com/terminal/readers/bbpos-wisepad3.md)

The BBPOS and Chipper™ name and logo are trademarks or registered trademarks of BBPOS Limited in the United States or other countries. The Verifone® name and logo are either trademarks or registered trademarks of Verifone in the United States and/or other countries. Use of the trademarks doesn’t imply any endorsement by BBPOS or Verifone.
