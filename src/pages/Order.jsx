import React from "react";

const Order = (order) => {
  return (
    <div>
      <h2>Thank You for your order</h2>
      <p>
        Your order has been placed successfully. You will receive an email
        confirmation shortly.
      </p>
      <div>
        <h3>Order Summary</h3>
        <p>Order Number: {order.orderNumber}</p>
        <div>
          <h2>Shipping Information</h2>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>
        <div>
          <h3>Products Ordered</h3>
          {order.products.map((product) => (
            <div>
              <p>
                {product.name} x {product.quantity}
              </p>
              <p>{product.price * product.quantity}</p>
            </div>
          ))}
        </div>
        <div>
          <span>Total Price:</span>
          <span>{order.totalPrice}</span>
        </div>
        <div>
            <button>Order tracking</button>
            <button>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
