const CartItem = ({ item, onUpdateQty, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div>
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">
          ${item.price} x {item.quantity}= ${item.price * item.quantity}
        </p>
        <button
          onClick={() => onUpdateQty(item.id, item.quantity - 1)}
          className="px-2 py-1 bg-gray-700 text-white rounded mr-2"
        >
          -
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button
          onClick={() => onUpdateQty(item.id, item.quantity + 1)}
          className="px-2 py-1 bg-gray-700 text-white  rounded"
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onRemove(item.id)}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default CartItem;
