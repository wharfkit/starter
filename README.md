# WharfKit Starter Kit

This repository is a Rush monorepo that manages multiple packages including `@wharfkit/starter`, `@wharfkit/starter-jungle`, `@wharfkit/starter-eos`, `@wharfkit/starter-wax`, and `@wharfkit/starter-telos`. It utilizes Rush and pnpm for efficient dependency management and streamlined development processes.

## Getting Started

### Prerequisites

Rush must be installed to build and develop this repository. Install Rush with the following command:

```bash
npm install -g @microsoft/rush

# or

yarn global add @microsoft/rush
```

### Cloning the Repository

Clone the repository with the following command:

```bash
git clone https://github.com/wharfkit/starter.git
cd starter
```

### Installing Dependencies

Use `rush install` to install and link dependencies across all packages in the monorepo:

```bash
rush install
```

### Building Packages

Build all packages with the following command:

```bash
rush build
```

### Publishing Packages

Publish all packages with the following commands:

```bash
export NPM_TOKEN=<your npm token>
rush change # generate change files
rush version --bump # bump package versions
rush publish --publish --apply # publish packages
```

For more information on publishing packages, see the [Rush documentation](https://rushjs.io/pages/maintainer/publishing/).
