import Image from "next/image";
import { useQuery } from "@urql/next";
import AdminPreviewMenu from "./AdminPreviewMenu";
import AdminEditMenu from "./AdminEditMenu";
import AdminDeleteMenu from "./AdminDeleteMenu";

import { Menu } from "@prisma/client";
import { GetMenusDocument, GetMenusQuery, GetMenusQueryVariables } from "@/graphql/generated";

type AdminFetchedMenusProps = {
  variables: GetMenusQueryVariables;
  isAdminLastPage: boolean;
  onLoadMore: (after: string) => void;
};

export const AdminFetchedMenus = ({
  variables,
  isAdminLastPage,
  onLoadMore,
}: AdminFetchedMenusProps) => {
  const { first, after } = variables;
  const [{ data, fetching, error }] = useQuery<
    GetMenusQuery,
    GetMenusQueryVariables
  >({ query: GetMenusDocument, variables: { first, after } });

  const menus = data?.getMenus?.edges;

  const endCursor = data?.getMenus.pageInfo?.endCursor;
  const hasAdminNextPage = data?.getMenus.pageInfo.hasNextPage;

  return (
    <>
      <tbody>
        {menus?.map((MenuEdge) => (
          <tr className="bg-white " key={MenuEdge?.node.id}>
            <td className="px-6 py-2">
              <input
                className="w-4 h-4 accent-green-600 bg-gray-100  border-gray-300 rounded focus:ring-green-500 "
                type="checkbox"
              />
            </td>
            <td className="px-6 py-2">
              {" "}
              <Image
                src={MenuEdge?.node.image as string}
                width={50}
                height={50}
                alt="avatar"
                className="rounded-md object-cover"
              />{" "}
            </td>
            <td className="px-6 py-2">{MenuEdge?.node.title} </td>
            <td className="px-6 py-2">
              {" "}
              <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-0.5 rounded ">
                {" "}
                {MenuEdge?.node.category}
              </span>{" "}
            </td>
            <td className="px-6 py-2">{MenuEdge?.node.price}</td>
            <td className="px-6 py-2 whitespace-nowrap">
              {" "}
              <AdminPreviewMenu menu={MenuEdge?.node as Menu} />{" "}
            </td>
            <td className="px-6 py-2 whitespace-nowrap">
              {" "}
              <AdminEditMenu menu={MenuEdge?.node as Menu} />{" "}
            </td>
            <td className="px-6 py-2 whitespace-nowrap">
              {" "}
              <AdminDeleteMenu menu={MenuEdge?.node as Menu} />{" "}
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot className="flex justify-center py-3 ">
        <tr>
          <td>
            {isAdminLastPage && hasAdminNextPage && (
              <button
                onClick={() => onLoadMore(endCursor as string)}
                className="bg-green-600 text-white text-center
           hover:bg-green-200  hover:text-green-700  py-1 px-2 rounded  focus:outline-none "
              >
                Load More ...
              </button>
            )}
          </td>
        </tr>
      </tfoot>
    </>
  );
};