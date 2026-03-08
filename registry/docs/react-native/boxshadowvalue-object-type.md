# BoxShadowValue Object Type

The `BoxShadowValue` object is taken by the [`boxShadow`](/docs/view-style-props.md#boxshadow) style prop. It is comprised of 2-4 lengths, an optional color, and an optional `inset` boolean. These values collectively define the box shadow's color, position, size, and blurriness.

## Example[​](#example "Direct link to Example")

js

```
{
  offsetX: 10,
  offsetY: -3,
  blurRadius: '15px',
  spreadDistance: '10px',
  color: 'red',
  inset: true,
}
```

## Keys and values[​](#keys-and-values "Direct link to Keys and values")

### `offsetX`[​](#offsetx "Direct link to offsetx")

The offset on the x-axis. This can be positive or negative. A positive value indicates right and negative indicates left.

| Type             | Optional |
| ---------------- | -------- |
| number | string | No       |

### `offsetY`[​](#offsety "Direct link to offsety")

The offset on the y-axis. This can be positive or negative. A positive value indicates up and negative indicates down.

| Type             | Optional |
| ---------------- | -------- |
| number | string | No       |

### `blurRadius`[​](#blurradius "Direct link to blurradius")

Represents the radius used in the [Gaussian blur](https://en.wikipedia.org/wiki/Gaussian_blur) algorithm. The larger the value the blurrier the shadow is. Only non-negative values are valid. The default is 0.

| Type             | Optional |
| ---------------- | -------- |
| number | string | Yes      |

### `spreadDistance`[​](#spreaddistance "Direct link to spreaddistance")

How much larger or smaller the shadow grows or shrinks. A positive value will grow the shadow, a negative value will shrink the shadow.

| Type             | Optional |
| ---------------- | -------- |
| number | string | Yes      |

### `color`[​](#color "Direct link to color")

The color of the shadow. The default is `black`.

| Type                     | Optional |
| ------------------------ | -------- |
| [color](/docs/colors.md) | Yes      |

### `inset`[​](#inset "Direct link to inset")

Whether the shadow is inset or not. Inset shadows will appear around the inside of the element's border box as opposed to the outside.

| Type    | Optional |
| ------- | -------- |
| boolean | Yes      |

## Used by[​](#used-by "Direct link to Used by")

- [`boxShadow`](/docs/view-style-props.md#boxshadow)

***
