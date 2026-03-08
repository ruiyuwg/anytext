# Extending with SwiftUI

Learn how to create custom SwiftUI components and modifiers that integrate with Expo UI.
iOS, tvOS

This guide explains how to create custom SwiftUI components and modifiers that integrate seamlessly with Expo UI.

## Prerequisites

Before you begin, make sure you have:

- `@expo/ui` installed in your project. See [Building SwiftUI apps with Expo UI](/guides/expo-ui-swift-ui) for more information.
- A [development build](/develop/development-builds/introduction) of your app (Expo UI is not available in Expo Go)
- Basic familiarity with [Expo Modules API](/modules/overview) and [SwiftUI](https://developer.apple.com/swiftui/)

```sh
npx expo install @expo/ui
```

## Creating a custom component

### Project setup

Create a local Expo module in your project:

```sh
npx create-expo-module@latest --local my-ui
```

Add `ExpoUI` as a dependency in your module's podspec file:

```ruby
Pod::Spec.new do |s|
  s.name           = 'MyUi'
  s.version        = '1.0.0'
  s.summary        = 'Custom UI components extending Expo UI'
  # ... other config
  # Add ExpoUI dependency
  s.dependency 'ExpoUI'
  # ... other config
end
```

### Creating a SwiftUI view

Create your SwiftUI view with two parts:

1. **Props class**: Extends `UIBaseViewProps` from `ExpoUI` to get automatic support for the [`modifiers`](/versions/latest/sdk/ui/swift-ui/modifiers) prop
2. **View struct**: Conforms to `ExpoSwiftUI.View` protocol, which requires an `@ObservedObject` props property and a `body`

```swift
import SwiftUI
import ExpoModulesCore
import ExpoUI

final class MyCustomViewProps: UIBaseViewProps {
  @Field var title: String = ""
}

struct MyCustomView: ExpoSwiftUI.View {
  @ObservedObject public var props: MyCustomViewProps

  var body: some View {
    VStack {
      Text(props.title)
        .font(.headline)
      Children() // Renders React children
    }
  }
}
```

Register the view in your module using `ExpoUIView`. This wraps your SwiftUI view with modifier support and makes it available to JavaScript:

```swift
import ExpoModulesCore
import ExpoUI

public class MyUiModule: Module {
  public func definition() -> ModuleDefinition {
    Name("MyUi")

    ExpoUIView(MyCustomView.self)
  }
}
```

Create a wrapper component that connects modifiers with event handling. The `createViewModifierEventListener` utility enables event-based modifiers like `onTapGesture` and `onAppear` to work with your custom view:

```tsx
import { requireNativeView } from 'expo';
import { type CommonViewModifierProps } from '@expo/ui/swift-ui';
import { createViewModifierEventListener } from '@expo/ui/swift-ui/modifiers';

export interface MyCustomViewProps extends CommonViewModifierProps {
  title: string;
  children?: React.ReactNode;
}

const NativeMyCustomView = requireNativeView<MyCustomViewProps>('MyUi', 'MyCustomView');

export function MyCustomView({ modifiers, ...restProps }: MyCustomViewProps) {
  return (
    <NativeMyCustomView
      modifiers={modifiers}
      {...(modifiers ? createViewModifierEventListener(modifiers) : undefined)}
      {...restProps}
    />
  );
}
```

### Using your custom component

Your custom component now works with all `ExpoUI` built-in modifiers:

```tsx
import { Host, Text } from '@expo/ui/swift-ui';
import { padding, cornerRadius, background } from '@expo/ui/swift-ui/modifiers';
import { MyCustomView } from './modules/my-ui';

export default function App() {
  return (
    <Host style={{ flex: 1 }}>
      <MyCustomView
        title="Hello World"
        modifiers={[padding({ all: 16 }), cornerRadius(12), background('#f0f0f0')]}>
        <Text>Child content</Text>
      </MyCustomView>
    </Host>
  );
}
```

## Creating custom modifiers

You can also create custom modifiers that work with any Expo UI component.

> Modifiers are SwiftUI's way to configure views for styling, layout, behavior, and more. Learn more in Apple's [ViewModifier documentation](https://developer.apple.com/documentation/swiftui/viewmodifier).

### Native modifier implementation

Create a modifier struct that conforms to `ViewModifier` and `Record`:

```swift
import SwiftUI
import ExpoModulesCore
import ExpoUI

struct CustomBorderModifier: ViewModifier, Record {
  @Field var color: Color = .red
  @Field var width: CGFloat = 2
  @Field var cornerRadius: CGFloat = 0

  func body(content: Content) -> some View {
    content
      .overlay(
        RoundedRectangle(cornerRadius: cornerRadius)
          .stroke(color, lineWidth: width)
      )
  }
}
```

Register your modifier with `ViewModifierRegistry` in your module definition. Use `OnCreate` to register and `OnDestroy` to unregister to avoid race conditions with the SwiftUI render thread:

```swift
import ExpoModulesCore
import ExpoUI

public class MyUiModule: Module {
  public func definition() -> ModuleDefinition {
    Name("MyUi")

    OnCreate {
      ViewModifierRegistry.register("customBorder") { params, appContext, _ in
        return try CustomBorderModifier(from: params, appContext: appContext)
      }
    }

    OnDestroy {
      ViewModifierRegistry.unregister("customBorder")
    }

    ExpoUIView(MyCustomView.self)
  }
}
```

### JavaScript modifier function

Create a TypeScript function that generates the modifier config:

```ts
import { createModifier } from '@expo/ui/swift-ui/modifiers';

export const customBorder = (params: { color?: string; width?: number; cornerRadius?: number }) =>
  createModifier('customBorder', params);
```

Export the modifier from your module:

```ts
export { MyCustomView, type MyCustomViewProps } from './src/MyCustomView';
export { customBorder } from './src/modifiers';
```

### Using custom modifiers

Your custom modifier works with any `ExpoUI` component:

```tsx
import { Host, Text, VStack } from '@expo/ui/swift-ui';
import { padding } from '@expo/ui/swift-ui/modifiers';
import { customBorder } from './modules/my-ui';

export default function App() {
  return (
    <Host style={{ flex: 1 }}>
      <VStack
        modifiers={[
          padding({ all: 20 }),
          customBorder({ color: '#FF6B35', width: 3, cornerRadius: 8 }),
        ]}>
        <Text>This has a custom border!</Text>
      </VStack>
    </Host>
  );
}
```

## Next steps

Congratulations! You've learned how to extend Expo UI with custom SwiftUI components and modifiers. Your custom components now integrate seamlessly with the built-in modifier system.

Here are some ideas for what to build next:

- Use the [built-in SwiftUI components](/versions/latest/sdk/ui/swift-ui) that come with Expo UI
- Build custom modifiers for app-specific styling patterns
- Wrap third-party SwiftUI libraries for use in React Native
- Share your components as an npm package for others to use

***

# Troubleshooting overview
