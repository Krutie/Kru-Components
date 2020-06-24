# kru-components

Basic third-party library component to demonstrate [@nuxt/components](https://github.com/nuxt/components) Nuxt module.

## Usage

### Include Kru Components into your Nuxt project

Using npm:

```
npm i kru-components
```

Using yarn:

```
yarn add kru-components
```

### With Nuxt.js

See [examples/with-nuxt](./examples/with-nuxt)

Kru-components is using [@nuxt/components](https://github.com/nuxt/components) to efficently lazy import components by usage.

**Important:** Ensure using nuxt >= 2.13.0 and `components` option is set from `nuxt.config`

```js
export default {
  components: true,
  buildModules: [
    "kru-components/nuxt",
  ],
}
```

`kru-components` is configured with `kru` prefix. Below is how you'd use them in the template area of your Nuxt components.

```vue
<template>
  <kru-counter :increase-by="10"> </kru-counter>
  <!-- OR -->
  <KruCounter :increase-by="2"></KruCounter>
</template>
```

## With Vue-CLI

See [examples/with-vue](./examples/with-vue)

## Development

- Clone this repository
- Run `yarn install`
- Run `yarn dev`
