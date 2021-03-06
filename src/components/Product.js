import Image from "next/image";
import { forwardRef, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = forwardRef(
  ({ id, title, price, description, category, image }, ref) => {
    const dispatch = useDispatch();
    const [rating] = useState(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    const [hasPrime] = useState(Math.random() < 0.5);

    const addItemToBasket = () => {
      const product = {
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
        hasPrime,
      };

      // sending the product as an action to the REDUX Store...the basket slice
      dispatch(addToBasket(product));
    };

    return (
      <div
        className="relative flex flex-col m-5 bg-white z-30 p-10 rounded shadow-2xl growing-hover"
        ref={ref}
      >
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">
          {category}
        </p>
        <Image
          src={image}
          width={200}
          height={200}
          alt="Product"
          objectFit="contain"
        />
        <h4 className="my-3">{title}</h4>

        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>

        <div className="mb-5">
          <Currency quantity={price} />
        </div>

        {hasPrime && (
          <div className="flex items-center space-x-2 -mt-5">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}

        <button onClick={addItemToBasket} className="mt-auto button">
          Add To Basket
        </button>
      </div>
    );
  }
);

export default Product;
