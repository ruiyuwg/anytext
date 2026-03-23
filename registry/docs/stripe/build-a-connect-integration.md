# Build a Connect integration

# Onboard accounts to your Connect platform

Create a connected account and collect information from it to enable payments. We recommend selecting properties before downloading a sample app, because your integration will change significantly.

const stripe = require("stripe")(
// This is a placeholder - it should be replaced with your secret API key.
// Sign in to see your own test API key embedded in code samples.
// Don’t submit any personally identifiable information in requests made with this key.
'sk\_INSERT\_YOUR\_SECRET\_KEY'
);
const stripe = require("stripe")(
// This is a placeholder - it should be replaced with your secret API key.
// Sign in to see your own test API key embedded in code samples.
// Don’t submit any personally identifiable information in requests made with this key.
'sk\_INSERT\_YOUR\_SECRET\_KEY'
);
app.post("/account/:account", async (req, res) => {
try {
const connectedAccountId = req.params.account;

```
const account = await stripe.accounts.update(
  connectedAccountId,
  {
    business_type: 'individual',
  },
);


res.json({
  account: account.id,
});
```

} catch (error) {
console.error(
"An error occurred when calling the Stripe API to update an account",
error
);
res.status(500);
res.send({ error: error.message });
}
});
app.post("/account/:account", async (req, res) => {
try {
const connectedAccountId = req.params.account;

```
const account = await stripe.v2.core.accounts.update(
  connectedAccountId,
  {

    identity: {
      entity_type: 'individual',
    },
    include: ['identity'],
  },
);

res.json({
  account: account.id,
});
```

} catch (error) {
console.error(
"An error occurred when calling the Stripe API to update an account",
error
);
res.status(500);
res.send({ error: error.message });
}
});
app.post("/account\_link", async (req, res) => {
try {
const { account } = req.body;

```
const accountLink = await stripe.accountLinks.create({
  account: account,
  return_url: `${req.headers.origin}/return/${account}`,
  refresh_url: `${req.headers.origin}/refresh/${account}`,
  type: "account_onboarding",
});

res.json(accountLink);
```

} catch (error) {
console.error(
"An error occurred when calling the Stripe API to create an account link:",
error
);
res.status(500);
res.send({ error: error.message });
}
});
app.post("/account\_link", async (req, res) => {
try {
const { account } = req.body;

```
const accountLink = await stripe.v2.core.accountLinks.create({
  account: account,
  use_case: {
    type: 'account_onboarding',
    account_onboarding: {
      configurations: ['recipient'],
      configurations: ['merchant'],
      return_url: `${req.headers.origin}/return/${account}`,
      refresh_url: `${req.headers.origin}/refresh/${account}`,
    }
  }
});
res.json(accountLink);
```

} catch (error) {
console.error(
"An error occurred when calling the Stripe API to create an account link:",
error
);
res.status(500);
res.send({ error: error.message });
}
});
app.post("/account\_session", async (req, res) => {
try {
const { account } = req.body;

```
const accountSession = await stripe.accountSessions.create({
  account: account,
  components: {
    account_onboarding: { enabled: true },
    account_management: {enabled: true},
    notification_banner: {enabled: true},
  },
});

res.json({
  client_secret: accountSession.client_secret,
});
```

} catch (error) {
console.error(
"An error occurred when calling the Stripe API to create an account session",
error
);
res.status(500);
res.send({ error: error.message });
}
});
app.post("/account", async (req, res) => {
try {
const account = await stripe.accounts.create({});
const account = await stripe.accounts.create({
controller: {
stripe\_dashboard: {
type: "none",
},
stripe\_dashboard: {
type: "express",
},
fees: {
payer: "application"
},
losses: {
payments: "application"
},
requirement\_collection: "application",
losses: {
payments: "application"
},
},
capabilities: {
card\_payments: {requested: true},
transfers: {requested: true}
},
capabilities: {
transfers: {requested: true}
},
country: "US",
});

```
res.json({
  account: account.id,
});
```

} catch (error) {
console.error(
"An error occurred when calling the Stripe API to create an account",
error
);
res.status(500);
res.send({ error: error.message });
}
});
app.post("/account", async (req, res) => {
try {
const account = await stripe.v2.core.accounts.create({
dashboard: 'none',
dashboard: 'express',
dashboard: 'full',
contact\_email: 'person@example.com',
defaults: {
responsibilities: {
fees\_collector: 'application',
fees\_collector: 'stripe',
losses\_collector: 'application',
losses\_collector: 'stripe',
},
},
configuration: {
merchant: {
capabilities: {
card\_payments: {
requested: true,
},
},
},
recipient: {
capabilities: {
stripe\_balance: {
stripe\_transfers: {
requested: true,
},
},
},
},\
},
identity: {
country: 'US',
},
include: \[
'configuration.merchant',
'configuration.recipient',
'identity',
'defaults',
],
});

```
res.json({
  account: account.id,
});
```

} catch (error) {
console.error(
"An error occurred when calling the Stripe API to create an account",
error
);
res.status(500);
res.send({ error: error.message });
}
});
require 'stripe'
\# This is a placeholder - it should be replaced with your secret API key.

# Sign in to see your own test API key embedded in code samples.

# Don’t submit any personally identifiable information in requests made with this key.

Stripe.api\_key = 'sk\_INSERT\_YOUR\_SECRET\_KEY'
\# This is a placeholder - it should be replaced with your secret API key.

# Sign in to see your own test API key embedded in code samples.

# Don’t submit any personally identifiable information in requests made with this key.

api\_key = 'sk\_INSERT\_YOUR\_SECRET\_KEY'
$CLIENT = Stripe::StripeClient.new(api\_key)
post '/account/:account' do
content\_type 'application/json'

begin
connected\_account\_id = params\[:account]
account = Stripe::Account.update(
connected\_account\_id,
{
business\_type: 'individual',
}
)

```
{
  account: account[:id]
}.to_json
```

rescue => error
puts "An error occurred when calling the Stripe API to update an account: #{error.message}";
return \[500, { error: error.message }.to\_json]
end
end
post '/account/:account' do
content\_type 'application/json'

begin
connected\_account\_id = params\[:account]
account = $CLIENT.v2.core.accounts.update(
connected\_account\_id,
{
identity: {
entity\_type: 'individual',
},
include: \['identity'],
},
)

```
{
  account: account[:id]
}.to_json
```

rescue => error
puts "An error occurred when calling the Stripe API to update an account: #{error.message}";
return \[500, { error: error.message }.to\_json]
end
end
post '/account\_link' do
content\_type 'application/json'

body = JSON.parse(request.body.read)
connected\_account\_id = body\["account"]

begin
account\_link = Stripe::AccountLink.create({
account: connected\_account\_id,
return\_url: "http://localhost:4242/return/#{connected\_account\_id}",
refresh\_url: "http://localhost:4242/refresh/#{connected\_account\_id}",
type: "account\_onboarding",
})

```
{
  url: account_link.url
}.to_json
```

rescue => error
puts "An error occurred when calling the Stripe API to create an account link: #{error.message}";
return \[500, { error: error.message }.to\_json]
end
end
post '/account\_link' do
content\_type 'application/json'

body = JSON.parse(request.body.read)
connected\_account\_id = body\["account"]

begin
account\_link = $CLIENT.v2.core.account\_links.create({
account: connected\_account\_id,
use\_case: {
type: "account\_onboarding",
account\_onboarding: {
configurations: \['recipient'],
configurations: \['merchant'],
return\_url: "http://localhost:4242/return/#{connected\_account\_id}",
refresh\_url: "http://localhost:4242/refresh/#{connected\_account\_id}",
}
}
})

```
{
  url: account_link.url
}.to_json
```

rescue => error
puts "An error occurred when calling the Stripe API to create an account link: #{error.message}";
return \[500, { error: error.message }.to\_json]
end
end
post '/account\_session' do
content\_type 'application/json'

body = JSON.parse(request.body.read)
connected\_account\_id = body\["account"]

begin
account\_session = Stripe::AccountSession.create({
account: connected\_account\_id,
components: {
account\_onboarding: {enabled: true},
}
})

```
{
  client_secret: account_session[:client_secret]
}.to_json
```

rescue => error
puts "An error occurred when calling the Stripe API to create an account session: #{error.message}";
return \[500, { error: error.message }.to\_json]
end
end
post '/account\_session' do
content\_type 'application/json'

body = JSON.parse(request.body.read)
connected\_account\_id = body\["account"]

begin
account\_session = $CLIENT.v1.account\_sessions.create({
account: connected\_account\_id,
components: {
account\_onboarding: {enabled: true},
}
})

```
{
  client_secret: account_session[:client_secret]
}.to_json
```

rescue => error
puts "An error occurred when calling the Stripe API to create an account session: #{error.message}";
return \[500, { error: error.message }.to\_json]
end
end
post '/account' do
content\_type 'application/json'

begin
account = Stripe::Account.create
account = Stripe::Account.create({
controller: {
stripe\_dashboard: {
type: "none",
},
stripe\_dashboard: {
type: "express",
},
fees: {
payer: "application"
},
losses: {
payments: "application"
},
requirement\_collection: "application",
losses: {
payments: "application"
},
},
capabilities: {
card\_payments: {requested: true},
transfers: {requested: true}
},
capabilities: {
transfers: {requested: true}
},
country: "US",
})

```
{
  account: account[:id]
}.to_json
```

rescue => error
puts "An error occurred when calling the Stripe API to create an account: #{error.message}";
return \[500, { error: error.message }.to\_json]
end
end
post '/account' do
content\_type 'application/json'

begin
account = $CLIENT.v2.core.accounts.create({
dashboard: 'none',
dashboard: 'express',
dashboard: 'full',
contact\_email: 'person@example.com',
defaults: {
responsibilities: {
fees\_collector: 'application',
fees\_collector: 'stripe',
losses\_collector: 'application'
losses\_collector: 'stripe'
},
},
configuration: {
merchant: {
capabilities: {
card\_payments: {requested: true},
}
},
recipient: {
capabilities: {
stripe\_balance: {
stripe\_transfers: {requested: true},
},
}
},
},
identity: {
country: "US",
},
include: \[
'configuration.merchant',
'configuration.recipient',
'identity',
'defaults',
],
})

```
{
  account: account[:id]
}.to_json
```

