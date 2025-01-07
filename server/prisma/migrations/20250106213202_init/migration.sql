-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Board" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "ownerId" TEXT NOT NULL,
    CONSTRAINT "Board_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Column" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "boardId" TEXT NOT NULL,
    CONSTRAINT "Column_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "order" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT,
    "boardId" TEXT NOT NULL,
    "columnId" TEXT NOT NULL,
    "priorityId" TEXT,
    CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Task_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Task_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES "Column" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Task_priorityId_fkey" FOREIGN KEY ("priorityId") REFERENCES "Priority" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Priority" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Label" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_BoardMembers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_BoardMembers_A_fkey" FOREIGN KEY ("A") REFERENCES "Board" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_BoardMembers_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_TaskLabels" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_TaskLabels_A_fkey" FOREIGN KEY ("A") REFERENCES "Label" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TaskLabels_B_fkey" FOREIGN KEY ("B") REFERENCES "Task" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Priority_name_key" ON "Priority"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Label_name_key" ON "Label"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_BoardMembers_AB_unique" ON "_BoardMembers"("A", "B");

-- CreateIndex
CREATE INDEX "_BoardMembers_B_index" ON "_BoardMembers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TaskLabels_AB_unique" ON "_TaskLabels"("A", "B");

-- CreateIndex
CREATE INDEX "_TaskLabels_B_index" ON "_TaskLabels"("B");
