import AccountDropDown from "@/app/components/Common/AccountDropDown";
import Container from "@/app/components/Common/Container";
import Image from "next/image";
import NotifyDropDown from "./NotifyDropDown";
import { User } from "@prisma/client";

type Props = {
  user: User
}

const DashHeader = ({user}: Props) => {
  return (
    <Container>
      <header className="grid grid-cols-2 py-5 px-4 md:px-12 items-center sticky top-0 z-10 rounded-md bg-white shadow-md">
        {/* Left Area  */}
        <div className="flex items-center gap-x-8  ">
          <Image src="/img/logo.png" alt="logo" width={40} height={40} />
        </div>

        {/* Right Area */}
        <div className="flex items-center justify-end space-x-4">
          <NotifyDropDown />

          <AccountDropDown user={user}/>
        </div>
      </header>
    </Container>
  );
};

export default DashHeader;
