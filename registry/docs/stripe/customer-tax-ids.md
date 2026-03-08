# Customer tax IDs

Store, validate, and render customer tax ID numbers with Stripe Invoicing.

Need another tax ID type? Request additional Tax ID types by emailing [stripe-tax@stripe.com](mailto:stripe-tax@stripe.com?subject=Request).

Displaying a customer’s tax ID on *invoice* (Invoices are statements of amounts owed by a customer. They track the status of payments from draft through paid or otherwise finalized. Subscriptions automatically generate invoices, or you can manually create a one-off invoice) documents is a common requirement that you can satisfy by adding tax IDs to customers. A customer’s tax IDs display in the header of invoice and credit note PDFs.

## Supported Tax ID types

Currently, Stripe supports the following Tax ID types in the following regions:

| Country | Enum       | Description                                                                                             | Example               | Impact in Tax Calculation\* |
| ------- | ---------- | ------------------------------------------------------------------------------------------------------- | --------------------- | -------------------------- |
| AD      | ad\_nrt     | Andorran NRT number                                                                                     | A-123456-Z            | No                         |
| AE      | ae\_trn     | United Arab Emirates TRN                                                                                | 123456789012345       | Yes                        |
| AL      | al\_tin     | Albania Tax Identification Number                                                                       | J12345678N            | Yes                        |
| AM      | am\_tin     | Armenia Tax Identification Number                                                                       | 02538904              | Yes                        |
| AO      | ao\_tin     | Angola Tax Identification Number                                                                        | 5123456789            | No                         |
| AR      | ar\_cuit    | Argentinian tax ID number                                                                               | 12-3456789-01         | No                         |
| AT      | eu\_vat     | European VAT number                                                                                     | ATU12345678           | Yes                        |
| AU      | au\_abn     | Australian Business Number (AU ABN)                                                                     | 12345678912           | Yes                        |
| AU      | au\_arn     | Australian Taxation Office Reference Number                                                             | 123456789123          | No                         |
| AW      | aw\_tin     | Aruba Tax Identification Number                                                                         | 12345678              | Yes                        |
| AZ      | az\_tin     | Azerbaijan Tax Identification Number                                                                    | 0123456789            | Yes                        |
| BA      | ba\_tin     | Bosnia and Herzegovina Tax Identification Number                                                        | 123456789012          | Yes                        |
| BB      | bb\_tin     | Barbados Tax Identification Number                                                                      | 1123456789012         | No                         |
| BD      | bd\_bin     | Bangladesh Business Identification Number                                                               | 123456789-0123        | Yes                        |
| BE      | eu\_vat     | European VAT number                                                                                     | BE0123456789          | Yes                        |
| BF      | bf\_ifu     | Burkina Faso Tax Identification Number (Numéro d'Identifiant Fiscal Unique)                             | 12345678A             | Yes                        |
| BG      | bg\_uic     | Bulgaria Unified Identification Code                                                                    | 123456789             | No                         |
| BG      | eu\_vat     | European VAT number                                                                                     | BG0123456789          | Yes                        |
| BH      | bh\_vat     | Bahraini VAT Number                                                                                     | 123456789012345       | Yes                        |
| BJ      | bj\_ifu     | Benin Tax Identification Number (Identifiant Fiscal Unique)                                             | 1234567890123         | Yes                        |
| BO      | bo\_tin     | Bolivian tax ID                                                                                         | 123456789             | No                         |
| BR      | br\_cnpj    | Brazilian CNPJ number                                                                                   | 01.234.456/5432-10    | No                         |
| BR      | br\_cpf     | Brazilian CPF number                                                                                    | 123.456.789-87        | No                         |
| BS      | bs\_tin     | Bahamas Tax Identification Number                                                                       | 123.456.789           | No                         |
| BY      | by\_tin     | Belarus TIN Number                                                                                      | 123456789             | Yes                        |
| CA      | ca\_bn      | Canadian BN                                                                                             | 123456789             | No                         |
| CA      | ca\_gst\_hst | Canadian GST/HST number                                                                                 | 123456789RT0002       | Yes                        |
| CA      | ca\_pst\_bc  | Canadian PST number (British Columbia)                                                                  | PST-1234-5678         | No                         |
| CA      | ca\_pst\_mb  | Canadian PST number (Manitoba)                                                                          | 123456-7              | No                         |
| CA      | ca\_pst\_sk  | Canadian PST number (Saskatchewan)                                                                      | 1234567               | No                         |
| CA      | ca\_qst     | Canadian QST number (Québec)                                                                            | 1234567890TQ1234      | Yes                        |
| CD      | cd\_nif     | Congo (DR) Tax Identification Number (Número de Identificação Fiscal)                                   | A0123456M             | No                         |
| CH      | ch\_uid     | Switzerland UID number                                                                                  | CHE-123.456.789 HR    | No                         |
| CH      | ch\_vat     | Switzerland VAT number                                                                                  | CHE-123.456.789 MWST  | Yes                        |
| CL      | cl\_tin     | Chilean TIN                                                                                             | 12.345.678-K          | Yes                        |
| CM      | cm\_niu     | Cameroon Tax Identification Number (Numéro d'Identifiant fiscal Unique)                                 | M123456789000L        | No                         |
| CN      | cn\_tin     | Chinese tax ID                                                                                          | 123456789012345678    | No                         |
| CO      | co\_nit     | Colombian NIT number                                                                                    | 123.456.789-0         | No                         |
| CR      | cr\_tin     | Costa Rican tax ID                                                                                      | 1-234-567890          | No                         |
| CV      | cv\_nif     | Cape Verde Tax Identification Number (Número de Identificação Fiscal)                                   | 213456789             | No                         |
| CY      | eu\_vat     | European VAT number                                                                                     | CY12345678Z           | Yes                        |
| CZ      | eu\_vat     | European VAT number                                                                                     | CZ1234567890          | Yes                        |
| DE      | de\_stn     | German Tax Number (Steuernummer)                                                                        | 1234567890            | No                         |
| DE      | eu\_vat     | European VAT number                                                                                     | DE123456789           | Yes                        |
| DK      | eu\_vat     | European VAT number                                                                                     | DK12345678            | Yes                        |
| DO      | do\_rcn     | Dominican RCN number                                                                                    | 123-4567890-1         | No                         |
| EC      | ec\_ruc     | Ecuadorian RUC number                                                                                   | 1234567890001         | No                         |
| EE      | eu\_vat     | European VAT number                                                                                     | EE123456789           | Yes                        |
| EG      | eg\_tin     | Egyptian Tax Identification Number                                                                      | 123456789             | Yes                        |
| ES      | es\_cif     | Spanish NIF number (previously Spanish CIF number)                                                      | A12345678             | No                         |
| ES      | eu\_vat     | European VAT number                                                                                     | ESA1234567Z           | Yes                        |
| ET      | et\_tin     | Ethiopia Tax Identification Number                                                                      | 1234567890            | Yes                        |
| EU      | eu\_oss\_vat | European One Stop Shop VAT number for non-Union scheme                                                  | EU123456789           | No                         |
| FI      | eu\_vat     | European VAT number                                                                                     | FI12345678            | Yes                        |
| FR      | eu\_vat     | European VAT number                                                                                     | FRAB123456789         | Yes                        |
| GB      | eu\_vat     | Northern Ireland VAT number                                                                             | XI123456789           | Yes                        |
| GB      | gb\_vat     | United Kingdom VAT number                                                                               | GB123456789           | Yes                        |
| GE      | ge\_vat     | Georgian VAT                                                                                            | 123456789             | Yes                        |
| GN      | gn\_nif     | Guinea Tax Identification Number (Número de Identificação Fiscal)                                       | 123456789             | Yes                        |
| GR      | eu\_vat     | European VAT number                                                                                     | EL123456789           | Yes                        |
| HK      | hk\_br      | Hong Kong BR number                                                                                     | 12345678              | No                         |
| HR      | eu\_vat     | European VAT number                                                                                     | HR12345678912         | Yes                        |
| HR      | hr\_oib     | Croatian Personal Identification Number                                                                 | 12345678901           | No                         |
| HU      | eu\_vat     | European VAT number                                                                                     | HU12345678            | Yes                        |
| HU      | hu\_tin     | Hungary tax number (adószám)                                                                            | 12345678-1-23         | No                         |
| ID      | id\_npwp    | Indonesian NPWP number                                                                                  | 012.345.678.9-012.345 | No                         |
| IE      | eu\_vat     | European VAT number                                                                                     | IE1234567AB           | Yes                        |
| IL      | il\_vat     | Israel VAT                                                                                              | 000012345             | No                         |
| IN      | in\_gst     | Indian GST number                                                                                       | 12ABCDE3456FGZH       | Yes                        |
| IS      | is\_vat     | Icelandic VAT                                                                                           | 123456                | Yes                        |
| IT      | eu\_vat     | European VAT number                                                                                     | IT12345678912         | Yes                        |
| JP      | jp\_cn      | Japanese Corporate Number (*Hōjin Bangō*)                                                               | 1234567891234         | No                         |
| JP      | jp\_rn      | Japanese Registered Foreign Businesses' Registration Number (*Tōroku Kokugai Jigyōsha no Tōroku Bangō*) | 12345                 | No                         |
| JP      | jp\_trn     | Japanese Tax Registration Number (*Tōroku Bangō*)                                                       | T1234567891234        | Yes                        |
| KE      | ke\_pin     | Kenya Revenue Authority Personal Identification Number                                                  | P000111111A           | No                         |
| KG      | kg\_tin     | Kyrgyzstan Tax Identification Number                                                                    | 12345678901234        | No                         |
| KH      | kh\_tin     | Cambodia Tax Identification Number                                                                      | 1001-123456789        | Yes                        |
| KR      | kr\_brn     | Korean BRN                                                                                              | 123-45-67890          | Yes                        |
| KZ      | kz\_bin     | Kazakhstani Business Identification Number                                                              | 123456789012          | Yes                        |
| LA      | la\_tin     | Laos Tax Identification Number                                                                          | 123456789-000         | No                         |
| LI      | li\_uid     | Liechtensteinian UID number                                                                             | CHE123456789          | No                         |
| LI      | li\_vat     | Liechtensteinian VAT number                                                                             | 12345                 | Yes                        |
| LK      | lk\_vat     | Sri Lanka VAT number                                                                                    | 123456789-1234        | Yes                        |
| LT      | eu\_vat     | European VAT number                                                                                     | LT123456789123        | Yes                        |
| LU      | eu\_vat     | European VAT number                                                                                     | LU12345678            | Yes                        |
| LV      | eu\_vat     | European VAT number                                                                                     | LV12345678912         | Yes                        |
| MA      | ma\_vat     | Morocco VAT Number                                                                                      | 12345678              | Yes                        |
| MD      | md\_vat     | Moldova VAT Number                                                                                      | 1234567               | Yes                        |
| ME      | me\_pib     | Montenegro PIB Number                                                                                   | 12345678              | No                         |
| MK      | mk\_vat     | North Macedonia VAT Number                                                                              | MK1234567890123       | Yes                        |
| MR      | mr\_nif     | Mauritania Tax Identification Number (Número de Identificação Fiscal)                                   | 12345678              | No                         |
| MT      | eu\_vat     | European VAT number                                                                                     | MT12345678            | Yes                        |
| MX      | mx\_rfc     | Mexican RFC number                                                                                      | ABC010203AB9          | No                         |
| MY      | my\_frp     | Malaysian FRP number                                                                                    | 12345678              | No                         |
| MY      | my\_itn     | Malaysian ITN                                                                                           | C 1234567890          | No                         |
| MY      | my\_sst     | Malaysian SST number                                                                                    | A12-3456-78912345     | No                         |
| NG      | ng\_tin     | Nigerian Tax Identification Number                                                                      | 12345678-0001         | No                         |
| NL      | eu\_vat     | European VAT number                                                                                     | NL123456789B12        | Yes                        |
| NO      | no\_vat     | Norwegian VAT number                                                                                    | 123456789MVA          | Yes                        |
| NO      | no\_voec    | Norwegian VAT on e-commerce number                                                                      | 1234567               | No                         |
| NP      | np\_pan     | Nepal PAN Number                                                                                        | 123456789             | Yes                        |
| NZ      | nz\_gst     | New Zealand GST number                                                                                  | 123456789             | Yes                        |
| OM      | om\_vat     | Omani VAT Number                                                                                        | OM1234567890          | Yes                        |
| PE      | pe\_ruc     | Peruvian RUC number                                                                                     | 12345678901           | Yes                        |
| PH      | ph\_tin     | Philippines Tax Identification Number                                                                   | 123456789012          | Yes                        |
| PL      | eu\_vat     | European VAT number                                                                                     | PL1234567890          | Yes                        |
| PL      | pl\_nip     | Polish NIP number                                                                                       | 1234567890            | No                         |
| PT      | eu\_vat     | European VAT number                                                                                     | PT123456789           | Yes                        |
| RO      | eu\_vat     | European VAT number                                                                                     | RO1234567891          | Yes                        |
| RO      | ro\_tin     | Romanian tax ID number                                                                                  | 1234567890123         | No                         |
| RS      | rs\_pib     | Serbian PIB number                                                                                      | 123456789             | No                         |
| RU      | ru\_inn     | Russian INN                                                                                             | 1234567891            | Yes                        |
| RU      | ru\_kpp     | Russian KPP                                                                                             | 123456789             | Yes                        |
| SA      | sa\_vat     | Saudi Arabia VAT                                                                                        | 123456789012345       | Yes                        |
| SE      | eu\_vat     | European VAT number                                                                                     | SE123456789123        | Yes                        |
| SG      | sg\_gst     | Singaporean GST                                                                                         | M12345678X            | Yes                        |
| SG      | sg\_uen     | Singaporean UEN                                                                                         | 123456789F            | No                         |
| SI      | eu\_vat     | European VAT number                                                                                     | SI12345678            | Yes                        |
| SI      | si\_tin     | Slovenia tax number (davčna številka)                                                                   | 12345678              | No                         |
| SK      | eu\_vat     | European VAT number                                                                                     | SK1234567891          | Yes                        |
| SN      | sn\_ninea   | Senegal NINEA Number                                                                                    | 12345672A2            | No                         |
| SR      | sr\_fin     | Suriname FIN Number                                                                                     | 1234567890            | Yes                        |
| SV      | sv\_nit     | El Salvadorian NIT number                                                                               | 1234-567890-123-4     | No                         |
| TH      | th\_vat     | Thai VAT                                                                                                | 1234567891234         | Yes                        |
| TJ      | tj\_tin     | Tajikistan Tax Identification Number                                                                    | 123456789             | Yes                        |
| TR      | tr\_tin     | Turkish Tax Identification Number                                                                       | 0123456789            | Yes                        |
| TW      | tw\_vat     | Taiwanese VAT                                                                                           | 12345678              | Yes                        |
| TZ      | tz\_vat     | Tanzania VAT Number                                                                                     | 12345678A             | Yes                        |
| UA      | ua\_vat     | Ukrainian VAT                                                                                           | 123456789             | Yes                        |
| UG      | ug\_tin     | Uganda Tax Identification Number                                                                        | 1014751879            | Yes                        |
| US      | us\_ein     | United States EIN                                                                                       | 12-3456789            | No                         |
| UY      | uy\_ruc     | Uruguayan RUC number                                                                                    | 123456789012          | Yes                        |
| UZ      | uz\_tin     | Uzbekistan TIN Number                                                                                   | 123456789             | No                         |
| UZ      | uz\_vat     | Uzbekistan VAT Number                                                                                   | 123456789012          | Yes                        |
| VE      | ve\_rif     | Venezuelan RIF number                                                                                   | A-12345678-9          | No                         |
| VN      | vn\_tin     | Vietnamese tax ID number                                                                                | 1234567890            | No                         |
| ZA      | za\_vat     | South African VAT number                                                                                | 4123456789            | Yes                        |
| ZM      | zm\_tin     | Zambia Tax Identification Number                                                                        | 1004751879            | No                         |
| ZW      | zw\_tin     | Zimbabwe Tax Identification Number                                                                      | 1234567890            | No                         |

\*Stripe Tax won't apply tax if this tax ID is provided, in line with the relevant laws.

## Validation

You’re responsible for the accuracy of customer information including their tax ID number. The invoice includes the customer tax ID whether or not it’s valid.

Stripe provides automatic validation to help determine ​​if the formatting is correct when you add the ID to our system. You can see the results of the validation in the Dashboard along with other customer information, including details returned from the government databases, and the registered name and address. However, we don’t continue to validate them over time. ​​If automatic validation isn’t available, you must manually verify these IDs.

### Australian Business Numbers (ABN)

Stripe automatically validates all Australian Business Numbers (ABNs) with the [Australian Business Register (ABR)](https://abr.gov.au/). This process only verifies the validity of the tax ID, and not whether the customer’s name, address, and GST registration status match what’s on the customers page in the Dashboard.

### European Value-Added-Tax (EU VAT) Numbers

Stripe also automatically validates all European Value-Added-Tax (EU VAT) numbers with the [European Commission’s VAT Information Exchange System (VIES)](http://ec.europa.eu/taxation_customs/vies/). This process only validates whether or not the tax ID is valid—you still need to verify the customer’s name and address to make sure it matches the registration information.

VIES validation usually takes only a few seconds, but depending on the availability of various government databases, might take longer. Stripe automatically handles VIES downtime and attempts retries.

### United Kingdom Value-Added-Tax (GB VAT) Numbers

Stripe automatically validates all UK Value-Added-Tax (GB VAT) numbers with the [United Kingdom’s Revenue & Customs (HMRC)](https://www.gov.uk/). This process only validates whether or not the tax ID is valid—you still need to verify the customer’s name and address to make sure it matches the registration information.

HMRC validation usually takes only a few seconds, but depending on the availability, might take longer. Stripe automatically handles HMRC downtime and attempts retries.

### Testing customer tax ID verification

Use these magic tax IDs to trigger certain verification conditions in testing environments. The tax ID type must be the Australian Business Number (ABN), EU VAT Number, or UK Value-Added-Tax (GB VAT) number.

| Number      | Type                                      |
| ----------- | ----------------------------------------- |
| `000000000` | Successful verification                   |
| `111111111` | Unsuccessful verification                 |
| `222222222` | Verification remains pending indefinitely |

### Validation webhooks and Dashboard display

Because this validation process happens asynchronously, the [customer.tax\_id.updated](https://docs.stripe.com/api/events/types.md#event_types-customer.tax_id.updated) webhook notifies you of validation updates.
![Tax validation tooltip in the Dashboard](https://b.stripecdn.com/docs-statics-srv/assets/validation-tooltip.de17a6f286a786e5643e39f43c02a42e.png)

Hover over a customer’s EU VAT number to display their VIES information.

The Dashboard displays the results of the validation within the customer details, including information returned from the government databases, and the registered name and address.

When automatic validation isn’t available, you must manually verify these IDs.

## Managing

You can manage tax IDs in the Dashboard, with the [customer portal](https://docs.stripe.com/customer-management.md), or the [Tax ID API](https://docs.stripe.com/api/customer_tax_ids.md).

#### Dashboard

To add a tax ID:

1. Navigate to the [Customers](https://dashboard.stripe.com/customers) page, and select the applicable customer.
2. Click the pencil icon next to **Details** on the right.
3. Scroll down to **Tax Status** and **Tax ID** fields.
4. Click **Add another ID** to add a row to the tax ID list, where you can select the ID type and value.

#### API

The following example shows how to [create a new tax ID](https://docs.stripe.com/api/tax_ids/create.md) on a customer storing their VAT number:

> To update a tax ID, delete the old ID and create ​​another one.

```curl
curl https://api.stripe.com/v1/tax_ids \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d type=eu_vat \
  -d value=DE123456789 \
  -d "owner[type]"=customer \
  -d "owner[customer]"="{{CUSTOMER_ID}}"
```

To [delete a tax ID](https://docs.stripe.com/api/tax_ids/delete.md):

```curl
curl -X DELETE https://api.stripe.com/v1/tax_ids/{{TAXID_ID}} \
  -u "<<YOUR_SECRET_KEY>>:"
```
