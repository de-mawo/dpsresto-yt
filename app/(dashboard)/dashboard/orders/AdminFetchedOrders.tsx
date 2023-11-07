import { EditOrderDocument, EditOrderMutation, EditOrderMutationVariables, GetMenusQueryVariables, GetOrdersDocument, GetOrdersQuery, GetOrdersQueryVariables,  OrderStatus } from "@/graphql/generated";
import { useMutation, useQuery } from "@urql/next";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import AdminOrderModal from "./AdminOrderModal";
import { HiCheck, HiXCircle } from "react-icons/hi2";
import { Order } from "@prisma/client";


type AdminFetchedOrdersProps = {
    variables: GetMenusQueryVariables;
    isLastPage: boolean;
    onLoadMore: (after: string) => void;
  };
  


export const AdminFetchedOrders = ({ variables,
    isLastPage,
    onLoadMore,}:AdminFetchedOrdersProps ) => {
    const router = useRouter()
    const { first, after } = variables;
  const [{ data, fetching, error }] = useQuery<
    GetOrdersQuery,
    GetOrdersQueryVariables
  >({ query: GetOrdersDocument, variables: { first, after } });

  const orders = data?.getOrders.edges;
  const endCursor = data?.getOrders.pageInfo.endCursor;
  const hasNextPage = data?.getOrders.pageInfo.hasNextPage;

  const [_, editOrder] = useMutation<
  EditOrderMutation,
  EditOrderMutationVariables
>(EditOrderDocument);

const changeOrderStatus = async (
    id: string,
    newStatus: OrderStatus,
    successMessage: string
  ) => {
    try {
      const res = await editOrder({
        status: newStatus,
        editOrderId: id,
      });

      if (res.data?.editOrder) {
        toast.success(successMessage, { duration: 3000 });
        router.refresh();
      } else if (res.error) {
        toast.error("An error occurred.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const markCollected = (id: string) => {
    changeOrderStatus(
      id,
      OrderStatus.Collected,
      "Order status changed to Collected"
    );
  };

  const markDelivered = (id: string) => {
    changeOrderStatus(
      id,
      OrderStatus.Delivered,
      "Order status changed to Delivered"
    );
  };


  return (
    <>
      <tbody>
        {orders?.map((OrderEdge) => (
          <tr className="bg-white whitespace-nowrap" key={OrderEdge?.node.id}>
            <td className="px-6 py-3">{OrderEdge?.node.orderNumber} </td>
            <td className="px-6 py-3 ">{OrderEdge?.node.paymentToken}</td>
            <td className="px-6 py-3">{OrderEdge?.node.orderDate} </td>
            <td className="px-6 py-3">{OrderEdge?.node.userName} </td>
            <td className="px-6 py-3 max-w-xs ">
              {" "}
              <p className="truncate ...">
                {OrderEdge?.node.deliveryAddress}{" "}
              </p>{" "}
            </td>
            <td className="px-6 py-3 ">
              {OrderEdge?.node.paid ? (
                <HiCheck className=" w-5 h-5 font-bold text-green-600" />
              ) : (
                <HiXCircle className="text-red-600" size={20} />
              )}
            </td>
            <td className="px-6 py-3 ">
              {OrderEdge?.node.status === "COLLECTED" ||
              OrderEdge?.node.status === "DELIVERED" ? (
                <HiCheck className=" font-bold text-green-600" size={20} />
              ) : (
                <button
                  className="rounded text-xs font-semibold bg-green-100 px-2 py-1 text-green-500 "
                  onClick={() => markCollected(OrderEdge?.node.id as string)}
                >
                  Mark Collected
                </button>
              )}
            </td>
            <td className="px-6 py-3 ">
              {OrderEdge?.node.status === "DELIVERED" ? (
                <HiCheck className=" font-bold text-green-600" size={20} />
              ) : (
                <button
                  className="rounded text-xs font-semibold bg-red-100 px-2 py-1 text-red-400 "
                  onClick={() => markDelivered(OrderEdge?.node.id as string)}
                >
                  Mark Delivered
                </button>
              )}
            </td>

            <td className="px-6 py-3">
              <AdminOrderModal order={OrderEdge?.node as Order} />{" "}
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot className="flex justify-center py-3">
        <tr>
          <td>
            {isLastPage && hasNextPage && (
              <button
                onClick={() => onLoadMore(endCursor as string)}
                className="bg-green-600 text-white text-center
           hover:bg-green-200  hover:text-green-700  py-1 px-2 rounded  focus:outline-none "
              >
                Load More
              </button>
            )}
          </td>
        </tr>
      </tfoot>
    </>
  );





}