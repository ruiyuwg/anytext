# BBPOS WisePOS E

Learn about the BBPOS WisePOS E reader.
Available in: US, CA, GB, IE, SG, AU, NZ, NL, BE, AT, ES, DK, SE, NO, CH, IT, LU, PT, FI, MY, CZ, PL![](https://b.stripecdn.com/docs-statics-srv/assets/wisepos-floating-tall.e8478124cda0e088b2e19f503f574f53.png)

The [BBPOS WisePOS E](https://docs.stripe.com/terminal/payments/setup-reader/bbpos-wisepos-e.md) is a countertop reader for Stripe Terminal apps. It [connects](https://docs.stripe.com/terminal/payments/connect-reader.md?reader-type=internet) to the Stripe Terminal SDK over the internet.

This reader is compatible with the following integrations: JavaScript, iOS, Android, and React Native SDKs and server-driven.

For BBPOS WisePOS E readers, we recommend the [server-driven integration](https://docs.stripe.com/terminal/payments/setup-integration.md?terminal-sdk-platform=server-driven), which uses the Stripe API instead of a Terminal SDK. To view the reader’s parts and features, see the [BBPOS WisePOS E product sheet](https://d37ugbyn3rpeym.cloudfront.net/terminal/product-sheets/wpe_product_sheet.pdf).

## LED status lights

The LEDs above the LCD display show the current status.

### LED icon meanings

Use this table to understand what the icons in the subsequent tables indicate.

| Icon | Meaning                |
| ---- | ---------------------- |
|      | The light is on.       |
|      | The light is flashing. |
|      | The light is off.      |

### Power on

When you press and hold the power button for 2 seconds, the device powers on and the right LED array flashes.

| LEDs | Meaning               |
| ---- | --------------------- |
|      | The device turned on. |

### Battery and charging status

When the BBPOS WisePOS E is on, you can check the battery level in the left LED array. Learn more about [BBPOS WisePOS E battery life](https://docs.stripe.com/terminal/payments/setup-reader.md#device-specs-and-accessories).

| LEDs | Meaning                 |
| ---- | ----------------------- |
|      | Charging or full charge |

If the first LED is red, there might be an issue with charging.

### Contactless and reader status

When you connect to the BBPOS WisePOS E, you can check the reader status in the right LED array.

| LEDs | Meaning                                                                                                                                                                                                                                                                                                            |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|      | Reader is in bootloader mode and has reverted to default keys.                                                                                                                                                                                                                                                     |
|      | Reader integrity check failed or reader tampered. If this occurs, and your reader is under warranty, [submit a warranty claim](https://support.stripe.com/questions/warranty-for-broken-or-malfunctioning-terminal-card-reader). If purchased through a Connect platform, contact your platform provider directly. |
|      | (2 seconds) Reader is experiencing a hard fault and might need replacing. [Contact support](https://support.stripe.com/contact/).                                                                                                                                                                                  |

## Expected sounds during payment

The following table describes sounds that occur during successful and failed payments on the BBPOS WisePOS E.

|         | Tap                       | Chip     | Swipe    |
| ------- | ------------------------- | -------- | -------- |
| Success | 1 long, high-pitched beep | No sound | No sound |
| Failure | 1 long, high-pitched beep | No sound | No sound |

## Troubleshoot the reader

Make sure your network meets all of our [network requirements](https://docs.stripe.com/terminal/network-requirements.md), and try the steps in the [network troubleshooting](https://docs.stripe.com/terminal/network-requirements.md#troubleshooting) section.

To begin troubleshooting, use the following common scenarios to help diagnose the issue.

### Run diagnostics

The BBPOS WisePOS E includes built-in diagnostics that can help you identify connectivity and configuration issues. We recommend running these diagnostics as the first step when troubleshooting any reader problems.

To access the diagnostics menu:

1. Swipe in from the left edge of the screen on your reader.
2. Tap **Settings**.
3. Enter the admin passcode. The default is **0-7-1-3-9**.
4. Select **Diagnostics**.

The diagnostics menu displays test results and information about your reader:

- **DNS resolution**: Verifies that the reader can resolve domain names.
- **Stripe connectivity**: Verifies that the reader can connect to Stripe servers. This test must pass for your reader to process payments and receive updates.
- **Terminal events connectivity**: Tests the reader’s connection to the Stripe event infrastructure.
- **WiFi information**: Shows WiFi frequency and signal strength (if connected using WiFi).
- **Battery and hardware status**: Displays battery health, voltage, capacity, and dock/hub connection status.

> If the Stripe connectivity test fails, your reader won’t be able to process payments or receive software updates. Follow the [network troubleshooting steps](https://docs.stripe.com/terminal/network-requirements.md#troubleshooting) to resolve connectivity issues.

We recommend running diagnostics whenever you experience issues with your reader, or as part of your regular maintenance routine to proactively identify potential problems.

### Reader is unable to connect

To check connectivity, go to [settings](https://docs.stripe.com/terminal/payments/setup-reader/bbpos-wisepos-e.md#settings), then select **WiFi settings**. This displays all available WiFi networks. To see more details about the connection, tap the connected network name.

If you’re experiencing connectivity issues, run the [diagnostics tests](https://docs.stripe.com/terminal/readers/bbpos-wisepos-e.md#diagnostics) to check Stripe connectivity and identify the root cause.

### Reader is unable to connect to Ethernet, even though docked

You must connect both cables before inserting the reader into the dock. Remove the reader and re-insert into the dock.

If the issue persists, run the [diagnostics tests](https://docs.stripe.com/terminal/readers/bbpos-wisepos-e.md#diagnostics) to verify network and Stripe connectivity.

### Reader is unable to update

If your reader doesn’t update, it’s possible that it can’t connect to Stripe. Run the [diagnostics tests](https://docs.stripe.com/terminal/readers/bbpos-wisepos-e.md#diagnostics) to check Stripe connectivity. Make sure the Stripe connectivity test says “Passed.” If the test fails, follow [these steps](https://docs.stripe.com/terminal/network-requirements.md#troubleshooting).

> If you use a router, refer to your router’s manual and reconfigure the networking setup.

## Stripe reader software

Stripe maintains the software that controls the BBPOS WisePOS E. The reader receives updates automatically from Stripe when not in use. These can include improvements and required security updates from Stripe and our hardware partners. As reader software updates are made available, update your readers to the latest available version to continue using Stripe Terminal. Failing to install a required update can prevent a reader from accepting payments.

The reader restarts every day at midnight for PCI compliance, and disconnects from the POS app every morning. Leave your reader on and connected to power to receive automatic software updates. This ensures that updates happen at midnight (in the timezone of the [assigned location](https://docs.stripe.com/terminal/fleet/locations-and-zones.md)) to avoid interruption to sales. If you unplug the reader at night, an update could start when you turn it back on. To manually check for an update, reboot the reader.

### Reader software version

The BBPOS WisePOS E software consists of four components: the reader application, firmware, configuration, and key identifier. The following table summarizes the latest version of each of these components for the countries where WisePOS E is available. You can find your reader’s versions in the [Diagnostics menu](https://docs.stripe.com/terminal/readers/bbpos-wisepos-e.md#diagnostics).

> In PCI listings, the firmware identifier is in the format `WSC5x.11-xxxxx-xxxxx`, where `xxxxx` is a placeholder for ROM version and firmware version, respectively. All versions are PCI compliant.
>
> Specifically, a PCI firmware ID `WSC5x.11-WXYZZ-ABCDD` maps to ROM version `W.X.Y.ZZ` and reader version `AA.BB.CC.DD`. For example, `WSC5x.11-18302-50127` maps to ROM version `1.8.3.2` and firmware version `5.00.01.27`. If the ROM version only has three digits `W.X.Y`, `ZZ` is `00`.

| Countries                    | Reader     | Firmware            | Configuration           | ROM     |
| ---------------------------- | ---------- | ------------------- | ----------------------- | ------- |
| US                           | `2.40.1.0` | `5.01.02.00`        | `szzz_us_v19`           | `1.8.4` |
| CA                           | `2.40.1.0` | `5.01.02.00`        | `szzz_ca_v17`           | `1.8.4` |
| AU                           | `2.40.1.0` | `5.01.02.00.eftpos` | `szzz_prod_au_v11`      | `1.8.4` |
| MYNZ                         | `2.40.1.0` | `5.01.02.00`        | `szzz_prod_apac_on_v4`  | `1.8.4` |
| SG                           | `2.40.1.0` | `5.01.02.00`        | `szzz_prod_apac_off_v4` | `1.8.4` |
| GBIEFI                       | `2.40.1.0` | `5.01.02.00`        | `szzz_prod_eu_off_v11`  | `1.8.4` |
| ATBEDKFRITDENLESSECZLUPTCHNO | `2.40.1.0` | `5.01.02.00`        | `szzz_prod_eu_on_v7`    | `1.8.4` |

### Reader software changelog

#### 2026-03-18 (version 2.40.1.0)

- General bug fixes and improvements.

#### 2026-02-24 (version 2.39.3.0)

- General bug fixes and improvements.
- Fixed Reader UI: If a PIN attempt fails, the Reader UI displays “Wrong PIN, try again.” and then clearly prompts you to “Enter PIN."

#### 2026-01-13 (version 2.38.5.0)

- General bug fixes and improvements.
- Added a fix to always play payment audio tones at correct volume regardless of device volume.

#### 2025-11-12 (version 2.37.2.0)

- General bug fixes and improvements.

#### 2025-10-07 (version 2.36.2.0)

- General bug fixes and improvements.

#### 2025-09-10 (version 2.35.2.0)

- Renamed “PIN” to “passcode" on the admin menu access screen.
- General bug fixes and improvements.

#### 2025-08-06 (version 2.34.4.0)

- Updated the S700 UI to state “Select payment method” instead of “Select Account” on the CB co-branded choice selection screen.
- General bug fixes and improvements.

#### 2025-06-30 (version 2.33.3.0)

- Fixed a bug that impacted the flow for decline and autorecollection.
- Added a message on the postpone update page to notify users when a device software update becomes mandatory.
- Added support for cobranded card choice (girocard, CB) on S700 devices.
- General bug fixes and improvements.

#### 2025-05-28 (version 2.32.1.0)

- General bug fixes and improvements.

#### 2025-04-29 (version 2.31.6.0)

- Updated the UI for ROM installation status to show the progress percentage during installation.
- Added UI improvements for QR code payments with WeChat Pay and Affirm.
- Added various UI updates for Cartes Bancaires support on S700.
- General bug fixes and improvements.

#### 2025-03-26 (version 2.30.5.0)

- Fixed a factory reset bug for newly unboxed S700 devices.
- Fixed a bug for an edge case scenario where ROM updates might time out.
- Updated Interac prompts for French cardholders to “Cheque” instead of “Compte courant” and “Entrez votre NIP” instead of “Saisir le code PIN.”
- Fixed the UI to display the correct language on payment prompts for Dutch and French cardholders.

#### 2025-03-12 (version 2.29.6.0)

- Updated the reader to return a success (instead of an error) when an on-reader form operation is initiated while the reader displays “Remove card.”
- Fixed a bug to ensure offline mode correctly handles SDI requests.
- Added a “Try again” button on the reader UI when the “Failed to launch reader” error displays.
- Added sounds to indicate correct and incorrect PIN entry.
- Fixed a bug that might cause some offline mode transactions to fail.
- Added connection improvements for server-driven integrations operating in poor network connectivity environments.
- Additional bug fixes and improvements.

#### 2025-01-29 (version 2.28.3.0)

- Improved device IoT connectivity when in Doze mode. This change removes the need to manually keep the screen active before initiating a transaction.
- Added log entries for when a device enters into and exits out of Doze mode.
- Added the ability to insert a card before the transaction is initiated. This requires version 2.28 and enabling a Stripe-controlled feature flag.
- Fixed the cancel buttons on `charge_error` screens.
- Fixed an issue that prevented canceling the reader action using SDI when collecting and confirming SCA transactions.
- Fixed race conditions for on-reader forms.
- Fixed collect input validations for on-reader forms.
- Fixed a hand-off mode bug that prevented hand-off mode transactions from returning to the POS screen after completing.

#### 2024-11-13 (version 2.27.7.0)

- Fixed a bug where handoff mode transactions weren’t reliably returning to the POS app.
- Fixed a UI bug where the cancel button wasn’t displaying.
- Fixed a bug that impacted certain uses of on-reader forms.
- Fixed a UI bug that affected Finnish language display on the admin pin screen.

#### 2024-09-18 (version 2.26.5.0)

- Fix for errors that prevented Apps on Devices users from accepting successful payments.
- Fix for an issue that prevented bug reports from uploading.
- Fix for a UI bug that impacted collect inputs.

#### 2024-08-26 (version 2.25.3.0)

- Bug fixes and stability improvements.

#### 2024-07-30 (version 2.25.1.0)

- Fixed a bug where Stripe test card timeouts reported as a user cancellation when selecting “Stripe PIN credit” option.
- Added support for Accessible PIN payments.
- Fixed a race condition bug that caused contactless payments to fail with the error “Underlying request took too long. Please check your local network.”
- Fixed a bug where a Norwegian card showed Swedish text.
- Fixed a bug where accessibility mode didn’t read out the “Incorrect PIN entered” message.

#### 2024-06-25 (version 2.24.2.0)

- UI fixes for the Reader app.
- Fixed an issue where auto-rotate wasn’t working correctly for Stripe S700.

#### 2024-05-30 (version 2.23.3.0)

- Bug fixes and stability improvements.
- Updated the custom tip entry screen to include enter and cancel buttons.

#### 2024-04-18 (version 2.22.3.0)

- Fixed an installation error for language packs.
- Updated the 50% battery requirement when performing a configuration or key update on the battery.
- Fixed an issue where readers attempted to use a 2nd Gen AC on contactless EMV.
- Added support for connecting to a hidden Enterprise WPA or WPA2-EAP network.
- Added a progress indicator for key, firmware, and configuration updates.

#### 2024-03-18 (version 2.21.2.0)

- Fixed the text size and made copy changes and UI modifications for AAA accessibility compliance.
- Updated `PaymentIntent` support for Magstripe + PIN for EFTPOS.
- Fixed bugs related to support for `PaymentIntent` when using offline mode.

#### 2024-02-08 (version 2.20.4.0)

- Fixed an issue where iOS SDK 2.x versions returned nil for the `CardPresent` object `charges.paymentMethodDetails.cardPresent`.

#### 2024-02-08 (version 2.20.3.0)

- Bug fixes and stability improvements

#### 2023-12-11 (version 2.19.2.0)

- Updated SCA support.
- Fixed an issue where the network screen running multiple connect calls could cause Armada to become unauthenticated.
- Added issuer information in the `PaymentMethod` bindings.
- Updated the refund by `PaymentIntent.id`.
- Surfaced the language detected from the card in the `PaymentIntent`.

#### 2023-11-16 (version 2.18.9.0)

- Bug fixes and stability improvements

#### 2023-11-08 (version 2.18.5.0)

- Bug fixes and stability improvements

#### 2023-10-18 (version 2.17.8.0)

- Bug fixes and stability improvements

#### 2023-09-21 (version 2.16.7.0)

- Bug fixes and stability improvements

#### 2023-07-12 (version 2.15.5.0)

- Fixed an issue where the NFC logo was missing on the cart display.
- Fixed an issue where the reader app crashed during firmware updates.
- Improved recovery from an issue that caused the reader to stop responding.
- You no longer need to check a box when connecting to hidden WiFi networks.
- Disabling the payment tone now works as intended on the WisePOS E.

#### 2023-06-12 (version 2.14.3.0)

- Improved reliability and security of Stripe SDK to reader connectivity.
- Fixed an issue where saved networks couldn’t always be forgotten.

#### 2023-04-03 (version 2.12.2.3)

- Fixed an issue where ROM background downloads were occasionally interrupted.
- Fixed an issue where language selection occasionally failed after factory reset.

#### 2023-03-14 (version 2.11.4.0)

- Improved reliability and security of Stripe SDK to reader connectivity.

#### 2023-02-06 (version 2.10.2.0)

- Devices now have a one hour screen timeout when the reader isn’t connected to a power source.

#### 2023-01-04 (version 2.9.2.0)

- Various improvements to animations during the payment flow.
- Improved reliability and security of Stripe SDK to reader connectivity.

#### 2022-10-17 (version 2.8.4.0)

- Improved performance when processing several payments sequentially.

#### 2022-09-19 (version 2.7.7.0)

- Rolled out support for dark and light themes on the reader update screen.

#### 2022-06-13 (version 2.4.2.3)

- Rolled out a new default splash screen.
- Rolled out access to the **Appearance** setting screen to switch between dark and light themes.

#### 2022-04-13 (version 2.2.3.0)

- Improved reliability and security of Stripe SDK to reader connectivity.
- Improved support for custom splash screens by applying opacity to the status bar.

## Accessories for the reader

You can design your own accessories for the BBPOS WisePOS E. To download the BBPOS WisePOS E mechanical design files (.STP), you must first review and accept our [Terminal Design File License Agreement](https://stripe.com/legal/terminal-design). By downloading the file below, you agree to the terms outlined in the license.

[Download Stripe design files](https://d37ugbyn3rpeym.cloudfront.net/terminal/bbpos_wpe_mechanical_design_files_and_guidelines.zip)

## See also

- [Set up BBPOS WisePOS E](https://docs.stripe.com/terminal/payments/setup-reader/bbpos-wisepos-e.md)
- [Set up your integration](https://docs.stripe.com/terminal/payments/setup-integration.md)
- [Connect to a reader](https://docs.stripe.com/terminal/payments/connect-reader.md)
- [Collect payments](https://docs.stripe.com/terminal/payments/collect-card-payment.md)

The BBPOS and Chipper™ name and logo are trademarks or registered trademarks of BBPOS Limited in the United States or other countries. The Verifone® name and logo are either trademarks or registered trademarks of Verifone in the United States and/or other countries. Use of the trademarks doesn’t imply any endorsement by BBPOS or Verifone.
