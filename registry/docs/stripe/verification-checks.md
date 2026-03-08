# Verification checks

Learn about the different verification checks supported by Stripe Identity.

Stripe Identity currently supports five types of verification checks: document, selfie, ID number, address, and phone.

Each verification check requires different information from your user, has different coverage, and has a different verification flow. After you’ve integrated one check, you can add another with minimal changes to your integration.

# Document

> This is a Document for when type is document. View the full page at https://docs.stripe.com/identity/verification-checks?type=document.

Document checks verify the authenticity of government-issued identity documents. Stripe uses a combination of AI models, automated heuristic analysis and manual reviewers to verify the authenticity of hundreds of different document types.

AI models are used to capture high-definition pictures of the fronts and backs of documents. The document images are analyzed in real-time to check for legibility and warn the user if the document is expired or unlikely to be verified. Stripe checks the images against a database of fraudulent document templates. This database is updated frequently, so that Stripe can detect new fake document templates and automatically block them.

Wherever available, barcodes and other machine-readable features of the document are decoded and consistency checks are performed to ensure that the text document data matches the machine-readable data.

To prevent “presentation attacks” — fraudster using pictures of stolen documents or someone else’s face, Stripe uses computer vision and AI algorithms to ensure the user captured an image of an actual document.

See the [Verify your users’ identity documents](https://docs.stripe.com/identity/verify-identity-documents.md) guide to learn how to integrate document checks into your app.

Additionally, document checks can also be [paired with ID number checks](https://docs.stripe.com/api/identity/verification_sessions/create.md#create_identity_verification_session-options-document-require_id_number). This ensures the authenticity of the document and ensure the information in it can be cross-referenced in third party databases.

## Availability

Document checks are available for most government issued documents (national IDs, driver’s licenses and passports) from the following countries:

Acceptable identity documents vary by country, however, passports are widely supported.

- AE
- AL
- AM
- AR
- AT
- AU
- AZ
- BD
- BE
- BG
- BH
- BJ
- BO
- BR
- BS
- BY
- CA
- CH
- CI
- CL
- CM
- CN
- CO
- CR
- CY
- CZ
- DE
- DK
- DO
- DZ
- EC
- EE
- EG
- ES
- FI
- FR
- GB
- GE
- GH
- GR
- GT
- HK
- HN
- HR
- HT
- HU
- ID
- IE
- IL
- IN
- IQ
- IT
- JE
- JM
- JO
- JP
- KE
- KR
- KW
- KZ
- LB
- LI
- LK
- LT
- LU
- LV
- MA
- MD
- MK
- MM
- MN
- MT
- MU
- MX
- MY
- NG
- NL
- NO
- NP
- NZ
- PA
- PE
- PH
- PK
- PL
- PR
- PS
- PT
- PY
- RO
- RS
- RU
- SA
- SE
- SG
- SI
- SK
- SV
- TH
- TN
- TR
- TW
- UA
- UG
- US
- UY
- UZ
- VE
- VN
- ZA

> Stripe doesn’t support extraction of document fields written in Arabic, Chinese, Cyrillic, Greek, Hebrew, Korean, Tamil, or Thai script.

# Selfie

> This is a Selfie for when type is selfie. View the full page at https://docs.stripe.com/identity/verification-checks?type=selfie.

While document checks provide a defense against the use of fraudulent identity documents, it’s possible for fraudsters to get access to legitimate stolen documents. To prevent this, Stripe Identity can perform selfie checks on your users.

Selfie checks look for distinguishing biological traits, such as face geometry, from a government-issued photo ID and a picture of your user’s face. Stripe then uses advanced machine learning algorithms to ensure the face pictures belong to the same person.

In some places, such as the EU, there are privacy laws that require you to justify your use of biometric technology or offer an alternative, non-biometric means of verification. We recommend you offer an alternative verification option or consult with your legal counsel.

### Availability

Selfie checks are available for government issued photo IDs from the following countries:

- AE
- AL
- AM
- AR
- AT
- AU
- AZ
- BD
- BE
- BG
- BH
- BJ
- BO
- BR
- BS
- BY
- CA
- CH
- CI
- CL
- CM
- CN
- CO
- CR
- CY
- CZ
- DE
- DK
- DO
- DZ
- EC
- EE
- EG
- ES
- FI
- FR
- GB
- GE
- GH
- GR
- GT
- HK
- HN
- HR
- HT
- HU
- ID
- IE
- IL
- IN
- IQ
- IT
- JE
- JM
- JO
- JP
- KE
- KR
- KW
- KZ
- LB
- LI
- LK
- LT
- LU
- LV
- MA
- MD
- MK
- MM
- MN
- MT
- MU
- MX
- MY
- NG
- NL
- NO
- NP
- NZ
- PA
- PE
- PH
- PK
- PL
- PR
- PS
- PT
- PY
- RO
- RS
- RU
- SA
- SE
- SG
- SI
- SK
- SV
- TH
- TN
- TR
- TW
- UA
- UG
- US
- UY
- UZ
- VE
- VN
- ZA

## Adding selfie checks

To add selfie checks to your application, first follow the guide to [collect and verify identity documents](https://docs.stripe.com/identity/verify-identity-documents.md).

## Adding selfie checks to VerificationSessions

When [creating a VerificationSession](https://docs.stripe.com/api/identity/verification_sessions/create.md), use the [options.document.require\_matching\_selfie](https://docs.stripe.com/api/identity/verification_sessions/create.md#create_identity_verification_session-options-document-require_matching_selfie) parameter to enable selfie checks.

```curl
curl https://api.stripe.com/v1/identity/verification_sessions \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d type=document \
  -d "options[document][require_matching_selfie]"=true
```

This configures the verification flow to require a government-issued photo ID and a selfie from your user.

## Accessing selfie check results

After it’s submitted and processed, the VerificationSession status changes depending on the result of the checks:

- `verified` — Both the document and selfie checks were successful. The session [verified\_outputs](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-verified_outputs) contains extracted information from the document.
- `requires_input` — At least one of the document or the selfie checks failed.

To access the captured selfie and document images, you’ll need to retrieve the associated [VerificationReport](https://docs.stripe.com/api/identity/verification_reports.md), you can do this by [expanding](https://docs.stripe.com/api/expanding_objects.md) the [last\_verification\_report](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-last_verification_report) field in the session:

#### Node.js

```javascript

// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');
const verificationSession = await stripe.identity.verificationSessions.retrieve(
  '{{SESSION_ID}}',
  {
    expand: ['last_verification_report'],
  }
);
const verificationReport = verificationSession.last_verification_report;
```

The VerificationReport has [document](https://docs.stripe.com/api/identity/verification_reports/object.md#identity_verification_report_object-document) and [selfie](https://docs.stripe.com/api/identity/verification_reports/object.md#identity_verification_report_object-selfie) fields holding the results of the document and selfie checks. Here’s an example VerificationReport with successful document and selfie checks:

```json
{
  "id": "vr_orWziM4j7CiRL8J4vQmXgW2w",
  "object": "identity.verification_report",
  "type": "document",
  "verification_session": "vs_orWziM4j7CiRL8J4vQmXgW2w",
  "created": 1611776872,
  "livemode": true,
  "options": {
    "document": {
      "require_matching_selfie": true
    }
  },
  "document": {
    "status": "verified",
    "error": null,
    "first_name": "Jenny",
    "last_name": "Rosen",
    "address": {
      "line1": "1234 Main St.",
      "city": "San Francisco",
      "state": "CA",
      "postal_code": "94111",
      "country": "US"
    },
    "document_type": "id_card",
    "expiration_date": {
      "day": 17,
      "month": 7,
      "year": 2024
    },
    "files": ["file_orWziM4j7CiRL8J4vQmXgW2w", "file_orWziM4j7CiRL8J4vQmXgW2w"],
    "issued_date": {
      "day": 4,
      "month": 27,
      "year": 2021
    },
    "issuing_country": "US"
  },
  "selfie": {
    "status": "verified",
    "error": null,
    "document": "file_orWziM4j7CiRL8J4vQmXgW2w",
    "selfie": "file_orWziM4j7CiRL8J4vQmXgW2w",
  }
}
```

To access the collected document and face images, see [Accessing verification results](https://docs.stripe.com/identity/access-verification-results.md).

## Understanding selfie check failures

The [document](https://docs.stripe.com/api/identity/verification_reports/object.md#identity_verification_report_object-document) and [selfie](https://docs.stripe.com/api/identity/verification_reports/object.md#identity_verification_report_object-selfie) VerificationReport fields contain the collected data as well as a `status` and `error` fields to help you understand whether the check is successful or not.

The `status` field tells you whether each check is successful or not. The possible values are:

- `verified` - The verification check is successful and the collected data is verified.
- `unverified` - The verification check failed. You can check the `error` hash for more information.

When the verification check fails, the `error` field contains `code` and `reason` values to explain the verification failure. The `error.code` field can be used to programmatically handle verification failures. The `reason` field contains a descriptive message explaining the failure reason and can be shown to your user.

### Document check failures

Failure details are available in the report [document.error](https://docs.stripe.com/api/identity/verification_reports/object.md#identity_verification_report_object-document-error) field.

| Error code                    | Description                                                                                                                                                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `document_expired`            | The provided identity document has expired.                                                                                                                                                                                          |
| `document_unverified_other`   | Stripe couldn’t verify the provided identity document. [See list of supported document types](https://docs.stripe.com/identity/verification-checks.md?type=document).                                                                |
| `document_type_not_supported` | The provided identity document isn’t one of the session’s [allowed document types](https://docs.stripe.com/api/identity/verification_sessions/create.md#create_identity_verification_session-options-document-allow_document_types). |

### Selfie check failures

Failure details are available in the report [selfie.error](https://docs.stripe.com/api/identity/verification_reports/object.md#identity_verification_report_object-selfie-error) field.

| Error code                      | Description                                                         |
| ------------------------------- | ------------------------------------------------------------------- |
| `selfie_document_missing_photo` | The provided identity document did not contain a picture of a face. |
| `selfie_face_mismatch`          | The captured face image didn’t match with the document’s face.      |
| `selfie_unverified_other`       | Stripe couldn’t verify the provided selfie.                         |
| `selfie_manipulated`            | The captured face image was manipulated.                            |

# ID Number

> This is a ID Number for when type is id-number. View the full page at https://docs.stripe.com/identity/verification-checks?type=id-number.

ID Number checks provide a way to verify a user’s name, date of birth, and national ID number. Stripe uses a combination of third-party data sources such as credit agencies or bureaus, utility or government-issued databases, and others to verify the provided ID number.

To add ID number checks to your app, see [Creating a VerificationSession](https://docs.stripe.com/identity/verification-sessions.md#create).

### Availability

ID Number checks are available in the following countries:

- US

# Phone (Invite only)

> This is a Phone (Invite only) for when type is phone. View the full page at https://docs.stripe.com/identity/verification-checks?type=phone.

Phone number verification is a low-friction verification method that helps reduce conversion time and improve the verification process. Stripe asks a user for their phone number and legal name in the identity flow. We’ll send an SMS verification code to the given phone number, that the user must confirm on the screen. Simultaneously, we’ll attempt to verify phone number ownership using our records along with other risk signals on the Stripe network. If we can verify ownership data, the user can return to your site. If we can’t reach a decision, the user can seamlessly transition into a document verification flow.

### Availability  (Invite only)

[Contact us](mailto:identity-phone-verification-beta@stripe.com) to request access to phone number checks in the following countries:

- US

# Address (Invite only)

> This is a Address (Invite only) for when type is address. View the full page at https://docs.stripe.com/identity/verification-checks?type=address.

Address checks provide a way to verify a user’s name, date of birth, and address. Stripe uses a combination of third-party data sources such as credit agencies or bureaus, utility or government-issued databases, and others to verify the provided address.

To add address checks to your app, see [Creating a VerificationSession](https://docs.stripe.com/identity/verification-sessions.md#create).

### Availability  (Invite only)

[Reach out to support](https://support.stripe.com/contact) to request access to address checks in the following countries:

- AT
- AU
- BE
- BR
- CA
- CH
- CZ
- DE
- DK
- ES
- FI
- FR
- GB
- HK
- ID
- IE
- IT
- MT
- MX
- MY
- NL
- NO
- PL
- PT
- RO
- SE
- SG
- SK
- TH
- US

## See also

- [Verify your users’ identity documents](https://docs.stripe.com/identity/verify-identity-documents.md)
- [The Verification Sessions API](https://docs.stripe.com/identity/verification-sessions.md#create)
