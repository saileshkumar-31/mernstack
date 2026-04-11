const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.restaurant.createMany({
    data: [
      {
        name: "Spice Garden",
        location: "Chennai",
        image_url: "https://example.com/spice.jpg",
        offer: "20% OFF"
      },
      {
        name: "Burger Hub",
        location: "Bangalore",
        image_url: "https://example.com/burger.jpg",
        offer: "Buy 1 Get 1"
      },
      {
        name: "Pizza Palace",
        location: "Mumbai",
        image_url: "https://example.com/pizza.jpg",
        offer: "Flat ₹100 OFF"
      },
      {
        name: "Dosa Delight",
        location: "Chennai",
        image_url: "https://example.com/dosa.jpg",
        offer: "10% OFF"
      },
      {
        name: "Tandoori Treats",
        location: "Delhi",
        image_url: "https://example.com/tandoori.jpg",
        offer: "Free Starter"
      },
      {
        name: "Biryani House",
        location: "Hyderabad",
        image_url: "https://example.com/biryani.jpg",
        offer: "15% OFF"
      },
      {
        name: "Cafe Coffee Day",
        location: "Pune",
        image_url: "https://example.com/cafe.jpg",
        offer: "Free Coffee"
      },
      {
        name: "Chinese Wok",
        location: "Kolkata",
        image_url: "https://example.com/chinese.jpg",
        offer: "25% OFF"
      },
      {
        name: "Grill Nation",
        location: "Chennai",
        image_url: "https://example.com/grill.jpg",
        offer: "Buffet @ ₹499"
      },
      {
        name: "Healthy Bites",
        location: "Bangalore",
        image_url: "https://example.com/healthy.jpg",
        offer: "No Oil Specials"
      }
    ],
  });
}

main()
  .then(() => {
    console.log("Seeding completed ✅");
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });