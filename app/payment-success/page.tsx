import { getCurrentUser } from "@/lib/session"
import SuccessPaymentComponent from "./SuccessPaymentComponent";


const SuccessfulPaymentPage = async () => {
    const user = await getCurrentUser()

    if (!user) return <div>...Ooops an error occured</div>;

  return <SuccessPaymentComponent />;
}

export default SuccessfulPaymentPage