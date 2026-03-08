### Set up the campaign send function

**File**: `functions/marketing-campaign-send/index.ts`
**Trigger**: Document changes on `marketingCampaign` documents specifically toggling the `status` to `ready to send`
**Purpose**: Sends approved marketing campaigns to subscribers via Klaviyo.

#### Key Features

- **Campaign Validation**: Ensures campaign is ready for sending
- **Status Management**: Updates campaign and email status after sending
- **Error Handling**: Handles Klaviyo API errors gracefully
- **Rate Limiting**: Respects Klaviyo's API rate limits

#### Process Flow

**Document Event Trigger**

- Listens for changes to `marketingCampaign`  documents
- Validates that campaign has the required Klaviyo campaign ID

**Campaign Sending**

- Calls Klaviyo's send job API
- Handles various error scenarios (rate limits, permissions, etc.)
- Updates campaign status to `sent`

\*\*Status Updates \*\*

- Updates marketing campaign document with send timestamp
- Updates post status to `sent`
- Creates success/error notifications

#### Add environment variables

Find the API key for your Klaviyo account and email list, and paste it into the environment file:

**.env**

```
KLAVIYO_API_KEY=your_klaviyo_api_key
```

#### Add code to the send campaign function file

**marketing-campaign-send/index.ts**

```
import { documentEventHandler, type DocumentEvent } from '@sanity/functions'
import { createClient } from '@sanity/client'

interface MarketingCampaignDocument {
  _id: string;
  _type: string;
  klaviyoCampaignId?: string;
  post?: {
    _ref: string;
  };
  status?: string;
}

interface KlaviyoSendJobResponse {
  data: {
    id: string;
    type: string;
    attributes: {
      status: string;
    };
  };
}

export const handler = documentEventHandler(async ({ context, event}: { context: any, event: DocumentEvent<MarketingCampaignDocument> }) => {
  console.log('🚀 Marketing Campaign Send Function called at', new Date().toISOString())
  console.log('🚀 Event:', event)

  try {
    const { _id, _type, klaviyoCampaignId, post } = event.data as MarketingCampaignDocument
    
    // Get Klaviyo API credentials from environment
    const klaviyoApiKey = process.env.KLAVIYO_API_KEY

    if (!klaviyoApiKey) {
      console.error('❌ KLAVIYO_API_KEY not found in environment variables')
      return
    }

    if (_type !== 'marketingCampaign') {
      console.log('⏭️ Skipping non-marketingCampaign document:', _type)
      return
    }

    // Check if marketing campaign has a post reference
    if (!post?._ref) {
      console.log('⏭️ Marketing campaign does not have a post reference - skipping')
      return
    }

    const client = createClient({
      ...context.clientOptions,
      dataset: 'production',
      apiVersion: '2025-06-01',
    })

    // Get the post document from the marketing campaign reference
    const postId = post._ref
    const postDocument = await client.getDocument(postId)

    if (!postDocument) {
      console.error('❌ Email document not found:', postId)
      return
    }

    if (!klaviyoCampaignId) {
      console.error('❌ Klaviyo campaign ID not found in marketing campaign document')
      return
    }

    console.log('📢 Sending Klaviyo campaign:', klaviyoCampaignId)

    try {
      // Send the campaign using Klaviyo's send endpoint
      const sendCampaignResponse = await fetch(`https://a.klaviyo.com/api/campaign-send-jobs`, {
        method: 'POST',
        headers: {
          'Authorization': `Klaviyo-API-Key ${klaviyoApiKey}`,
          'Content-Type': 'application/json',
          'accept': 'application/vnd.api+json',
          'revision': '2025-07-15'
        },
        body: JSON.stringify({
          data: {
            type: 'campaign-send-job',
            id: klaviyoCampaignId
          }
        })
      })

      if (!sendCampaignResponse.ok) {
        const errorText = await sendCampaignResponse.text()
        console.error('❌ Failed to send Klaviyo campaign:', sendCampaignResponse.status, errorText)
        
        // Handle specific error cases
        if (sendCampaignResponse.status === 429) {
          console.error('❌ Rate limit exceeded. Klaviyo allows 10/s burst, 150/m steady')
        } else if (sendCampaignResponse.status === 400) {
          console.error('❌ Bad request. Check campaign data format')
        } else if (sendCampaignResponse.status === 403) {
          console.error('❌ Forbidden. Check API key permissions (campaigns:write scope required)')
        } else if (sendCampaignResponse.status === 422) {
          console.error('❌ Unprocessable entity. Campaign may not be ready to send')
        }
        return
      }

      const sendJobResponse: KlaviyoSendJobResponse = await sendCampaignResponse.json()
      console.log('✅ Campaign send job created successfully:', sendJobResponse.data.id)

      // Update the marketing campaign document status to 'sent'
      console.log('🔄 Updating marketing campaign status to sent')
      await client.patch(_id, {
        set: {
          status: 'sent',
          sentAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      }).commit()

      console.log('✅ Marketing campaign status updated to sent')

      // Update the email status to 'sent' (this should not trigger further updates)
      console.log('🔄 Updating post status to sent')
      await client.patch(postId, {
        set: {
          status: 'sent'
        }
      }).commit()

      console.log('✅ Post status updated to sent')

      console.log('✅ Campaign send completed successfully:', {
        postId: postId,
        marketingCampaignId: _id,
        klaviyoCampaignId: klaviyoCampaignId,
        sendJobId: sendJobResponse.data.id
      })

    } catch (error) {
      console.error('❌ Error sending Klaviyo campaign:', error)
      
      throw error
    }

  } catch (error) {
    console.error('❌ Error processing campaign send:', error)

    
    throw error
  }
})
```

### Test and deploy the functions

You should test if the functions run locally, and deploy them to production when you have validated that everything is correctly set up.

## Usage guide

Once the functions are deployed, you test out the flow in the Studio.

### Creating a Marketing Campaign

1. **Create an Post in Sanity Studio** - build an initial post/email in the Sanity studio, include copy/products/etc
2. **Function Automatically Triggers**

- Creates Klaviyo template with rendered content
- Creates Klaviyo campaign with audience targeting
- Links post to marketing campaign
- Updates post status to `ready-for-review`

### Sending a Campaign

1. **Update Marketing Campaign Status** - When you're ready to send the campaign, go into the campaign that's ready and change the status to ready-to-send
2. **Function Automatically Triggers**

- Sends campaign via Klaviyo API
- Updates campaign status to `sent`
- Updates post status to `sent`
- Creates success notification

> \[!NOTE]
> Why 2 Different Functions?
> Given the complexity of the workflow, it makes more sense to separate these functions so they're easy to troubleshoot and extend with your use cases. Putting all these switch statements into 1 giant function would just increase the technical debt and complexity so we split them up!

## Troubleshooting

### Common Issues

1. **API Key Issues**- Verify API key has correct permissions, check API key is not expired, ensure API key is properly set in environment variables
2. **List ID Issues**- Verify list exists in Klaviyo,  check list ID is correct, ensure list has subscribers
3. **Template Generation Issues**- Check Portable Text content structure, verify product references are valid, test template rendering in Klaviyo preview
4. **Campaign Sending Issues**- Verify campaign is in correct status, check Klaviyo campaign settings, review rate limit status

### Debugging Steps

1. **Check Function Logs**- Review console output for errors, look for specific error messages, check API response status codes
2. **Verify Environment Variables**- Ensure all required variables are set, check variable values are correct, test API key with Klaviyo directly
3. **Test API Calls**- Use Klaviyo's API documentation, test API calls manually, verify request/response format
