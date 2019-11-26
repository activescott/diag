# @activescott/diag

[![npm version](https://badge.fury.io/js/%40activescott%2Fdiag.svg)](https://www.npmjs.com/package/@activescott/diag)
[![Build Status](https://github.com/activescott/diag/workflows/main/badge.svg)](https://github.com/activescott/diag/actions)
[![Greenkeeper badge](https://badges.greenkeeper.io/activescott/diag.svg)](https://greenkeeper.io/)

Yet another logging package. The only thing this package really is doing is defining a consistent API for diagnostic logging.

## Usage

You'll probably need another package or to create a derived implementation of `Diag` to use this. However, you can use the included `DiagConsoleImp` for simple logging directly to console and it will make the migration path a bit easier to a more advanced logger in the future.

## Local Testing

You can also test your shareable config on your computer before publishing by linking your module globally. Type:

    yarn link

Then, in your project that wants to use your shareable config, type:

    yarn link @activescott/diag
