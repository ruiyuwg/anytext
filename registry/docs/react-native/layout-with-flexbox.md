# Layout with Flexbox

A component can specify the layout of its children using the Flexbox algorithm. Flexbox is designed to provide a consistent layout on different screen sizes.

You will normally use a combination of `flexDirection`, `alignItems`, and `justifyContent` to achieve the right layout.

caution

Flexbox works the same way in React Native as it does in CSS on the web, with a few exceptions. The defaults are different, with `flexDirection` defaulting to `column` instead of `row`, `alignContent` defaulting to `flex-start` instead of `stretch`, `flexShrink` defaulting to `0` instead of `1`, the `flex` parameter only supporting a single number.

## Flex[​](#flex "Direct link to Flex")

[`flex`](/docs/layout-props.md#flex) will define how your items are going to **“fill”** over the available space along your main axis. Space will be divided according to each element's flex property.

In the following example, the red, orange, and green views are all children in the container view that has `flex: 1` set. The red view uses `flex: 1` , the orange view uses `flex: 2`, and the green view uses `flex: 3` . **1+2+3 = 6**, which means that the red view will get `1/6` of the space, the orange `2/6` of the space, and the green `3/6` of the space.

## Flex Direction[​](#flex-direction "Direct link to Flex Direction")

[`flexDirection`](/docs/layout-props.md#flexdirection) controls the direction in which the children of a node are laid out. This is also referred to as the main axis. The cross axis is the axis perpendicular to the main axis, or the axis which the wrapping lines are laid out in.

- `column` (**default value**) Align children from top to bottom. If wrapping is enabled, then the next line will start to the right of the first item on the top of the container.

- `row` Align children from left to right. If wrapping is enabled, then the next line will start under the first item on the left of the container.

- `column-reverse` Align children from bottom to top. If wrapping is enabled, then the next line will start to the right of the first item on the bottom of the container.

- `row-reverse` Align children from right to left. If wrapping is enabled, then the next line will start under the first item on the right of the container.

You can learn more [here](https://www.yogalayout.dev/docs/styling/flex-direction).

- TypeScript
- JavaScript

## Layout Direction[​](#layout-direction "Direct link to Layout Direction")

Layout [`direction`](/docs/layout-props.md#direction) specifies the direction in which children and text in a hierarchy should be laid out. Layout direction also affects what edge `start` and `end` refer to. By default, React Native lays out with LTR layout direction. In this mode `start` refers to left and `end` refers to right.

- `LTR` (**default value**) Text and children are laid out from left to right. Margin and padding applied to the start of an element are applied on the left side.

- `RTL` Text and children are laid out from right to left. Margin and padding applied to the start of an element are applied on the right side.

* TypeScript
* JavaScript

## Justify Content[​](#justify-content "Direct link to Justify Content")

[`justifyContent`](/docs/layout-props.md#justifycontent) describes how to align children within the main axis of their container. For example, you can use this property to center a child horizontally within a container with `flexDirection` set to `row` or vertically within a container with `flexDirection` set to `column`.

- `flex-start`(**default value**) Align children of a container to the start of the container's main axis.

- `flex-end` Align children of a container to the end of the container's main axis.

- `center` Align children of a container in the center of the container's main axis.

- `space-between` Evenly space off children across the container's main axis, distributing the remaining space between the children.

- `space-around` Evenly space off children across the container's main axis, distributing the remaining space around the children. Compared to `space-between`, using `space-around` will result in space being distributed to the beginning of the first child and end of the last child.

- `space-evenly` Evenly distribute children within the alignment container along the main axis. The spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same.

You can learn more [here](https://www.yogalayout.dev/docs/styling/justify-content).

- TypeScript
- JavaScript

## Align Items[​](#align-items "Direct link to Align Items")

[`alignItems`](/docs/layout-props.md#alignitems) describes how to align children along the cross axis of their container. It is very similar to `justifyContent` but instead of applying to the main axis, `alignItems` applies to the cross axis.

- `stretch` (**default value**) Stretch children of a container to match the `height` of the container's cross axis.

- `flex-start` Align children of a container to the start of the container's cross axis.

- `flex-end` Align children of a container to the end of the container's cross axis.

- `center` Align children of a container in the center of the container's cross axis.

- `baseline` Align children of a container along a common baseline. Individual children can be set to be the reference baseline for their parents.

info

For `stretch` to have an effect, children must not have a fixed dimension along the secondary axis. In the following example, setting `alignItems: stretch` does nothing until the `width: 50` is removed from the children.

You can learn more [here](https://www.yogalayout.dev/docs/styling/align-items-self).

- TypeScript
- JavaScript

## Align Self[​](#align-self "Direct link to Align Self")

[`alignSelf`](/docs/layout-props.md#alignself) has the same options and effect as `alignItems` but instead of affecting the children within a container, you can apply this property to a single child to change its alignment within its parent. `alignSelf` overrides any option set by the parent with `alignItems`.

- TypeScript
- JavaScript

## Align Content[​](#align-content "Direct link to Align Content")

[alignContent](/docs/layout-props.md#aligncontent) defines the distribution of lines along the cross-axis. This only has effect when items are wrapped to multiple lines using `flexWrap`.

- `flex-start` (**default value**) Align wrapped lines to the start of the container's cross axis.

- `flex-end` Align wrapped lines to the end of the container's cross axis.

- `stretch` (*default value when using Yoga on the web*) Stretch wrapped lines to match the height of the container's cross axis.

- `center` Align wrapped lines in the center of the container's cross axis.

- `space-between` Evenly space wrapped lines across the container's cross axis, distributing the remaining space between the lines.

- `space-around` Evenly space wrapped lines across the container's cross axis, distributing the remaining space around the lines. Each end of the container has a half-sized space compared to the space between items.

- `space-evenly` Evenly space wrapped lines across the container's cross axis, distributing the remaining space around the lines. Each space is the same size.

You can learn more [here](https://www.yogalayout.dev/docs/styling/align-content).

- TypeScript
- JavaScript

## Flex Wrap[​](#flex-wrap "Direct link to Flex Wrap")

The [`flexWrap`](/docs/layout-props.md#flexwrap) property is set on containers and it controls what happens when children overflow the size of the container along the main axis. By default, children are forced into a single line (which can shrink elements). If wrapping is allowed, items are wrapped into multiple lines along the main axis if needed.

When wrapping lines, `alignContent` can be used to specify how the lines are placed in the container. Learn more [here](https://www.yogalayout.dev/docs/styling/flex-wrap).

- TypeScript
- JavaScript

## Flex Basis, Grow, and Shrink[​](#flex-basis-grow-and-shrink "Direct link to Flex Basis, Grow, and Shrink")

- [`flexBasis`](/docs/layout-props.md#flexbasis) is an axis-independent way of providing the default size of an item along the main axis. Setting the `flexBasis` of a child is similar to setting the `width` of that child if its parent is a container with `flexDirection: row` or setting the `height` of a child if its parent is a container with `flexDirection: column`. The `flexBasis` of an item is the default size of that item, the size of the item before any `flexGrow` and `flexShrink` calculations are performed.

- [`flexGrow`](/docs/layout-props.md#flexgrow) describes how much space within a container should be distributed among its children along the main axis. After laying out its children, a container will distribute any remaining space according to the flex grow values specified by its children.

  `flexGrow` accepts any floating point value >= 0, with 0 being the default value. A container will distribute any remaining space among its children weighted by the children’s `flexGrow` values.

- [`flexShrink`](/docs/layout-props.md#flexshrink) describes how to shrink children along the main axis in the case in which the total size of the children overflows the size of the container on the main axis. `flexShrink` is very similar to `flexGrow` and can be thought of in the same way if any overflowing size is considered to be negative remaining space. These two properties also work well together by allowing children to grow and shrink as needed.

  `flexShrink` accepts any floating point value >= 0, with 0 being the default value (on the web, the default is 1). A container will shrink its children weighted by the children’s `flexShrink` values.

You can learn more [here](https://www.yogalayout.dev/docs/styling/flex-basis-grow-shrink).

- TypeScript
- JavaScript

## Row Gap, Column Gap and Gap[​](#row-gap-column-gap-and-gap "Direct link to Row Gap, Column Gap and Gap")

- [`rowGap`](/docs/layout-props.md#rowgap) sets the size of the gap (gutter) between an element's rows.

- [`columnGap`](/docs/layout-props.md#columngap) sets the size of the gap (gutter) between an element's columns.

- [`gap`](/docs/layout-props.md#gap) sets the size of the gap (gutter) between rows and columns. It is a shorthand for `rowGap` and `columnGap`.

You can use `flexWrap` and `alignContent` along with `gap` to add consistent spacing between items.

- TypeScript
- JavaScript

## Width and Height[​](#width-and-height "Direct link to Width and Height")

The `width` property specifies the width of an element's content area. Similarly, the `height` property specifies the height of an element's content area.

Both `width` and `height` can take the following values:

- `auto` (**default value**) React Native calculates the width/height for the element based on its content, whether that is other children, text, or an image.

- `pixels` Defines the width/height in absolute pixels. Depending on other styles set on the component, this may or may not be the final dimension of the node.

- `percentage` Defines the width or height in percentage of its parent's width or height, respectively.

* TypeScript
* JavaScript

## Position[​](#position "Direct link to Position")

The `position` type of an element defines how it is positioned relative to either itself, its parent, or its [containing block](/docs/flexbox.md#the-containing-block).

- `relative` (**default value**) By default, an element is positioned relatively. This means an element is positioned according to the normal flow of the layout, and then offset relative to that position based on the values of `top`, `right`, `bottom`, and `left`. The offset does not affect the position of any sibling or parent elements.

- `absolute` When positioned absolutely, an element doesn't take part in the normal layout flow. It is instead laid out independent of its siblings. The position is determined based on the `top`, `right`, `bottom`, and `left` values. These values will position the element relative to its containing block.

- `static` When positioned statically, an element is positioned according to the normal flow of layout, and will ignore the `top`, `right`, `bottom`, and `left` values. This `position` will also cause the element to not form a containing block for absolute descendants, unless some other superceding style prop is present (e.g. `transform`). This allows `absolute` elements to be positioned to something that is not their parent. Note that **`static` is only available on the New Architecture**.

* TypeScript
* JavaScript

## The Containing Block[​](#the-containing-block "Direct link to The Containing Block")

The containing block of an element is an ancestor element which controls its position and size. The way containing blocks work in React Native is very similar to [how they work on the web](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block), with some simplifications due to the lack of some web features.

The `top`, `right`, `bottom`, and `left` values of an absolutely positioned element will be relative to its containing block.

Percentage lengths (e.g.: `width: '50%'` or `padding: '10%'`) applied to absolutely positioned elements will be calculated relatively to the size of its containing block. For example, if the containing block is 100 points wide, then `width: 50%` on an absolutely positioned element will cause it to be 50 points wide.

The following list will help you determine the containing block of any given element:

- If that element has a `position` type of `relative` or `static`, then its containing block is its parent.

- If that element has a `position` type of `absolute`, then its containing block is the nearest ancestor in which one of the following is true:

  - It has a `position` type other than `static`
  - It has a `transform`

## Going Deeper[​](#going-deeper "Direct link to Going Deeper")

Check out the interactive [yoga playground](https://www.yogalayout.dev/playground) that you can use to get a better understanding of flexbox.

We've covered the basics, but there are many other styles you may need for layouts. The full list of props that control layout is documented [here](/docs/layout-props.md).

Additionally, you can see some examples from [Wix Engineers](https://medium.com/wix-engineering/the-full-react-native-layout-cheat-sheet-a4147802405c).

***
