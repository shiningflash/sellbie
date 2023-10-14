# Commands

### Set up prisma

```
$ npm install prisma --save-dev
$ npx prisma init

$ docker compose up -d # Now, we need to run docker so that postgresql can run into it
$ npx prisma migrate dev --name init # migrate prisma model
$ npx prisma studio
```