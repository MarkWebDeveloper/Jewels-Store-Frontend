# Jewels Store Project

This is a frontend part of a future full working online store. This is work-in-progress project. The application will the following features: <br />

Secured login and register<br />
Сheckout with Stripe <br /> 
Full admin control over the products, categories and offers <br />
User dashboard to control purchases, refunds, help tickets
Search and filters for users and admin <br />
Product ratings system <br />
Favorites page <br />
And more... <br />

## Currently implemented features

Admin full products CRUD

## App Design
Home page design

![Home Page Design](<public/images/readme/Desktop Home Prototype.png>)

## Link to backend repository

https://github.com/MarkWebDeveloper/Jewels-Store-Backend

## Dependencies

[Vue](https://vuejs.org/)<br />
[Vuetify](https://vuetifyjs.com/)<br />
[Vue-Router](https://router.vuejs.org/)<br />
[Pinia](https://pinia.vuejs.org/)<br />
[Typescript](https://www.typescriptlang.org/)<br />
[ESLint](https://eslint.org/)<br />
[Sass](https://sass-lang.com/)<br />
[Scss-Reset](https://www.npmjs.com/package/scss-reset)<br />
[Vite](https://vitejs.dev/)<br />
[Vitest](https://vitest.dev/)<br />

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
