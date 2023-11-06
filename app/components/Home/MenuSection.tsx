'use client'

import { MenuData } from '@/data/menu-data'
import React, { Suspense, useState } from 'react'
import MenuModal from './MenuModal'
import { GetMenusDocument, GetMenusQuery, GetMenusQueryVariables } from '@/graphql/generated'
import { useQuery } from '@urql/next'
import DataLoading from '../Common/ClientLoaders'
import { Menu, User } from '@prisma/client'

type FetchedMenuProps = {
  variables: GetMenusQueryVariables;
  isLastPage: boolean;
  onLoadMore: (after: string) => void;
  user: User;
}

const FetchedMenus = ({ variables, isLastPage, onLoadMore, user}: FetchedMenuProps) => {

  const { first, after } = variables;
  const [{ data, fetching, error }] = useQuery<
    GetMenusQuery,
    GetMenusQueryVariables
  >({ query: GetMenusDocument, variables: { first, after } });

  const menus = data?.getMenus.edges;
  const endCursor = data?.getMenus.pageInfo.endCursor
  const hasNextPage = data?.getMenus.pageInfo.hasNextPage;

  return (
    <>
      {!menus || menus.length === 0 ? (
        <div className="text-center py-3">
          {" "}
          <h2 className="text-lg  leading-tight tracking-tight text-gray-600 ">
            ...No Menus Found{" "}
          </h2>
        </div>
      ) : (
        <div className="mb-24 space-y-5">
          <div className=" mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
            {menus?.map((MenuEdge) => (
              <MenuModal
                key={MenuEdge?.node.id}
                menu={MenuEdge?.node as Menu}
                user={user as User}
              />
            ))}
          </div>
          {isLastPage && hasNextPage  && (
            <button
              onClick={() => onLoadMore(endCursor as string)}
              className="bg-green-600 text-white text-center
      hover:bg-green-200  hover:text-green-700  p-3 rounded  focus:outline-none "
            >
              LoadMore
            </button>
          )}
        </div>
      )}
    </>
  )

}


type MenuSectionProps = {
  user: User;
};
const MenuSection = ({ user }: MenuSectionProps) => {
  const [pageVariables, setPageVariables] = useState([
    {
      first: 4,
      after: null as null | string,
    },
  ]);

  return (
    <Suspense fallback={DataLoading()}>
    <section className='mb-24 flex flex-col items-center md:justify-center'>
    <div className="text-center">
        <h2 className="text-3xl  leading-tight tracking-tight text-gray-600 sm:text-4xl ">
          Menu
        </h2>

        {pageVariables.map((variables, i) => (
          <FetchedMenus
            user={user as User}
            key={"" + variables.after}
            variables={variables}
            isLastPage={i === pageVariables.length - 1}
            onLoadMore={(after) =>
              setPageVariables([...pageVariables, { after, first: 4 }])
            }
          />
        ))}
      </div>

    </section>
    </Suspense>
  )
}

export default MenuSection