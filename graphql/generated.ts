import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type Category = {
  __typename?: 'Category';
  desc: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  img: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Favorite = {
  __typename?: 'Favorite';
  id: Scalars['String']['output'];
  menu: Array<Scalars['String']['output']>;
  user: User;
  userEmail: Scalars['String']['output'];
};

export type Menu = {
  __typename?: 'Menu';
  category: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  longDescr: Scalars['String']['output'];
  onPromo: Scalars['Boolean']['output'];
  prepType: Array<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  sellingPrice?: Maybe<Scalars['Float']['output']>;
  shortDescr: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory: Category;
  addFavorite: Favorite;
  addMenu: Menu;
  addOrder: Order;
  addProfile: Profile;
  deleteCategory: Category;
  deleteMenu: Menu;
  editCategory: Category;
  editMenu: Menu;
  editOrder: Order;
  editOrderOnPayment: Order;
  editProfile: Profile;
  editUserRole: User;
  removeFavorite: Favorite;
};


export type MutationAddCategoryArgs = {
  desc: Scalars['String']['input'];
  img: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationAddFavoriteArgs = {
  menuId: Scalars['String']['input'];
  userEmail: Scalars['String']['input'];
};


export type MutationAddMenuArgs = {
  category: Scalars['String']['input'];
  image: Scalars['String']['input'];
  longDescr: Scalars['String']['input'];
  prepType: Array<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  sellingPrice?: InputMaybe<Scalars['Float']['input']>;
  shortDescr: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationAddOrderArgs = {
  cart: Scalars['JSON']['input'];
  deliveryAddress: Scalars['String']['input'];
  deliveryFee: Scalars['Float']['input'];
  discount?: InputMaybe<Scalars['Float']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  orderNumber: Scalars['String']['input'];
  paymentToken?: InputMaybe<Scalars['String']['input']>;
  serviceFee: Scalars['Float']['input'];
  total: Scalars['Float']['input'];
  userEmail: Scalars['String']['input'];
  userName: Scalars['String']['input'];
  userPhone: Scalars['String']['input'];
};


export type MutationAddProfileArgs = {
  email: Scalars['String']['input'];
  img?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMenuArgs = {
  id: Scalars['String']['input'];
};


export type MutationEditCategoryArgs = {
  desc: Scalars['String']['input'];
  id: Scalars['String']['input'];
  img: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationEditMenuArgs = {
  category: Scalars['String']['input'];
  id: Scalars['String']['input'];
  image: Scalars['String']['input'];
  longDescr: Scalars['String']['input'];
  prepType: Array<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  sellingPrice?: InputMaybe<Scalars['Float']['input']>;
  shortDescr: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationEditOrderArgs = {
  deliveryTime?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['String']['input'];
  status: OrderStatus;
};


export type MutationEditOrderOnPaymentArgs = {
  id: Scalars['String']['input'];
  paymentToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditProfileArgs = {
  email: Scalars['String']['input'];
  img?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditUserRoleArgs = {
  id: Scalars['String']['input'];
  role: Role;
};


export type MutationRemoveFavoriteArgs = {
  menuId: Scalars['String']['input'];
  userEmail: Scalars['String']['input'];
};

export type Order = {
  __typename?: 'Order';
  cart: Scalars['JSON']['output'];
  deliveryAddress: Scalars['String']['output'];
  deliveryFee: Scalars['Float']['output'];
  deliveryTime?: Maybe<Scalars['DateTime']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  orderDate: Scalars['DateTime']['output'];
  orderNumber: Scalars['String']['output'];
  paid: Scalars['Boolean']['output'];
  paymentToken?: Maybe<Scalars['String']['output']>;
  serviceFee: Scalars['Float']['output'];
  status: OrderStatus;
  total: Scalars['Float']['output'];
  user: User;
  userEmail: Scalars['String']['output'];
  userName: Scalars['String']['output'];
  userPhone: Scalars['String']['output'];
};

/** Order status */
export enum OrderStatus {
  Collected = 'COLLECTED',
  Delivered = 'DELIVERED',
  Preparing = 'PREPARING',
  Unassigned = 'UNASSIGNED'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Profile = {
  __typename?: 'Profile';
  email: User;
  id: Scalars['ID']['output'];
  img?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getCategories: Array<Category>;
  getCategory: Category;
  getFavorites: Array<Favorite>;
  getMenu: Menu;
  getMenuUserFavorites: Array<Menu>;
  getMenus: QueryGetMenusConnection;
  getOrder: Order;
  getOrders: QueryGetOrdersConnection;
  getProfile: Profile;
  getProfiles: Array<Profile>;
  getUserFavorites: Favorite;
  getUsers: Array<User>;
};


export type QueryGetCategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetMenuArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetMenuUserFavoritesArgs = {
  menuIds: Array<Scalars['String']['input']>;
  userEmail: Scalars['String']['input'];
};


export type QueryGetMenusArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetOrderArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetOrdersArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetProfileArgs = {
  email: Scalars['String']['input'];
};


export type QueryGetUserFavoritesArgs = {
  userEmail: Scalars['String']['input'];
};

export type QueryGetMenusConnection = {
  __typename?: 'QueryGetMenusConnection';
  edges: Array<Maybe<QueryGetMenusConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryGetMenusConnectionEdge = {
  __typename?: 'QueryGetMenusConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Menu;
};

export type QueryGetOrdersConnection = {
  __typename?: 'QueryGetOrdersConnection';
  edges: Array<Maybe<QueryGetOrdersConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryGetOrdersConnectionEdge = {
  __typename?: 'QueryGetOrdersConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Order;
};

/** User Role */
export enum Role {
  Admin = 'ADMIN',
  Delivery = 'DELIVERY',
  User = 'USER'
}

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role: Role;
};

export type GetMenusQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetMenusQuery = { __typename?: 'Query', getMenus: { __typename?: 'QueryGetMenusConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QueryGetMenusConnectionEdge', cursor: string, node: { __typename?: 'Menu', category: string, id: string, image: string, longDescr: string, onPromo: boolean, prepType: Array<string>, price: number, sellingPrice?: number | null, shortDescr: string, title: string } } | null> } };


export const GetMenusDocument = gql`
    query GetMenus($first: Int, $after: ID) {
  getMenus(first: $first, after: $after) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      cursor
      node {
        category
        id
        image
        longDescr
        onPromo
        prepType
        price
        sellingPrice
        shortDescr
        title
      }
    }
  }
}
    `;

export function useGetMenusQuery(options?: Omit<Urql.UseQueryArgs<GetMenusQueryVariables>, 'query'>) {
  return Urql.useQuery<GetMenusQuery, GetMenusQueryVariables>({ query: GetMenusDocument, ...options });
};