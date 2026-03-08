## Prepare your dataset

To create an RFT fine-tune, you'll need both a training and test dataset. Both the training and test datasets will share the same [JSONL format](https://jsonlines.org/). Each line in the JSONL data file will contain a `messages` array, along with any additional fields required to grade the output from the model. The full specification for RFT dataset [can be found here](https://developers.openai.com/api/docs/api-reference/fine-tuning/reinforcement-input).

In our case, in addition to the `messages` array, each line in our JSONL file also needs `compliant` and `explanation` properties, which we can use as reference values to test the fine-tuned model's Structured Output.

A single line in our training and test datasets looks like this as indented JSON:

```json
{
  "messages": [
    {
      "role": "user",
      "content": "Do you have a dedicated security team?"
    }
  ],
  "compliant": "yes",
  "explanation": "A dedicated security team follows strict protocols for handling incidents."
}
```

Below, find some JSONL data you can use for both training and testing when you create your fine-tune job. Note that these datasets are for illustration purposes only—in your real test data, strive for diverse and representative inputs for your application.

**Training set**

```
{"messages":[{"role":"user","content":"Do you have a dedicated security team?"}],"compliant":"yes","explanation":"A dedicated security team follows strict protocols for handling incidents."}
{"messages":[{"role":"user","content":"Have you undergone third-party security audits or penetration testing in the last 12 months?"}],"compliant":"needs review","explanation":"The policy does not explicitly mention undergoing third-party security audits or penetration testing. It only mentions SOC 2 and GDPR compliance."}
{"messages":[{"role":"user","content":"Is your software SOC 2, ISO 27001, or similarly certified?"}],"compliant":"yes","explanation":"The policy explicitly mentions SOC 2 compliance."}
```

**Test set**

```
{"messages":[{"role":"user","content":"Will our data be encrypted at rest?"}],"compliant":"yes","explanation":"Copernicus utilizes cloud-based storage with strong encryption (AES-256) and strict access controls."}
{"messages":[{"role":"user","content":"Will data transmitted to/from your services be encrypted in transit?"}],"compliant":"needs review","explanation":"The policy does not explicitly mention encryption of data in transit. It focuses on encryption in cloud storage."}
{"messages":[{"role":"user","content":"Do you enforce multi-factor authentication (MFA) internally?"}],"compliant":"yes","explanation":"The policy explicitly mentions role-based authentication with multi-factor security."}
```

How much training data is needed?

Start small—between several dozen and a few hundred examples—to determine the usefulness of RFT before investing in a large dataset. For product safety reasons, the training set must first pass through an automated screening process. Large datasets take longer to process. This screening process begins when you start a fine-tuning job with a file, not upon initial file upload. Once a file has successfully completed screening, you can use it repeatedly without delay.

Dozens of examples can be meaningful as long as they're high quality. After screening, more data is better, as long as it remains high quality. With larger datasets, you can use a higher batch size, which tends to improve training stability.

Your training file can contain a maximum of 50,000 examples. Test datasets can contain a maximum of 1,000 examples. Test datasets also go through automated screening.

### Upload your files

The process for uploading RFT training and test data files is the same as [supervised fine-tuning](https://developers.openai.com/api/docs/guides/supervised-fine-tuning). Upload your training data to OpenAI either through the [API](https://developers.openai.com/api/docs/api-reference/files/create) or [using our UI](https://platform.openai.com/storage). Files must be uploaded with a purpose of `fine-tune` in order to be used with fine-tuning.

**You need file IDs for both your test and training data files** to create a fine-tune job.
