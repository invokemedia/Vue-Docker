[![Build Status](https://travis-ci.org/invokemedia/Vue-Docker.svg?branch=master)](https://travis-ci.org/invokemedia/Vue-Docker)

# Vue Docker

Vue application "dockerized".

## Requirements

You will need Docker up & running on your machine. That's it!

## Setup

### Clone repository

```bash 
$ git clone git@github.com:invokemedia/Vue-Docker.git
$ cd Vue-Docker
```

### Install yarn dependencies

```bash
$ ./develop composer install
```

## Fire it up!

```bash
$ ./develop up -d
```

You should now be able to visit your application at http://localhost.

## Stack

This will create the following containers:

- node: node & yarn are installed

## Docker commands can be long...

Typically, to run commands inside a container, you'd have to type a pretty long command, for example to run yarn you would use:

```bash
$ docker run --rm -w /app node yarn install
```

In this repository, we created a bash script to run commands more easily, for example the command above would be: 

```bash
$ ./develop yarn install
```
## Bring the stack up!

 To bring the stack up and running, simply run:
 
 ```bash
$ ./develop up -d
```

To bring it down, run:

```bash
$ ./develop down
```

## Available command with ./develop

### Docker Compose

You can run any command that docker compose can support, for example: 

```bash
$ ./develop ps
$ ./develop up -d
$ ./develop down
```

### Yarn

If you prefer using Yarn:

```bash
$ ./develop yarn install
```

## Environment Variables

If you have many projects running on your machine, you might want to override
some of the environment variables below:
 
```
# Change these if you already have something running on port 80
APP_PORT=80
```
