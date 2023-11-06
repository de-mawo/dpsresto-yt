import { getCurrentUser } from "@/lib/session";
import StripeCheckoutPage from "./StripeCheckoutPage";

export default async function PayPage({
  params,
  searchParams,
}: {
  params: { orderId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
 

  const { orderId } = params;
  const { total } = searchParams;
  const user = await getCurrentUser();
  if (!user) return <div>...Ooops an error occured</div>;

  return <StripeCheckoutPage orderId={orderId} total={total as string} />;
}
