import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding users...`);
  // Create a user
  const user = await prisma.user.create({
    data: {
      email: "user@example.com",
      name: "user1",
      password: "password123",
    },
  });

  console.log(`Seeding finished.`);

  console.log(`Start seeding boards...`);
  // Create 3 boards
  const boards = [];
  for (let i = 0; i < 3; i++) {
    const board = await prisma.board.create({
      data: {
        title: `Board ${i + 1}`,
        description: faker.lorem.sentence(),
        ownerId: user.id,
      },
    });
    boards.push(board);
  }

  console.log(`Seeding finished.`);

  console.log(`Start seeding columns and tasks...`);
  // Create a random number of columns (0 to 4) for each board
  for (const board of boards) {
    const columnCount = Math.floor(Math.random() * 5);
    for (let j = 0; j < columnCount; j++) {
      const column = await prisma.column.create({
        data: {
          title: `Column ${j + 1}`,
          order: j,
          boardId: board.id,
        },
      });

      // Create a random number of tasks (0 to 5) for each column
      const taskCount = Math.floor(Math.random() * 6);
      for (let k = 0; k < taskCount; k++) {
        await prisma.task.create({
          data: {
            title: `Task ${k + 1}`,
            description: faker.lorem.sentence(),
            order: k,
            columnId: column.id,
            boardId: board.id,
          },
        });
      }
    }
  }

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
