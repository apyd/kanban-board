import express from "express";
import prisma from "./lib/prisma";

const app = express();

app.listen(process.env.PORT, async () => {
  console.log(`Server is running on port: ${process.env.PORT}`);

  const boards = await prisma.board.findMany({});
  console.log(boards);
});
