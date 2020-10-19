# Rust Webpack ESLint React Bootstrap Typescript Sass Template

Template to generate a React Web application, including React Bootstrap, styled with Sass, typed by
Typescript, checked with ESLint, with Rust-generated WebAssembly and Webpack, all without publishing
your wasm to NPM.

Forked from and based on [zephyo/Rust-Webpack-React-Sass-Template](https://github.com/zephyo/Rust-Webpack-React-Sass-Template),
which in turn was forked from and based on [rustwasm/rust-webpack-template](https://github.com/rustwasm/rust-webpack-template).

Differences from zephyo's are that this template comes with dependence on ESLint and the Typescript
plugin, using the "recommended" ESLint, Typescript and React configurations to validate the
React TSX files in `js/react`. Warnings will be presented, and errors will cause build failures.
Errors include implicit *any* types, so `js/index.d.ts` needs to contain a declaration for a
`Wasm` type, bundling the compiled and exported Wasm function that you intend to use in your
React app, which the `Root` component property parameter must be declared as being.

<!--
<p>
<a href="https://travis-ci.org/rustwasm/create-wasm-app">
<img src="https://img.shields.io/travis/rustwasm/create-wasm-app.svg?style=flat-square" alt="Build Status" />
</a>
</p>
-->

---

## 🚴 Using This Template

1. Clone or fork this template
2. `cd template`
3. `yarn install`
4. `yarn start`

For more information and tutorials, read the [README.md](https://github.com/rustwasm/rust-webpack-template) at the original repo.

### How to install

```sh
yarn install
```

### How to run in debug mode

```sh
# Builds the project and opens it in a new browser tab. Auto-reloads when the project changes.
yarn start
```

### How to build in release mode

```sh
# Builds the project and places it into the `dist` folder.
yarn run build
```

### How to run unit tests

```sh
# Runs tests in Firefox
yarn test -- --firefox

# Runs tests in Chrome
yarn test -- --chrome

# Runs tests in Safari
yarn test -- --safari
```

### What does each file do?

- `Cargo.toml`
  contains the standard Rust metadata. You put your Rust dependencies in here. You must change this
  file with your details (name, description, version, authors, categories)
- `package.json`
  contains the standard yarn metadata. You put your JavaScript dependencies in here. You must change
  this file with your details (author, name, version)
- `webpack.config.js`
  contains the Webpack configuration. You shouldn't need to change this, unless you have very
  special needs.
- The `js` folder contains your JavaScript code (`index.js` is used to hook everything into Webpack, you don't need to change it).
- The `src` folder contains your Rust code.
- The `static` folder contains any files that you want copied as-is into the final build. It contains an `index.html` file which loads the `index.js` file.
- The `tests` folder contains your Rust unit tests.
