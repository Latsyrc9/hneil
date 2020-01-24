local:
	docker-compose --file=docker-compose-local.yml up

build:
	docker-compose --file=docker-compose-local.yml build

# qa:
# 	docker-compose --file=docker-compose-qa.yml up --build

prod:
	docker-compose --file=docker-compose.yml up --build