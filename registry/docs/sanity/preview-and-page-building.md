# Preview and page building

The Presentation tool in Sanity Studio is a powerful feature that allows editorial teams to work visually with structured content. It provides a bridge between the content model and the front-end presentation, making it easier for content teams to navigate and manage content in context.

> \[!WARNING]
> Gotcha
> The Presentation tool can be customized and configured in considerable detail, so your implementation may not exactly match the examples shown in this article. Talk to your studio maintainer to get the specifics of your setup.

## Key features

### Live previews in your studio

Preview your drafted changes as they'll appear in your front end from within the Sanity Studio editorial interface. See your changes update in the preview area in real-time as you edit your content.

![Shows the studio interface with the Presentation tool active](https://cdn.sanity.io/images/3do82whm/next/b0f669b0d430bea82135cc29d7e56d9b457ab6b5-1459x1110.png)

### Overlays shows the way

Click any element in the preview to navigate to the corresponding field in your studio editor pane, even deep within a Portable Text block! Since pages in your front end can consist of content from any number of documents, these overlays are invaluable for quickly finding exactly what you're looking for.

### Build pages, block by block

Compose entire pages with drag-and-drop-powered page-building features. In addition to simplifying content management, the Presentation tool also supports simple page building using predefined design components, ensuring consistency with brand guidelines and UX best practices.

## The anatomy of the Presentation tool

The presentation tool is in the top studio toolbar, alongside other tools you might have access to, such as the Structure and Scheduling tools.

Once selected, the Presentation tool will show an interactive preview area side by side with the Sanity Studio editorial interface. When no specific route is defined, the preview area will open a default view—like the homepage or an index of available routes—and the editor pane will show a list of all the documents being used by the current preview.

Interacting with the preview area will reveal blue outlined overlays with labels indicating the source documents for elements in the preview. Clicking one of these will cause the document editor pane to navigate to the appropriate document and field, ready for your editing. Your changes will be updated in real-time in the preview!

The preview area has a toolbar of its own, modeled after a typical web browser address bar.

From left to right, this toolbar sports the following elements:

1. An **Edit** toggle button that lets you switch the click-to-edit overlays in the preview area on or off. This is useful for navigating the preview without accidentally switching the form editor to a different context. Pro-tip: Hold down the `Alt` / `Option`-key to temporarily disable click-to-edit for quickly navigating your front end in the Presentation tool!
2. An address field where you may manually enter the route you want to preview, refresh the preview area, and open the current front-end route in a new tab.
3. A button to switch the preview area between desktop and mobile viewport sizes lets you quickly check that your drafted edits will work on all devices.
4. A share button that lets you share a preview of your draft by copying a link or QR code.

We'll discuss each of these in more detail in the upcoming sections.

## Opening a specific page in preview

There are several different ways to open a specific front-end route in the Presentation tool. The most straightforward is to type or paste the path of the page you want to preview into the tool's address field.

![The preview url bar interface](https://cdn.sanity.io/images/3do82whm/next/6b5f751947dae80603c74852ef43f4643c1d219a-1890x102.png)

> \[!WARNING]
> Gotcha
> Make sure you only copy and paste the **relative** path! This is typically the stuff that appears *after* the root domain. In the example below, the relevant part is within the square brackets.
> `https://my-cool-site.com[/posts/hello-world]`

Another option for a more "studio first" approach is to navigate to the relevant document in the Structure tool. You should see a list of pages where the document content appears below the document title. Clicking one of these will open the corresponding route in the preview area.

> \[!WARNING]
> Gotcha
> If you can't see the list of routes, your studio maintainer may have to set up a [location resolver](https://www.sanity.io/docs/visual-editing/presentation-resolver-api) first.

## Previewing and editing content

When the **Edit** toggle is active, you can hover any element in the preview area to see a blue outline with a label indicating the source document in Sanity Studio. Clicking the overlay will cause the form editor to navigate to the relevant document and field.  Since any page on your front end can include content from multiple documents, it is very useful for quickly navigating to the appropriate document in your studio.

Once you've found the field you want to edit, the preview will update in real time to reflect your changes.

The overlays will let you navigate to specific bits of content, no matter how deep in your content structure. For example, you can target specific blocks within a Portable Text Field. In the example below, clicking an image within a block of rich content in the preview area opens the details dialog for the relevant image within the Portable Text editor.

![Shows content deeply linked in the Structure tool](https://cdn.sanity.io/images/3do82whm/next/30fd109aa7b8942038d103744a0293c2cfd2733e-1459x1110.png)

> \[!TIP]
> Protip
> Make sure your images have [alt text](https://moz.com/learn/seo/alt-text)! Not only is it important for accessibility, but it also helps the Presentation tool find your images.

## Building pages with drag-and-drop

The Presentation tool can also be set up to accommodate page-building, with a drag-and-drop interface to rearrange content blocks. Drag-and-drop can be enabled for array fields and configured to allow for either vertical or horizontal positioning.

![Shows a block being dragged horizontally](https://cdn.sanity.io/images/3do82whm/next/af06a4742694e9a13e86f6b8c393f4f81d011df2-930x332.png)

When you hover any draggable element, your cursor will turn into a crosshair, indicating that the element can be moved around by clicking and dragging. When you do so, a simplified representation of the block you are repositioning appears.

In certain cases, like in the example above, it might be useful to zoom out a bit to see the full context of the repositionable area. Hold down **shift** while dragging to enter a helpful minimap mode.

Draggable blocks also have a context menu, accessible by right-clicking, that offers several helpful options for repositioning, removing, or adding content.

## The preview address bar

![The Sanity.io preview address bar with an 'Edit' toggle and a web URL.](https://cdn.sanity.io/images/3do82whm/next/2ea0fbb6b7ccf890749020644a0db77f70e2af2e-2440x1088.png)

Let's examine in more detail the opportunities offered by the address bar in the Presentation tool's preview area.

### Toggle edit mode to navigate inside the preview

You can temporarily disable overlays so you can click links and navigate your front end within the preview area. Do so by toggling the **Edit** switch in the preview address bar.

![Browser address bar displaying the Sanity.io user guide URL for preview and page building.](https://cdn.sanity.io/images/3do82whm/next/fe3aac026050808f202ba8f0a4fd4d463553cd2d-1890x102.png)

## Switch between draft- and published mode

![Global perspective drop-down menu](https://cdn.sanity.io/images/3do82whm/next/c5a0ce8c517fa06c78e33714278c44f2ca58f162-1166x518.png)

To quickly toggle between previewing your drafted or release changes (or to view your published content), locate the \*\*Global Perspective \*\*dropdown in the top right of the Studio interface.

## Change the viewport size to check responsive content

To resize the viewport, click the **Phone** icon second from the right in the preview address bar.

![Toggle browser size preview interface](https://cdn.sanity.io/images/3do82whm/next/2838a0b92810fef73446f258f4d46a2b6e18d041-1890x102.png)

Your preview area will resize to a more mobile format, so you can make sure your content looks good on the go.

## Sharing previews

To quickly share a preview link, click the **Share** icon on the far right in the preview area address bar.

![Preview share interface](https://cdn.sanity.io/images/3do82whm/next/2041eb5e6f1a4c005c30319b74323f919a61ff07-1890x102.png)

A popover will appear with options to enable or disable sharing. A QR-code is generated for easy access from any device with a camera, or you can opt to copy a link in plain text if you so prefer.

This shares the document's perspective. If your application supports content releases and one is selected, the viewer will be able to see any changes in the release. If you share a draft, visitors will be able to see other draft content as well.

Once shared, the preview link remains active until the toggle is disabled or toggled off/on again. For security reasons, the shared preview link will also expire after 60 days.
