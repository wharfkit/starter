BIN := ./shared/node_modules/.bin

.PHONY: change
change:
	rush change --message "$(message)" --commit-message "$(message)" --bulk --bump-type "${bump}" -b origin/main

.PHONY: format
format:
	@${BIN}/eslint **/src/**/*.ts --ext .ts --fix

.PHONY: check
check:
	@${BIN}/eslint **/src/**/*.ts --ext .ts

.PHONY: publish
publish:
	rush publish --publish --apply -b main
