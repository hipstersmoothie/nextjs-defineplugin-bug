# DefinePlugin bug

This repos show that currently `next.js` does not inject variables through `DefinePlugin` into CJS files.

## Setup

```sh
yarn
yarn build
```

At this point you will see that `SOME_CONSTANT` is not defined.
Follow these steps:

1. Open `node_modules/test-package/package.json`
2. Remove the `main` field
3. `yarn build`

Now `next.js` successfully uses `DefinePlugin` to inject `SOME_CONSTANT`.

