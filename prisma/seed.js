const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

;(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
        username: 'ajolonauta',
        mission: 'Node',
      },
    })

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
        username: 'ajolonauta1',
        mission: 'Node',
      },
    })

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
        username: 'ajolonauta2',
        mission: 'Java',
      },
    })

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
        username: 'ajolonauta3',
        mission: 'Node',
      },
    })

    const woopa4 = await prisma.explorer.upsert({
      where: { name: 'Woopa 4' },
      update: {},
      create: {
        name: 'Woopa 4',
        username: 'ajolonauta4',
        mission: 'Java',
      },
    })

    const woopa5 = await prisma.explorer.upsert({
      where: { name: 'Woopa 5' },
      update: {},
      create: {
        name: 'Woopa 5',
        username: 'ajolonauta5',
        mission: 'Node',
      },
    })
    console.log('Create 6 explorers')

    const woopa10 = await prisma.explorer2.upsert({
      where: { name: 'Woopa 10' },
      update: {},
      create: {
        name: 'Woopa 10',
        lang: 'es',
        missionCommander: 'Carlo',
        enrollments: 1,
        hasCertification: true,
      },
    })

    const woopa11 = await prisma.explorer2.upsert({
      where: { name: 'Woopa 11' },
      update: {},
      create: {
        name: 'Woopa 11',
        lang: 'en',
        missionCommander: 'Carlo',
        enrollments: 5,
        hasCertification: false,
      },
    })

    const woopa12 = await prisma.explorer2.upsert({
      where: { name: 'Woopa 12' },
      update: {},
      create: {
        name: 'Woopa 12',
        lang: 'es',
        missionCommander: 'Fernanda',
        enrollments: 4,
        hasCertification: true,
      },
    })
    console.log('Create 3 explorers2')
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
})()
