import { Elysia } from "elysia";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = new Elysia()
  .get("/", async () => await prisma.user.findMany())
  .listen(9796);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
