import React from 'react'
import PromoCard from './PromoCard';

const Promos = () => {

    const onPromo = [
    {
      id: 1,
      title: "Grilled Salmon",
      img: "/img/food/salmond.png",
      salesQ: 1100,
      likesN: 100,
      PercentOff: 14,
      price: 9.0,
    },
    {
      id: 2,
      title: "Italian Gulash",
      img: "/img/food/steak.png",
      salesQ: 2200,
      likesN: 100,
      PercentOff: 10,
      price: 8.5,
    },
    {
      id: 3,
      title: "Mojito",
      img: "/img/food/mojito.png",
      salesQ: 770,
      likesN: 100,
      PercentOff: 8,
      price: 7.12,
    },
  ];

  return (
    <> 
    <div className='max-w-2xl mx-auto my-5 text-center'>
        <h2 className='text-3xl leading-tight tracking-tight text-gray-600
        sm:text-4xl'> On Promo</h2>
    </div>
    <section className="flex flex-row items-center py-8 gap-4 md:justify-center 
    justify-between my-12 overflow-x-auto">
        {onPromo.map((promo) => (

        <PromoCard promo={promo} key={promo.id}/>
        ))}
    </section>
    </>
  )
}

export default Promos