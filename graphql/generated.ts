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
  getUser: User;
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


export type QueryGetUserArgs = {
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
  order?: Maybe<Array<Order>>;
  role: Role;
};

export type GetUserFavoritesQueryVariables = Exact<{
  userEmail: Scalars['String']['input'];
}>;


export type GetUserFavoritesQuery = { __typename?: 'Query', getUserFavorites: { __typename?: 'Favorite', id: string, menu: Array<string>, userEmail: string } };

export type AddFavoriteMutationVariables = Exact<{
  menuId: Scalars['String']['input'];
  userEmail: Scalars['String']['input'];
}>;


export type AddFavoriteMutation = { __typename?: 'Mutation', addFavorite: { __typename?: 'Favorite', id: string, menu: Array<string> } };

export type RemoveFavoriteMutationVariables = Exact<{
  menuId: Scalars['String']['input'];
  userEmail: Scalars['String']['input'];
}>;


export type RemoveFavoriteMutation = { __typename?: 'Mutation', removeFavorite: { __typename?: 'Favorite', id: string, menu: Array<string> } };

export type AddMenuMutationVariables = Exact<{
  category: Scalars['String']['input'];
  image: Scalars['String']['input'];
  longDescr: Scalars['String']['input'];
  prepType: Array<Scalars['String']['input']> | Scalars['String']['input'];
  price: Scalars['Float']['input'];
  shortDescr: Scalars['String']['input'];
  title: Scalars['String']['input'];
  sellingPrice?: InputMaybe<Scalars['Float']['input']>;
}>;


export type AddMenuMutation = { __typename?: 'Mutation', addMenu: { __typename?: 'Menu', id: string } };

export type EditMenuMutationVariables = Exact<{
  category: Scalars['String']['input'];
  editMenuId: Scalars['String']['input'];
  image: Scalars['String']['input'];
  longDescr: Scalars['String']['input'];
  prepType: Array<Scalars['String']['input']> | Scalars['String']['input'];
  price: Scalars['Float']['input'];
  shortDescr: Scalars['String']['input'];
  title: Scalars['String']['input'];
  sellingPrice?: InputMaybe<Scalars['Float']['input']>;
}>;


export type EditMenuMutation = { __typename?: 'Mutation', editMenu: { __typename?: 'Menu', id: string } };

export type DeleteMenuMutationVariables = Exact<{
  deleteMenuId: Scalars['String']['input'];
}>;


export type DeleteMenuMutation = { __typename?: 'Mutation', deleteMenu: { __typename?: 'Menu', id: string } };

export type GetMenusQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetMenusQuery = { __typename?: 'Query', getMenus: { __typename?: 'QueryGetMenusConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QueryGetMenusConnectionEdge', cursor: string, node: { __typename?: 'Menu', category: string, id: string, image: string, longDescr: string, onPromo: boolean, prepType: Array<string>, price: number, sellingPrice?: number | null, shortDescr: string, title: string } } | null> } };

export type GetMenuUserFavoritesQueryVariables = Exact<{
  menuIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  userEmail: Scalars['String']['input'];
}>;


export type GetMenuUserFavoritesQuery = { __typename?: 'Query', getMenuUserFavorites: Array<{ __typename?: 'Menu', category: string, id: string, image: string, longDescr: string, onPromo: boolean, prepType: Array<string>, price: number, sellingPrice?: number | null, shortDescr: string, title: string }> };

export type GetOrdersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetOrdersQuery = { __typename?: 'Query', getOrders: { __typename?: 'QueryGetOrdersConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QueryGetOrdersConnectionEdge', cursor: string, node: { __typename?: 'Order', cart: any, deliveryAddress: string, deliveryFee: number, deliveryTime?: any | null, discount?: number | null, id: string, note?: string | null, orderDate: any, orderNumber: string, paid: boolean, paymentToken?: string | null, serviceFee: number, status: OrderStatus, total: number, userEmail: string, userName: string, userPhone: string } } | null> } };

