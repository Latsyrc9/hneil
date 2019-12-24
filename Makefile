local:
	docker-compose -f docker-compose-local.yml up --build

qa:
	docker-compose -f docker-compose-qa.yml up --build

prod:
	docker-compose -f docker-compose.yml up --build