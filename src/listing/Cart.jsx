import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDestination, deleteDestination, totalCart } from '../feature/citySlice/travelSlice.js';
import { Rating } from '@mui/material';

const Cart = () => {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.travel.destinations);
  const totalPrice = useSelector((state) => state.travel.totalPrice);
  const totalQuantity = useSelector((state) => state.travel.totalQuantity);

  // Dispatch totalCart whenever destinations change
  useEffect(() => {
    dispatch(totalCart());
  }, [destinations, dispatch]);

  const handleAddToCart = (destination) => {
    dispatch(addDestination(destination));
  };

  const handleDeleteToCart = (destination) => {
    dispatch(deleteDestination(destination));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl">Your Cart</h2>
      {destinations.length === 0 ? (
        <div className="text-center mt-6">
          <p className="text-gray-600">Your cart is empty.</p>
          <img
            src="https://via.placeholder.com/300x200.png?text=No+Items+in+Cart"
            alt="Empty cart illustration"
            className="mx-auto mt-4"
          />
        </div>
      ) : (
        <ul className="divide-y divide-gray-200 mt-6 space-y-6">
          {destinations.map((dest) => (
            <li
              key={dest.id}
              className="flex flex-col md:flex-row items-start md:space-x-6"
            >
              {/* Destination Image */}
              <img
                src={dest.imgee}
                alt={dest.name}
                className="w-full h-48 md:w-36 md:h-36 rounded-lg object-cover mb-4 md:mb-0"
              />

              {/* Destination Details */}
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-medium text-gray-900 sm:text-2xl">
                  {dest.name}
                </h3>
                <p className="text-sm text-gray-600">{dest.des}</p>
                <p className="text-sm text-gray-500">
                  Best time to visit: {dest.bestTimeToVisit}
                </p>
                <div className="flex items-center justify-start space-x-2">
                  <Rating
                    name="half-rating"
                    defaultValue={dest.rating}
                    precision={0.5}
                    readOnly
                  />
                  <span className="text-sm font-bold text-gray-700">
                    {dest.rating}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-500">
                  Budget: ₹{dest.budget}
                </p>
                <p className="text-sm text-gray-500">
                  Travel Tips: {dest.travelTips}
                </p>
              </div>

              <div className="flex md:flex-col items-center md:items-start mt-4 md:mt-0 space-y-2">
                <p className="text-sm text-gray-600">Quantity: {dest.quantity}</p>
                <button
                  onClick={() => handleAddToCart(dest)}
                  className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 focus:outline-none w-full md:w-auto"
                >
                  Add More
                </button>
                <button
                  onClick={() => handleDeleteToCart(dest)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none w-full md:w-auto"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      
      <div className="mt-8 border-t pt-6">
        <p className="text-lg sm:text-xl font-medium text-gray-800">
          Total Items: {totalQuantity}
        </p>
        <p className="text-lg sm:text-xl font-medium text-gray-800">
          Total Price:{' '}
          {new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
          }).format(totalPrice)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