rescue => error
puts "An error occurred when calling the Stripe API to create an account: #{error.message}";
return \[500, { error: error.message }.to\_json]
end
end
"fmt"
"github.com/stripe/stripe-go/v84"
"github.com/stripe/stripe-go/v84/account"
"github.com/stripe/stripe-go/v84/accountlink"
"github.com/stripe/stripe-go/v84/accountsession"
"context"
"github.com/stripe/stripe-go/v84"
"github.com/stripe/stripe-go/v84/accountsession"
// This is a placeholder - it should be replaced with your secret API key.
// Sign in to see your own test API key embedded in code samples.
// Don’t submit any personally identifiable information in requests made with this key.
var client = stripe.NewClient("<\<YOUR\_SECRET\_KEY>>")
// This is a placeholder - it should be replaced with your secret API key.
// Sign in to see your own test API key embedded in code samples.
// Don’t submit any personally identifiable information in requests made with this key.
stripe.Key = "sk\_INSERT\_YOUR\_SECRET\_KEY"
r.HandleFunc("/account", CreateAccount)
r.HandleFunc("/account\_session", CreateAccountSession)
r.HandleFunc("/account\_link", CreateAccountLink);
r.HandleFunc("/account/{account}", UpdateAccount);
func CreateAccountSession(w http.ResponseWriter, r \*http.Request) {
if r.Method != "POST" {
http.Error(w, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed)
return
}

var requestBody RequestBody
err := json.NewDecoder(r.Body).Decode(\&requestBody)
if err != nil {
http.Error(w, err.Error(), http.StatusBadRequest)
return
}

params := \&stripe.AccountSessionParams{
Account: stripe.String(requestBody.Account),
Components: \&stripe.AccountSessionComponentsParams{
AccountOnboarding: \&stripe.AccountSessionComponentsAccountOnboardingParams{
Enabled: stripe.Bool(true),
},
},
}

accountSession, err := accountsession.New(params)

if err != nil {
log.Printf("An error occurred when calling the Stripe API to create an account session: %v", err)
handleError(w, err)
return
}

writeJSON(w, struct {
ClientSecret string `json:"client_secret"`
}{
ClientSecret: accountSession.ClientSecret,
})
}
func CreateAccountSession(w http.ResponseWriter, r \*http.Request) {
if r.Method != "POST" {
http.Error(w, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed)
return
}

var requestBody RequestBody
err := json.NewDecoder(r.Body).Decode(\&requestBody)
if err != nil {
http.Error(w, err.Error(), http.StatusBadRequest)
return
}

params := \&stripe.AccountSessionCreateParams{
Account: stripe.String(requestBody.Account),
Components: \&stripe.AccountSessionCreateComponentsParams{
AccountOnboarding: \&stripe.AccountSessionCreateComponentsAccountOnboardingParams{
Enabled: stripe.Bool(true),
},
},
}

accountSession, err := client.V1AccountSessions.Create(context.TODO(), params)

if err != nil {
log.Printf("An error occurred when calling the Stripe API to create an account session: %v", err)
handleError(w, err)
return
}

writeJSON(w, struct {
ClientSecret string `json:"client_secret"`
}{
ClientSecret: accountSession.ClientSecret,
})
}
func UpdateAccount(w http.ResponseWriter, r \*http.Request) {
if r.Method != "POST" {
http.Error(w, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed)
return
}

connectedAccountId := mux.Vars(r)\["account"]

params := \&stripe.AccountParams{
BusinessType: stripe.String("individual"),
}

account, err := account.Update(connectedAccountId, params)

if err != nil {
log.Printf("An error occurred when calling the Stripe API to update an account: %v", err)
handleError(w, err)
return
}

writeJSON(w, struct {
Account string `json:"account"`
}{
Account: account.ID,
})
}
func UpdateAccount(w http.ResponseWriter, r \*http.Request) {
if r.Method != "POST" {
http.Error(w, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed)
return
}

connectedAccountId := mux.Vars(r)\["account"]

params := \&stripe.V2CoreAccountUpdateParams{
Identity: \&stripe.V2CoreAccountUpdateIdentityParams{
EntityType: stripe.String("individual"),
},
Include: \[]\*string{stripe.String("identity")},
}

account, err := client.V2CoreAccounts.Update(context.TODO(), connectedAccountId, params)

if err != nil {
log.Printf("An error occurred when calling the Stripe API to update an account: %v", err)
handleError(w, err)
return
}

writeJSON(w, struct {
Account string `json:"account"`
}{
Account: account.ID,
})
}
func CreateAccountLink(w http.ResponseWriter, r \*http.Request) {
if r.Method != "POST" {
http.Error(w, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed)
return
}
var requestBody RequestBody
err := json.NewDecoder(r.Body).Decode(\&requestBody)
if err != nil {
http.Error(w, err.Error(), http.StatusBadRequest)
return
}

accountLink, err := accountlink.New(\&stripe.AccountLinkParams{
Account: stripe.String(requestBody.Account),
ReturnURL: stripe.String(fmt.Sprintf("http://localhost:4242/return/%s", requestBody.Account)),
RefreshURL: stripe.String(fmt.Sprintf("http://localhost:4242/refresh/%s", requestBody.Account)),
Type: stripe.String("account\_onboarding"),
})

if err != nil {
log.Printf("An error occurred when calling the Stripe API to create an account link: %v", err)
handleError(w, err)
return
}
writeJSON(w, struct {
URL string `json:"url"`
}{
URL: accountLink.URL,
})
}
func CreateAccountLink(w http.ResponseWriter, r \*http.Request) {
if r.Method != "POST" {
http.Error(w, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed)
return
}
var requestBody RequestBody
err := json.NewDecoder(r.Body).Decode(\&requestBody)
if err != nil {
http.Error(w, err.Error(), http.StatusBadRequest)
return
}

accountLink, err := client.V2CoreAccountLinks.Create(context.TODO(), \&stripe.V2CoreAccountLinkCreateParams{
Account: stripe.String(requestBody.Account),
UseCase: \&stripe.V2CoreAccountLinkCreateUseCaseParams{
Type: stripe.String("account\_onboarding"),
AccountOnboarding: \&stripe.V2CoreAccountLinkCreateUseCaseAccountOnboardingParams{
Configurations: \[]\*string{stripe.String("recipient")},
Configurations: \[]\*string{stripe.String("merchant")},
ReturnURL: stripe.String(fmt.Sprintf("http://localhost:4242/return/%s", requestBody.Account)),
RefreshURL: stripe.String(fmt.Sprintf("http://localhost:4242/refresh/%s", requestBody.Account)),
},
},
})

if err != nil {
log.Printf("An error occurred when calling the Stripe API to create an account link: %v", err)
handleError(w, err)
return
}
writeJSON(w, struct {
URL string `json:"url"`
}{
URL: accountLink.URL,
})
}
account, err := account.New(\&stripe.AccountParams{})
account, err := account.New(\&stripe.AccountParams{
Controller: \&stripe.AccountControllerParams{
StripeDashboard: \&stripe.AccountControllerStripeDashboardParams{
Type: stripe.String("none"),
},
StripeDashboard: \&stripe.AccountControllerStripeDashboardParams{
Type: stripe.String("express"),
},
Fees: \&stripe.AccountControllerFeesParams{
Payer: stripe.String("application"),
},
Losses: \&stripe.AccountControllerLossesParams{
Payments: stripe.String("application"),
},
RequirementCollection: stripe.String("application"),
Losses: \&stripe.AccountControllerLossesParams{
Payments: stripe.String("application"),
},
},
Capabilities: \&stripe.AccountCapabilitiesParams{
CardPayments: \&stripe.AccountCapabilitiesCardPaymentsParams{
Requested: stripe.Bool(true),
},
Transfers: \&stripe.AccountCapabilitiesTransfersParams{
Requested: stripe.Bool(true),
},
},
Capabilities: \&stripe.AccountCapabilitiesParams{
Transfers: \&stripe.AccountCapabilitiesTransfersParams{
Requested: stripe.Bool(true),
},
},
Country: stripe.String("US"),
})
account, err := client.V2CoreAccounts.Create(context.TODO(), \&stripe.V2CoreAccountCreateParams{
Dashboard: stripe.String("none"),
Dashboard: stripe.String("express"),
Dashboard: stripe.String("full"),
ContactEmail: stripe.String("person@example.com"),\
Defaults: \&stripe.V2CoreAccountCreateDefaultsParams{
Responsibilities: \&stripe.V2CoreAccountCreateDefaultsResponsibilitiesParams{
FeesCollector: stripe.String("application"),
FeesCollector: stripe.String("stripe"),
LossesCollector: stripe.String("application"),
LossesCollector: stripe.String("stripe"),
},
},
Configuration: \&stripe.V2CoreAccountCreateConfigurationParams{
Merchant: \&stripe.V2CoreAccountCreateConfigurationMerchantParams{
Capabilities: \&stripe.V2CoreAccountCreateConfigurationMerchantCapabilitiesParams{
CardPayments: \&stripe.V2CoreAccountCreateConfigurationMerchantCapabilitiesCardPaymentsParams{
Requested: stripe.Bool(true),
},
},
},
Recipient: \&stripe.V2CoreAccountCreateConfigurationRecipientParams{
Capabilities: \&stripe.V2CoreAccountCreateConfigurationRecipientCapabilitiesParams{
StripeBalance: \&stripe.V2CoreAccountCreateConfigurationRecipientCapabilitiesStripeBalanceParams{
StripeTransfers: \&stripe.V2CoreAccountCreateConfigurationRecipientCapabilitiesStripeBalanceStripeTransfersParams{
Requested: stripe.Bool(true),
},
},
},
},
},
Identity: \&stripe.V2CoreAccountCreateIdentityParams{
Country: stripe.String("US"),
},
Include: \[]\*string{
stripe.String("configuration.merchant"),
stripe.String("configuration.recipient"),
stripe.String("identity"),
stripe.String("defaults"),
},
})\
import java.util.HashMap;
import java.util.Map;
import com.stripe.Stripe;
import com.stripe.model.Account;
import com.stripe.param.AccountCreateParams;
import com.stripe.model.AccountLink;
import com.stripe.param.AccountLinkCreateParams;
import com.stripe.model.AccountSession;
import com.stripe.param.AccountSessionCreateParams;
import com.stripe.param.AccountUpdateParams;
import com.stripe.StripeClient;
import com.stripe.model.v2.core.Account;
import com.stripe.param.v2.core.AccountCreateParams;
import com.stripe.model.v2.core.AccountLink;
import com.stripe.param.v2.core.AccountLinkCreateParams;
import com.stripe.model.AccountSession;
import com.stripe.param.AccountSessionCreateParams;
import com.stripe.param.v2.core.AccountUpdateParams;
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
private static StripeClient client = new StripeClient("<\<YOUR\_SECRET\_KEY>>");
// This is a placeholder - it should be replaced with your secret API key.
// Sign in to see your own test API key embedded in code samples.
// Don’t submit any personally identifiable information in requests made with this key.
Stripe.apiKey = "sk\_INSERT\_YOUR\_SECRET\_KEY";
post("/account", Server::createAccount);
post("/account\_session", Server::createAccountSession);
post("/account\_link", Server::createAccountLink);
post("/account/:account", Server::updateAccount);
private static class UpdateAccountResponse {
public UpdateAccountResponse() {}
}

private static String updateAccount(Request request, Response response) {
response.type("application/json");

```
try {
  String connectedAccountId = request.params("account");

  Account connectedAccount = Account.retrieve(connectedAccountId);

  connectedAccount.update(AccountUpdateParams.builder()
    .setBusinessType(AccountUpdateParams.BusinessType.INDIVIDUAL)
    .build()
  );

  UpdateAccountResponse accountUpdateResponse = new UpdateAccountResponse();

  return gson.toJson(accountUpdateResponse);
} catch (Exception e) {
  System.out
      .println("An error occurred when calling the Stripe API to update an account: " + e.getMessage());
  response.status(500);
  return gson.toJson(new ErrorResponse(e.getMessage()));
}
```

}
private static class UpdateAccountResponse {
public UpdateAccountResponse() {}
}

private static String updateAccount(Request request, Response response) {
response.type("application/json");

```
try {
  String connectedAccountId = request.params("account");

  Account connectedAccount = client.v2().core().accounts().update(connectedAccountId, 
    AccountUpdateParams.builder()
    .setIdentity(
      AccountUpdateParams.Identity.builder().
        .setEntityType(AccountUpdateParams.Identity.EntityType.INDIVIDUAL)
    ).build()
    .setBusinessType(AccountUpdateParams.Identity.EntityType.INDIVIDUAL)
    .build()
  );

  UpdateAccountResponse accountUpdateResponse = new UpdateAccountResponse();

  return gson.toJson(accountUpdateResponse);
} catch (Exception e) {
  System.out
      .println("An error occurred when calling the Stripe API to update an account: " + e.getMessage());
  response.status(500);
  return gson.toJson(new ErrorResponse(e.getMessage()));
}
```

}
private static class CreateAccountSessionResponse {
private String client\_secret;

```
public CreateAccountSessionResponse(String clientSecret) {
  this.client_secret = clientSecret;
}
```

}

private static String createAccountSession(Request request, Response response) {
response.type("application/json");

```
try {
  String connectedAccountId = gson.fromJson(request.body(), RequestBody.class).getAccount();

  AccountSession accountSession = AccountSession.create(
    AccountSessionCreateParams.builder()
      .setAccount(connectedAccountId)
      .setComponents(
        AccountSessionCreateParams.Components.builder()
          .setAccountOnboarding(
            AccountSessionCreateParams.Components.AccountOnboarding.builder()
              .setEnabled(true)
              .build()
          )
          .build()
      )
      .build()
  );
  AccountSession accountSession = client.v1().accountSessions().create(
    AccountSessionCreateParams.builder()
      .setAccount(connectedAccountId)
      .setComponents(
        AccountSessionCreateParams.Components.builder()
          .setAccountOnboarding(
            AccountSessionCreateParams.Components.AccountOnboarding.builder()
              .setEnabled(true)
              .build()
          )
          .build()
      )
      .build()
  );      

  CreateAccountSessionResponse accountSessionResponse = new CreateAccountSessionResponse(
    accountSession.getClientSecret()
  );
  return gson.toJson(accountSessionResponse);
} catch (Exception e) {
  System.out
      .println("An error occurred when calling the Stripe API to create an account session: " + e.getMessage());
  response.status(500);
  return gson.toJson(new ErrorResponse(e.getMessage()));
}
```

}
private static class CreateAccountLinkResponse {
private String url;

```
public CreateAccountLinkResponse(String url) {
  this.url = url;
}
```

}

private static String createAccountLink(Request request, Response response) {
response.type("application/json");

```
try {
  String connectedAccountId = gson.fromJson(request.body(), RequestBody.class).getAccount();

  AccountLink accountLink = AccountLink.create(
    AccountLinkCreateParams.builder()
      .setAccount(connectedAccountId)
      .setReturnUrl("http://localhost:4242/return/" + connectedAccountId)
      .setRefreshUrl("http://localhost:4242/refresh/" + connectedAccountId)
      .setType(AccountLinkCreateParams.Type.ACCOUNT_ONBOARDING)
      .build()
  );
  AccountLink accountLink = client.v2().core().accountLinks().create(
    AccountLinkCreateParams.builder()
      .setAccount(connectedAccountId)
      .setUseCase(
        AccountLinkCreateParams.UseCase.builder()
          .setType(AccountLinkCreateParams.UseCase.Type.ACCOUNT_ONBOARDING)
          .setAccountOnboarding(
            AccountLinkCreateParams.UseCase.AccountOnboarding.builder()
              .addConfiguration(
                AccountLinkCreateParams.UseCase.AccountOnboarding.Configuration.RECIPIENT
              )                
              .addConfiguration(
                AccountLinkCreateParams.UseCase.AccountOnboarding.Configuration.MERCHANT
              )
              .setReturnUrl("http://localhost:4242/return/" + connectedAccountId)
              .setRefreshUrl("http://localhost:4242/refresh/" + connectedAccountId)
              .build()
          )
          .build()
      )
      .build()
  );

  CreateAccountLinkResponse accountLinkResponse = new CreateAccountLinkResponse(accountLink.getUrl());
  return gson.toJson(accountLinkResponse);
} catch (Exception e) {
  System.out.println("An error occurred when calling the Stripe API to create an account link: " + e.getMessage());
  response.status(500);
  return gson.toJson(new ErrorResponse(e.getMessage()));
}
```

}
Account account = Account.create(AccountCreateParams.builder().build());
Account account = Account.create(
AccountCreateParams.builder()
.setController(AccountCreateParams.Controller.builder()
.setStripeDashboard(
AccountCreateParams.Controller.StripeDashboard.builder()
.setType(AccountCreateParams.Controller.StripeDashboard.Type.NONE)
.build()
)
.setStripeDashboard(
AccountCreateParams.Controller.StripeDashboard.builder()
.setType(AccountCreateParams.Controller.StripeDashboard.Type.EXPRESS)
.build()
)
.setFees(
AccountCreateParams.Controller.Fees.builder()
.setPayer(AccountCreateParams.Controller.Fees.Payer.APPLICATION)
.build()
)
.setLosses(
AccountCreateParams.Controller.Losses.builder()
.setPayments(AccountCreateParams.Controller.Losses.Payments.APPLICATION)
.build()
)
.setRequirementCollection(AccountCreateParams.Controller.RequirementCollection.APPLICATION)
.setLosses(
AccountCreateParams.Controller.Losses.builder()
.setPayments(AccountCreateParams.Controller.Losses.Payments.APPLICATION)
.build()
)
.build()
)
.setCapabilities(
AccountCreateParams.Capabilities.builder()
.setCardPayments(
AccountCreateParams.Capabilities.CardPayments.builder()
.setRequested(true)
.build()
)
.setTransfers(
AccountCreateParams.Capabilities.Transfers.builder()
.setRequested(true)
.build()
).build()
)
.setCapabilities(
AccountCreateParams.Capabilities.builder()
.setTransfers(
AccountCreateParams.Capabilities.Transfers.builder()
.setRequested(true)
.build()
).build()
)
.setCountry("US")
.build()
);
Account account = client.v2().core().accounts().create(
AccountCreateParams.builder()
.setDashboard(AccountCreateParams.Dashboard.NONE)
.setDashboard(AccountCreateParams.Dashboard.EXPRESS)
.setDashboard(AccountCreateParams.Dashboard.FULL)
.setContactEmail("person@example.com")
.setDefaults(
AccountCreateParams.Defaults.builder()
.setResponsibilities(
AccountCreateParams.Defaults.Responsibilities.builder()
.setFeesCollector(
AccountCreateParams.Defaults.Responsibilities.FeesCollector.APPLICATION
)
.setFeesCollector(
AccountCreateParams.Defaults.Responsibilities.FeesCollector.STRIPE
)
.setLossesCollector(
AccountCreateParams.Defaults.Responsibilities.LossesCollector.APPLICATION
)
.setLossesCollector(
AccountCreateParams.Defaults.Responsibilities.LossesCollector.STRIPE
)
.build()
)
.build()
)
.setConfiguration(
AccountCreateParams.Configuration.builder()
.setMerchant(
AccountCreateParams.Configuration.Merchant.builder()
.setCapabilities(
AccountCreateParams.Configuration.Merchant.Capabilities.builder()
.setCardPayments(
AccountCreateParams.Configuration.Merchant.Capabilities.CardPayments.builder()
.setRequested(true)
.build()
)
.build()
)
.build()
)\
.setRecipient(
AccountCreateParams.Configuration.Recipient.builder()
.setCapabilities(
AccountCreateParams.Configuration.Recipient.Capabilities.builder()
.setStripeBalance(
AccountCreateParams.Configuration.Recipient.Capabilities.StripeBalance.builder()
.setStripeTransfers(
AccountCreateParams.Configuration.Recipient.Capabilities.StripeBalance.StripeTransfers.builder()
.setRequested(true)
.build()
)
.build()
)
.build()
)
.build()
)\
.build()
)
.setIdentity(
AccountCreateParams.Identity.builder()
.setCountry("US")
.build()
)
.addInclude(AccountCreateParams.Include.CONFIGURATION\_\_MERCHANT)
.addInclude(AccountCreateParams.Include.CONFIGURATION\_\_RECIPIENT)
.addInclude(AccountCreateParams.Include.IDENTITY)
.addInclude(AccountCreateParams.Include.DEFAULTS)
.build()
);
import stripe
\# This is a placeholder - it should be replaced with your secret API key.

