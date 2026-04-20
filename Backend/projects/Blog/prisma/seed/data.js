const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const blogs = [
    {
      blog_title: "Introduction to MERN Stack",
      blog_description: "Basics of MERN stack",
      blog_content: "MongoDB, Express, React and Node together form MERN.",
      blog_createdby: "Sailesh"
    },
    {
      blog_title: "Learn Prisma ORM",
      blog_description: "Why Prisma is useful",
      blog_content: "Prisma makes DB queries easier and cleaner.",
      blog_createdby: "Sailesh"
    },
    {
      blog_title: "React Hooks Guide",
      blog_description: "Popular React hooks",
      blog_content: "useState, useEffect, useMemo, useRef.",
      blog_createdby: "Admin"
    },
    {
      blog_title: "MongoDB Atlas Setup",
      blog_description: "Cloud DB setup",
      blog_content: "Create cluster, whitelist IP, connect string.",
      blog_createdby: "Admin"
    },
    {
      blog_title: "Deploy MERN Free",
      blog_description: "Deploying project",
      blog_content: "Use Vercel, Render and Atlas free tier.",
      blog_createdby: "Sailesh"
    }
  ];

  for (const blog of blogs) {
    await prisma.blog.create({
      data: blog
    });
  }

  console.log("5 blogs inserted successfully");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
  