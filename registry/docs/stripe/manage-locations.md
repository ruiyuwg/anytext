# Manage locations

Group and manage your readers by physical location.

You can streamline the management of multiple readers across different physical sites by using locations and zones.

Locations and zones help by associating each reader with specific operational sites and guarantee that the correct regional configurations are downloaded.

- **Locations**: Allows you to group readers, monitor their connectivity status, and modify your settings based on physical location. This functionality is beneficial for marketplaces with multiple connected accounts.

- **Zones**: Offers an optional method to further categorize locations and readers. Zones enable you to represent broader groups of readers or locations, such as larger geographic regions (for example, countries) or organizational sub-brands. Multiple locations can belong to a single zone, and you can create a hierarchical structure by grouping multiple zones under a single zone.

> Zones provide an additional way to group locations. You must still assign readers to a location, and you can assign a location to only one zone.
> Example organization strategy (See full diagram at https://docs.stripe.com/terminal/fleet/locations-and-zones)

## Locations

You can create a location for each physical place where your readers operate. You can [register](https://docs.stripe.com/terminal/fleet/register-readers.md) multiple readers to each location, and nest these locations within zones. Before you can use a reader, you must register it to a location.

The required [address properties](https://docs.stripe.com/api/terminal/locations/create.md#create_terminal_location-address) for a location vary by country:

### Required Address Properties

- Australia, Canada, Italy, Japan (Beta), Spain, United States: `line1`, `city`, `state`, `postal_code`, and `country` required
- Austria, Belgium, Czech Republic, Denmark, Estonia (Beta), Finland, France, Germany, Hungary (Beta), Latvia (Beta), Liechtenstein (Beta), Lithuania (Beta), Luxembourg, Malaysia, Netherlands, New Zealand, Norway, Poland (Beta), Portugal, Romania (Beta), Slovakia (Beta), Sweden, Switzerland, United Kingdom: `line1`, `city`, `postal_code`, and `country` required
- Bulgaria (Beta), Croatia (Beta), Cyprus (Beta), Ireland, Malta (Beta), Singapore, Slovenia (Beta): `line1`, `postal_code`, and `country` required
- Gibraltar (Beta): `line1` and `country` required

> You can use the Dashboard or API to update a `Location` object. After you create a location, you can’t change its country. Instead, create a new location in the new country, and then re-register any readers associated with the old location.

## Zones

Zones are the top-level groups that can consist of either more zones or locations. You can add more zones nested under an existing one, creating additional hierarchy levels, such as “West coast.” However, organizing your locations into zones is optional.

## Create locations and zones

# Dashboard

> This is a Dashboard for when dashboard-or-api is dashboard. View the full page at https://docs.stripe.com/terminal/fleet/locations-and-zones?dashboard-or-api=dashboard.

First, you must [register your reader to a location](https://docs.stripe.com/terminal/fleet/register-readers.md?dashboard-or-api=dashboard) to accept payments. You can manage your locations and zones in the [Manage locations](https://dashboard.stripe.com/terminal/locations/manage) page. To open this page, click the **Manage locations** button on the **Locations** tab.

### Create a location

To create a location:

1. On the [Terminal Locations](https://dashboard.stripe.com/terminal/locations) page, click **Create location**
2. Enter a name and a valid address. Providing an address ensures that the correct configuration and settings are applied based on the region where the readers are operating.
3. Click **Done**.

You can also create a specific [configuration](https://docs.stripe.com/terminal/fleet/configurations-overview.md) for that location.

### Create a zone

To create a zone:

1. Click the overflow menu (⋯) on the **All locations** row, then click **Create zone**.
2. Enter a name.
3. Click **Done**.

### Create a nested zone

To create a nested zone:

1. Click the overflow menu (⋯) on the zone for which you want to create a nested zone, then click **Create zone**.
2. Enter a name.
3. Click **Done**.

### Add or move a location to a zone

To add or move a location to a zone:

1. Click the overflow menu (⋯) on the location, then click **Move location**.
2. Choose the zone or nested zone where you want to move the location.
3. Click **Done**.

### Delete a location

To delete a location, you must remove the readers associate with it:

1. On the [Terminal Locations](https://dashboard.stripe.com/terminal/locations) page, click the overflow menu (⋯) on the location. Or, click the location and click the overflow menu button from the details page.
2. Click **Delete location**.
3. Click **Delete**.

### Delete a zone

To delete a zone, you must remove the readers associate with it:

1. Remove all readers from the location you want to delete, and remove all locations under the zones.
   - (Optional) Move the locations with readers to a different zone.
2. Click the overflow menu (⋯) on the zone, then click **Delete zone**.
3. Click **Yes, delete zone**.

# API

> This is a API for when dashboard-or-api is api. View the full page at https://docs.stripe.com/terminal/fleet/locations-and-zones?dashboard-or-api=api.

> You can’t create or modify zones using the API.

First, you must [register your reader to a location](https://docs.stripe.com/terminal/fleet/register-readers.md?dashboard-or-api=api) to accept payments.

To create a new Terminal [Location](https://docs.stripe.com/api/terminal/locations.md) object using the API, use the [create location](https://docs.stripe.com/api/terminal/locations/create.md) request.

```curl
curl https://api.stripe.com/v1/terminal/locations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d display_name=HQ \
  -d "address[line1]"="1272 Valencia Street" \
  -d "address[city]"="San Francisco" \
  -d "address[state]"=CA \
  -d "address[country]"=US \
  -d "address[postal_code]"=94110
```

### Create a location for accounts using direct charges

To create a Location for an account using [direct charges](https://docs.stripe.com/connect/direct-charges.md), use the `Stripe-Account` header in your request. Only the Connect account you authenticate as can access these locations. If the business operates in multiple physical sites, you can create multiple Locations for any individual accounts with direct charges.

```curl
curl https://api.stripe.com/v1/terminal/locations \
  -u "<<YOUR_SECRET_KEY>>:" \
  -H "Stripe-Account: {{CONNECTEDACCOUNT_ID}}" \
  -d display_name=HQ \
  -d "address[line1]"="1272 Valencia Street" \
  -d "address[city]"="San Francisco" \
  -d "address[state]"=CA \
  -d "address[country]"=US \
  -d "address[postal_code]"=94110
```

### Create a location for accounts using destination charges

For integrations using [destination charges](https://docs.stripe.com/connect/destination-charges.md), Locations belong to the *platform* account and aren’t mapped strictly to connected accounts. If your platform needs to associate accounts using destination charges with Locations, you can store a reference to the relevant accounts in the Location’s [metadata](https://docs.stripe.com/api/terminal/locations/object.md#terminal_location_object-metadata) property.

#### curl

```bash
curl https://api.stripe.com/v1/terminal/locations \
  -u <<YOUR_SECRET_KEY>>: \
  -d "display_name"="HQ" \
  -d "address[line1]"="1272 Valencia Street" \
  -d "address[city]"="San Francisco" \
  -d "address[state]"="CA" \
  -d "address[country]"="US" \
  -d "address[postal_code]"="94110" \-d "metadata[connected_account]"="{{CONNECTED_ACCOUNT_ID}}"
```

When you [register your reader to a Location](https://docs.stripe.com/terminal/fleet/register-readers.md), the specified Location groups the reader and defines its country settings.

## Scope connection tokens (Server-side) (Smart readers)

When creating a [ConnectionToken](https://docs.stripe.com/api/terminal/connection_tokens.md) for the Terminal SDK, you can provide a `location` parameter to control access to smart readers. If you provide a Location, the ConnectionToken is only usable with smart readers assigned to that Location. If you don’t provide a Location, the ConnectionToken is usable with all readers.

> For Bluetooth readers, the `location` of a ConnectionToken has no effect. This ensures that any nearby Bluetooth readers remain discoverable.

```curl
curl https://api.stripe.com/v1/terminal/connection_tokens \
  -u "<<YOUR_SECRET_KEY>>:" \
  -d location="{{TERMINALLOCATION_ID}}"
```
