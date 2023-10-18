# Commands

# Run Database

```
$ docker compose up -d
```

### Set up prisma

```
$ npm install prisma --save-dev
$ npx prisma init

$ npx prisma migrate dev --name init # migrate prisma model
$ npx prisma studio
```

### Run Project

```
$ npm run start:dev
```