# Sign in to see your own test API key embedded in code samples.

# Don’t submit any personally identifiable information in requests made with this key.

stripe.api\_key = 'sk\_INSERT\_YOUR\_SECRET\_KEY'
\# This is a placeholder - it should be replaced with your secret API key.

# Sign in to see your own test API key embedded in code samples.

# Don’t submit any personally identifiable information in requests made with this key.

api\_key = 'sk\_INSERT\_YOUR\_SECRET\_KEY'
client = stripe.StripeClient(api\_key)
@app.route('/account/', methods=\['POST'])
def update\_account(account):
try:
connected\_account = stripe.Account.modify(
account,
business\_type="individual",
)

```
    return jsonify({
      'account': connected_account.id,
    })
except Exception as e:
    print('An error occurred when calling the Stripe API to update an account: ', e)
    return jsonify(error=str(e)), 500
```

@app.route('/account/', methods=\['POST'])
def update\_account(account):
try:
connected\_account = client.v2.core.accounts.update(
account,
{
"identity": {
"entity\_type": "individual",
},
}
)

```
    return jsonify({
      'account': connected_account.id,
    })
except Exception as e:
    print('An error occurred when calling the Stripe API to update an account: ', e)
    return jsonify(error=str(e)), 500
```

@app.route('/account\_link', methods=\['POST'])
def create\_account\_link():
try:
connected\_account\_id = request.get\_json().get('account')

```
    account_link = stripe.AccountLink.create(
      account=connected_account_id,
      return_url=f"http://localhost:4242/return/{connected_account_id}",
      refresh_url=f"http://localhost:4242/refresh/{connected_account_id}",
      type="account_onboarding",
    )

    return jsonify({
      'url': account_link.url,
    })
except Exception as e:
    print('An error occurred when calling the Stripe API to create an account link: ', e)
    return jsonify(error=str(e)), 500
```

@app.route('/account\_link', methods=\['POST'])
def create\_account\_link():
try:
connected\_account\_id = request.get\_json().get('account')

```
    account_link = client.v2.core.account_links.create({
      "account": connected_account_id,
      "use_case": {
        "type": "account_onboarding",
        "account_onboarding": {
          "configurations": ["recipient"],
          "configurations": ["merchant"],
          "return_url": f"http://localhost:4242/return/{connected_account_id}",
          "refresh_url": f"http://localhost:4242/refresh/{connected_account_id}",
        },
      },
    })

    return jsonify({
      'url': account_link.url,
    })
except Exception as e:
    print('An error occurred when calling the Stripe API to create an account link: ', e)
    return jsonify(error=str(e)), 500
```

@app.route('/account\_session', methods=\['POST'])
def create\_account\_session():
try:
connected\_account\_id = request.get\_json().get('account')

```
    account_session = stripe.AccountSession.create(
      account=connected_account_id,
      components={
        "account_onboarding": {"enabled": True},
      },
    )

    return jsonify({
      'client_secret': account_session.client_secret,
    })
except Exception as e:
    print('An error occurred when calling the Stripe API to create an account session: ', e)
    return jsonify(error=str(e)), 500
```

@app.route('/account\_session', methods=\['POST'])
def create\_account\_session():
try:
connected\_account\_id = request.get\_json().get('account')

```
    account_session = client.v1.account_sessions.create({
      "account": connected_account_id,
      "components": {
        "account_onboarding": {"enabled": True},
      },
    })

    return jsonify({
      'client_secret': account_session.client_secret,
    })
except Exception as e:
    print('An error occurred when calling the Stripe API to create an account session: ', e)
    return jsonify(error=str(e)), 500
```

@app.route('/account', methods=\['POST'])
def create\_account():
try:
account = stripe.Account.create()
account = stripe.Account.create(
controller={
"stripe\_dashboard": {
"type": "none",
},
"stripe\_dashboard": {
"type": "express",
},
"fees": {
"payer": "application"
},
"losses": {
"payments": "application"
},
"requirement\_collection": "application",
"losses": {
"payments": "application"
},
},
capabilities={
"card\_payments": {"requested": True},
"transfers": {"requested": True}
},
capabilities={
"transfers": {"requested": True}
},
country="US",
)

```
    return jsonify({
      'account': account.id,
    })
except Exception as e:
    print('An error occurred when calling the Stripe API to create an account: ', e)
    return jsonify(error=str(e)), 500
```

@app.route('/account', methods=\['POST'])
def create\_account():
try:
account = client.v2.core.accounts.create({
"dashboard": "none",
"dashboard": "express",
"dashboard": "full",
"contact\_email": "person@example.com",
"defaults": {
"responsibilities": {
"fees\_collector": "application",
"fees\_collector": "stripe",
"losses\_collector": "application",
"losses\_collector": "stripe",
},
},
"configuration": {\
"merchant": {
"capabilities": {
"card\_payments": { "requested": True },
}
},
"recipient": {
"capabilities": {
"stripe\_balance": {
"stripe\_transfers": { "requested": True },
}
}
},
},\
"identity": {
"country": "US",
},\
"include": \[
"configuration.merchant",
"configuration.recipient",
"identity",
"defaults",
]
})

```
    return jsonify({
      'account': account.id,
    })
except Exception as e:
    print('An error occurred when calling the Stripe API to create an account: ', e)
    return jsonify(error=str(e)), 500
```

<?php

require_once '../vendor/autoload.php';
require_once '../secrets.php';

header('Content-Type: application/json');

$stripe = new \Stripe\StripeClient([
  // This is your test secret API key.
  "api_key" => $stripeSecretKey,
]);

try {
  $account = $stripe->accounts->create();
  $account = $stripe->accounts->create([
    'controller' => [
      'stripe_dashboard' => [
        'type' => 'none',
      ],
      'stripe_dashboard' => [
        'type' => 'express',
      ],
      'fees' => [
        'payer' => 'application'
      ],
      'losses' => [
        'payments' => 'application'
      ],
      'requirement_collection' => 'application',
      'losses' => [
        'payments' => 'application'
      ],
    ],
    'capabilities' => [
      'card_payments' => ['requested' => true],
      'transfers' => ['requested' => true],
    ],
    'capabilities' => [
      'transfers' => ['requested' => true],
    ],
    'country' => "US",
  ]);

  echo json_encode(array(
    'account' => $account->id
  ));
} catch (Exception $e) {
  error_log("An error occurred when calling the Stripe API to create an account: {$e->getMessage()}");
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}

?>

<?php

require_once '../vendor/autoload.php';
require_once '../secrets.php';

header('Content-Type: application/json');

$stripe = new \Stripe\StripeClient($stripeSecretKey);

try {
  $account = $stripe->v2->core->accounts->create([
    'dashboard' => 'none',
    'dashboard' => 'express',
    'dashboard' => 'full',
    'contact_email' => 'person@example.com',
    'defaults' => [
      'responsibilities' => [
        'fees_collector' => 'application',
        'fees_collector' => 'stripe',
        'losses_collector' => 'application',
        'losses_collector' => 'stripe',
      ],
    ],
    'configuration' => [
      'merchant' => ['capabilities' => ['card_payments' => ['requested' => true]]],
      'recipient' => [
        'capabilities' => ['stripe_balance' => ['stripe_transfers' => ['requested' => true]]],
      ],
    ],
    'identity' => [
      'country' => "US",
    ],
    'include' => [
      'configuration.merchant',
      'configuration.recipient',
      'identity',
      'defaults',
    ],    
  ]);

  echo json_encode(array(
    'account' => $account->id
  ));
} catch (Exception $e) {
  error_log("An error occurred when calling the Stripe API to create an account: {$e->getMessage()}");
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}
?>

<?php

require_once '../vendor/autoload.php';
require_once '../secrets.php';

header('Content-Type: application/json');

$stripe = new \Stripe\StripeClient([
  // This is your test secret API key.
  "api_key" => $stripeSecretKey,
]);

$json = file_get_contents('php://input');
$data = json_decode($json);

if ($data && $data->account) {
  try {
    $account = $stripe->accounts->update(
      $data->account,
      ['business_type' => 'individual'],
    );

    echo json_encode(array(
      'account' => $account->id
    ));
    return;
  } catch (Exception $e) {
    error_log("An error occurred when calling the Stripe API to update an account: {$e->getMessage()}");
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
  }
} else {
  try {
    $account = $stripe->accounts->create();
    $account = $stripe->accounts->create([
      'controller' => [
        'stripe_dashboard' => [
          'type' => 'none',
        ],
        'stripe_dashboard' => [
          'type' => 'express',
        ],
        'fees' => [
          'payer' => 'application'
        ],
        'losses' => [
          'payments' => 'application'
        ],
        'requirement_collection' => 'application',
        'losses' => [
          'payments' => 'application'
        ],
      ],
      'capabilities' => [
        'card_payments' => ['requested' => true],
        'transfers' => ['requested' => true],
      ],
      'capabilities' => [
        'transfers' => ['requested' => true],
      ],
      'country' => "US",
    ]);

    echo json_encode(array(
      'account' => $account->id
    ));
  } catch (Exception $e) {
    error_log("An error occurred when calling the Stripe API to create an account: {$e->getMessage()}");
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
  }
}

?>

<?php

require_once '../vendor/autoload.php';
require_once '../secrets.php';

header('Content-Type: application/json');

$stripe = new \Stripe\StripeClient($stripeSecretKey);

$json = file_get_contents('php://input');
$data = json_decode($json);

if ($data && $data->account) {
  try {
    $account = $stripe->v2->core->accounts->update(
      $data->account,
      'identity' => [
        'entity_type' => 'individual'
      ],
    );

    echo json_encode(array(
      'account' => $account->id
    ));
    return;
  } catch (Exception $e) {
    error_log("An error occurred when calling the Stripe API to update an account: {$e->getMessage()}");
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
  }
} else {
  try {
    $account = $stripe->v2->core->accounts->create([
      'dashboard' => 'none',
      'dashboard' => 'express',
      'dashboard' => 'full',
      'contact_email' => 'person@example.com',
      'defaults' => [
        'responsibilities' => [
          'fees_collector' => 'application',
          'fees_collector' => 'stripe',
          'losses_collector' => 'application',
          'losses_collector' => 'stripe',
        ],
      ],
      'configuration' => [
        'merchant' => ['capabilities' => ['card_payments' => ['requested' => true]]],
        'recipient' => [
          'capabilities' => ['stripe_balance' => ['stripe_transfers' => ['requested' => true]]],
        ],
      ],
      'identity' => [
        'country' => "US",
      ],
      'include' => [
        'configuration.merchant',
        'configuration.recipient',
        'identity',
        'defaults',
      ],    
    ]);

    echo json_encode(array(
      'account' => $account->id
    ));
  } catch (Exception $e) {
    error_log("An error occurred when calling the Stripe API to create an account: {$e->getMessage()}");
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
  }
}
?>

<?php

require_once '../vendor/autoload.php';
require_once '../secrets.php';

header('Content-Type: application/json');

$stripe = new \Stripe\StripeClient([
  // This is your test secret API key.
  "api_key" => $stripeSecretKey,
]);

try {
  $json = file_get_contents('php://input');
  $data = json_decode($json);

  $account_session = $stripe->accountSessions->create([
    'account' => $data->account,
    'components' => [
      'account_onboarding' => [
        'enabled' => true,
      ],
    ],
  ]);

  echo json_encode(array(
    'client_secret' => $account_session->client_secret
  ));
} catch (Exception $e) {
  error_log("An error occurred when calling the Stripe API to create an account session: {$e->getMessage()}");
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}

?>

<?php

require_once '../vendor/autoload.php';
require_once '../secrets.php';

header('Content-Type: application/json');

$stripe = new \Stripe\StripeClient($stripeSecretKey);

try {
  $json = file_get_contents('php://input');
  $data = json_decode($json);

  $account_session = $stripe->accountSessions->create([
    'account' => $data->account,
    'components' => [
      'account_onboarding' => [
        'enabled' => true,
      ],
    ],
  ]);

  echo json_encode(array(
    'client_secret' => $account_session->client_secret
  ));
} catch (Exception $e) {
  error_log("An error occurred when calling the Stripe API to create an account session: {$e->getMessage()}");
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}

?>

<?php

require_once '../vendor/autoload.php';
require_once '../secrets.php';

header('Content-Type: application/json');

