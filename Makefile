BIN := ./shared/node_modules/.bin

.PHONY: change
change:
	rush change --message "$(message)" --commit-message "$(message)" --bulk --bump-type "${bump}" -b origin/main

.PHONY: format
format: node_modules
	@${BIN}/eslint src --ext .ts --fix

.PHONY: publish
publish:
	rush publish --publish --apply -b main
