const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

async function main() {
  try {
    const categories = [
      {
        name: "Sign Language",
        subCategories: {
          create: [
            { name: "Basic Sign Language" },
            { name: "Advanced Sign Language" },
            { name: "International Sign Languages" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Communication",
        subCategories: {
          create: [
            { name: "Non-Verbal Communication" },
            { name: "Assistive Technology" },
            { name: "Speech Therapy Tools" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Career & Professional",
        subCategories: {
          create: [
            { name: "Job Skills for the Deaf and Mute" },
            { name: "Workplace Communication" },
            { name: "Entrepreneurship for All" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Creative Arts",
        subCategories: {
          create: [
            { name: "Visual Arts" },
            { name: "Photography & Videography" },
            { name: "Performing Arts" },
            { name: "Others" },
          ],
        },
      },
    ];


    // Sequentially create each category with its subcategories
    for (const category of categories) {
      await database.category.create({
        data: {
          name: category.name,
          subCategories: category.subCategories,
        },
        include: {
          subCategories: true,
        },
      });
    }

    await database.level.createMany({
      data: [
        { name: "Beginner" },
        { name: "Intermediate" },
        { name: "Expert" },
        { name: "All levels" },
      ],
    });

    console.log("Seeding successfully");
  } catch (error) {
    console.log("Seeding failed", error);
  } finally {
    await database.$disconnect();
  }
}

main();
