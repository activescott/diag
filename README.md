# @activescott/diag

[![npm version](https://badge.fury.io/js/%40activescott%2Fdiag.svg)](https://www.npmjs.com/package/@activescott/diag)
[![Build Status](https://github.com/activescott/diag/workflows/main/badge.svg)](https://github.com/activescott/diag/actions)

This is a simple wrapper around [debug](https://www.npmjs.com/package/debug) that allows you to use `info`, `debug`, `warn`, `error` methods that can be conditionally enabled instead of debug's sole `log` method.

Other than that, it attempts to differ from diag as minimally as possible.

## Usage

```js

const diag = createDiag("mine")

diag.debug(...)
diag.info(...)
diag.warn(...)
diag.error(...)
```

### Enabling

Each logging method is simply a new debug instance with a `:debug`, `:info`, `:warn`, or `:error` postfixed to it. For example:

The line `const diag = createDiag("mine")` creates instances of `debug` with namespaces `mine:debug`, `mine:info`, `mine:warn`, `mine:error` so you can enable and disable each level with debug's normal namespace enablement/disablement `DEBUG` environment variable. For example:

Enable only warn and error level for the `mine` logger:

`DEBUG=mine:warn,mine:error node ...`

Enable all levels for the `mine` logger:

`DEBUG=mine* node ...`

Enable all loggers of all names:

`DEBUG=* node ...`

## Local Testing

You can also test your shareable config on your computer before publishing by linking your module globally. Type:

    npm link

Then, in your project that wants to use your shareable config, type:

    npm link @activescott/diag

Alternatives: [loglevel](https://github.com/pimterry/loglevel) and it's [associated plugins](https://github.com/pimterry/loglevel#plugins).
