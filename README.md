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
