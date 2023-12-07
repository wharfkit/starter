Wharfkit EOS Starter Kit
=======

This is a starter kit that contains all the dependencies needed to build a Wharfkit application. It can be installed to have access to all the most relevant Wharfkit packages.

## Installation

The `@wharfkit/starter-eos` package is distributed as a module on [npm](https://www.npmjs.com/package/@wharfkit/starter-eos).

```
yarn add @wharfkit/starter-eos
# or
npm install --save @wharfkit/starter-eos
```

## Usage

You can then import any of the main Wharfkit modules in your application:

```ts
import SessionKit from '@wharfkit/session';
import ContractKit from '@wharfkit/contract';
import AccountKit from '@wharfkit/account';
// or any other Wharfkit module
```

You can also import an EOS specific pre-configured `sessionKit` instance that is ready to use:

```ts
import { sessionKit } from '@wharfkit/starter-eos';

await sessionKit.login();
```
