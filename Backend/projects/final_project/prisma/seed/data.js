const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.products.createMany({
    data: [
      {
        product_title: "iPhone 15",
        product_description: "Apple smartphone with A16 chip and dual camera.",
        product_price: "799",
        product_discountPercentage: "10",
        product_rating: "4.8",
        product_thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
        product_brand: "Apple",
        product_tag: ["mobile", "electronics", "smartphone"],
        product_image: [
          "https://dummyjson.com/image/i/products/1/1.jpg",
          "https://dummyjson.com/image/i/products/1/2.jpg"
        ]
      },
      {
        product_title: "Samsung Galaxy S24",
        product_description: "Flagship Android smartphone with AMOLED display.",
        product_price: "899",
        product_discountPercentage: "12",
        product_rating: "4.7",
        product_thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
        product_brand: "Samsung",
        product_tag: ["mobile", "android"],
        product_image: [
          "https://dummyjson.com/image/i/products/2/1.jpg",
          "https://dummyjson.com/image/i/products/2/2.jpg"
        ]
      },
      {
        product_title: "Nike Air Max",
        product_description: "Comfortable running shoes for daily use.",
        product_price: "120",
        product_discountPercentage: "15",
        product_rating: "4.5",
        product_thumbnail: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
        product_brand: "Nike",
        product_tag: ["shoes", "fashion"],
        product_image: [
          "https://dummyjson.com/image/i/products/3/1.jpg"
        ]
      },
      {
        product_title: "Sony WH-1000XM5",
        product_description: "Wireless noise cancelling headphones.",
        product_price: "349",
        product_discountPercentage: "18",
        product_rating: "4.9",
        product_thumbnail: "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
        product_brand: "Sony",
        product_tag: ["audio", "electronics"],
        product_image: [
          "https://dummyjson.com/image/i/products/4/1.jpg"
        ]
      },
      {
        product_title: "Dell Inspiron 15",
        product_description: "15-inch laptop with Intel i5 processor.",
        product_price: "699",
        product_discountPercentage: "8",
        product_rating: "4.4",
        product_thumbnail: "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
        product_brand: "Dell",
        product_tag: ["laptop", "computer"],
        product_image: [
          "https://dummyjson.com/image/i/products/5/1.jpg"
        ]
      },
      {
        product_title: "Boat Rockerz 450",
        product_description: "Budget wireless headphones with bass sound.",
        product_price: "59",
        product_discountPercentage: "25",
        product_rating: "4.2",
        product_thumbnail: "https://dummyjson.com/image/i/products/6/thumbnail.jpg",
        product_brand: "Boat",
        product_tag: ["audio", "budget"],
        product_image: [
          "https://dummyjson.com/image/i/products/6/1.jpg"
        ]
      },
      {
        product_title: "Puma Sports T-Shirt",
        product_description: "Dry fit sports t-shirt for gym workouts.",
        product_price: "29",
        product_discountPercentage: "20",
        product_rating: "4.3",
        product_thumbnail: "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
        product_brand: "Puma",
        product_tag: ["clothing", "sports"],
        product_image: [
          "https://dummyjson.com/image/i/products/7/1.jpg"
        ]
      },
      {
        product_title: "HP Pavilion Gaming",
        product_description: "Gaming laptop with RTX graphics.",
        product_price: "999",
        product_discountPercentage: "14",
        product_rating: "4.6",
        product_thumbnail: "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
        product_brand: "HP",
        product_tag: ["gaming", "laptop"],
        product_image: [
          "https://dummyjson.com/image/i/products/8/1.jpg"
        ]
      },
      {
        product_title: "Canon EOS 1500D",
        product_description: "DSLR camera for photography beginners.",
        product_price: "499",
        product_discountPercentage: "10",
        product_rating: "4.5",
        product_thumbnail: "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
        product_brand: "Canon",
        product_tag: ["camera", "electronics"],
        product_image: [
          "https://dummyjson.com/image/i/products/9/1.jpg"
        ]
      },
      {
        product_title: "Adidas Backpack",
        product_description: "Stylish backpack with laptop compartment.",
        product_price: "45",
        product_discountPercentage: "17",
        product_rating: "4.4",
        product_thumbnail: "https://dummyjson.com/image/i/products/10/thumbnail.jpg",
        product_brand: "Adidas",
        product_tag: ["bag", "fashion"],
        product_image: [
          "https://dummyjson.com/image/i/products/10/1.jpg"
        ]
      }
    ]
  });

  console.log("10 dummy products inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });