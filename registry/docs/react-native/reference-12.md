# Reference

## Props[​](#props "Direct link to Props")

### [VirtualizedList Props](/docs/virtualizedlist.md#props)[​](#virtualizedlist-props "Direct link to virtualizedlist-props")

Inherits [VirtualizedList Props](/docs/virtualizedlist.md#props).

***

### Require&#x64;**`renderItem`**[​](#required-renderitem "Direct link to required-renderitem")

tsx

```
renderItem({
  item: ItemT,
  index: number,
  separators: {
    highlight: () => void;
    unhighlight: () => void;
    updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
  }
}): JSX.Element;
```

Takes an item from `data` and renders it into the list.

Provides additional metadata like `index` if you need it, as well as a more generic `separators.updateProps` function which let you set whatever props you want to change the rendering of either the leading separator or trailing separator in case the more common `highlight` and `unhighlight` (which set the `highlighted: boolean` prop) are insufficient for your use case.

| Type     |
| -------- |
| function |

- `item` (Object): The item from `data` being rendered.

- `index` (number): The index corresponding to this item in the `data` array.

- `separators` (Object)

  - `highlight` (Function)

  - `unhighlight` (Function)

  - `updateProps` (Function)

    - `select` (enum('leading', 'trailing'))
    - `newProps` (Object)

Example usage:

tsx

```
<FlatList
  ItemSeparatorComponent={
    Platform.OS !== 'android' &&
    (({highlighted}) => (
      <View
        style={[style.separator, highlighted && {marginLeft: 0}]}
      />
    ))
  }
  data={[{title: 'Title Text', key: 'item1'}]}
  renderItem={({item, index, separators}) => (
    <TouchableHighlight
      key={item.key}
      onPress={() => this._onPress(item)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={{backgroundColor: 'white'}}>
        <Text>{item.title}</Text>
      </View>
    </TouchableHighlight>
  )}
/>
```

***

### Require&#x64;**`data`**[​](#required-data "Direct link to required-data")

An array (or array-like list) of items to render. Other data types can be used by targeting [`VirtualizedList`](/docs/virtualizedlist.md) directly.

| Type      |
| --------- |
| ArrayLike |

***

### `ItemSeparatorComponent`[​](#itemseparatorcomponent "Direct link to itemseparatorcomponent")

Rendered in between each item, but not at the top or bottom. By default, `highlighted` and `leadingItem` props are provided. `renderItem` provides `separators.highlight`/`unhighlight` which will update the `highlighted` prop, but you can also add custom props with `separators.updateProps`. Can be a React Component (e.g. `SomeComponent`), or a React element (e.g. `<SomeComponent />`).

| Type                         |
| ---------------------------- |
| component, function, element |

***

### `ListEmptyComponent`[​](#listemptycomponent "Direct link to listemptycomponent")

Rendered when the list is empty. Can be a React Component (e.g. `SomeComponent`), or a React element (e.g. `<SomeComponent />`).

| Type               |
| ------------------ |
| component, element |

***

### `ListFooterComponent`[​](#listfootercomponent "Direct link to listfootercomponent")

Rendered at the bottom of all the items. Can be a React Component (e.g. `SomeComponent`), or a React element (e.g. `<SomeComponent />`).

| Type               |
| ------------------ |
| component, element |

***

### `ListFooterComponentStyle`[​](#listfootercomponentstyle "Direct link to listfootercomponentstyle")

Styling for internal View for `ListFooterComponent`.

| Type                                    |
| --------------------------------------- |
| [View Style](/docs/view-style-props.md) |

***

### `ListHeaderComponent`[​](#listheadercomponent "Direct link to listheadercomponent")

Rendered at the top of all the items. Can be a React Component (e.g. `SomeComponent`), or a React element (e.g. `<SomeComponent />`).

| Type               |
| ------------------ |
| component, element |

***

### `ListHeaderComponentStyle`[​](#listheadercomponentstyle "Direct link to listheadercomponentstyle")

Styling for internal View for `ListHeaderComponent`.

| Type                                    |
| --------------------------------------- |
| [View Style](/docs/view-style-props.md) |

***

### `columnWrapperStyle`[​](#columnwrapperstyle "Direct link to columnwrapperstyle")

Optional custom style for multi-item rows generated when `numColumns > 1`.

| Type                                    |
| --------------------------------------- |
| [View Style](/docs/view-style-props.md) |

***

### `extraData`[​](#extradata "Direct link to extradata")

A marker property for telling the list to re-render (since it implements `PureComponent`). If any of your `renderItem`, Header, Footer, etc. functions depend on anything outside of the `data` prop, stick it here and treat it immutably.

| Type |
| ---- |
| any  |

***

### `getItemLayout`[​](#getitemlayout "Direct link to getitemlayout")

tsx

```
(data, index) => {length: number, offset: number, index: number}
```

`getItemLayout` is an optional optimization that allows skipping the measurement of dynamic content if you know the size (height or width) of items ahead of time. `getItemLayout` is efficient if you have fixed size items, for example:

tsx

```
  getItemLayout={(data, index) => (
    {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  )}
```

Adding `getItemLayout` can be a great performance boost for lists of several hundred items. Remember to include separator length (height or width) in your offset calculation if you specify `ItemSeparatorComponent`.

| Type     |
| -------- |
| function |

***

### `horizontal`[​](#horizontal "Direct link to horizontal")

If `true`, renders items next to each other horizontally instead of stacked vertically.

| Type    |
| ------- |
| boolean |

***

### `initialNumToRender`[​](#initialnumtorender "Direct link to initialnumtorender")

How many items to render in the initial batch. This should be enough to fill the screen but not much more. Note these items will never be unmounted as part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.

| Type   | Default |
| ------ | ------- |
| number | `10`    |

***

### `initialScrollIndex`[​](#initialscrollindex "Direct link to initialscrollindex")

Instead of starting at the top with the first item, start at `initialScrollIndex`. This disables the "scroll to top" optimization that keeps the first `initialNumToRender` items always rendered and immediately renders the items starting at this initial index. Requires `getItemLayout` to be implemented.

| Type   |
| ------ |
| number |

***

### `inverted`[​](#inverted "Direct link to inverted")

Reverses the direction of scroll. Uses scale transforms of `-1`.

| Type    |
| ------- |
| boolean |

***

### `keyExtractor`[​](#keyextractor "Direct link to keyextractor")

tsx

```
(item: ItemT, index: number) => string;
```

Used to extract a unique key for a given item at the specified index. Key is used for caching and as the react key to track item re-ordering. The default extractor checks `item.key`, then `item.id`, and then falls back to using the index, like React does.

| Type     |
| -------- |
| function |

***

### `numColumns`[​](#numcolumns "Direct link to numcolumns")

Multiple columns can only be rendered with `horizontal={false}` and will zig-zag like a `flexWrap` layout. Items should all be the same height - masonry layouts are not supported.

| Type   |
| ------ |
| number |

***

### `onRefresh`[​](#onrefresh "Direct link to onrefresh")

tsx

```
() => void;
```

If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the `refreshing` prop correctly.

| Type     |
| -------- |
| function |

***

### `onViewableItemsChanged`[​](#onviewableitemschanged "Direct link to onviewableitemschanged")

Called when the viewability of rows changes, as defined by the `viewabilityConfig` prop.

| Type                                                                     |
| ------------------------------------------------------------------------ |
| `(callback: {changed: ViewToken[], viewableItems: ViewToken[]} => void;` |

***

### `progressViewOffset`[​](#progressviewoffset "Direct link to progressviewoffset")

Set this when offset is needed for the loading indicator to show correctly.

| Type   |
| ------ |
| number |

***

### `refreshing`[​](#refreshing "Direct link to refreshing")

Set this true while waiting for new data from a refresh.

| Type    |
| ------- |
| boolean |

***

### `removeClippedSubviews`[​](#removeclippedsubviews "Direct link to removeclippedsubviews")

warning

Using this property may lead to bugs (missing content) in some circumstances - use at your own risk.

When `true`, offscreen child views are removed from their native backing superview when offscreen. This may improve scroll performance for large lists. On Android the default value is `true`.

| Type    |
| ------- |
| boolean |

***

### `viewabilityConfig`[​](#viewabilityconfig "Direct link to viewabilityconfig")

See [`ViewabilityHelper.js`](https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Lists/ViewabilityHelper.js) for flow type and further documentation.

| Type              |
| ----------------- |
| ViewabilityConfig |

`viewabilityConfig` takes a type `ViewabilityConfig` an object with following properties

| Property                         | Type    |
| -------------------------------- | ------- |
| minimumViewTime                  | number  |
| viewAreaCoveragePercentThreshold | number  |
| itemVisiblePercentThreshold      | number  |
| waitForInteraction               | boolean |

At least one of the `viewAreaCoveragePercentThreshold` or `itemVisiblePercentThreshold` is required. This needs to be done in the `constructor` to avoid following error ([ref](https://github.com/facebook/react-native/issues/17408)):

```
  Error: Changing viewabilityConfig on the fly is not supported
```

tsx

```
constructor (props) {
  super(props)

  this.viewabilityConfig = {
      waitForInteraction: true,
      viewAreaCoveragePercentThreshold: 95
  }
}
```

tsx

```
<FlatList
    viewabilityConfig={this.viewabilityConfig}
  ...
```

#### minimumViewTime[​](#minimumviewtime "Direct link to minimumViewTime")

Minimum amount of time (in milliseconds) that an item must be physically viewable before the viewability callback will be fired. A high number means that scrolling through content without stopping will not mark the content as viewable.

#### viewAreaCoveragePercentThreshold[​](#viewareacoveragepercentthreshold "Direct link to viewAreaCoveragePercentThreshold")

Percent of viewport that must be covered for a partially occluded item to count as "viewable", 0-100. Fully visible items are always considered viewable. A value of 0 means that a single pixel in the viewport makes the item viewable, and a value of 100 means that an item must be either entirely visible or cover the entire viewport to count as viewable.

#### itemVisiblePercentThreshold[​](#itemvisiblepercentthreshold "Direct link to itemVisiblePercentThreshold")

Similar to `viewAreaCoveragePercentThreshold`, but considers the percent of the item that is visible, rather than the fraction of the viewable area it covers.

#### waitForInteraction[​](#waitforinteraction "Direct link to waitForInteraction")

Nothing is considered viewable until the user scrolls or `recordInteraction` is called after render.

***

### `viewabilityConfigCallbackPairs`[​](#viewabilityconfigcallbackpairs "Direct link to viewabilityconfigcallbackpairs")

List of `ViewabilityConfig`/`onViewableItemsChanged` pairs. A specific `onViewableItemsChanged` will be called when its corresponding `ViewabilityConfig`'s conditions are met. See `ViewabilityHelper.js` for flow type and further documentation.

| Type                                   |
| -------------------------------------- |
| array of ViewabilityConfigCallbackPair |

## Methods[​](#methods "Direct link to Methods")

### `flashScrollIndicators()`[​](#flashscrollindicators "Direct link to flashscrollindicators")

tsx

```
flashScrollIndicators();
```

Displays the scroll indicators momentarily.

***

### `getNativeScrollRef()`[​](#getnativescrollref "Direct link to getnativescrollref")

tsx

```
getNativeScrollRef(): React.ElementRef<typeof ScrollViewComponent>;
```

Provides a reference to the underlying scroll component

***

### `getScrollResponder()`[​](#getscrollresponder "Direct link to getscrollresponder")

tsx

```
getScrollResponder(): ScrollResponderMixin;
```

Provides a handle to the underlying scroll responder.

***

### `getScrollableNode()`[​](#getscrollablenode "Direct link to getscrollablenode")

tsx

```
getScrollableNode(): any;
```

Provides a handle to the underlying scroll node.

### `scrollToEnd()`[​](#scrolltoend "Direct link to scrolltoend")

tsx

```
scrollToEnd(params?: {animated?: boolean});
```

Scrolls to the end of the content. May be janky without `getItemLayout` prop.

**Parameters:**

| Name   | Type   |
| ------ | ------ |
| params | object |

Valid `params` keys are:

- 'animated' (boolean) - Whether the list should do an animation while scrolling. Defaults to `true`.

***

### `scrollToIndex()`[​](#scrolltoindex "Direct link to scrolltoindex")

tsx

```
scrollToIndex: (params: {
  index: number;
  animated?: boolean;
  viewOffset?: number;
  viewPosition?: number;
});
```

Scrolls to the item at the specified index such that it is positioned in the viewable area such that `viewPosition` 0 places it at the top, 1 at the bottom, and 0.5 centered in the middle.

note

Cannot scroll to locations outside the render window without specifying the `getItemLayout` prop.

**Parameters:**

| Name           | Type   |
| -------------- | ------ |
| paramsRequired | object |

Valid `params` keys are:

- 'animated' (boolean) - Whether the list should do an animation while scrolling. Defaults to `true`.
- 'index' (number) - The index to scroll to. Required.
- 'viewOffset' (number) - A fixed number of pixels to offset the final target position.
- 'viewPosition' (number) - A value of `0` places the item specified by index at the top, `1` at the bottom, and `0.5` centered in the middle.

***

### `scrollToItem()`[​](#scrolltoitem "Direct link to scrolltoitem")

tsx

```
scrollToItem(params: {
  animated?: ?boolean,
  item: Item,
  viewPosition?: number,
});
```

Requires linear scan through data - use `scrollToIndex` instead if possible.

note

Cannot scroll to locations outside the render window without specifying the `getItemLayout` prop.

**Parameters:**

| Name           | Type   |
| -------------- | ------ |
| paramsRequired | object |

Valid `params` keys are:

- 'animated' (boolean) - Whether the list should do an animation while scrolling. Defaults to `true`.
- 'item' (object) - The item to scroll to. Required.
- 'viewPosition' (number)

***

### `scrollToOffset()`[​](#scrolltooffset "Direct link to scrolltooffset")

tsx

```
scrollToOffset(params: {
  offset: number;
  animated?: boolean;
});
```

Scroll to a specific content pixel offset in the list.

**Parameters:**

| Name           | Type   |
| -------------- | ------ |
| paramsRequired | object |

Valid `params` keys are:

- 'offset' (number) - The offset to scroll to. In case of `horizontal` being true, the offset is the x-value, in any other case the offset is the y-value. Required.
- 'animated' (boolean) - Whether the list should do an animation while scrolling. Defaults to `true`.

***
