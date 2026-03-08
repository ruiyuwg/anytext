# Stripe Reader S700/S710

Learn about Stripe Reader S700/S710.

Visit the [Dashboard](https://dashboard.stripe.com/terminal/shop/) to order your Stripe Reader S700/S710.
![Front and back view of the Stripe Reader S700/S710](https://b.stripecdn.com/docs-statics-srv/assets/S700-3D.041eca5dfd580cdc451a41020b4dd45a.png)

The [Stripe Reader S700/S710](https://docs.stripe.com/terminal/payments/setup-reader/stripe-reader-s700-s710.md) is an Android-based smart reader for countertop and handheld use. You can customize the on-reader checkout UI using both prebuilt and custom elements.

The [Stripe Terminal SDK connects to the reader](https://docs.stripe.com/terminal/payments/connect-reader.md?reader-type=internet) over the internet, LAN, or [handoff mode](https://docs.stripe.com/terminal/features/apps-on-devices/build.md#discover-and-connect-a-reader). This reader is compatible with JavaScript SDK, iOS SDK, Android SDK, React Native SDK, and server-driven integrations.

If you use the Stripe Reader S700/S710 with a point-of-sale system on a separate device and don’t need to [collect card payments while offline](https://docs.stripe.com/terminal/features/operate-offline/collect-card-payments.md), we recommend the [server-driven integration](https://docs.stripe.com/terminal/payments/setup-integration.md?terminal-sdk-platform=server-driven).

> Stripe readers aren’t liquid-proof and we recommend that users make appropriate efforts to make sure their devices remain dry. If your device has experienced liquid ingress, we recommend that you stop using the device and let it dry thoroughly before attempting to re-use or charge the device. If your device doesn’t properly operate or charge properly after drying, you need to replace it.

## Battery and charging status

When the Stripe Reader S700/S710 is on, you can check the battery level in the charging LED indicator. Learn more about [Stripe Reader S700/S710 battery life](https://docs.stripe.com/terminal/payments/setup-reader.md#device-specs-and-accessories).

| LEDs | Meaning                                                                                  |
| ---- | ---------------------------------------------------------------------------------------- |
|      | The reader is fully charged with the power cable connected.                              |
|      | (flashing) The reader is charging.                                                       |
|      | The reader’s battery level is low (10–20% remaining).                                    |
|      | The reader’s battery level is critically low (1–9% remaining) or drained (1% remaining). |
|      | The reader is off, or the reader is on with the power cable disconnected.                |

To prolong the rechargeable battery life, the battery charging rate is reduced outside the 15C (59F) to 45C (113F) temperature rate. The charging stops if the unit temperature is below 0C (32F) or above 60C (140F).

## Expected sounds during payment

The following table describes sounds that occur during successful and failed payments on Stripe Reader S700/S710.

|         | Tap                        | Chip     | Swipe          |
| ------- | -------------------------- | -------- | -------------- |
| Success | 1 long, high-pitched beep  | No sound | Not applicable |
| Failure | 2 short, low-pitched beeps | No sound | 2 short beeps  |

## Troubleshoot the reader

Make sure your network meets all of our [network requirements](https://docs.stripe.com/terminal/network-requirements.md), and try the steps in the [network troubleshooting](https://docs.stripe.com/terminal/network-requirements.md#troubleshooting) section.

To begin troubleshooting, use the following common scenarios to help diagnose the issue.

### Run diagnostics

The Stripe Reader S700/S710 includes built-in diagnostics that can help you identify connectivity and configuration issues. We recommend running these diagnostics as the first step when troubleshooting any reader problems.

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

### The reader won’t charge

The Stripe Reader S700/S710 requires a recommended 12W of power for successful operation and battery charging. Stripe recommends using the AC power adapter that was supplied with your reader to make sure ample power is supplied to the reader for operation and charging. You can order a replacement power adapter in the [Dashboard](https://dashboard.stripe.com/terminal/shop/).

For a deeply discharged battery, a slow charging mechanism is applied to safely bring the battery to a safe zone for faster charging. During this phase, the charging LED indicator on the unit is on, however, the display remains off. This phase can take up to 30 minutes for a deeply discharged battery.

If you’re connecting the Stripe Reader S700/S710 to a computer or laptop, make sure the USB-C port can support the recommended 12W of power. The USB-A port standard *does not* support this power level—*do not* use it.

### The reader can’t connect

To check connectivity, go to the [reader settings](https://docs.stripe.com/terminal/payments/setup-reader/stripe-reader-s700-s710.md#settings) and select **Network**. This displays all available WiFi networks. To see more details about the connection, tap the connected network name.

To check WiFi or cellular signal strength, select **Advanced** -> **Diagnostics**. This displays diagnostic information about the reader including specific network information helpful in troubleshooting connection issues.

If you’re experiencing connectivity issues, run the [diagnostics tests](https://docs.stripe.com/terminal/readers/stripe-reader-s700-s710.md#diagnostics) to check Stripe connectivity and identify the root cause.

### The reader won’t update

If your reader doesn’t update, it’s possible that it can’t connect to Stripe. Run the [diagnostics tests](https://docs.stripe.com/terminal/readers/stripe-reader-s700-s710.md#diagnostics) to check Stripe connectivity. Make sure the Stripe connectivity test says `Passed`. If the test fails, follow the [troubleshooting steps](https://docs.stripe.com/terminal/readers/stripe-reader-s700-s710.md#reader-has-ip-address,-but-is-unable-to-communicate-with-stripe).

If you use a router, refer to your router’s manual and reconfigure the networking setup.

## Stripe reader software

Stripe maintains the software that controls the Stripe Reader S700/S710. The reader receives updates automatically from Stripe when not in use. These can include improvements and required security updates from Stripe and our hardware partners. As reader software updates are made available, update your readers to the latest available version to continue using Stripe Terminal. Failing to install a required update can prevent a reader from accepting payments.

The reader restarts every day at midnight for PCI compliance, and disconnects from the POS app every morning. Leave your reader on and connected to power to receive automatic software updates. This ensures that updates happen at midnight (in the timezone of the [assigned location](https://docs.stripe.com/terminal/fleet/locations-and-zones.md)) to avoid interruption to sales. If you unplug the reader at night, an update could start when you turn it back on. To manually check for an update, reboot the reader.

### Reader software version

The Stripe Reader S700/S710 software consists of four components: the reader application, firmware, configuration, and key identifier. The following table summarizes the latest version of each of these components for the countries where the Stripe Reader S700/S710 is available. You can find your reader’s versions in the [Diagnostics menu](https://docs.stripe.com/terminal/readers/stripe-reader-s700-s710.md#diagnostics).

> In PCI listings, the firmware identifier is in the format `STR7x-11-xxxxx-xxxxx`, where `xxxxx` is a placeholder for ROM version and firmware version, respectively. All versions are PCI compliant.
>
> Specifically, a PCI firmware ID `STR7x-11-WXYZZ-ABCDD` maps to ROM version `W.X.Y.ZZ` and firmware version `AA.BB.CC.DD.SZZZ.07`. For example, `STR7x-11-22404-10016` maps to ROM version `2.2.4.4` and firmware version `1.00.00.16`. If the ROM version only has three digits `W.X.Y`, `ZZ` is `00`.

| Countries                    | Reader     | Firmware     | Configuration          | ROM      |
| ---------------------------- | ---------- | ------------ | ---------------------- | -------- |
| US                           | `2.39.3.0` | `1.00.01.00` | `szzz_us_v11`          | `2.2.21` |
| CA                           | `2.39.3.0` | `1.00.01.00` | `szzz_ca_v4`           | `2.2.21` |
| AU                           | `2.39.3.0` | `1.00.01.00` | `szzz_prod_au_v11`     | `2.2.21` |
| MYNZ                         | `2.39.3.0` | `1.00.01.00` | `szzz_prod_apac_on_v5` | `2.2.21` |
| SG                           | `2.39.3.0` | `1.00.01.00` | `szzz_prod_apac_on_v5` | `2.2.21` |
| GBIEFI                       | `2.39.3.0` | `1.00.01.00` | `szzz_prod_eu_off_v3`  | `2.2.21` |
| ATBEDKFRITDENLESSECZLUPTCHNO | `2.39.3.0` | `1.00.01.00` | `szzz_prod_eu_on_v5`   | `2.2.21` |

### Reader software changelog

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

### Firmware versions

| Version      | Release date | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1.00.01.00` | `2026-02-24` | - General bug fixes and improvements.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `1.00.00.35` | `2025-10-22` | - General bug fixes and improvements.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `1.00.00.31` | `2025-09-10` | - General bug fixes and improvements.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `1.00.00.30` | `2025-08-06` | - General bug fixes and improvements.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `1.00.00.29` | `2025-06-30` | - General bug fixes and improvements.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `1.00.00.25` | `2025-04-28` | - Added a new “NFC UID” configuration that can be passed to the ‘Terminal.collectData’ method. Use this configuration to fetch the UID of an NFC instrument, such as a wristband or key card.

- Improved transaction performance for contact and contactless transactions.
- Fixed a bug in NFC card detection while in standby mode.
- Added support for Domestic Debit Priority partial AID matching.
- Added support for Cartes Bancaires.
- General bug fixes and improvements. |
  | `1.00.00.20` | `2025-03-05` | - Fixed a bug that in some cases impacted debit transactions.
- Fixed an issue where readers returned an incorrect “terminal.reader\_action\_failed” while processing.
- Added support for an additional 6 CAPK slots.
- Modified JCB CDA Signature Verification requirement according to EMV Bulletin No. 290.
- Added a fix for JCB L3 Test Case 212-01 and 213-01.
- Added a fix for Discover Test Case DGN DPAS L3 CL 030.
- Made additional bug fixes and improvements.        |

## See also

- [Set up Stripe Reader S700/S710](https://docs.stripe.com/terminal/payments/setup-reader/stripe-reader-s700-s710.md)
- [Set up your integration](https://docs.stripe.com/terminal/payments/setup-integration.md)
- [Connect to a reader](https://docs.stripe.com/terminal/payments/connect-reader.md)
- [Collect payments](https://docs.stripe.com/terminal/payments/collect-card-payment.md)

The BBPOS and Chipper™ name and logo are trademarks or registered trademarks of BBPOS Limited in the United States or other countries. The Verifone® name and logo are either trademarks or registered trademarks of Verifone in the United States and/or other countries. Use of the trademarks doesn’t imply any endorsement by BBPOS or Verifone.
