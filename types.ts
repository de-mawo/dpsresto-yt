type PromoTypes = {
  title: string;
  img: string;
  salesQ: number;
  likesN: number;
  PercentOff: number;
  price: number;
};

type Menu = {
  id: string;
  title: string;
  shortDescr: string;
  longDescr: string;
  price: number;
  image: string;
  category: string;
  prepType: string[];
};

type Order = {
  id: string;
  orderNumber: string;
  cart: [
    {
      id: string;
      image: string;
      price: number;
      title: string;
      onPromo: boolean;
      prepare: string;
      category: string;
      prepType: string[];
      quantity: number;
      longDescr: string;
      shortDescr: string;
      instructions: string;
      sellingPrice: number;
    }
  ];
  orderDate: string;
  deliveryTime: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  paymentToken: string;
  deliveryAddress: string;
  deliveryFee: number;
  serviceFee: number;
  status: string;
  note: string;
  discount: number;
  total: number;
  paid: boolean;
};

type User = {
  id: number;
  name: string;
  email: string;
  img: string;
  role: string;
};

type Category = {
  desc: string;
  id: string;
  category: string;
  imageSrc: string;
};
