import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearBasket } from "../slices/basketSlice";

function Success() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearBasket());
  }, []);

  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col bg-white p-10">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We'll send a confirmation once your
            item has been shipped, if you would like to check the status of your
            order(s) please press the link below
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to my Orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
