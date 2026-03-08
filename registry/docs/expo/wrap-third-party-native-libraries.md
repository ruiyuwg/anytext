# Wrap third-party native libraries

Learn how to create a simple wrapper around two separate native libraries using Expo Modules API.

Expo modules make it possible to easily use native, external libraries built for Android and iOS in React Native projects. This tutorial focuses on utilizing the Expo Modules API to create radial charts using two similar libraries accessible on both native platforms.

- [MPAndroidChart by PhilJay](https://github.com/PhilJay/MPAndroidChart)
- [Charts by Daniel Cohen Gindi](https://github.com/danielgindi/Charts)

The iOS library is inspired by the Android library, so they both have similar API and functionality. This makes them a good example for this tutorial.

[How to wrap native libraries](https://www.youtube.com/watch?v=M8eNfH1o0eE) — In this video you will learn how to wrap native libraries using Expo Modules API.

## Create a new module

The following steps assume that the new module is created inside a new Expo project. However, you can create a new module inside an existing project by following the alternative instructions.

Alternatively, you can use the new module as a view inside the existing Expo project directory. Run the following command in your project's directory:

```sh
npx create-expo-module --local expo-radial-chart
```

Now, open the newly created `modules/expo-radial-chart` directory to start editing the native code.

## Run the example project

To verify that everything is functioning correctly, let's run the example project.

If you started with an existing Expo project, run the following commands from your Expo project's root directory:

```sh
npx expo run:android
npx expo run:ios
```

## Add native dependencies

Add the native dependencies to the module by editing the **expo-radial-chart/android/build.gradle** and **expo-radial-chart/ios/ExpoRadialChart.podspec** files:

Are you trying to use a `.aar` dependency?

Inside the **android** directory, create another directory called **libs** and place the **.aar** file inside it. Then, add the file as a Gradle project from autolinking:

Finally, add the dependency to the `dependencies` list in the **android/build.gradle** file, using the dependency's specified name with `${project.name}$` prefix:

Are you trying to use an `.xcframework` or `.framework` dependency?

On iOS, you can also use dependencies bundled as a framework by using the `vendored_frameworks` config option.

> **Note**: The file pattern used to specify the path to the framework is relative to the podspec file, and doesn't support traversing the parent directory (`..`), meaning you need to place the framework inside the **ios** directory (or a subdirectory of **ios**).

Once the framework is added, make sure that the `source_files` option file pattern doesn't match any files inside the framework. One way to achieve this is to move your iOS source Swift files (that is `ExpoRadialChartView.swift` and `ExpoRadialChartModule.swift`) into a **src** directory separate from where you placed your framework(s) and update the `source_files` option to only match the **src** directory:

Your **ios** directory should end up with a file structure similar to this:

`Frameworks`

 `MyFramework.framework`

`src`

 `ExpoRadialChartView.swift`

 `ExpoRadialChartModule.swift`

`ExpoRadialChart.podspec`

## Define an API

To use the module in the app, define the types for the props. It accepts a list of series — each with a color and a percentage value.

```ts
import { ViewStyle } from 'react-native/types';

export type ChangeEventPayload = {
  value: string;
};

type Series = {
  color: string;
  percentage: number;
};

export type ExpoRadialChartViewProps = {
  style?: ViewStyle;
  data: Series[];
};
```

Since the module isn't implemented for web in this example, let's replace the **src/ExpoRadialChartView.web.tsx** file:

```tsx
import * as React from 'react';

export default function ExpoRadialChartView() {
  return <div>Not implemented</div>;
}
```

## Implement the module on Android

Now you can implement the native functionality by editing the placeholder files with the following changes:

1. Create a `PieChart` instance and set its `layoutParams` to match the parent view. Then, add it to the view hierarchy using the `addView` function.
2. Define a `setChartData` function that accepts a list of `Series` objects. You can iterate over the list, create a `PieEntry` for each series and store the colors in a separate list.
3. Create a `PieDataSet`, use it to create a `PieData` object, and set it as data on the `PieChart` instance.

```kotlin
package expo.modules.radialchart

import android.content.Context
import android.graphics.Color
import androidx.annotation.ColorInt
import com.github.mikephil.charting.charts.PieChart
import com.github.mikephil.charting.data.PieData
import com.github.mikephil.charting.data.PieDataSet
import com.github.mikephil.charting.data.PieEntry
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.records.Field
import expo.modules.kotlin.records.Record
import expo.modules.kotlin.views.ExpoView

class Series : Record {
  @Field
  val color: String = "#ff0000"

  @Field
  val percentage: Float = 0.0f
}

class ExpoRadialChartView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {
  internal val chartView = PieChart(context).also {
    it.layoutParams = LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT)
    addView(it)
  }

  fun setChartData(data: ArrayList<Series>) {
    val entries: ArrayList<PieEntry> = ArrayList()
    val colors: ArrayList<Int> = ArrayList()
    for (series in data) {
      entries.add(PieEntry(series.percentage))
      colors.add(Color.parseColor(series.color))
    }
    val dataSet = PieDataSet(entries, "DataSet");
    dataSet.colors = colors;
    val pieData = PieData(dataSet);
    chartView.data = pieData;
    chartView.invalidate();

  }
}
```

You also need to use the [`Prop`](/modules/module-api#prop) function to define the `data` prop and call the native `setChartData` function when the prop changes:

```kotlin
package expo.modules.radialchart

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoRadialChartModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoRadialChart")

    View(ExpoRadialChartView::class) {
      Prop("data") { view: ExpoRadialChartView, prop: ArrayList<Series> ->
        view.setChartData(prop);
      }
    }
  }
}
```

## Implement the module on iOS

Now you can implement the native functionality by editing the placeholder files with the following changes:

1. Create a new `PieChartView` instance and use the `addSubview` function to add it to the view hierarchy.
2. Set the `clipsToBounds` property and override the `layoutSubviews` function to make sure the chart view is always the same size as the parent view.
3. Create a `setChartData` function that accepts a list of series, creates a `PieChartDataSet` instance with the data, and assigns it to the `data` property of the `PieChartView` instance.

```swift
import ExpoModulesCore
import DGCharts

struct Series: Record {
  @Field
  var color: UIColor = UIColor.black

  @Field
  var percentage: Double = 0
}

class ExpoRadialChartView: ExpoView {
  let chartView = PieChartView()

  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    clipsToBounds = true
    addSubview(chartView)
  }

  override func layoutSubviews() {
    chartView.frame = bounds
  }

  func setChartData(data: [Series]) {
    let set1 = PieChartDataSet(entries: data.map({ (series: Series) -> PieChartDataEntry in
      return PieChartDataEntry(value: series.percentage)
    }))
    set1.colors = data.map({ (series: Series) -> UIColor in
      return series.color
    })
    let chartData: PieChartData = [set1]
    chartView.data = chartData
  }
}
```

You also need to use the [`Prop`](/modules/module-api#prop) function to define the `data` prop and call the native `setChartData` function when the prop changes:

```swift
import ExpoModulesCore

public class ExpoRadialChartModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoRadialChart")

    View(ExpoRadialChartView.self) {
      Prop("data") { (view: ExpoRadialChartView, prop: [Series]) in
        view.setChartData(data: prop)
      }
    }
  }
}
```

## Write an example app to use the module

You can update the app inside the **src/app** directory to test the module. Use the `ExpoRadialChartView` component to render a pie chart with three slices:

```tsx
import { ExpoRadialChartView } from '@/modules/expo-radial-chart';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <ExpoRadialChartView
      style={styles.container}
      data={[
        {
          color: '#ff0000',
          percentage: 0.5,
        },
        {
          color: '#00ff00',
          percentage: 0.2,
        },
        {
          color: '#0000ff',
          percentage: 0.3,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

> **Tip**: If you created a new module, make sure to update the import statement to: `import { ExpoRadialChartView } from 'expo-radial-chart';`

## Rebuild and launch your application

To make sure your app builds successfully on both platforms, rerun the build commands from step 2. After the app is successfully built on any of the platform you'll see a pie chart with three slices:

Congratulations! You have created your first simple wrapper around two separate third-party native libraries using Expo Modules API.

## Next step

[Expo Modules API Reference](/modules/module-api) — A reference to create native modules using Kotlin and Swift.

***

# Integrate in an existing library
