# Database Entities

All data models and database workings can be managed here.
This common package allows sharing of the same typed entities across the server and the client

# Managing migrations

## auto-generate migrations

`js yarn make-migrations <migration-name>`
Auto generate migration SQL based on the changes made since the last migration

## apply migrations

`js yarn run-migrations`
Migrate unapplied migrations (depending on what data has changed, you may need to take further considerations
to not lock up database tables)

## create an empty migration file to add custom SQL

`js yarn create-migrations <migration-name>`
Creates an empty migration file for you to add your own SQL
