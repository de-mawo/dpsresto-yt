import {
  AddFavoriteDocument,
  AddFavoriteMutation,
  AddFavoriteMutationVariables,
  GetUserFavoritesDocument,
  GetUserFavoritesQuery,
  GetUserFavoritesQueryVariables,
  RemoveFavoriteDocument,
  RemoveFavoriteMutation,
  RemoveFavoriteMutationVariables,
} from "@/graphql/generated";
import { User } from "@prisma/client";
import { useMutation, useQuery } from "@urql/next";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type Props = {
  menuId: string;
  user: User;
};

const FavoritesBtn = ({ menuId, user }: Props) => {
  const router = useRouter();
  const userEmail = user?.email as string;
  const [{ data, fetching, error }] = useQuery<
    GetUserFavoritesQuery,
    GetUserFavoritesQueryVariables
  >({ query: GetUserFavoritesDocument, variables: { userEmail } });

  const FavsIds = data?.getUserFavorites.menu;

  const [_add, addFav] = useMutation<
    AddFavoriteMutation,
    AddFavoriteMutationVariables
  >(AddFavoriteDocument);

  const [_remove, removeFav] = useMutation<
    RemoveFavoriteMutation,
    RemoveFavoriteMutationVariables
  >(RemoveFavoriteDocument);

  const handleAddFav = async () => {
    const res = await addFav({
      userEmail,
      menuId,
    });
    if (res.data?.addFavorite) {
      toast.success("Favorite Added Successfully", { duration: 2000 });
      router.refresh();
    } else {
      toast.error("An error occured", { duration: 2000 });
    }
  };

  const handleRemoveFav = async () => {
    const res = await removeFav({
      userEmail,
      menuId,
    });
    if (res.data?.removeFavorite) {
      toast.success("Favorite removed Successfully", { duration: 2000 });
      router.refresh();
    } else {
      toast.error("An error occured", { duration: 2000 });
    }
  };

  return (
    <div
      className="
        relative
        hover:opacity-80
        transition
        
      "
    >
      {FavsIds?.includes(menuId) ? (
        <AiFillHeart
          size={36}
          className="fill-green-700 cursor-pointer"
          onClick={handleRemoveFav}
        />
      ) : (
        <AiOutlineHeart
          size={40}
          className="
            text-green-700
            -top-[20px]
            -right-[30px]
            cursor-pointer
          "
          onClick={handleAddFav}
        />
      )}
    </div>
  );
};

export default FavoritesBtn;
