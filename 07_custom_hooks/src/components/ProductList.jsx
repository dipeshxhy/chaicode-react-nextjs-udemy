import ProductCard from './ProductCard';

const ProductList = ({ products, onAdd }) => {
  return (
    <div className="flex  w-full flex-wrap justify-center gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
};
export default ProductList;
