# DPSRESTO: A food Delivery App


<img src="/fullstack.png" alt="project-Img" />

## <a href="https://youtu.be/nZLRBVbNqoU"> Design Video Tutorial </a>
## <a href="https://youtu.be/PaBvl3bniOI"> Backend Video Tutorial </a>

### Tech-Stack
The app was built using the following technologies:

- Next.js as the React framework
- Apollo Server: GraphQL server
- Pothos: Pothos serves as a GraphQL schema construction framework, write GraphQL schema through code.
- Urql: Our graphql client to query data from our Graphql server
- Prisma as the ORM for migrations and database access
- PostgreSQL: database for local testing
- Supabase: for cloud-based Database ,uploading & storing images
- Next-Auth/Authjs: for authentication
- TypeScript: the programming language
- TailwindCSS: Styling
- Zustand for state management
- Stripe Api for payment handling
- MapBox for Geocoding & Maps
- Vercel: for deployment


#### Clone the repo
`git clone https://github.com/de-mawo/dpsresto-yt `

Install packages
`yarn `

#### Setup the .env file
- See the `.env.example ` file

#### Setup Prisma
`yarn prisma generate`
`yarn prisma migrate dev `

#### Start the app
`yarn dev`


### Folder & File Structure

```
dpsresto-yt
├─ .eslintrc.json
├─ .gitignore
├─ app
│  ├─ (dashboard)
│  │  └─ dashboard
│  │     ├─ Components
│  │     │  ├─ DashHeader.tsx
│  │     │  ├─ DashSideBar.tsx
│  │     │  ├─ DashWrapper.tsx
│  │     │  ├─ NotifyDropDown.tsx
│  │     │  ├─ RenderRoutes.tsx
│  │     │  ├─ routes.tsx
│  │     │  ├─ SalesRevenueGraph.tsx
│  │     │  ├─ SearchAndFilter.tsx
│  │     │  ├─ TableWrapper.tsx
│  │     │  ├─ TotalCards.tsx
│  │     │  └─ UploadImg.tsx
│  │     ├─ deliveries
│  │     │  ├─ AssignDriver.tsx
│  │     │  ├─ DeliveriesTable.tsx
│  │     │  ├─ loading.tsx
│  │     │  ├─ OrderDelivered.tsx
│  │     │  ├─ page.tsx
│  │     │  └─ ViewDeliveryStatus.tsx
│  │     ├─ layout.tsx
│  │     ├─ loading.tsx
│  │     ├─ menu
│  │     │  ├─ AdminAddMenu.tsx
│  │     │  ├─ AdminDeleteMenu.tsx
│  │     │  ├─ AdminEditMenu.tsx
│  │     │  ├─ AdminFetchedMenus.tsx
│  │     │  ├─ AdminMenuTable.tsx
│  │     │  ├─ AdminPreviewMenu.tsx
│  │     │  ├─ CategoryDropDown.tsx
│  │     │  ├─ loading.tsx
│  │     │  ├─ page.tsx
│  │     │  └─ PriceDropDown.tsx
│  │     ├─ notifications
│  │     │  ├─ loading.tsx
│  │     │  ├─ NotificationsList.tsx
│  │     │  └─ page.tsx
│  │     ├─ orders
│  │     │  ├─ AdminFetchedOrders.tsx
│  │     │  ├─ AdminOrderModal.tsx
│  │     │  ├─ AdminOrderTable.tsx
│  │     │  ├─ loading.tsx
│  │     │  ├─ OrdersFilter.tsx
│  │     │  └─ page.tsx
│  │     ├─ page.tsx
│  │     ├─ settings
│  │     │  ├─ AdminAddCategory.tsx
│  │     │  ├─ AdminCategories.tsx
│  │     │  ├─ AdminDeleteCategory.tsx
│  │     │  ├─ AdminEditCategory.tsx
│  │     │  ├─ loading.tsx
│  │     │  ├─ OpeningHours.tsx
│  │     │  ├─ page.tsx
│  │     │  └─ RestaurantDetails.tsx
│  │     └─ users
│  │        ├─ AdminUserTable.tsx
│  │        ├─ EditRoleForm.tsx
│  │        ├─ EditRoleModal.tsx
│  │        ├─ loading.tsx
│  │        └─ page.tsx
│  ├─ (user)
│  │  └─ user
│  │     ├─ favorites
│  │     │  ├─ FavoriteCard.tsx
│  │     │  ├─ FavoriteModal.tsx
│  │     │  ├─ FavoritesSection.tsx
│  │     │  ├─ loading.tsx
│  │     │  └─ page.tsx
│  │     ├─ help
│  │     │  ├─ loading.tsx
│  │     │  ├─ page.tsx
│  │     │  └─ RequestHelpForm.tsx
│  │     ├─ LanguageSelectModal.tsx
│  │     ├─ layout.tsx
│  │     ├─ loading.tsx
│  │     ├─ orders
│  │     │  ├─ loading.tsx
│  │     │  ├─ page.tsx
│  │     │  ├─ UserDeliveredModal.tsx
│  │     │  ├─ UserOnDeliveryModal.tsx
│  │     │  ├─ UserOrders.tsx
│  │     │  └─ ViewUserOrderStatus.tsx
│  │     ├─ page.tsx
│  │     ├─ UserAddProfile.tsx
│  │     ├─ UserData.tsx
│  │     ├─ UserDetails.tsx
│  │     ├─ UserEditAccountModal.tsx
│  │     └─ UserPrefs.tsx
│  ├─ api
│  │  ├─ auth
│  │  │  └─ [...nextauth]
│  │  │     └─ route.ts
│  │  ├─ graphql
│  │  │  ├─ context.ts
│  │  │  └─ route.ts
│  │  └─ stripe
│  │     └─ [total]
│  │        └─ route.ts
│  ├─ cart
│  │  ├─ CartList.tsx
│  │  ├─ CartSummary.tsx
│  │  ├─ CartTopSection.tsx
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ Common
│  │  │  ├─ AccountDropDown.tsx
│  │  │  ├─ AppMap.tsx
│  │  │  ├─ AuthModal.tsx
│  │  │  ├─ ClientLoaders.tsx
│  │  │  ├─ Container.tsx
│  │  │  ├─ DialogComponent.tsx
│  │  │  ├─ FavoritesBtn.tsx
│  │  │  ├─ Footer.tsx
│  │  │  ├─ FooterMobile.tsx
│  │  │  ├─ Header.tsx
│  │  │  ├─ LocationBtn.tsx
│  │  │  ├─ LocationSearchForm.tsx
│  │  │  ├─ LoginComponent.tsx
│  │  │  ├─ Modal.tsx
│  │  │  └─ SideBar.tsx
│  │  └─ Home
│  │     ├─ Categories.tsx
│  │     ├─ HeroSection.tsx
│  │     ├─ MenuCard.tsx
│  │     ├─ MenuModal.tsx
│  │     ├─ MenuSection.tsx
│  │     ├─ PromoCard.tsx
│  │     ├─ Promos.tsx
│  │     └─ RestaurantDetailsModal.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ loading.tsx
│  ├─ login
│  │  └─ page.tsx
│  ├─ page.tsx
│  ├─ pay
│  │  └─ [orderId]
│  │     ├─ page.tsx
│  │     ├─ StripeCheckoutForm.tsx
│  │     └─ StripeCheckoutPage.tsx
│  ├─ payment-success
│  │  ├─ page.tsx
│  │  └─ SuccessPaymentComponent.tsx
│  └─ Providers.tsx
├─ codegen.yml
├─ data
│  ├─ cart-data.ts
│  ├─ categories-data.ts
│  ├─ deliveries-data.ts
│  ├─ dummy.json
│  ├─ dummy1.json
│  ├─ menu-data.ts
│  ├─ notify-data.ts
│  ├─ order-data.ts
│  └─ users-data.ts
├─ fullstack.png
├─ globals.d.ts
├─ graphql
│  ├─ files
│  │  ├─ favorite.graphql
│  │  ├─ menu.graphql
│  │  ├─ order.graphql
│  │  └─ user.graphql
│  ├─ generated.ts
│  └─ schema
│     ├─ Category
│     │  ├─ index.ts
│     │  ├─ mutations.ts
│     │  └─ queries.ts
│     ├─ Favorite
│     │  ├─ index.ts
│     │  ├─ mutations.ts
│     │  └─ queries.ts
│     ├─ index.ts
│     ├─ Menu
│     │  ├─ index.ts
│     │  ├─ mutations.ts
│     │  └─ queries.ts
│     ├─ Order
│     │  ├─ enum.ts
│     │  ├─ index.ts
│     │  ├─ mutations.ts
│     │  └─ queries.ts
│     ├─ Profile
│     │  ├─ index.ts
│     │  ├─ mutations.ts
│     │  └─ queries.ts
│     └─ User
│        ├─ enum.ts
│        ├─ index.ts
│        ├─ mutations.ts
│        └─ queries.ts
├─ lib
│  ├─ createOrderNumber.ts
│  ├─ prisma.ts
│  ├─ session.ts
│  ├─ store.ts
│  └─ supabaseStorage.ts
├─ middleware.ts
├─ next.config.js
├─ package.json
├─ postcss.config.js
├─ prisma
│  ├─ migrations
│  │  ├─ 20231027215300_setup
│  │  │  └─ migration.sql
│  │  ├─ 20231027223700_v1
│  │  │  └─ migration.sql
│  │  └─ migration_lock.toml
│  └─ schema.prisma
├─ public
│  └─ img
│     ├─ banner.jpg
│     ├─ categories
│     │  ├─ burger.png
│     │  ├─ chicken.png
│     │  ├─ desserts.png
│     │  ├─ drink.png
│     │  ├─ fast-food.png
│     │  ├─ grill.png
│     │  ├─ mexican.png
│     │  ├─ pasta.png
│     │  ├─ pizza.png
│     │  ├─ salads.png
│     │  ├─ seafood.png
│     │  ├─ steak.png
│     │  ├─ sushi.png
│     │  └─ vegan.png
│     ├─ food
│     │  ├─ burger.png
│     │  ├─ calamari.png
│     │  ├─ chicken-fillet.png
│     │  ├─ chocolate.png
│     │  ├─ fish-salad.png
│     │  ├─ fries.png
│     │  ├─ mojito.png
│     │  ├─ rockshandy.png
│     │  ├─ salmond.png
│     │  ├─ sandwich.png
│     │  ├─ steak.png
│     │  └─ steak2.png
│     ├─ humans
│     │  ├─ h1.jpg
│     │  ├─ h2.jpg
│     │  ├─ h3.jpg
│     │  ├─ h4.jpg
│     │  ├─ h5.jpg
│     │  ├─ h6.jpg
│     │  ├─ h7.jpg
│     │  ├─ h8.jpg
│     │  ├─ h9.jpg
│     │  └─ pro.jpg
│     ├─ logo.png
│     └─ objects
│        ├─ car.png
│        ├─ chef.png
│        └─ scoo.png
├─ README.md
├─ tailwind.config.ts
├─ tsconfig.json
├─ types.ts
└─ yarn.lock

```