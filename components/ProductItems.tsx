import prisma from "@/lib/prisma";
import ProductCard from "./ProductCard";

async function getProducts() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      description: true,
      imageUrl: true,
      category: true,
    },
    orderBy: { createdAt: "desc" },
    take: 12,
  });
  return products;
}

const ProductItems = async () => {
  const products = await getProducts();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
};
export default ProductItems;