$stripe = new \Stripe\StripeClient([
  // This is your test secret API key.
  "api_key" => $stripeSecretKey,
]);

try {
  $json = file_get_contents('php://input');
  $data = json_decode($json);
  $connectedAccountId = $data->account;

  $account_link = $stripe->accountLinks->create([
    'account' => $connectedAccountId,
    'return_url' => sprintf("http://localhost:4242/return/%s", $connectedAccountId),
    'refresh_url' => sprintf("http://localhost:4242/refresh/%s", $connectedAccountId),
    'type' => 'account_onboarding',
  ]);

  echo json_encode(array(
    'url' => $account_link->url
  ));
} catch (Exception $e) {
  error_log("An error occurred when calling the Stripe API to create an account link: {$e->getMessage()}");
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}

?>

<?php

require_once '../vendor/autoload.php';
require_once '../secrets.php';

header('Content-Type: application/json');

$stripe = new \Stripe\StripeClient(
  "api_key" => $stripeSecretKey,
);

try {
  $json = file_get_contents('php://input');
  $data = json_decode($json);
  $connectedAccountId = $data->account;

  $account_link = $stripe->v2->core->accountLinks->create([
    'account' => $connectedAccountId,
    'use_case' => [
      'type' => 'account_onboarding',
      'account_onboarding' => [
        'configurations' => ['recipient'],
        'configurations' => ['merchant'],
        'return_url' => sprintf("http://localhost:4242/return/%s", $connectedAccountId),
        'refresh_url' => sprintf("http://localhost:4242/refresh/%s", $connectedAccountId),
      ],
    ],
  ]);

  echo json_encode(array(
    'url' => $account_link->url
  ));
} catch (Exception $e) {
  error_log("An error occurred when calling the Stripe API to create an account link: {$e->getMessage()}");
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}

?>

