function Cart() {
    const items = [
        { id: 1, name: 'Item 1', price: 29.99 },
        { id: 2, name: 'Item 2', price: 19.99 },
        { id: 3, name: 'Item 3', price: 39.99 },
    ];

    const totalPrice = items.reduce((acc, item) => acc + item.price, 0).toFixed(2);

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            <ul className="space-y-4">
                {items.map(item => (
                    <li key={item.id} className="flex justify-between items-center border-b pb-2">
                        <span>{item.name}</span>
                        <span>${item.price.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-4 font-semibold text-lg">
                Total: <span className="text-green-500">${totalPrice}</span>
            </div>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Checkout
            </button>
        </div>
    );
}

export default Cart;
