-- CreateTable
CREATE TABLE "Products" (
    "product_id" TEXT NOT NULL,
    "product_title" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,
    "product_price" TEXT NOT NULL,
    "product_discountPercentage" TEXT NOT NULL,
    "product_rating" TEXT NOT NULL,
    "product_thumbnail" TEXT NOT NULL,
    "product_brand" TEXT NOT NULL,
    "product_tag" TEXT[],
    "product_image" TEXT[]
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_product_id_key" ON "Products"("product_id");
