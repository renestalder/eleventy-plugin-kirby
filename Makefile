clear-dependencies:
	sudo rm -rf node_modules
	sudo rm -rf demo/11ty-web-frontend/node_modules

clear-lock:
	sudo rm -rf package-lock.json
	sudo rm -rf demo/11ty-web-frontend/package-lock.json

test:
	docker-compose exec 11ty-web-frontend npm test