clear-dependencies:
	sudo rm -rf node_modules
	sudo rm -rf demo/11ty-web-frontend/node_modules

clear-lock:
	sudo rm -rf package-lock.json
	sudo rm -rf demo/11ty-web-frontend/package-lock.json

setup:
	docker compose run --rm 11ty /bin/sh "./scripts/setup.sh"

lock-update:
	docker compose run --rm 11ty /bin/sh -c "npm install && cd demo/11ty-web-frontend && npm install"

test-package:
	docker compose run --rm 11ty /bin/sh -c "npm test"

serve:
	docker compose up -d kirbycms
	docker compose up 11ty