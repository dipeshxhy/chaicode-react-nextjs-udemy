import CartItem from './CartItem';
import { Card, CardTitle } from './ui/card';

const Cart = ({ cart, onUpdateQty, onRemove, onAdd }) => {
  const totalPrice = cart
    ?.reduce((total, item) => total + item.price * (item.quantity || 0), 0)
    .toFixed(2);
  return (
    <Card className="w-full max-w-md rounded-sm bg-zinc-100 p-4 my-4">
      <CardTitle className="text-xl font-semibold mb-4">Shopping Cart</CardTitle>
      {cart.length === 0 ? <p className="text-gray-600 text-center">Your cart is empty.</p> : null}
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onAdd={onAdd}
          onUpdateQty={onUpdateQty}
          onRemove={onRemove}
        />
      ))}
      {cart.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mt-4">Total: ${totalPrice}</h3>
        </div>
      )}
    </Card>
  );
};
export default Cart;
