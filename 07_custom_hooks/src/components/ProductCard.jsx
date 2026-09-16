import { Button } from './ui/button';
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const ProductCard = ({ product, onAdd }) => {
  return (
    <Card className="w-full sm:max-w-md bg-zinc-100">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>${product.price}</CardDescription>
      </CardHeader>
      <CardFooter>
        <CardAction>
          <Button className="" onClick={() => onAdd(product)}>
            Add to Cart
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
