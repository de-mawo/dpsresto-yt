"use client";

import {
  HiOutlineCalendarDays,
  HiOutlineChevronLeft,
  HiOutlineClock,
} from "react-icons/hi2";
import { CiReceipt } from "react-icons/ci";

import Link from "next/link";
import { OrderData } from "@/data/order-data";
import Container from "@/app/components/Common/Container";
import UserDeliveredModal from "./UserDeliveredModal";
import UserOnDeliveryModal from "./UserOnDeliveryModal";
import { Order, User } from "@prisma/client";
import { useQuery } from "@urql/next";
import { GetUserDocument, GetUserQuery, GetUserQueryVariables } from "@/graphql/generated";

type Props = {
  user: User;
};




const UserOrders = ({ user }: Props) => {

  const userEmail = user?.email;
  const [{ data: UserData, fetching, error }] = useQuery<
    GetUserQuery,
    GetUserQueryVariables
  >({ query: GetUserDocument, variables: { email: userEmail as string } });

  

  const Orders = UserData?.getUser.order;

  
  return (
    <Container>
      <div className="mt-6 text-center">
        <h2 className="text-lg md:text-2xl lg:text-3xl  leading-tight tracking-tight text-gray-600 sm:text-4xl ">
          My Orders
        </h2>
        <Link
          href="/user"
          className="inline-flex items-center justify-center
           bg-green-600 text-lg   px-4 py-1 text-white 
            border border-green-500 space-x-2 rounded-full
             hover:text-green-700 hover:bg-green-200  "
        >
          {" "}
          <HiOutlineChevronLeft /> <span>Back to my Profile</span>{" "}
        </Link>
      </div>
      <section
        className="py-12 grid grid-cols-1 sm:grid-cols-2
       md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        gap-8 max-h-[80vh] overflow-y-auto scrollbar-hide"
      >
        {Orders?.map((order) => (
          <div
            className="flex flex-col p-3 border rounded-md space-y-6"
            key={order.id}
          >
            {order.status === "DELIVERED" ? (
              <UserDeliveredModal order={order as Order} />
            ) : (
              <UserOnDeliveryModal order={order as Order  } />
            )}

            <div className="flex justify-between items-center p-1 text-slate-500 bg-slate-100">
              <div className="flex items-center space-x-1 ">
                <CiReceipt size={28} />
                <div className="flex flex-col text-xs">
                  <span>Order</span>
                  <span>#{order.orderNumber}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 ">
                {order.status === "DELIVERED" ? (
                  <>
                    <HiOutlineCalendarDays size={28} />
                    <div className="flex flex-col text-xs">
                      <span>Delivered </span>
                      <span>May 11 2023</span>
                    </div>
                  </>
                ) : (
                  <>
                    <HiOutlineClock size={28} />
                    <div className="flex flex-col text-xs">
                      <span>Estimated </span>
                      <span>16:46pm</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default UserOrders;
