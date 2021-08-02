
-- К имеющейся no-sql DB необходимо разработать структуру
-- базы данных с использованием SQL (PostgreSQL) для чатов,
-- используя существующую БД в качестве эталона. Необходимо
-- минимизировать последствия после миграции сервера
-- с no-sql на sql (например, имена столбцов должны быть
-- одинаковы по возможности). Изменения, которые будут
-- влиять на таблицу юзеров, необходимо модифицировать строго
-- посредством SQL (ALTER TABLE users..., etc...). Результаты
-- работы необходимо залить на гит в виде отдельного SQL файла.
-- Предоставить схемы UML в виде скриншота со всеми
-- возможными отношениями (не забудьте привязать таблицу
-- юзеров). Все манипуляции предоставить в виде SQL
-- (без использования sequelize).

CREATE TABLE "Catalog"(
    "id" SERIAL PRIMARY KEY,
    "userId" INT NOT NULL REFERENCES "Users" ("id"),
    "catalogName" VARCHAR(128) NOT NULL,
    "chatsId" INT UNIQUE NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT current_timestamp
);

CREATE TABLE "Conversation" (
    "id" SERIAL PRIMARY KEY,
    "participants" INT UNIQUE
);

CREATE TABLE "Participants" (
    "id" SERIAL PRIMARY KEY,
    "conversation" INT REFERENCES "Conversation" ("participants"),
    "userId" INT,
    "interlocutorId" INT
);

CREATE TABLE "BlackList" (
    "id" SERIAL PRIMARY KEY,
    "userId" INT REFERENCES "Users",
    "bannedUserId" INT
);

CREATE TABLE "FavoriteList" (
    "id" SERIAL PRIMARY KEY,
    "userId" INT REFERENCES "Users",
    "favoriteUserId" INT
);


CREATE TABLE "ChatToConversation"(
    "chatsId" INT REFERENCES "Catalog" ("chatsId"),
    "conversationId" INT REFERENCES "Conversation" ("id"),
    PRIMARY KEY ("chatsId", "conversationId")
);

CREATE TABLE "Messages"(
    "id" SERIAL PRIMARY KEY,
    "sender" INT NOT NULL,
    "body" TEXT NOT NULL,
    "conversation" INT REFERENCES "Conversation" ("id"),
    "createdAt" TIMESTAMP NOT NULL DEFAULT current_timestamp
);

-- Вывести количество юзеров по ролям {admin: 40, customer: 22, ...}

SELECT "role", count("role") as count
FROM "Users"
GROUP BY role;

-- Всем юзерам с ролью customer, которые осуществляли
-- заказы в новогодние праздники в период с 25.12 по 14.01,
-- необходимо зачислить по 10% кэшбэка со всех заказов
-- в этот период.

UPDATE "Users"
SET balance = balance + (SELECT sum(prize) * 0.10
    FROM "Contests"
    WHERE "Contests"."createdAt" BETWEEN '2021-12-25' AND  '2021-01-14')
WHERE "Users".id in (
    SELECT "userId"
    FROM "Contests"
    WHERE "Contests"."createdAt" BETWEEN '2021-12-25' AND  '2021-01-14'
);

-- Для роли сreative необходимо выплатить 3-м юзерам
-- с самым высоким рейтингом по 10$ на их счета.

UPDATE "Users"
SET balance = balance + 10
WHERE id in (SELECT id FROM "Users"
    WHERE "Users".role = 'creator'
    ORDER BY rating DESC
    LIMIT 3);