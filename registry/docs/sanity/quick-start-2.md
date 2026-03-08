# Quick start

This guide helps you manage media assets in the Sanity ecosystem. You'll find practical tips for your Media Library workflow, whether you're a content editor, marketer, designer, photography specialist, or product owner. Media Library typically integrates with Sanity Studio. You can access, search, and use it while working on content.

*This is a paid feature, available as an addon on the Enterprise plan.*

## Get started with Media Library

Media Library is your organization's asset management interface. You'll centrally manage assets like images, videos, and documents so they can be reused across multiple projects and datasets. Here's how to get started:

1. **Log in**: Access your workspace through [sanity.io/welcome](https://www.sanity.io/welcome), which redirects you to your organization's domain.
2. **Sanity Dashboard**: When you first log in, you'll see your organization's dashboard. From here you can quickly access Media Library, your studios, and other apps. You can find Media Library in the left hand menu, along with any pinned studios.
3. **Media Library navigation**: Once in Media Library, you'll see all your organization's assets organized in a grid or list view. Use the left sidebar to filter by asset type (images, videos, documents) or collections if your team has set them up. The search bar at the top helps you quickly find assets by filename, description, or tags.

As an editorial user, you mainly interact with it through the web interface. The screen is divided into three main areas:

- **Asset list:** Browse assets, filter results, and upload new files.
- **Library menu:** Narrow your view, explore collections, and see recent uploads.
- **Asset sidebar:** Edit asset metadata, apply aspects, and see details.

Refer to the [Media Library interface guide](https://www.sanity.io/docs/media-library/interface) for more details.

## Why Media Library works this way

Media Library uses an aspect-based approach to transform digital asset management. Unlike traditional folder hierarchies, aspects are descriptive attributes attached to your assets. They work similar to attributes with content types in Sanity. These aspects include essential information like license details, product connections, copyright status, and visibility settings.

You organize your media through these descriptive properties rather than folders. This creates a flexible system that enables powerful queries. It dramatically reduces coordination time across teams. When everyone can quickly find what they need based on meaningful attributes, your organization becomes more efficient.

Work with your development team to establish a robust aspect-based framework from the start. This proactive approach creates a structured foundation for your Media Library. All team members can then efficiently find, manage, and utilize assets according to consistent organizational standards.

### What changes

**Old question:** "Where should I file this?"
**New question:** "How do I describe this so anyone can find it automatically?"

**Old question:** "What sizes do I need to export?"
**New question:** "What makes this safely reusable?" (Approval status? Usage rights? Product it belongs to?)

**Old question:** "How do I name this so the web team finds it?"
**New question:** "How do I tag this so web, mobile, email, and retail can all query what they need?"

### Why this matters

When your team races toward a launch or compliance audit, these queries work instantly:

- "Show me only approved product images."
- "Which assets expire next quarter?"
- "Lifestyle shots of boots on dark backgrounds."
- "Everything connected to SKU #4721."

**In a folder system:** You'd spend hours hunting, hoping you named things consistently.

**With aspects:** You build a consistent framework for your assets. This helps you create greater business impact and more reliable tracking.

**The work you do today setting up aspects improves every future search.**

## Uploading and managing assets

### Upload assets

![Upload menu](https://cdn.sanity.io/images/3do82whm/next/731aa707a54a6ef3aba3cf33938922c79bbeef31-922x93.png)

Select **Upload** in the top-right of the asset list, or drag-and-drop one or more files into the asset list.

### Select multiple assets

Select **Select** in the top-right of the asset list, then click on each asset you want to edit in bulk. Selected assets are highlighted with a light grey background.

You can also hold `command` (Mac) or `control` (Windows) while clicking to select multiple assets.

### Add assets to a collection

Collections help you organize assets into meaningful groups for campaigns, product launches, or projects. They function independently from aspects, giving you flexible organization options. To add assets to a collection:

- **From the main view**: Select **assets** → select the vertical **“⋮“** menu → choose **Add to existing collection**.
- **From inside a collection**: Click the **Add** button in the top-right corner and select the assets you want to include.

### Delete assets

Select one or more assets, select the vertical **"⋮"** button in the popover at the bottom, then choose \*\*Delete  asset(s). \*\*Deleting is permanent! Consider making assets “private” instead to preserve history.

## Finding and searching for media assets

![Filter user interface open](https://cdn.sanity.io/images/3do82whm/next/61c6362bcfb5315ef8419b97a0be44296b2f7ddb-1430x1166.png)

Navigating the **asset list** can be challenging when your organization has numerous assets. To make browsing easier, use the **filter menu** with its various controls to narrow down your results. These filters typically allow you to sort by asset type, collection, visibility, keywords, uploader, aspect ratio, file type, and usage status.

For even more precise results, combine your selected filters with the **Search** function to find specific attributes like colors, scenery, or custom objects relevant to your business.

## Media asset versioning

Asset versioning helps you introduce new versions safely, control when they go live, and track usage. It's useful for managing subtle variations—like retouched photos or updated files—without creating separate assets.

First, select the asset you want to update. You’ll see a dropdown labeled **Aspects** in the right panel\*\*. Select it\*\*, then select **Versions**.\*\* **When you select it,** \*\*it will reveal the **Versions panel**:

- The **current version** (blue indicator).
- Any **outdated versions in use** (orange indicators).

### Upload a new version

In the bottom right of the **Versions** panel, select \*\*Upload new version \*\*and select your updated file for upload. Versions can be anything from retouched originals, watermarked images, or new logos.

Your new file now appears as a new version **of the same asset**, not as a separate asset.

After the new version is uploaded you can decide whether you want to:

- \*\*Make the new version the main version everywhere right away. \*\*To do that, select the new version and click **Set as current and sync all usage**. This makes it current and updates all existing references to use it.
- \*\*Only review the new version for now. \*\*Use **Set as current** from the three‑dot menu to change the current version **without** updating existing usage. You can then selectively sync usage later.

If some documents still use an older version (orange indicators):

- Click the **usage indicator dot** next to a version to see where it’s used and then click for each document, **Sync version usage with Current** to update only that instance.

Learn more about [interacting with asset versions](https://www.sanity.io/docs/media-library/asset-versions).

## Advanced Media Library operations

### Aspect-based media management

Aspect-based management streamlines your workflow. It eliminates tedious folder searches, prevents rights violations, and enables smart filtering across your entire asset library. When information changes, such as extended usage rights or updated product details, you update it once. The changes automatically apply everywhere the asset appears. This structured approach prevents disorganization and creates a more efficient system. It saves time and reduces errors.

#### Real-world examples

- **Campaign photography**: Tag assets with campaign name, usage rights, and expiration dates so teams can quickly find approved images and avoid using expired content.
- **Product imagery**: Attach product IDs, SKU information, and seasonal relevance to images so they automatically appear in the correct product listings across all digital channels.
- **Brand assets**: Apply corporate identity guidelines, approved usage contexts, and regional restrictions to ensure consistent brand representation worldwide.
- **Event photography**: Tag with event details, featured people, and consent information to maintain compliance while making assets easily searchable for future content creation.

#### Understanding public vs. private assets

When launching new assets, understand the difference between public and private aspects. Public aspects are visible to anyone who can access the asset. Private aspects are only visible to authorized team members. Control asset visibility when uploading by:

- **Setting appropriate aspects**: Apply the correct metadata including usage rights, expiration dates, and visibility settings.
- **Managing access controls**: Determine which team members can view, edit, or publish specific assets.
- **Using draft status**: Keep assets in draft mode until they're ready for wider distribution. This governance approach ensures that only approved assets are published and that sensitive or work-in-progress materials remain protected until ready for release.

#### Sharing, permissions, and collaboration

Effective collaboration is essential for teams working with media assets. Sanity Media Library provides several ways to share and control access to your assets:

- **Share links**: Generate temporary or permanent links to specific assets for external stakeholders. This ensures proper governance and quality control throughout your organization from the start.
- **Approval workflows**: Set up review processes for assets before they're published to production so that you can ensure all assets meet your organization's standards before becoming publicly available. This helps prevent premature release of sensitive content and maintains brand consistency across all channels.
- **Comment and feedback**: Leave notes directly on assets to communicate with team members. Send requests for new assets or modifications right from within the Media Library.
- **Activity tracking**: Monitor who has viewed, edited, or used specific assets for when you need to trace changes or establish an audit trail for compliance purposes. This is especially valuable for regulated industries where you need to document who accessed sensitive assets and when.
- **Schedule reviews**: Regular cross-team reviews of asset management practices help keep the Media Library easy to use and clean.

## Best practices for media management

### Organizing your assets

It’s not a new best practice to use consistent naming conventions for all uploaded files or to use focused collections for major projects and campaigns. What is new though, is the possibility to apply comprehensive aspects immediately upon upload by setting up automations such as:

- **AI-powered content recognition** that can identify objects, scenes, colors, and people in images.
- **Extraction of embedded metadata** from file properties like camera settings, creation date, and location.
- **Integration with third-party systems** to maintain metadata consistency within your assets. For example, product photography can be automatically tagged with the correct product IDs, campaign assets can inherit campaign-specific metadata, and usage rights can be applied based on source or creator information.

### Localizing media assets

For global organizations, effective media asset localization is essential for delivering exceptional user experiences across different regions. This can be achieved by:

- **Enriching assets with region-specific metadata** to ensure proper contextual usage. Add country-specific usage rights, regional campaign tags, market-specific product descriptions, or localized seasonal relevance indicators. For example, an image might have aspects indicating it's approved for European markets but not North American ones. It might contain culturally-specific content appropriate only for certain regions.
- **Create region-specific collections** to organize assets by market or territory.
- **Implement language-specific aspects** to quickly filter assets by supported languages.
- **Track regional usage rights** with expiration dates to maintain compliance.
- **Apply cultural context aspects** to prevent inappropriate asset usage across regions.
- **Maintain version control** for localized variations of the same base asset. This approach ensures that the right assets are available to the right teams in each market. It maintains global brand consistency and regulatory compliance.

### Optimizing workflow efficiency

- Document your organization's media management guidelines.
- Train team members on best practices for asset uploading and tagging.
- Establish clear naming conventions for collections.
- Use aspects consistently across similar asset types.
- Use bulk operations for efficient updates to multiple assets.
- Establish clear roles and responsibilities for media management.
- Implement a review process for assets before they're published.
- Set up automated workflows for common tasks like approval processes.
- Schedule regular clean-up sessions to archive or remove outdated assets.

## Continue learning

### Official user guides

Ready to dive deeper? Explore official Sanity documentation for advanced features, best practices, and pro tips.

We recommend you start with our [Media Library Overview](https://www.sanity.io/docs/media-library/introduction).

## Glossary of common terms

Understanding the terminology used in Sanity Media Library will help you navigate the system more effectively:

- **Aspects**: Metadata attributes attached to assets that describe their properties, usage rights, and relationships to other content.
- **Asset sidebar**: Panel displaying detailed information and editing options for a selected asset.
- **Asset versions**: Different iterations of the same asset that allow for controlled updates and tracking of usage.
- **Bulk operations**: Actions performed on multiple assets simultaneously.
- **Collections**: Curated groups of assets organized for specific purposes like campaigns, projects, or themes.
- **Filters**: Controls that help narrow down asset search results based on specific criteria.
- **Sync**: Process of updating asset versions across multiple references.
- **Usage tracking**: Feature that shows where assets are being used across your content.
