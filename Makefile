BIN := ./node_modules/.bin

.EXPORT_ALL_VARIABLES:
CONTRACT ?= drops
CONTRACT_ACCOUNT ?= testing.gm
CONTRACTS_PREFIX = ../reference-contracts/contracts
LEAP_PREFIX = ../leap
INCLUDES = -I contract/include
NODE_URL ?= https://jungle4.greymass.com
REV := $(shell git rev-parse --short HEAD)
BRANCH := $(shell echo $${HEAD:-$$(git branch --show-current)})

.PHONY: build
build: contract webapp

codegen:
	npx @wharfkit/cli generate --json contract/build/drops.abi --url https://jungle4.greymass.com testing.gm -f webapp/src/lib/contracts/drops.ts
	npx @wharfkit/cli generate --json contract/build/drops.abi --url https://jungle4.greymass.com testing.gm -f oracle/src/lib/contracts/drops.ts

.PHONY: change
change:
	rush change --message "$(message)" --commit-message "$(message)" --bulk --bump-type "${bump}" -b origin/main

.PHONY: publish
publish:
	rush publish --publish --apply -b main

dev:
	yarn --cwd webapp/ dev

oracledev:
	bun run --watch oracle/src/index.ts

.PHONY: webapp
webapp:
	yarn --cwd webapp/ build

contract/%.abi: contract/%.cpp contract/%.contracts.md
	cdt-cpp -abigen -abigen_output=contract/build/drops.abi -o contract/build/drops.wasm -O3 contract/api.cpp contract/drops.cpp contract/ram.cpp $(INCLUDES)

src/contract-types.ts: contract/$(CONTRACT).abi
	${BIN}/abi2core <$< > types/contract-types.ts

.PHONY: contract
contract: contract/$(CONTRACT).abi

.PHONY: testnet
testnet: contract testnetwipe publishtestnet testnetinit
