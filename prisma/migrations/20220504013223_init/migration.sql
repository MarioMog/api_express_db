-- CreateTable
CREATE TABLE "Explorer2" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL,
    "mission" BOOLEAN NOT NULL,

    CONSTRAINT "Explorer2_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Explorer2_name_key" ON "Explorer2"("name");
