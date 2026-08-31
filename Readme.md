# Projeto Prisma + PostgreSQL

Projeto desenvolvido como atividade prática utilizando Node.js, Prisma ORM, PostgreSQL e Docker.

## Tecnologias utilizadas

- Node.js
- Prisma ORM 7
- PostgreSQL 16
- Docker
- Docker Compose
- TypeScript
- tsx

## Estrutura do projeto

O projeto possui dois modelos principais:

- `Course`
- `Module`

### Relacionamento

Um curso pode possuir vários módulos:

`Course 1:N Module`

## Banco de dados

O PostgreSQL é executado em um container Docker.

Configuração utilizada:

- Banco: `prisma_db`
- Usuário: `postgres`
- Porta: `5433`

A porta `5433` do computador é direcionada para a porta `5432` do PostgreSQL dentro do container.

## Prisma Migrate

A estrutura do banco é controlada pelo Prisma Migrate.

Para criar/aplicar migrations:

```bash
npx prisma migrate dev