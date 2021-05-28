import moment from "moment";
import Currency from "react-currency-formatter";

function Order({ id, amountShipping, amount, items, timestamp, images }) {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 bg-gray-100 p-5 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>

        <div>
          <p className="font-bold text-xs">TOTAL</p>
          <p>
            <Currency quantity={amount} /> - Next Day Delivery{" "}
            <Currency quantity={amountShipping} />
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-xl self-end text-right text-blue-500 flex-1">
          {`${
            items.length === 1
              ? items.length + " item"
              : items.length + " items"
          }`}
        </p>

        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          Order #{id}
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image) => (
            <img
              src={image}
              alt="Product"
              className="h-20 object-contain sm:h-32"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
