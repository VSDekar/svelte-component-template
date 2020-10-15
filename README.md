# svelte-component-template

```bash
npx degit VSDekar/svelte-component-template my-new-component
cd my-new-component
npm install
```

This repo helps you building new components or component libraries with svelte.
This repo is based on [component-template](https://github.com/sveltejs/component-template)

It includes everything to test your new component. With `npm run web` you start a web page with your new component or with `npm run electron` you start an electron application where you can test everything. Hot reloading works out of the box. You can easily start both at the same time with hot reloading.

Style your components with SASS. Everything is already wired.

A base for building shareable Svelte components. Clone it with [degit](https://github.com/Rich-Harris/degit):

## Your component

Your component's source code lives in `src/Component.svelte`.
You can create a package that exports multiple components by adding them to the `src` directory and editing `src/index.js` to reexport them as named exports.

## Setting up

- Replace this README with your own
- Replace all nenecessary fields in package.json

## Differences to [component-template](https://github.com/sveltejs/component-template)

This already includes electron and a web page to try out your new component. It is ready for using SASS.

## Consuming Components

You can easily consume these component in svelte with the normal svelte template [sveltejs/template](https://github.com/sveltejs/template)\_

Your package.json has a `"svelte"` field pointing to `src/index.js`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`dist/index.mjs`) and a UMD script (`dist/index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.

**important difference!!** the component template's package.json has a different `main` field compared to [component-template](https://github.com/sveltejs/component-template). This allows for intellisense where you use your component, in your real Project.

## Companion Repositories

- // TODO Svelte Electron Template
- // TODO Svelte Web Template
