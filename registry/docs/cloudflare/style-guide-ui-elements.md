# UI elements

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/formatting/ui-elements.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# UI elements

UI elements are the interactive parts of a product. They are used to build the software's interface. When describing UI elements in writing, we focus on what users need to do without focusing on the UI.

To clarify instructions for complex interfaces, you may need to identify elements by name.

| UI element                                                | Usage                                                                              | Example                                                                                                                     |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Button                                                    | Select **Add a Site**.                                                             | ![Blue button to add a site.](https://developers.cloudflare.com/_astro/button.CukzAuRs_ZRJI1i.webp)                         |
| Checkboxes and radio buttons                              | Turn **Set as Default DNS Location** on.                                           | ![Two checkboxes for setting DNS options.](https://developers.cloudflare.com/_astro/checkbox.C5zEt3Gs_ZY131X.webp)          |
| Commands                                                  | Go to **File**, then select **Delete**.                                            | ![Command options to edit or delete.](https://developers.cloudflare.com/_astro/command.BrUyCUbA_1McmS8.webp)                |
| Error message                                             | If you receive the error message Invalid IP, start the process from the beginning. | ![Invalid IP address input.](https://developers.cloudflare.com/_astro/error-message.BSYNSeRJ_1byFln.webp)                   |
| Menu                                                      | In the menu, go to your account > **Websites**.                                    | ![List of website options.](https://developers.cloudflare.com/_astro/menu.BjerjH23_2aHpRD.webp)                             |
| Tab                                                       | Go to **Action**.                                                                  | ![Tabs with security event categories.](https://developers.cloudflare.com/_astro/tab.CoV0ZLwZ_Z1q6LID.webp)                 |
| Toggle                                                    | Turn **AV inspection** on.                                                         | ![Toggle to turn anti-virus inspection on.](https://developers.cloudflare.com/_astro/toggle.BE_wg5zq_TslLO.webp)            |
| Containers (windows, screens, pages, sections, and cards) | Refer to your site's traffic statistics for more information.                      | ![Information container with website statistics.](https://developers.cloudflare.com/_astro/container.CwJ0MSRs_Z2t4QSy.webp) |

## Interactions

When describing navigation elements, such as menus, use `go to` instead of `navigate`. When describing elements you can activate, such as checkboxes and toggles, use `turn on`/`turn off` instead of `enable`/`disable`.

For information on physical inputs, such as mouse buttons, refer to [Keyboard keys](https://developers.cloudflare.com/style-guide/formatting/keyboard-keys/).

## Symbols in UI element names

### Icons or non-alphabetic characters

The names or labels on buttons and other UI elements may include icons or symbols. For example, a button named **+ Add element** includes a plus sign. When writing these names or labels in procedures, do not include symbols. They are usually redundant and can be removed safely.

If an element has no text other than the symbol (for example, just `+`), you can keep the symbol in the instructions. This especially applies to instructions in interfaces for third-party products.

### Ellipses

An ellipsis is a set of three dots (`...`) that might be used as a variable or wildcard. For example, a **Save As...** menu item might display a dialog box where you can save a file in different places. If you refer to a menu item or button that has an ellipsis, do not include the ellipsis. In text, ellipses can be distracting.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/formatting/","name":"Formatting"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/formatting/ui-elements/","name":"UI elements"}}]}
```
