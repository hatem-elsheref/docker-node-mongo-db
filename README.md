# DOCKER NODE & MONGO DB & Express JS

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](#)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](#)

# New Features!

 
  - Isolated web service with node and express js
  - isolated database service support no sql mongo db
  - Handle the services in docker-compose file


### Installation
###### `Here i use Ubuntu 18.4 As my operating system`
First install docker and docker compose in your machine
Validate if this already installed in your machine or not by this commands
```sh
$ sudo docker --version
$ sudo docker-compose --version
```

in the path of docker compose file 
```sh
$ sudo docker-compose build --no-cache
$ sudo docker-compose up
```
to change the publish port change it in  
```sh
Dockerfile Expose 3000 to your-port and in server.js file Change Variable of applicationPort to your-port
docker-compose file change the public port from 8000 to any-port-you-need-to-access-the-app-in-your-browser
```

License
----
MIT