export type AddOrderMutationVariables = Exact<{
  cart: Scalars['JSON']['input'];
  deliveryAddress: Scalars['String']['input'];
  deliveryFee: Scalars['Float']['input'];
  orderNumber: Scalars['String']['input'];
  serviceFee: Scalars['Float']['input'];
  total: Scalars['Float']['input'];
  userEmail: Scalars['String']['input'];
  userName: Scalars['String']['input'];
  userPhone: Scalars['String']['input'];
  discount?: InputMaybe<Scalars['Float']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  paymentToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddOrderMutation = { __typename?: 'Mutation', addOrder: { __typename?: 'Order', id: string } };

export type EditOrderOnPaymentMutationVariables = Exact<{
  editOrderOnPaymentId: Scalars['String']['input'];
  paymentToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditOrderOnPaymentMutation = { __typename?: 'Mutation', editOrderOnPayment: { __typename?: 'Order', id: string } };

export type EditOrderMutationVariables = Exact<{
  editOrderId: Scalars['String']['input'];
  status: OrderStatus;
  deliveryTime?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type EditOrderMutation = { __typename?: 'Mutation', editOrder: { __typename?: 'Order', id: string } };

export type GetUserQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', email?: string | null, id: string, image?: string | null, name?: string | null, role: Role, order?: Array<{ __typename?: 'Order', cart: any, deliveryAddress: string, deliveryFee: number, deliveryTime?: any | null, discount?: number | null, id: string, note?: string | null, orderDate: any, orderNumber: string, paid: boolean, paymentToken?: string | null, serviceFee: number, status: OrderStatus, total: number, userEmail: string, userName: string, userPhone: string }> | null } };

export type GetProfileQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'Profile', id: string, img?: string | null, name?: string | null, phone?: string | null } };

export type AddProfileMutationVariables = Exact<{
  email: Scalars['String']['input'];
  img?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddProfileMutation = { __typename?: 'Mutation', addProfile: { __typename?: 'Profile', id: string } };

export type EditProfileMutationVariables = Exact<{
  email: Scalars['String']['input'];
  img?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditProfileMutation = { __typename?: 'Mutation', editProfile: { __typename?: 'Profile', id: string } };


export const GetUserFavoritesDocument = gql`
    query GetUserFavorites($userEmail: String!) {
  getUserFavorites(userEmail: $userEmail) {
    id
    menu
    userEmail
  }
}
    `;

export function useGetUserFavoritesQuery(options: Omit<Urql.UseQueryArgs<GetUserFavoritesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserFavoritesQuery, GetUserFavoritesQueryVariables>({ query: GetUserFavoritesDocument, ...options });
};
export const AddFavoriteDocument = gql`
    mutation AddFavorite($menuId: String!, $userEmail: String!) {
  addFavorite(menuId: $menuId, userEmail: $userEmail) {
    id
    menu
  }
}
    `;

export function useAddFavoriteMutation() {
  return Urql.useMutation<AddFavoriteMutation, AddFavoriteMutationVariables>(AddFavoriteDocument);
};
export const RemoveFavoriteDocument = gql`
    mutation RemoveFavorite($menuId: String!, $userEmail: String!) {
  removeFavorite(menuId: $menuId, userEmail: $userEmail) {
    id
    menu
  }
}
    `;

export function useRemoveFavoriteMutation() {
  return Urql.useMutation<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>(RemoveFavoriteDocument);
};
export const AddMenuDocument = gql`
    mutation AddMenu($category: String!, $image: String!, $longDescr: String!, $prepType: [String!]!, $price: Float!, $shortDescr: String!, $title: String!, $sellingPrice: Float) {
  addMenu(
    category: $category
    image: $image
    longDescr: $longDescr
    prepType: $prepType
    price: $price
    shortDescr: $shortDescr
    title: $title
    sellingPrice: $sellingPrice
  ) {
    id
  }
}
    `;

export function useAddMenuMutation() {
  return Urql.useMutation<AddMenuMutation, AddMenuMutationVariables>(AddMenuDocument);
};
export const EditMenuDocument = gql`
    mutation EditMenu($category: String!, $editMenuId: String!, $image: String!, $longDescr: String!, $prepType: [String!]!, $price: Float!, $shortDescr: String!, $title: String!, $sellingPrice: Float) {
  editMenu(
    category: $category
    id: $editMenuId
    image: $image
    longDescr: $longDescr
    prepType: $prepType
    price: $price
    shortDescr: $shortDescr
    title: $title
    sellingPrice: $sellingPrice
  ) {
    id
  }
}
    `;

export function useEditMenuMutation() {
  return Urql.useMutation<EditMenuMutation, EditMenuMutationVariables>(EditMenuDocument);
};
export const DeleteMenuDocument = gql`
    mutation DeleteMenu($deleteMenuId: String!) {
  deleteMenu(id: $deleteMenuId) {
    id
  }
}
    `;

export function useDeleteMenuMutation() {
  return Urql.useMutation<DeleteMenuMutation, DeleteMenuMutationVariables>(DeleteMenuDocument);
};
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
export const GetMenuUserFavoritesDocument = gql`
    query GetMenuUserFavorites($menuIds: [String!]!, $userEmail: String!) {
  getMenuUserFavorites(menuIds: $menuIds, userEmail: $userEmail) {
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
    `;

export function useGetMenuUserFavoritesQuery(options: Omit<Urql.UseQueryArgs<GetMenuUserFavoritesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetMenuUserFavoritesQuery, GetMenuUserFavoritesQueryVariables>({ query: GetMenuUserFavoritesDocument, ...options });
};
export const GetOrdersDocument = gql`
    query GetOrders($first: Int, $after: ID) {
  getOrders(first: $first, after: $after) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      cursor
      node {
        cart
        deliveryAddress
        deliveryFee
        deliveryTime
        discount
        id
        note
        orderDate
        orderNumber
        paid
        paymentToken
        serviceFee
        status
        total
        userEmail
        userName
        userPhone
      }
    }
  }
}
    `;

export function useGetOrdersQuery(options?: Omit<Urql.UseQueryArgs<GetOrdersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetOrdersQuery, GetOrdersQueryVariables>({ query: GetOrdersDocument, ...options });
};
export const AddOrderDocument = gql`
    mutation AddOrder($cart: JSON!, $deliveryAddress: String!, $deliveryFee: Float!, $orderNumber: String!, $serviceFee: Float!, $total: Float!, $userEmail: String!, $userName: String!, $userPhone: String!, $discount: Float, $note: String, $paymentToken: String) {
  addOrder(
    cart: $cart
    deliveryAddress: $deliveryAddress
    deliveryFee: $deliveryFee
    orderNumber: $orderNumber
    serviceFee: $serviceFee
    total: $total
    userEmail: $userEmail
    userName: $userName
    userPhone: $userPhone
    discount: $discount
    note: $note
    paymentToken: $paymentToken
  ) {
    id
  }
}
    `;

export function useAddOrderMutation() {
  return Urql.useMutation<AddOrderMutation, AddOrderMutationVariables>(AddOrderDocument);
};
export const EditOrderOnPaymentDocument = gql`
    mutation EditOrderOnPayment($editOrderOnPaymentId: String!, $paymentToken: String) {
  editOrderOnPayment(id: $editOrderOnPaymentId, paymentToken: $paymentToken) {
    id
  }
}
    `;

export function useEditOrderOnPaymentMutation() {
  return Urql.useMutation<EditOrderOnPaymentMutation, EditOrderOnPaymentMutationVariables>(EditOrderOnPaymentDocument);
};
export const EditOrderDocument = gql`
    mutation EditOrder($editOrderId: String!, $status: OrderStatus!, $deliveryTime: DateTime) {
  editOrder(id: $editOrderId, status: $status, deliveryTime: $deliveryTime) {
    id
  }
}
    `;

export function useEditOrderMutation() {
  return Urql.useMutation<EditOrderMutation, EditOrderMutationVariables>(EditOrderDocument);
};
export const GetUserDocument = gql`
    query GetUser($email: String!) {
  getUser(email: $email) {
    email
    id
    image
    name
    role
    order {
      cart
      deliveryAddress
      deliveryFee
      deliveryTime
      discount
      id
      note
      orderDate
      orderNumber
      paid
      paymentToken
      serviceFee
      status
      total
      userEmail
      userName
      userPhone
    }
  }
}
    `;

export function useGetUserQuery(options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserQuery, GetUserQueryVariables>({ query: GetUserDocument, ...options });
};
export const GetProfileDocument = gql`
    query GetProfile($email: String!) {
  getProfile(email: $email) {
    id
    img
    name
    phone
  }
}
    `;

export function useGetProfileQuery(options: Omit<Urql.UseQueryArgs<GetProfileQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProfileQuery, GetProfileQueryVariables>({ query: GetProfileDocument, ...options });
};
export const AddProfileDocument = gql`
    mutation AddProfile($email: String!, $img: String, $name: String, $phone: String) {
  addProfile(email: $email, img: $img, name: $name, phone: $phone) {
    id
  }
}
    `;

export function useAddProfileMutation() {
  return Urql.useMutation<AddProfileMutation, AddProfileMutationVariables>(AddProfileDocument);
};
export const EditProfileDocument = gql`
    mutation EditProfile($email: String!, $img: String, $name: String, $phone: String) {
  editProfile(email: $email, img: $img, name: $name, phone: $phone) {
    id
  }
}
    `;

export function useEditProfileMutation() {
  return Urql.useMutation<EditProfileMutation, EditProfileMutationVariables>(EditProfileDocument);
};