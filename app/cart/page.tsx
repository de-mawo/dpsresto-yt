
import { getCurrentUser } from "@/lib/session";
import FooterMobile from "../components/Common/FooterMobile";
import CartSummary from "./CartSummary";
import CartTopSection from "./CartTopSection";
import { User } from "@prisma/client";

export const metadata = {
  title: "Cart",
  description: "...choose the best",
};
export default  async function Cart () {
  const user = await getCurrentUser()
  return (
    <>
      <div className="flex flex-col items-center justify-center   py-8 px-6 mb-24">
        <div className="w-full  rounded-lg shadow-xl sm:max-w-md   p-6">
          <CartTopSection />

          <div className="flex flex-col space-y-4 border-t">
            <CartSummary user={user as User} />
          </div>
        </div>
      </div>
      <FooterMobile/>
    </>
  );
};