// This is a placeholder - it should be replaced with your secret API key.
// Sign in to see your own test API key embedded in code samples.
// Don’t submit any personally identifiable information in requests made with this key.
$stripeSecretKey = 'sk\_INSERT\_YOUR\_SECRET\_KEY';
using Stripe;
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
services.AddSingleton(new StripeClient("<\<YOUR\_SECRET\_KEY>>"));
\[HttpPost("{connectedAccountId}")]
public ActionResult Update(string connectedAccountId)
{
try
{
Account account = \_client.V1.Accounts.Update(
connectedAccountId,
new AccountUpdateOptions
{
BusinessType = "individual",
}
);

```
            return Json(new { account = account.Id });
        } catch(Exception ex) {
            Console.Write("An error occurred when calling the Stripe API to update an account:  " + ex.Message);
            Response.StatusCode = 500;
            return Json(new { error = ex.Message });
        }
    }
    [HttpPost("{connectedAccountId}")]
    public ActionResult Update(string connectedAccountId)
    {
        try
        {
            var options = new Stripe.V2.Core.AccountUpdateOptions
            {
                Identity = new Stripe.V2.Core.AccountUpdateIdentityOptions
                {
                    EntityType = "individual",
                },
                Include = new List { "identity" },
            };
            var service = _client.V2.Core.Accounts;
            Stripe.V2.Core.Account account = service.Update(connectedAccountId, options);

            return Json(new { account = account.Id });
        } catch(Exception ex) {
            Console.Write("An error occurred when calling the Stripe API to update an account:  " + ex.Message);
            Response.StatusCode = 500;
            return Json(new { error = ex.Message });
        }
    }

    [HttpPost]
    public ActionResult Create()
    {
        try
        {
            var options = new AccountCreateOptions();
            var options = new AccountCreateOptions
            {
                Controller = new AccountControllerOptions
                {
                    StripeDashboard = new AccountControllerStripeDashboardOptions
                    {
                        Type = "none"
                    },
                    StripeDashboard = new AccountControllerStripeDashboardOptions
                    {
                        Type = "express"
                    },
                    Fees = new AccountControllerFeesOptions
                    {
                        Payer = "application"
                    },
                    Losses = new AccountControllerLossesOptions
                    {
                        Payments = "application"
                    },
                    RequirementCollection = "application",
                    Losses = new AccountControllerLossesOptions
                    {
                        Payments = "application"
                    },
                },
                Capabilities = new AccountCapabilitiesOptions
                {
                    CardPayments = new AccountCapabilitiesCardPaymentsOptions
                    {
                        Requested = true,
                    },
                    Transfers = new AccountCapabilitiesTransfersOptions
                    {
                        Requested = true,
                    },
                },
                Capabilities = new AccountCapabilitiesOptions
                {
                    Transfers = new AccountCapabilitiesTransfersOptions
                    {
                        Requested = true,
                    },
                },
                Country = "US",
            };

            Account account = _client.V1.Accounts.Create(options);

            return Json(new { account = account.Id });
        } catch(Exception ex) {
            Console.Write("An error occurred when calling the Stripe API to create an account:  " + ex.Message);
            Response.StatusCode = 500;
            return Json(new { error = ex.Message });
        }
    }
    [HttpPost]
    public ActionResult Create()
    {
        try
        {

            var options = new Stripe.V2.Core.AccountCreateOptions
            {

                Dashboard = "none",
                Dashboard = "express",
                Dashboard = "full",
                ContactEmail = "person@example.com",
                Defaults = new Stripe.V2.Core.AccountCreateDefaultsOptions
                {
                    Responsibilities = new Stripe.V2.Core.AccountCreateDefaultsResponsibilitiesOptions
                    {
                        FeesCollector = "application",
                        FeesCollector = "stripe",
                        LossesCollector = "application",
                        LossesCollector = "stripe",
                    },
                },
                Configuration = new Stripe.V2.Core.AccountCreateConfigurationOptions
                {
                    Merchant = new Stripe.V2.Core.AccountCreateConfigurationMerchantOptions
                    {
                        Capabilities = new Stripe.V2.Core.AccountCreateConfigurationMerchantCapabilitiesOptions
                        {
                            CardPayments = new Stripe.V2.Core.AccountCreateConfigurationMerchantCapabilitiesCardPaymentsOptions
                            {
                                Requested = true,
                            },
                        },
                    },
                    Recipient = new Stripe.V2.Core.AccountCreateConfigurationRecipientOptions
                    {
                        Capabilities = new Stripe.V2.Core.AccountCreateConfigurationRecipientCapabilitiesOptions
                        {
                            StripeBalance = new Stripe.V2.Core.AccountCreateConfigurationRecipientCapabilitiesStripeBalanceOptions
                            {
                                StripeTransfers = new Stripe.V2.Core.AccountCreateConfigurationRecipientCapabilitiesStripeBalanceStripeTransfersOptions
                                {
                                  Requested = true,
                                }
                            },
                        },
                    },
                },
                Identity = new Stripe.V2.Core.AccountCreateIdentityOptions
                {
                    Country = "US",
                },
                Include = new List
                {
                    "configuration.merchant",
                    "configuration.recipient",
                    "identity",
                    "defaults",
                },
            };

            var service = _client.V2.Core.Accounts;
            Stripe.V2.Core.Account account = service.Create(options);
            return Json(new { account = account.Id });
        } catch(Exception ex) {
            Console.Write("An error occurred when calling the Stripe API to create an account:  " + ex.Message);
            Response.StatusCode = 500;
            return Json(new { error = ex.Message });
        }
    }
public class AccountSessionPostBody
{
    public string Account { get; set; }
}

[Route("account_session")]
[ApiController]
public class AccountSessionApiController : Controller
{
    private readonly StripeClient _client;

    public AccountSessionApiController(StripeClient client)
    {
      _client = client;
    }

    [HttpPost]
    public ActionResult Create([FromBody] AccountSessionPostBody accountSessionPostBody)
    {
        try
        {
            var connectedAccountId = accountSessionPostBody.Account;

            AccountSession accountSession = _client.V1.AccountSessions.Create(
                new AccountSessionCreateOptions
                {
                    Account = connectedAccountId,
                    Components = new AccountSessionComponentsOptions
                    {
                        AccountOnboarding = new AccountSessionComponentsAccountOnboardingOptions
                        {
                            Enabled = true
                        },
                    }
                }
            );

            return Json(new { client_secret = accountSession.ClientSecret });
        } catch(Exception ex) {
            Console.Write("An error occurred when calling the Stripe API to create an account session:  " + ex.Message);
            Response.StatusCode = 500;
            return Json(new { error = ex.Message });
        }
    }
}
[Route("account_session")]
[ApiController]
public class AccountSessionApiController : Controller
{
    private StripeClient _client;

    public AccountSessionApiController(StripeClient client)
    {
      _client = client;
    }

    [HttpPost]
    public ActionResult Create([FromBody] AccountSessionPostBody accountSessionPostBody)
    {
        try
        {
            var connectedAccountId = accountSessionPostBody.Account;

            var service = _client.V1.AccountSessions;

            AccountSession accountSession = service.Create(
                new AccountSessionCreateOptions
                {
                    Account = connectedAccountId,
                    Components = new AccountSessionComponentsOptions
                    {
                        AccountOnboarding = new AccountSessionComponentsAccountOnboardingOptions
                        {
                            Enabled = true
                        },
                    }
                }
            );
            return Json(new { client_secret = accountSession.ClientSecret });
        } catch(Exception ex) {
            Console.Write("An error occurred when calling the Stripe API to create an account session:  " + ex.Message);
            Response.StatusCode = 500;
            return Json(new { error = ex.Message });
        }
    }
}
 public class AccountLinkPostBody
{
    public string Account { get; set; }
}

[Route("account_link")]
[ApiController]
public class AccountLinkApiController : Controller
{
    private readonly StripeClient _client;

    public AccountLinkApiController(StripeClient client)
    {
      _client = client;
    }

    [HttpPost]
    public ActionResult Create([FromBody] AccountLinkPostBody accountLinkPostBody)
    {
        try
        {
            var connectedAccountId = accountLinkPostBody.Account;

            AccountLink accountLink = _client.V1.AccountLinks.Create(
                new AccountLinkCreateOptions
                {
                    Account = connectedAccountId,
                    ReturnUrl = $"http://localhost/return/{connectedAccountId}",
                    RefreshUrl = $"http://localhost/refresh/{connectedAccountId}",
                    Type = "account_onboarding",
                }
            );

            return Json(new { url = accountLink.Url });
        } catch(Exception ex) {
            Console.Write("An error occurred when calling the Stripe API to create an account link:  " + ex.Message);
            Response.StatusCode = 500;
            return Json(new { error = ex.Message });
        }
    }
}
[Route("account_link")]
[ApiController]
public class AccountLinkApiController : Controller
{
    private StripeClient _client;

    public AccountLinkApiController(StripeClient client)
    {
      _client = client;
    }

    [HttpPost]
    public ActionResult Create([FromBody] AccountLinkPostBody accountLinkPostBody)
    {
        try
        {
            var connectedAccountId = accountLinkPostBody.Account;
            var options = new Stripe.V2.Core.AccountLinkCreateOptions
            {
                Account = connectedAccountId,
                UseCase = new Stripe.V2.Core.AccountLinkCreateUseCaseOptions
                {
                    Type = "account_onboarding",
                    AccountOnboarding = new Stripe.V2.Core.AccountLinkCreateUseCaseAccountOnboardingOptions
                    {
                        Configurations = new List { "recipient" },
                        Configurations = new List { "merchant" },
                        ReturnUrl = $"http://localhost/return/{connectedAccountId}",
                        RefreshUrl = $"http://localhost/refresh/{connectedAccountId}",
                    },
                },
            };
            var service = _client.V2.Core.AccountLinks;
            Stripe.V2.Core.AccountLink accountLink = service.Create(options);
            return Json(new { url = accountLink.Url });
        } catch(Exception ex) {
            Console.Write("An error occurred when calling the Stripe API to create an account link:  " + ex.Message);
            Response.StatusCode = 500;
            return Json(new { error = ex.Message });
        }
    }
}
```

certifi==2026.1.4
chardet==5.2.0
click==8.3.1
Flask==3.1.2
idna==3.11
itsdangerous==2.2.0
Jinja2==3.1.6
MarkupSafe==3.0.3
requests==2.32.5
stripe==14.4.0
toml==0.10.2
Werkzeug==3.1.5
Rocket Rides
Rocket Rides is the world's leading air travel platform: join our team of pilots to help people travel faster.
Rocket Rides partners with Stripe to help you receive payments while keeping your personal and bank details secure.

```
        Your onboarding flow goes here
      
      Rocket Rides
      Rocket Rides is the world's leading air travel platform: join our team of pilots to help people travel faster.
      Rocket Rides
      Rocket Rides is the world's leading air travel platform: join our team of pilots to help people travel faster.
      Rocket Rides partners with Stripe to help you receive payments while keeping your personal and bank details secure.
      Details submitted
      That's everything we need for now
```

fetch("/account.php", {
fetch("/account", {
method: "POST",
})
.then((response) => response.json())
.then((json) => {
const {account, error} = json;

```
  if (error) {
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("sign-up-button").classList.remove("hidden");
    document.getElementById("creating-connected-account").classList.add("hidden");
    document.getElementById("dev-callout").classList.add("hidden");
    return;
  }

  connectedAccountId = account;

  const connectedAccountIdElement = document.getElementById("connected-account-id");
  connectedAccountIdElement.innerHTML = `Your connected account ID is: <code class="bold">${connectedAccountId}</code>`;
  connectedAccountIdElement.classList.remove("hidden");

  document.getElementById("add-information-button").classList.remove("hidden");
  document.getElementById("creating-connected-account").classList.add("hidden");
  document.getElementById("title").classList.add("hidden");
  document.getElementById("subtitle").classList.add("hidden");
  document.getElementById("add-information-title").classList.remove("hidden");
  document.getElementById("add-information-subtitle").classList.remove("hidden");
});
```

fetch("/account.php", {
fetch(`/account/${connectedAccountId}`, {
method: "POST",
})
.then((response) => response.json())
.then((json) => {
const {error} = json;

```
  if (error) {
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("adding-onboarding-information").classList.add("hidden");
    document.getElementById("add-information-button").classList.remove("hidden");
    return;
  }

  document.getElementById("example-form").classList.remove("hidden");
  document.getElementById("onboarding-has-begun").classList.remove("hidden");
  document.getElementById("adding-onboarding-information").classList.add("hidden");
});
```

import { loadConnectAndInitialize } from "@stripe/connect-js";
const response = await fetch('/account\_session.php', {
const response = await fetch('/account\_session', {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
account: connectedAccountId,
}),
});
fetch("/account.php", {
fetch("/account", {
method: "POST",
})
.then((response) => response.json())
.then((json) => {
const {account, error} = json;

```
  if (error) {
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("sign-up-button").classList.remove("hidden");
    document.getElementById("creating-connected-account").classList.add("hidden");
    document.getElementById("dev-callout").classList.add("hidden");
    return;
  }

  connectedAccountId = account;

  const connectedAccountIdElement = document.getElementById("connected-account-id");
  connectedAccountIdElement.innerHTML = `Your connected account ID is: <code class="bold">${connectedAccountId}</code>`;
  connectedAccountIdElement.classList.remove("hidden");

  document.getElementById("creating-connected-account").classList.add("hidden");
  document.getElementById("title").classList.add("hidden");
  document.getElementById("subtitle").classList.add("hidden");

  const stripeConnectInstance = loadConnectAndInitialize({
    // Replace this with your publishable API key from https://dashboard.stripe.com/test/apikeys
    publishableKey: "pk_INSERT_YOUR_PUBLISHABLE_KEY",
    fetchClientSecret: fetchClientSecret,
    appearance: {
      overlays: 'dialog',
      variables: {
        colorPrimary: "#635BFF",
      },
    },
  });

  const container = document.getElementById("embedded-onboarding-container");
  const embeddedOnboardingComponent = stripeConnectInstance.create("account-onboarding");
  embeddedOnboardingComponent.setOnExit(() => {
    console.log('User exited the onboarding flow');
  });
  container.appendChild(embeddedOnboardingComponent);
});
```

fetch("/account.php", {
fetch("/account", {
method: "POST",
})
.then((response) => response.json())
.then((json) => {
const {account, error} = json;

```
  if (error) {
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("sign-up-button").classList.remove("hidden");
    document.getElementById("creating-connected-account").classList.add("hidden");
    document.getElementById("dev-callout").classList.add("hidden");
    return;
  }

  connectedAccountId = account;

  const connectedAccountIdElement = document.getElementById("connected-account-id");
  connectedAccountIdElement.innerHTML = `Your connected account ID is: <code class="bold">${connectedAccountId}</code>`;
  connectedAccountIdElement.classList.remove("hidden");

  document.getElementById("add-information-button").classList.remove("hidden");
  document.getElementById("creating-connected-account").classList.add("hidden");
  document.getElementById("title").classList.add("hidden");
  document.getElementById("subtitle").classList.add("hidden");
  document.getElementById("add-information-title").classList.remove("hidden");
  document.getElementById("add-information-subtitle").classList.remove("hidden");
});
```

fetch("/account\_link.php", {
fetch("/account\_link", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
account: connectedAccountId,
}),
})
.then((response) => response.json())
.then((json) => {
const {url, error} = json;

```
  if (error) {
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("add-information-button").classList.remove("hidden");
    return;
  }

  document.getElementById("adding-onboarding-information").classList.add("hidden");
  window.location.href = url;
});
```

document.getElementById("title").classList.add("hidden");
document.getElementById("subtitle").classList.add("hidden");
document.getElementById("sign-up-button").classList.add("hidden");
document.getElementById("details-submitted-title").classList.remove("hidden");
document.getElementById("details-submitted-subtitle").classList.remove("hidden");
connectedAccountId = parts\[2];
createAccountLinkAndRedirect(connectedAccountId);
margin-top: 0;
margin-bottom: 80px;
margin: 0;
background-color: #635BFF;
color: #ffffff;
.example-form {
height: 400px;
width: 420px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px dashed black;
padding: 0;
}
background-color: #635BFF;
color: #ffffff;
{
"name": "stripe-sample-code",
"version": "1.0.0",
"description": "Build a full, working Connect integration. Here are some basic scripts you can use to build and run the application.",
"scripts": {
"start": "parcel watch",
"build": "parcel build"
},
"author": "",
"license": "ISC",
"devDependencies": {
"parcel": "^2.8.3"
},
"source": "public/index.html",
"dependencies": {
"@stripe/connect-js": "3.3.5"
}
}
{
"name": "stripe-sample-code",
"version": "1.0.0",
"description": "Build a full, working Connect integration. Here are some basic scripts you can use to build and run the application.",
"scripts": {
"start-client": "parcel watch",
"start-server": "node server.js",
"start": "concurrently "yarn start-client" "yarn start-server"",
"build": "parcel build"
},
"author": "",
"license": "ISC",
"devDependencies": {
"concurrently": "4.1.2",
"parcel": "^2.8.3"
},
"source": "public/index.html",
"dependencies": {
"express": "^4.17.1",
"stripe": "20.1.0",
"@stripe/connect-js": "3.3.5"
}
}
{
"name": "stripe-sample",
"version": "0.1.0",
"dependencies": {
"@stripe/connect-js": "3.3.5",
"@stripe/react-connect-js": "3.3.7",
"express": "^4.17.1",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.4.0",
"react-scripts": "^3.4.0",
"stripe": "20.1.0"
},
"devDependencies": {
"concurrently": "4.1.2",
"parcel": "^2.8.3"
},
"homepage": "http://localhost:3000",
"proxy": "http://localhost:4242",
"source": "public/index.html",
"scripts": {
"start-client": "parcel watch",
"start-server": "node server.js",
"build": "parcel build",
"test": "react-scripts test",
"eject": "react-scripts eject",
"start": "concurrently "yarn start-client" "yarn start-server""
},
"eslintConfig": {
"extends": "react-app"
},
"browserslist": {
"production": \[
">0.2%",
"not dead",
"not op\_mini all"
],
"development": \[
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
]
}
}
{
"name": "client",
"version": "0.1.0",
"private": true,
"dependencies": {
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.4.0",
"react-scripts": "^3.4.0",
"@stripe/connect-js": "3.3.5",
"@stripe/react-connect-js": "3.3.7"
},
"homepage": "http://localhost:3000",
"proxy": "http://localhost:4242",
"scripts": {
"start": "parcel watch",
"build": "parcel build"
},
"source": "public/index.html",
"eslintConfig": {
"extends": "react-app"
},
"browserslist": {
"production": \[
">0.2%",
"not dead",
"not op\_mini all"
],
"development": \[
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
]
},
"devDependencies": {
"parcel": "^2.8.3"
}
}
import Refresh from "./Refresh";
import Return from "./Return";
{
path: "/refresh/:connectedAccountId",
element: ,
},
{
path: "/return/:connectedAccountId",
element: ,
},
export default function App() {
return (

);
}
margin-top: 0;
margin-bottom: 80px;
margin: 0;
background-color: #635BFF;
color: #ffffff;
.example-form {
height: 400px;
width: 420px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px dashed black;
padding: 0;
}
background-color: #635BFF;
color: #ffffff;
\# Replace this placeholder with your publishable key from https://dashboard.stripe.com/test/apikeys
REACT\_APP\_STRIPE\_PUBLISHABLE\_KEY=pk\_INSERT\_YOUR\_PUBLISHABLE\_KEY
export default function Refresh() {
const {connectedAccountId} = useParams();
const \[accountLinkCreatePending, setAccountLinkCreatePending] = useState(false);
const \[error, setError] = useState(false);

React.useEffect(() => {
if (connectedAccountId) {
setAccountLinkCreatePending(true);
fetch("/account\_link.php", {
fetch("/account\_link", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
account: connectedAccountId,
}),
})
.then((response) => response.json())
.then((json) => {
setAccountLinkCreatePending(false);

```
      const { url, error } = json;

      if (url) {
        window.location.href = url;
      }

      if (error) {
        setError(true);
      }
    });
}
```

}, \[connectedAccountId])

return (

```
    Rocket Rides
  
  
    Add information to start accepting money
    Rocket Rides is the world's leading air travel platform: join our team of pilots to help people travel faster.
    {error && Something went wrong!}
  
  
    {connectedAccountId && Your connected account ID is: {connectedAccountId}}
    {accountLinkCreatePending && Creating a new Account Link...}
  
```

);
}
export default function Return() {
const {connectedAccountId} = useParams();

return (

```
    Rocket Rides
  
  
    Details submitted
    That's everything we need for now
  
  
    
    This is a sample app for Stripe-hosted Connect onboarding. View docs
    
  
```

);
}
Rocket Rides
{!connectedAccountId && Rocket Rides is the world's leading air travel platform: join our team of pilots to help people travel faster.}
{connectedAccountId && Rocket Rides partners with Stripe to help you receive payments while keeping your personal and bank details secure.}
onClick={async () => {
setAccountCreatePending(true);
setError(false);
fetch("/account.php", {
method: "POST",
})
fetch("/account", {
method: "POST",
})
.then((response) => response.json())
.then((json) => {
setAccountCreatePending(false);
const connectedAccountId = json.account;
setConnectedAccountId(connectedAccountId);
});
}}
onClick={async () => {
setAccountUpdatePending(true);
setError(false);
fetch(`/account.php`, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
account: connectedAccountId,
}),
})
fetch(`/account/${connectedAccountId}`, {
method: "POST",
})
.then((response) => response.json())
.then((json) => {
setAccountUpdatePending(false);
setConnectedAccountUpdated(true);
});
}}
{connectedAccountUpdated && (

```
        Your onboarding flow goes here
      
    )}
```

import {
ConnectAccountOnboarding,
ConnectComponentsProvider,
} from "@stripe/react-connect-js";
Rocket Rides
{!connectedAccountId && Rocket Rides is the world's leading air travel platform: join our team of pilots to help people travel faster.}
onClick={async () => {
setAccountCreatePending(true);
setError(false);
fetch("/account.php", {
method: "POST",
})
fetch("/account", {
method: "POST",
})
.then((response) => response.json())
.then((json) => {
setAccountCreatePending(false);
const { account, error } = json;

```
                if (account) {
                  setConnectedAccountId(account);
                }

                if (error) {
                  setError(true);
                }
              });
          }}
      
        <ConnectAccountOnboarding
          onExit={() => setOnboardingExited(true)}
        />
      
    Rocket Rides
    {!connectedAccountId && Rocket Rides is the world's leading air travel platform: join our team of pilots to help people travel faster.}
    {connectedAccountId && Matt's Mats partners with Stripe to help you receive payments and keep your personal bank and details secure.}
        onClick={async () => {
          setAccountCreatePending(true);
          setError(false);
          fetch("/account.php", {
            method: "POST",
          })
          fetch("/account", {
            method: "POST",
          })
            .then((response) => response.json())
            .then((json) => {
              setAccountCreatePending(false);

              const { account, error } = json;

              if (account) {
                setConnectedAccountId(account);
              }

              if (error) {
                setError(true);
              }
            });
        }}
        onClick={async () => {
          setAccountLinkCreatePending(true);
          setError(false);
          fetch("/account_link.php", {
          fetch("/account_link", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              account: connectedAccountId,
            }),
          })
            .then((response) => response.json())
            .then((json) => {
              setAccountLinkCreatePending(false);

              const { url, error } = json;
              if (url) {
                window.location.href = url;
              }

              if (error) {
                setError(true);
              }
            });
        }}
```

import { loadConnectAndInitialize } from "@stripe/connect-js";
export const useStripeConnect = (connectedAccountId) => {
const \[stripeConnectInstance, setStripeConnectInstance] = useState();

useEffect(() => {
if (connectedAccountId) {
const fetchClientSecret = async () => {
const response = await fetch("/account\_session.php", {
const response = await fetch("/account\_session", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
account: connectedAccountId,
}),
});

```
    if (!response.ok) {
      // Handle errors on the client side here
      const { error } = await response.json();
      throw ("An error occurred: ", error);
    } else {
      const { client_secret: clientSecret } = await response.json();
      return clientSecret;
    }
  };

  setStripeConnectInstance(
    loadConnectAndInitialize({
      publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
      fetchClientSecret,
      appearance: {
        overlays: "dialog",
        variables: {
          colorPrimary: "#635BFF",
        },
      },
    })
  );
}
```

}, \[connectedAccountId]);

return stripeConnectInstance;
};
Rocket Rides
{!connectedAccountId && Rocket Rides is the world's leading air travel platform: join our team of pilots to help people travel faster.}
{connectedAccountId && Matt's Mats partners with Stripe to help you receive payments while keeping your personal and bank details secure.}
onClick={async () => {
setAccountCreatePending(true);
setError(false);
fetch("/api/account", {
method: "POST",
})
.then((response) => response.json())
.then((json) => {
setAccountCreatePending(false);

```
              const { account, error } = json;

              if (account) {
                setConnectedAccountId(account);
              }

              if (error) {
                setError(true);
              }
            });
        }}
        onClick={async () => {
          setAccountLinkCreatePending(true);
          setError(false);
          fetch("/api/account_link", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              account: connectedAccountId,
            }),
          })
            .then((response) => response.json())
            .then((json) => {
              setAccountLinkCreatePending(false);

              const { url, error } = json;
              if (url) {
                window.location.href = url;
              }

              if (error) {
                setError(true);
              }
            });
        }}
```

import {
ConnectAccountOnboarding,
ConnectComponentsProvider,
} from "@stripe/react-connect-js";
Rocket Rides
{!connectedAccountId && Rocket Rides is the world's leading air travel platform: join our team of pilots to help people travel faster.}
onClick={async () => {
setAccountCreatePending(true);
setError(false);
fetch("/api/account", {
method: "POST",
})
.then((response) => response.json())
.then((json) => {
setAccountCreatePending(false);
const { account, error } = json;

```
                if (account) {
                  setConnectedAccountId(account);
                }

                if (error) {
                  setError(true);
                }
              });
          }}
      
        <ConnectAccountOnboarding
          onExit={() => setOnboardingExited(true)}
        />
      
    Rocket Rides
    {!connectedAccountId && Rocket Rides is the world's leading air travel platform: join our team of pilots to help people travel faster.}
    {connectedAccountId && Rocket Rides partners with Stripe to help you receive payments while keeping your personal and bank details secure.}
          onClick={async () => {
            setAccountCreatePending(true);
            setError(false);
            fetch("/api/account", {
              method: "POST",
            })
              .then((response) => response.json())
              .then((json) => {
                setAccountCreatePending(false);
                const connectedAccountId = json.account;
                setConnectedAccountId(connectedAccountId);
              });
          }}
          onClick={async () => {
            setAccountUpdatePending(true);
            setError(false);
            fetch(`/api/account/${connectedAccountId}`, {
              method: "POST",
            })
              .then((response) => response.json())
              .then((json) => {
                setAccountUpdatePending(false);
                setConnectedAccountUpdated(true);
              });
          }}
    {connectedAccountUpdated && (
      
        Your onboarding flow goes here
      
    )}
```

export default function Refresh() {
const {query: {id: connectedAccountId}} = useRouter();
const \[accountLinkCreatePending, setAccountLinkCreatePending] = useState(false);
const \[error, setError] = useState(false);

React.useEffect(() => {
if (connectedAccountId) {
setAccountLinkCreatePending(true);
fetch("/api/account\_link", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
account: connectedAccountId,
}),
})
.then((response) => response.json())
.then((json) => {
setAccountLinkCreatePending(false);

```
      const { url, error } = json;

      if (url) {
        window.location.href = url;
      }

      if (error) {
        setError(true);
      }
    });
}
```

}, \[connectedAccountId])

return (

```
    Rocket Rides
  
  
    Add information to start accepting money
    Rocket Rides is the world's leading air travel platform: join our team of pilots to help people travel faster.
    {error && Something went wrong!}
  
  
    {connectedAccountId && Your connected account ID is: {connectedAccountId}}
    {accountLinkCreatePending && Creating a new Account Link...}
  
```

);
}
export default function Return() {
return (

```
    Rocket Rides
  
  
    Details submitted
    That's everything we need for now
  
  
    
    This is a sample app for Stripe-hosted Connect onboarding. View docs
    
  
```

);
}
export default async function handler(req, res) {
if (req.method === 'POST') {
try {
const account = await stripe.accounts.create({});
const account = await stripe.accounts.create({
controller: {
stripe\_dashboard: {
type: "none",
},
stripe\_dashboard: {
type: "express",
},
fees: {
payer: "application"
},
losses: {
payments: "application"
},
requirement\_collection: "application",
losses: {
payments: "application"
},
},
capabilities: {
card\_payments: {requested: true},
transfers: {requested: true}
},
capabilities: {
transfers: {requested: true}
},
country: "US",
});

```
  res.json({account: account.id});
} catch (error) {
  console.error('An error occurred when calling the Stripe API to create an account:', error);
  res.status(500);
  res.json({error: error.message});
}
```

}
}
export default async function handler(req, res) {
if (req.method === 'POST') {
try {
const {id: connectedAccountId} = req.query;

```
  const account = await stripe.accounts.update(
    connectedAccountId,
    {
      business_type: 'individual',
    },
  );

  res.json({
    account: account.id
  });
} catch (error) {
  console.error('An error occurred when calling the Stripe API to update an account:', error);
  res.status(500);
  res.json({error: error.message});
}
```

}
}
export default async function handler(req, res) {
if (req.method === 'POST') {
try {
const accountSession = await stripe.accountSessions.create({
account: req.body.account,
components: {
account\_onboarding: { enabled: true },
}
});

```
  res.json({
    client_secret: accountSession.client_secret,
  });
} catch (error) {
  console.error(
    "An error occurred when calling the Stripe API to create an account session",
    error
  );
  res.status(500);
  res.json({error: error.message});
}
```

}
}
export default async function handler(req, res) {
if (req.method === "POST") {
try {
const { account } = req.body;

```
  const accountLink = await stripe.accountLinks.create({
    account: account,
    refresh_url: `${req.headers.origin}/refresh/${account}`,
    return_url: `${req.headers.origin}/return/${account}`,
    type: "account_onboarding",
  });

  res.json({
    url: accountLink.url,
  });
} catch (error) {
  console.error(
    "An error occurred when calling the Stripe API to create an account link:",
    error
  );
  res.status(500);
  res.send({ error: error.message });
}
```

}
}
import { loadConnectAndInitialize } from "@stripe/connect-js";
export const useStripeConnect = (connectedAccountId) => {
const \[stripeConnectInstance, setStripeConnectInstance] = useState();

useEffect(() => {
if (connectedAccountId) {
const fetchClientSecret = async () => {
const response = await fetch("/api/account\_session", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
account: connectedAccountId,
}),
});

```
    if (!response.ok) {
      // Handle errors on the client side here
      const { error } = await response.json();
      throw ("An error occurred: ", error);
    } else {
      const { client_secret: clientSecret } = await response.json();
      return clientSecret;
    }
  };

  setStripeConnectInstance(
    loadConnectAndInitialize({
      publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      fetchClientSecret,
      appearance: {
        overlays: "dialog",
        variables: {
          colorPrimary: "#635BFF",
        },
      },
    })
  );
}
```

}, \[connectedAccountId]);

return stripeConnectInstance;
};
export const stripe = require('stripe')(process.env.STRIPE\_SECRET\_KEY, {
apiVersion: '2023-10-16'
});
margin-top: 0;
margin-bottom: 80px;
margin: 0;
background-color: #635BFF;
color: #ffffff;
.example-form {
height: 400px;
width: 420px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px dashed black;
padding: 0;
}
background-color: #635BFF;
color: #ffffff;
STRIPE\_SECRET\_KEY=sk\_INSERT\_YOUR\_SECRET\_KEY
NEXT\_PUBLIC\_STRIPE\_PUBLISHABLE\_KEY=pk\_INSERT\_YOUR\_PUBLISHABLE\_KEY
"@stripe/connect-js": "3.3.5",
"@stripe/react-connect-js": "3.3.7",
{
"name": "stripe-sample",
"version": "0.1.0",
"private": true,
"source": "public/index.html",
"scripts": {
"start-client": "parcel watch",
"start-server": "node server.js",
"build": "parcel build",
"start": "concurrently "yarn start-client" "yarn start-server""
},
"dependencies": {
"@stripe/connect-js": "3.3.13",
"express": "^4.17.1",
"stripe": "20.1.0",
"vue": "^3.2.38",
"vue-router": "4"
},
"devDependencies": {
"@parcel/transformer-vue": "^2.9.3",
"concurrently": "4.1.2",
"parcel": "^2.9.3"
},
"browserslist": {
"production": \[
">0.2%",
"not dead",
"not op\_mini all"
],
"development": \[
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
]
}
}
{
"name": "stripe-sample",
"version": "0.1.0",
"private": true,
"scripts": {
"start": "parcel watch",
"build": "parcel build"
},
"source": "public/index.html",
"dependencies": {
"@stripe/connect-js": "3.3.13",
"vue": "^3.2.38",
"vue-router": "4"
},
"devDependencies": {
"@parcel/transformer-vue": "^2.9.3",
"parcel": "^2.9.3"
},
"browserslist": {
"production": \[
">0.2%",
"not dead",
"not op\_mini all"
],
"development": \[
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
]
}
}
import Refresh from './components/Refresh.vue'
import Return from './components/Return.vue'
{
path: '/refresh/:account',
name: 'refresh',
component: Refresh
},
{
path: '/return/:account',
name: 'return',
component: Return
},
Rocket Rides
Rocket Rides is the world's leading air travel platform: join our team of pilots to help people travel faster.
fetch("/account\_link.php", {
fetch("/account\_link", {
\# Replace this placeholder with your publishable key from https://dashboard.stripe.com/test/apikeys
VUE\_APP\_STRIPE\_PUBLISHABLE\_KEY=pk\_INSERT\_YOUR\_PUBLISHABLE\_KEY
Rocket Rides
Rocket Rides is the world's leading air travel platform: join our team of pilots to help people travel faster.
Rocket Rides partners with Stripe to help you receive payments while keeping your personal and bank details secure.

```
    Your onboarding flow goes here
  
createAccount() {
  this.accountCreatePending = true;
  this.error = false;
  fetch("/account.php", {
  fetch("/account", {
    method: "POST",
  }).then((response) =>
    response.json().then((json) => {
      this.accountCreatePending = false;
      this.connectedAccountId = json.account;
    })
  );
},
updateAccount() {
  this.accountUpdatePending = true;
  this.error = false;
  fetch(`/account.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      account: this.connectedAccountId,
    }),
  })
  fetch(`/account/${this.connectedAccountId}`, {
    method: "POST",
  })
    .then((response) =>
    response.json().then((json) => {
      this.accountUpdatePending = false;
      this.connectedAccountUpdated = true;
    })
  );
},
  Rocket Rides
  Rocket Rides is the world's leading air travel platform: join our team of pilots to help people travel faster.
createAccount() {
  this.accountCreatePending = true;
  this.error = false;
  fetch("/account.php", {
  fetch("/account", {
    method: "POST",
  }).then((response) =>
    response.json().then((json) => {
      this.accountCreatePending = false;
      this.connectedAccountId = json.account;

      const fetchClientSecret = async () => {
        const response = await fetch("/account_session.php", {
        const response = await fetch("/account_session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            account: this.connectedAccountId,
          }),
        });

        if (!response.ok) {
          // Handle errors on the client side here
          const { error } = await response.json();
          throw ("An error occurred: ", error);
        } else {
          const { client_secret: clientSecret } = await response.json();
          return clientSecret;
        }
      };

      this.stripeConnectInstance = loadConnectAndInitialize({
        publishableKey: process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY,
        fetchClientSecret,
        appearance: {
          overlays: "dialog",
          variables: {
            colorPrimary: "#635BFF",
          },
        },
      });

      const container = document.getElementById("embedded-onboarding-container");
      const embeddedOnboardingComponent = this.stripeConnectInstance.create("account-onboarding");
      embeddedOnboardingComponent.setOnExit(() => {
        console.log('User exited the onboarding flow');
      });
      container.appendChild(embeddedOnboardingComponent);
    })
  );
},
  Rocket Rides
  Rocket Rides is the world's leading air travel platform: join our team of pilots to help people travel faster.
  Rocket Rides partners with Stripe to help you receive payments while keeping your personal and bank details secure.
createAccount() {
  this.accountCreatePending = true;
  this.error = false;
  fetch("/account.php", {
  fetch("/account", {
    method: "POST",
  }).then((response) =>
    response.json().then((json) => {
      this.accountCreatePending = false;
      this.connectedAccountId = json.account;
    })
  );
},
createAccountLink() {
  this.accountLinkCreatePending = true;
  this.error = false;
  fetch("/account_link.php", {
  fetch("/account_link", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      account: this.connectedAccountId,
    }),
  }).then((response) =>
    response.json().then((json) => {
      this.accountLinkCreatePending = false;

      const { url, error } = json;
      if (url) {
        window.location.href = url;
      }

      if (error) {
        this.error = true
      }
    })
  );
},
```

margin-top: 0;
margin-bottom: 80px;
margin: 0;
background-color: #635BFF;
color: #ffffff;
.example-form {
height: 400px;
width: 420px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px dashed black;
padding: 0;
}
background-color: #635BFF;
color: #ffffff;

- pk\_INSERT\_YOUR\_PUBLISHABLE\_KEY

1. Build the server

```
pip3 install -r requirements.txt
```

2. Run the server

```
FLASK_APP=server.py python3 -m flask run --port=4242
```

1. Build the server

```
bundle install
```

2. Run the server

```
ruby server.rb -o 0.0.0.0
```

1. Build the server

```
composer install
```

2. Run the server

```
php -S 127.0.0.1:4242 --docroot=dist
```

1. Build the server

```
dotnet restore
```

2. Run the server

```
dotnet run
```

1. Build the server

```
mvn package
```

2. Run the server

```
java -cp target/sample-jar-with-dependencies.jar com.stripe.sample.Server
```

1. Install the dependencies

\~~
go mod download github.com/stripe/stripe-go/v84
go mod download github.com/gorilla/mux
\~~

2. Run the server

```
go run server.go
```

3. Build the client app

```
npm install
```

4. Run the client app

```
npm start
```

5. Go to <http://localhost:4242>
6. Build the application

```
npm install
```

2. Run the application

```
npm start
```

3. Go to <http://localhost:4242/index.html>
4. Build the application

```
npm install
```

2. Run the application

```
npm run dev
```

3. Go to [localhost:4242](http://localhost:4242)

### Install the Stripe Node library

Install the package and import it in your code. Alternatively, if you’re starting from scratch and need a `package.json` file, download the project files using the Download link in the code editor.

#### npm

Install the library:

```bash
npm install --save stripe@20.1.0
```

#### GitHub

Download the stripe-node library source code directly [from GitHub](https://github.com/stripe/stripe-node/releases/tag/v20.1.0).

### Install the Stripe Ruby library

Install the Stripe Ruby gem and require it in your code. Alternatively, if you’re starting from scratch and need a Gemfile, download the project files using the link in the code editor.

#### Terminal

Install the gem:

```bash
gem install stripe -v 18.1.0
```

#### Bundler

Add this line to your Gemfile:

```bash
gem 'stripe', '18.1.0'
```

#### GitHub

Download the stripe-ruby gem source code directly [from GitHub](https://github.com/stripe/stripe-ruby/releases/tag/v18.1.0).

### Install the Stripe Java library

Add the dependency to your build and import the library. Alternatively, if you’re starting from scratch and need a sample `pom.xml` file (for Maven), download the project files using the link in the code editor.

#### Maven

Add the following dependency to your POM.

```bash
<dependency>\n<groupId>com.stripe</groupId>\n<artifactId>stripe-java</artifactId>\n<version>31.1.0</version>\n</dependency>
```

#### Gradle

Add the dependency to your `build.gradle` file.

```bash
implementation "com.stripe:stripe-java:31.1.0"
```

#### GitHub

Download the JAR directly [from GitHub](https://github.com/stripe/stripe-java/releases/tag/v31.1.0).

### Install the Stripe Python package

Install the Stripe package and import it in your code. Alternatively, if you’re starting from scratch and need a `requirements.txt` file, download the project files using the link in the code editor.

#### pip

Install the package using pip:

```bash
pip3 install stripe==14.1.0
```

#### GitHub

Download the stripe-python library source code directly [from GitHub](https://github.com/stripe/stripe-python/releases/tag/v14.1.0).

### Install the Stripe PHP library

Install the library with composer and initialize it with your secret API key. Alternatively, if you’re starting from scratch and need a `composer.json` file, download the files using the link in the code editor.

#### Composer

Install the library:

```bash
composer require stripe/stripe-php:19.1.0
```

#### GitHub

Download the stripe-php library source code directly [from GitHub](https://github.com/stripe/stripe-php/releases/tag/v19.1.0).

### Install the Stripe Go library

Add the dependency to your build and import the library. Alternatively, if you’re starting from scratch and need a `go.mod` file, download the project files using the link in the code editor.

#### Go

Make sure to initialize with Go Modules:

```bash
go get -u github.com/stripe/stripe-go/v84.1.0
```

#### GitHub

Download the stripe-go module source code directly [from GitHub](https://github.com/stripe/stripe-go/releases/tag/v84.1.0).

### Install the Stripe.net library

Install the package with .NET or NuGet. Alternatively, if you’re starting from scratch, download the files, which include a configured `.csproj` file.

#### dotnet

Install the library:

```bash
dotnet add package Stripe.net --version 50.1.0
```

#### NuGet

Install the library:

```bash
Install-Package Stripe.net -Version 50.1.0
```

#### GitHub

Download the Stripe.net library source code directly [from GitHub](https://github.com/stripe/stripe-dotnet/releases/tag/v50.1.0).

### Install the Stripe library

Install the packages and import them in your code. Alternatively, if you’re starting from scratch and need a `package.json` file, download the project files using the link in the code editor.

Install the libraries, and initialize the Stripe SDK with the correct beta headers:

```bash
npm install --save stripe@20.1.0
```

### Overview

Your Connect integration changes significantly based on how you create your connected accounts. We’ve customized the connected account properties based on your choices when onboarding your platform account to Connect. Changes made here don’t update your platform settings and aren’t reflected in the Stripe Dashboard.

See [Design an integration](https://docs.stripe.com/connect/interactive-platform-guide.md) to learn more about making these choices.

### Choose how your connected accounts onboard to Stripe

Your choice of onboarding method affects the availability of other account options below.

#### Item 1

Redirect your connected accounts to Stripe-hosted onboarding using an Account Link.

#### Item 2

### Choose how your connected accounts onboard to Stripe

Your choice of onboarding method affects the availability of other account options below.

#### Item 1

Embed the Account Onboarding embedded component in your platform’s application.

#### Item 2

### Choose how your connected accounts onboard to Stripe

Your choice of onboarding method affects the availability of other account options below.

#### Item 1

Provide verification information for your connected accounts using the Stripe API in an onboarding flow you build yourself. Your platform is responsible for collecting updated information when requirements change or become due.

Stripe doesn’t recommend this option unless you’re fully committed to the operational complexity required to build and maintain an API onboarding flow. For a customized onboarding flow, Stripe strongly recommends embedded onboarding.

#### Item 2

### Choose where your connected accounts manage their payments and account details

#### Item 1

Give your connected accounts access to the Stripe Dashboard.

#### Item 2

### Choose where your connected accounts manage their payments and account details

#### Item 1

Give your connected accounts access to the Express Dashboard.

#### Item 2

### Choose where your connected accounts manage their payments and account details

#### Item 1

Build an account management interface for your connected accounts using the Stripe API and [Connect embedded components](https://docs.stripe.com/connect/get-started-connect-embedded-components.md).

#### Item 2

### Choose your charge type

#### Item 1

Create charges directly on your connected accounts.

#### Item 2

### Choose your charge type

#### Item 1

Create destination charges on your platform account, transferring money to your connected accounts. Request the `transfers` capability for your connected accounts.

#### Item 2

### Choose your charge type

#### Item 1

Create destination charges on your platform account, transferring money to your connected accounts.

#### Item 2

### Choose your charge type

#### Item 1

Create charges on your platform account and split each amount between multiple connected accounts. Request the `transfers` capability for your connected accounts.

#### Item 2

### Choose your charge type

#### Item 1

Create charges on your platform account and split each amount between multiple connected accounts.

#### Item 2

### Choose who pays fees

#### Item 1

Stripe takes Stripe fees from your connected accounts.

#### Item 2

### Choose who pays fees

#### Item 1

Stripe takes Stripe fees from your platform. Your platform can monetize payments using application fees.

#### Item 2

### Choose who is liable for negative balances

#### Item 1

Your platform isn’t liable for negative account balances. Stripe is responsible for collecting updated information when requirements are due or change.

#### Item 2

### Choose who is liable for negative balances

#### Item 1

Your platform is liable for negative account balances. Your platform is also responsible for collecting updated information when requirements are due or change.

Before creating accounts with this setup, carefully consider and acknowledge your platform responsibilities for negative balance liabilities.

#### Item 2

### Choose who is liable for negative balances

#### Item 1

Your platform is liable for negative account balances. Stripe is responsible for collecting updated information when requirements are due or change.

Before creating accounts with this setup, carefully consider and acknowledge your platform responsibilities for negative balance liabilities.

#### Item 2

### Add an endpoint for creating a connected account

Set up an endpoint on your server for your client to call to handle creating a connected account.

### Create a connected account

Create a connected account by calling the Stripe API. We’ve configured the attributes used based on the preferences you’ve selected above. You can prefill verification information, the business profile of the user, and other fields on the [account](https://docs.stripe.com/api/accounts/create.md) if your platform has already collected it.

### Create a connected account

Create a connected account by calling the Stripe API. We’ve configured the attributes used based on the preferences you’ve selected above. You can prefill verification information, the business profile of the user, and other fields on the [account](https://docs.stripe.com/api/v2/core/accounts/create.md) if your platform has already collected it.

### Specify account country

When your accounts don’t use a Stripe-hosted dashboard, you must specify the account country up front.

### Specify account country

You must specify the account’s `identity.country` up front.

### Call the endpoint to create a connected account

Call the endpoint you added above to create a connected account.

### Overview

Per [your preference selection](https://docs.stripe.com/connect/onboarding/quickstart.md#choose-onboarding-surface), you selected embedded onboarding. Your connected accounts onboard to your platform through the Account Onboarding component embedded directly into your application.

### Add an endpoint for creating an account session

Add a server endpoint for your client to call to create an AccountSession. An AccountSession allows you to use Connect.js embedded components.

### Create an AccountSession

Create an [AccountSession](https://docs.stripe.com/api/account_sessions.md) by calling the `v1/account_sessions` API.

### Delegate API access to your connected account

Specify the ID of the connected account you’re acting on behalf of.

### Enable the Account Onboarding component

Enable the `account_onboarding` component for the AccountSession.

### Return the client secret

Have your endpoint return the `client_secret` property from the AccountSession.

### Initialize Connect.js

`loadConnectAndInitialize` returns a StripeConnect object, which creates a StripeConnectInstance. Pass in your [publishable key](https://docs.stripe.com/keys.md) and a function that creates an AccountSession and returns its `client_secret`.

### Optional: Style Connect embedded components

You can [customize the appearance of the onboarding component](https://docs.stripe.com/connect/customize-connect-embedded-components.md) by passing an `appearance` configuration when you initialize the StripeConnect instance. By default, Connect embedded components inherit the font-family of the parent HTML element, but you can override that by passing your company’s color scheme.

### Include the Connect onboarding embedded component

Add the Connect onboarding embedded component. After initialization, the StripeConnectInstance manages the context and handles making requests to Stripe using the client secret and publishable key.

### Redirect the user when onboarding is complete

Use the `onExit` callback to progress your user. The component calls `onExit` when the user completes embedded onboarding.

### Overview

Per [your preference selection](https://docs.stripe.com/connect/onboarding/quickstart.md#choose-onboarding-surface), you selected Stripe-hosted onboarding. Your platform redirects your connected accounts to a Stripe-hosted, co-branded onboarding interface using an [Account Link](https://docs.stripe.com/api/account_links.md).

### Overview

Per [your preference selection](https://docs.stripe.com/connect/onboarding/quickstart.md#choose-onboarding-surface), you selected Stripe-hosted onboarding. Your platform redirects your connected accounts to a Stripe-hosted, co-branded onboarding interface using an [Account Link](https://docs.stripe.com/api/v2/core/account-links.md).

### Create an Account Links endpoint

Add an endpoint on your server to create an Account Link.

### Provide a return URL

When your connected account completes the onboarding flow, it redirects them to the return URL. That doesn’t mean that all information has been collected or that the connected account has no outstanding requirements. It only means that they entered and exited the flow properly.

### Provide a refresh URL

Stripe redirects your connected account to the refresh URL when the link is expired, the link has already been visited, your platform can’t access the connected account, or the account is rejected. Have the refresh URL create a new onboarding Account Link and redirect your user to it.

### Call the endpoint to create an Account link

Provide the connected account ID.

### Redirect the user to the URL

Send the user to Stripe to complete onboarding. They’re redirected back to your app when onboarding is complete.

### Handle the connected account returning

Show the connected account a useful page when they exit the Stripe-hosted onboarding flow.

### Handle the Account Link refreshing

Call your endpoint for refreshing the Account Link at the refresh URL.

### Overview

Per [your preference selection](https://docs.stripe.com/connect/onboarding/quickstart.md#choose-onboarding-surface), you selected API onboarding. Your connected accounts onboard to your platform through an onboarding flow you build that calls the Stripe API. Your platform collects all required verification information.

### Add an endpoint for updating an account

Call this endpoint to provide account information to Stripe as you collect it.

### Provide information to Stripe

Provide the business type as an example piece of data.

### Call the endpoint to update an account

Provide the connected account ID.

### Progress the onboarding flow

Determine the [required information](https://docs.stripe.com/connect/custom/onboarding.md#establish-requirements) you need to gather. Build a flow for your connected accounts to input it and pass it to Stripe.

### Install the Stripe Node library

Install the package and import it in your code. Alternatively, if you’re starting from scratch and need a `package.json` file, download the project files using the Download link in the code editor.

#### npm

Install the library:

```bash
npm install --save stripe@20.1.0
```

#### GitHub

Download the stripe-node library source code directly [from GitHub](https://github.com/stripe/stripe-node/releases/tag/v20.1.0).

### Install the Stripe Ruby library

Install the Stripe Ruby gem and require it in your code. Alternatively, if you’re starting from scratch and need a Gemfile, download the project files using the link in the code editor.

#### Terminal

Install the gem:

```bash
gem install stripe -v 18.1.0
```

#### Bundler

Add this line to your Gemfile:

```bash
gem 'stripe', '18.1.0'
```

#### GitHub

Download the stripe-ruby gem source code directly [from GitHub](https://github.com/stripe/stripe-ruby/releases/tag/v18.1.0).

### Install the Stripe Java library

Add the dependency to your build and import the library. Alternatively, if you’re starting from scratch and need a sample `pom.xml` file (for Maven), download the project files using the link in the code editor.

#### Maven

Add the following dependency to your POM.

```bash
<dependency>\n<groupId>com.stripe</groupId>\n<artifactId>stripe-java</artifactId>\n<version>31.1.0</version>\n</dependency>
```

#### Gradle

Add the dependency to your `build.gradle` file.

```bash
implementation "com.stripe:stripe-java:31.1.0"
```

#### GitHub

Download the JAR directly [from GitHub](https://github.com/stripe/stripe-java/releases/tag/v31.1.0).

### Install the Stripe Python package

Install the Stripe package and import it in your code. Alternatively, if you’re starting from scratch and need a `requirements.txt` file, download the project files using the link in the code editor.

#### pip

Install the package using pip:

```bash
pip3 install stripe==14.1.0
```

#### GitHub

Download the stripe-python library source code directly [from GitHub](https://github.com/stripe/stripe-python/releases/tag/v14.1.0).

### Install the Stripe PHP library

Install the library with composer and initialize it with your secret API key. Alternatively, if you’re starting from scratch and need a `composer.json` file, download the files using the link in the code editor.

#### Composer

Install the library:

```bash
composer require stripe/stripe-php:19.1.0
```

#### GitHub

Download the stripe-php library source code directly [from GitHub](https://github.com/stripe/stripe-php/releases/tag/v19.1.0).

### Install the Stripe Go library

Add the dependency to your build and import the library. Alternatively, if you’re starting from scratch and need a `go.mod` file, download the project files using the link in the code editor.

#### Go

Make sure to initialize with Go Modules:

```bash
go get -u github.com/stripe/stripe-go/v84.1.0
```

#### GitHub

Download the stripe-go module source code directly [from GitHub](https://github.com/stripe/stripe-go/releases/tag/v84.1.0).

### Install the Stripe.net library

Install the package with .NET or NuGet. Alternatively, if you’re starting from scratch, download the files, which include a configured `.csproj` file.

#### dotnet

Install the library:

```bash
dotnet add package Stripe.net --version 50.1.0
```

#### NuGet

Install the library:

```bash
Install-Package Stripe.net -Version 50.1.0
```

#### GitHub

Download the Stripe.net library source code directly [from GitHub](https://github.com/stripe/stripe-dotnet/releases/tag/v50.1.0).

### Install the Stripe library

Install the packages and import them in your code. Alternatively, if you’re starting from scratch and need a `package.json` file, download the project files using the link in the code editor.

Install the libraries, and initialize the Stripe SDK with the correct beta headers:

```bash
npm install --save stripe@20.1.0
```

### Set your secret key

Add your secret key to your server.

### Set environment variables

Add your secret key and publishable key to a `.env` file. Next.js automatically loads them into your application as [environment variables](https://nextjs.org/docs/basic-features/environment-variables).

### Set environment variables

Add your secret key to a `.env` file. Next.js automatically loads it into your application as [environment variables](https://nextjs.org/docs/basic-features/environment-variables).

### Set your publishable key

Add your publishable key to a `.env` file. React automatically loads it into your application as an [environment variable](https://create-react-app.dev/docs/adding-custom-environment-variables/).

### Set up Connect.js

Import the [@stripe/connect-js](https://github.com/stripe/connect-js) module.

#### npm

Install the library:

```bash
npm install --save @stripe/connect-js
```

#### GitHub

Download the @stripe/connect-js library source code directly [from GitHub](https://github.com/stripe/connect-js).

### Import React Connect.js

Import the [@stripe/react-connect-js](https://github.com/stripe/react-connect-js) module. React Connect.js is a thin wrapper around Connect embedded components that allows you to add embedded components to any React app.

#### npm

Install the library:

```bash
npm install --save @stripe/react-connect-js
```

#### GitHub

Download the @stripe/react-connect-js library source code directly [from GitHub](https://github.com/stripe/react-connect-js).

### Add your platform branding

To use Stripe-hosted onboarding, first go to your [onboarding settings](https://dashboard.stripe.com/settings/connect/onboarding-interface) and customize your branding. You need to set a business name, icon, and brand color.

### Overview

Your Connect integration changes significantly based on how you create your connected accounts. We’ve customized the connected account properties based on your choices when onboarding your platform account to Connect. Changes made here don’t update your platform settings and aren’t reflected in the Stripe Dashboard.

See [Design an integration](https://docs.stripe.com/connect/interactive-platform-guide.md) to learn more about making these choices.

### Choose how your connected accounts onboard to Stripe

Your choice of onboarding method affects the availability of other account options below.

#### Item 1

Redirect your connected accounts to Stripe-hosted onboarding using an Account Link.

#### Item 2

### Choose how your connected accounts onboard to Stripe

Your choice of onboarding method affects the availability of other account options below.

#### Item 1

Embed the Account Onboarding embedded component in your platform’s application.

#### Item 2

### Choose how your connected accounts onboard to Stripe

Your choice of onboarding method affects the availability of other account options below.

#### Item 1

Provide verification information for your connected accounts using the Stripe API in an onboarding flow you build yourself. Your platform is responsible for collecting updated information when requirements change or become due.

Stripe doesn’t recommend this option unless you’re fully committed to the operational complexity required to build and maintain an API onboarding flow. For a customized onboarding flow, Stripe strongly recommends embedded onboarding.

#### Item 2

### Choose where your connected accounts manage their payments and account details

#### Item 1

Give your connected accounts access to the Stripe Dashboard.

#### Item 2

### Choose where your connected accounts manage their payments and account details

#### Item 1

Give your connected accounts access to the Express Dashboard.

#### Item 2

### Choose where your connected accounts manage their payments and account details

#### Item 1

Build an account management interface for your connected accounts using the Stripe API and [Connect embedded components](https://docs.stripe.com/connect/get-started-connect-embedded-components.md).

#### Item 2

### Choose your charge type

#### Item 1

Create charges directly on your connected accounts.

#### Item 2

### Choose your charge type

#### Item 1

Create destination charges on your platform account, transferring money to your connected accounts. Request the `transfers` capability for your connected accounts.

#### Item 2

### Choose your charge type

#### Item 1

Create destination charges on your platform account, transferring money to your connected accounts.

#### Item 2

### Choose your charge type

#### Item 1

Create charges on your platform account and split each amount between multiple connected accounts. Request the `transfers` capability for your connected accounts.

#### Item 2

### Choose your charge type

#### Item 1

Create charges on your platform account and split each amount between multiple connected accounts.

#### Item 2

### Choose who pays fees

#### Item 1

Stripe takes Stripe fees from your connected accounts.

#### Item 2

### Choose who pays fees

#### Item 1

Stripe takes Stripe fees from your platform. Your platform can monetize payments using application fees.

#### Item 2

### Choose who is liable for negative balances

#### Item 1

Your platform isn’t liable for negative account balances. Stripe is responsible for collecting updated information when requirements are due or change.

#### Item 2

### Choose who is liable for negative balances

#### Item 1

Your platform is liable for negative account balances. Your platform is also responsible for collecting updated information when requirements are due or change.

Before creating accounts with this setup, carefully consider and acknowledge your platform responsibilities for negative balance liabilities.

#### Item 2

### Choose who is liable for negative balances

#### Item 1

Your platform is liable for negative account balances. Stripe is responsible for collecting updated information when requirements are due or change.

Before creating accounts with this setup, carefully consider and acknowledge your platform responsibilities for negative balance liabilities.

#### Item 2

### Install the Stripe Node library

Install the package and import it in your code. Alternatively, if you’re starting from scratch and need a `package.json` file, download the project files using the Download link in the code editor.

#### npm

Install the library:

```bash
npm install --save stripe@20.1.0
```

#### GitHub

Download the stripe-node library source code directly [from GitHub](https://github.com/stripe/stripe-node/releases/tag/v20.1.0).

### Install the Stripe Ruby library

Install the Stripe Ruby gem and require it in your code. Alternatively, if you’re starting from scratch and need a Gemfile, download the project files using the link in the code editor.

#### Terminal

Install the gem:

```bash
gem install stripe -v 18.1.0
```

#### Bundler

Add this line to your Gemfile:

```bash
gem 'stripe', '18.1.0'
```

#### GitHub

Download the stripe-ruby gem source code directly [from GitHub](https://github.com/stripe/stripe-ruby/releases/tag/v18.1.0).

### Install the Stripe Java library

Add the dependency to your build and import the library. Alternatively, if you’re starting from scratch and need a sample `pom.xml` file (for Maven), download the project files using the link in the code editor.

#### Maven

Add the following dependency to your POM.

```bash
<dependency>\n<groupId>com.stripe</groupId>\n<artifactId>stripe-java</artifactId>\n<version>31.1.0</version>\n</dependency>
```

#### Gradle

Add the dependency to your `build.gradle` file.

```bash
implementation "com.stripe:stripe-java:31.1.0"
```

#### GitHub

Download the JAR directly [from GitHub](https://github.com/stripe/stripe-java/releases/tag/v31.1.0).

### Install the Stripe Python package

Install the Stripe package and import it in your code. Alternatively, if you’re starting from scratch and need a `requirements.txt` file, download the project files using the link in the code editor.

#### pip

Install the package using pip:

```bash
pip3 install stripe==14.1.0
```

#### GitHub

Download the stripe-python library source code directly [from GitHub](https://github.com/stripe/stripe-python/releases/tag/v14.1.0).

### Install the Stripe PHP library

Install the library with composer and initialize it with your secret API key. Alternatively, if you’re starting from scratch and need a `composer.json` file, download the files using the link in the code editor.

#### Composer

Install the library:

```bash
composer require stripe/stripe-php:19.1.0
```

#### GitHub

Download the stripe-php library source code directly [from GitHub](https://github.com/stripe/stripe-php/releases/tag/v19.1.0).

### Install the Stripe Go library

Add the dependency to your build and import the library. Alternatively, if you’re starting from scratch and need a `go.mod` file, download the project files using the link in the code editor.

#### Go

Make sure to initialize with Go Modules:

```bash
go get -u github.com/stripe/stripe-go/v84.1.0
```

#### GitHub

Download the stripe-go module source code directly [from GitHub](https://github.com/stripe/stripe-go/releases/tag/v84.1.0).

### Install the Stripe.net library

Install the package with .NET or NuGet. Alternatively, if you’re starting from scratch, download the files, which include a configured `.csproj` file.

#### dotnet

Install the library:

```bash
dotnet add package Stripe.net --version 50.1.0
```

#### NuGet

Install the library:

```bash
Install-Package Stripe.net -Version 50.1.0
```

#### GitHub

Download the Stripe.net library source code directly [from GitHub](https://github.com/stripe/stripe-dotnet/releases/tag/v50.1.0).

### Install the Stripe library

Install the packages and import them in your code. Alternatively, if you’re starting from scratch and need a `package.json` file, download the project files using the link in the code editor.

Install the libraries, and initialize the Stripe SDK with the correct beta headers:

```bash
npm install --save stripe@20.1.0
```

### Set your secret key

Add your secret key to your server.

### Set environment variables

Add your secret key and publishable key to a `.env` file. Next.js automatically loads them into your application as [environment variables](https://nextjs.org/docs/basic-features/environment-variables).

### Set environment variables

Add your secret key to a `.env` file. Next.js automatically loads it into your application as [environment variables](https://nextjs.org/docs/basic-features/environment-variables).

### Set your publishable key

Add your publishable key to a `.env` file. React automatically loads it into your application as an [environment variable](https://create-react-app.dev/docs/adding-custom-environment-variables/).

### Set up Connect.js

Import the [@stripe/connect-js](https://github.com/stripe/connect-js) module.

#### npm

Install the library:

```bash
npm install --save @stripe/connect-js
```

#### GitHub

Download the @stripe/connect-js library source code directly [from GitHub](https://github.com/stripe/connect-js).

### Import React Connect.js

Import the [@stripe/react-connect-js](https://github.com/stripe/react-connect-js) module. React Connect.js is a thin wrapper around Connect embedded components that allows you to add embedded components to any React app.

#### npm

Install the library:

```bash
npm install --save @stripe/react-connect-js
```

#### GitHub

Download the @stripe/react-connect-js library source code directly [from GitHub](https://github.com/stripe/react-connect-js).

### Add your platform branding

To use Stripe-hosted onboarding, first go to your [onboarding settings](https://dashboard.stripe.com/settings/connect/onboarding-interface) and customize your branding. You need to set a business name, icon, and brand color.

### Add an endpoint for creating a connected account

Set up an endpoint on your server for your client to call to handle creating a connected account.

### Create a connected account

Create a connected account by calling the Stripe API. We’ve configured the attributes used based on the preferences you’ve selected above. You can prefill verification information, the business profile of the user, and other fields on the [account](https://docs.stripe.com/api/accounts/create.md) if your platform has already collected it.

### Create a connected account

Create a connected account by calling the Stripe API. We’ve configured the attributes used based on the preferences you’ve selected above. You can prefill verification information, the business profile of the user, and other fields on the [account](https://docs.stripe.com/api/v2/core/accounts/create.md) if your platform has already collected it.

### Specify account country

When your accounts don’t use a Stripe-hosted dashboard, you must specify the account country up front.

### Specify account country

You must specify the account’s `identity.country` up front.

### Call the endpoint to create a connected account

Call the endpoint you added above to create a connected account.

### Overview

Per [your preference selection](https://docs.stripe.com/connect/onboarding/quickstart.md#choose-onboarding-surface), you selected embedded onboarding. Your connected accounts onboard to your platform through the Account Onboarding component embedded directly into your application.

### Add an endpoint for creating an account session

Add a server endpoint for your client to call to create an AccountSession. An AccountSession allows you to use Connect.js embedded components.

### Create an AccountSession

Create an [AccountSession](https://docs.stripe.com/api/account_sessions.md) by calling the `v1/account_sessions` API.

### Delegate API access to your connected account

Specify the ID of the connected account you’re acting on behalf of.

### Enable the Account Onboarding component

Enable the `account_onboarding` component for the AccountSession.

### Return the client secret

Have your endpoint return the `client_secret` property from the AccountSession.

### Initialize Connect.js

`loadConnectAndInitialize` returns a StripeConnect object, which creates a StripeConnectInstance. Pass in your [publishable key](https://docs.stripe.com/keys.md) and a function that creates an AccountSession and returns its `client_secret`.

### Optional: Style Connect embedded components

You can [customize the appearance of the onboarding component](https://docs.stripe.com/connect/customize-connect-embedded-components.md) by passing an `appearance` configuration when you initialize the StripeConnect instance. By default, Connect embedded components inherit the font-family of the parent HTML element, but you can override that by passing your company’s color scheme.

### Include the Connect onboarding embedded component

Add the Connect onboarding embedded component. After initialization, the StripeConnectInstance manages the context and handles making requests to Stripe using the client secret and publishable key.

### Redirect the user when onboarding is complete

Use the `onExit` callback to progress your user. The component calls `onExit` when the user completes embedded onboarding.

### Overview

Per [your preference selection](https://docs.stripe.com/connect/onboarding/quickstart.md#choose-onboarding-surface), you selected Stripe-hosted onboarding. Your platform redirects your connected accounts to a Stripe-hosted, co-branded onboarding interface using an [Account Link](https://docs.stripe.com/api/account_links.md).

### Overview

Per [your preference selection](https://docs.stripe.com/connect/onboarding/quickstart.md#choose-onboarding-surface), you selected Stripe-hosted onboarding. Your platform redirects your connected accounts to a Stripe-hosted, co-branded onboarding interface using an [Account Link](https://docs.stripe.com/api/v2/core/account-links.md).

### Create an Account Links endpoint

Add an endpoint on your server to create an Account Link.

### Provide a return URL

When your connected account completes the onboarding flow, it redirects them to the return URL. That doesn’t mean that all information has been collected or that the connected account has no outstanding requirements. It only means that they entered and exited the flow properly.

### Provide a refresh URL

Stripe redirects your connected account to the refresh URL when the link is expired, the link has already been visited, your platform can’t access the connected account, or the account is rejected. Have the refresh URL create a new onboarding Account Link and redirect your user to it.

### Call the endpoint to create an Account link

Provide the connected account ID.

### Redirect the user to the URL

Send the user to Stripe to complete onboarding. They’re redirected back to your app when onboarding is complete.

### Handle the connected account returning

Show the connected account a useful page when they exit the Stripe-hosted onboarding flow.

### Handle the Account Link refreshing

Call your endpoint for refreshing the Account Link at the refresh URL.

### Overview

Per [your preference selection](https://docs.stripe.com/connect/onboarding/quickstart.md#choose-onboarding-surface), you selected API onboarding. Your connected accounts onboard to your platform through an onboarding flow you build that calls the Stripe API. Your platform collects all required verification information.

### Add an endpoint for updating an account

Call this endpoint to provide account information to Stripe as you collect it.

### Provide information to Stripe

Provide the business type as an example piece of data.

### Call the endpoint to update an account

Provide the connected account ID.

### Progress the onboarding flow

Determine the [required information](https://docs.stripe.com/connect/custom/onboarding.md#establish-requirements) you need to gather. Build a flow for your connected accounts to input it and pass it to Stripe.

### Accept payments

Now that you have onboarded a connected account, continue to [create direct charges](https://docs.stripe.com/connect/direct-charges.md).

### Accept payments

Now that you have onboarded a connected account, continue to [create destination charges](https://docs.stripe.com/connect/destination-charges.md).

### Accept payments

Now that you have onboarded a connected account, continue to [create separate charges and transfers](https://docs.stripe.com/connect/separate-charges-and-transfers.md).

### Continue building API onboarding

Use the [required verification information](https://docs.stripe.com/connect/required-verification-information.md) doc and build a way for your connected accounts to complete onboarding. Then, continue to [create direct charges](https://docs.stripe.com/connect/direct-charges.md).

### Continue building API onboarding

Use the [required verification information](https://docs.stripe.com/connect/required-verification-information.md) doc and build a way for your connected accounts to complete onboarding. Then, continue to [create destination charges](https://docs.stripe.com/connect/destination-charges.md).

### Continue building API onboarding

Use the [required verification information](https://docs.stripe.com/connect/required-verification-information.md) doc and build a way for your connected accounts to complete onboarding. Then, continue to [create separate charges and transfers](https://docs.stripe.com/connect/separate-charges-and-transfers.md).
