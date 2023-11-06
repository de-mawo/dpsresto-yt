'use client'

import { EditOrderOnPaymentDocument, EditOrderOnPaymentMutation, EditOrderOnPaymentMutationVariables } from "@/graphql/generated";
import { useCartStore } from "@/lib/store";
import { useMutation } from "@urql/next";
import { useRouter, useSearchParams } from "next/navigation"
import { AiOutlineCheck } from "react-icons/ai";
import ConfettiExplosion from "react-confetti-explosion";
import { useEffect } from "react";
import toast from "react-hot-toast";


const SuccessPaymentComponent = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const payment_intent = searchParams.get("payment_intent ")
    const editOrderOnPaymentId = searchParams.get("orderId") as string

const [_, editPaidOrder] = useMutation<EditOrderOnPaymentMutation, EditOrderOnPaymentMutationVariables>(EditOrderOnPaymentDocument)

const {resetCart } = useCartStore()

useEffect(() => {
    const handleOrderPaid = async () => {
        const res = await editPaidOrder({
          editOrderOnPaymentId,
          paymentToken: payment_intent,
        });
        if (res.data?.editOrderOnPayment) {
          toast.success("Order updated Successfully", { duration: 800 });
          resetCart();
          router.push(`/user/orders`);
        } else {
          toast.error("An error occured", { duration: 800 });
        }
      };
      const delay = 3000; 
      const timerId = setTimeout(() => {
        handleOrderPaid();
      }, delay);
  
      // Cleanup the timer to avoid invoking the function multiple times
      return () => clearTimeout(timerId);
 
}, [editOrderOnPaymentId, editPaidOrder, payment_intent, resetCart, router])


  return (
    <div className="flex flex-col items-center justify-center   py-8 px-6  mb-24">
      <div className="w-full  rounded-lg shadow-xl sm:max-w-md   p-6">
        <div className="flex items-center justify-center space-x-4 p-4 rounded-lg bg-green-600 text-white">
          <h1 className="font-bold text-2xl">Success !</h1>
          <AiOutlineCheck size={28} />
        </div>
        <ConfettiExplosion className="absolute m-auto" />
      </div>
    </div>
  )
}

export default SuccessPaymentComponent