### Welcome!

<h1 align="center">
  <br>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_eimUX98YCqnw0tFLXbbCVkrGfZevLgMmhQ&usqp=CAU" alt="API" height="200" width="200">
  <br>
</h1>

## EMAIL EXTRACTOR API:

# Overview

This service is responsilble for sending integrated OPEN AI responses efficiently

### Clone the repository

`git clone https://github.com/pranab-dey/openaiintegration.git`

# Config

This project can be configured with `.env`

```
# App
HOST=localhost
APP_PORT=3006
LOGGER_NAME=openaiintegration
LOG_LEVEL=debug
NODE_ENV=development

# API Rate Limiting Config
API_RATE_LIMIT_INTERVAL_IN_MIN=1
API_MAX_REQUEST_LIMIT=60

```

### Installation

-   copy the `docker/env.example` and paste into `docker/.env`
-   copy the `docker/docker-compose.override.example.yml` and paste into `docker/docker-compose.override.yml`
-   copy the `src/.env.example` and past into `src/.env`. Setup env `openai api key`
-   set cd to `src` & run `npm install` command
-   set cd to `docker` & run `docker-compose up -d --build`
-   In case if you're using windows, open `docker/app/entrypoint.sh` and save `end of line sequence` as `LF` instead of `CRLF`

### Check services

After building the docker containers, you'll need to check whether everything is working fine.

-   run `docker ps` and check all the services are up and running
-   run `docker exec -it container_name sh` to enter into the app container. [change container_name with appropiate container name found from command]

### Client Test

-   Run `localhost:4454/rest/v1/health` in any client to see the health. Here `4454` PORT is from docker hosted port. So If changed, change accordingly.
