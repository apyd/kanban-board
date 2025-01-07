
# Kanban Board Server

This is the backend server for the Kanban Board application.

## Tech Stack

- **Backend Framework:** Express
- **Database:** SQLite (using Prisma ORM)

## Project start

TBD

## How to run

1/ Install dependencies:

```pnpm install```

2/ Set up the environment variables:

3/ Copy the .env.template file to .env and fill in the required values.

```cp .env.template .env```

4/ Set up the database:

5/ Seed the database (optional):

```pnpm prisma migrate dev```

6/ Running the Server
To start the server in development mode:

```pnpm run dev```

The server will start on the port specified in the .env file.

Prisma Studio
To view and manage your database with Prisma Studio:

```pnpm prisma studio```

Scripts
```pnpm run dev```: Starts the server in development mode.
```pnpm prisma migrate dev```: Applies database migrations.
```pnpm prisma db seed```: Seeds the database with initial data.
```pnpm prisma studio:```: Opens Prisma Studio for database management
