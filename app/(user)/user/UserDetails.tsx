"use client";

import Image from "next/image";
import UserEditAccountModal from "./UserEditAccountModal";
import { User } from "@prisma/client";
import { useQuery } from "@urql/next";
import { GetProfileDocument, GetProfileQuery, GetProfileQueryVariables, Profile } from "@/graphql/generated";
import UserAddProfile from "./UserAddProfile";

type Props = {
  user: User;
};

const UserDetails = ({ user }: Props) => {

  const email = user?.email as string

  const [{data, fetching, error }] = useQuery<GetProfileQuery, GetProfileQueryVariables>({query:  GetProfileDocument, variables: {email}})

  const profile = data?.getProfile as Profile
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
         src={user?.image!}
        alt="pro-img"
        width={100}
        height={100}
        className="mx-auto  rounded-full "
      />

      <div>
        <h1 className="text-xl text-center my-5 font-semibold leading-tight tracking-tight text-gray-500 md:text-2xl ">
        {user?.name}
        </h1>
        <p className="text-gray-500 mb-4">{user?.email}</p>
        {profile ? (
        <UserEditAccountModal user={user as User} profile={profile} />
        ) : (
            <UserAddProfile user={user as User}  />
        )}
      </div>
    </div>
  );
};

export default UserDetails;