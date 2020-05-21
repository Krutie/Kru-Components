# kru-components

Basic third-party library component to demonstrate @nuxt/components Nuxt module.

## Project setup - Clone and install dependencies

```
npm install
```

### Make this package available for your local projects

```
npm link
```

## Usage

### Include Kru Components into your Nuxt project

```
npm link kru-components
```

### Configure `kru-components` in your Nuxt project

Kru-components expose a hook named `components:dirs` enabling you to easily extend its `~/componets/` directory without having to update module options (of @nuxt/components) in our `nuxt.config.js`.

```javascript
// nuxt.config.js
  buildModules: [
    // Make sure @nuxt/components is available
    "@nuxt/components",

    // Use Kru-components as Nuxt module
    "kru-components/src/nuxt",
  ],
```

`kru-components` is configured with `kru` prefix. Below is how you'd use them in the template area of your Nuxt components.

```html
<kru-counter :increase-by="10" class="mx-auto"> </kru-counter>

<!-- OR -->

<KruCounter :increase-by="2" class="mx-auto"></KruCounter>
```
