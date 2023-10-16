'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineHome, HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi2'

const FooterMobile = () => {
    const pathname = usePathname();
  return (
    <section className="fixed bottom-0 z-10 w-full  bg-white">
      <div className="flex  justify-between items-center border-t-2  border-gray-100 px-10 py-5  md:hidden">
        <Link
          className={
            pathname === "/" ? "p-3 bg-green-600 rounded-full text-white" : ""
          }
          href="/"
        >
          <HiOutlineHome className="h-6 w-6 " />
        </Link>
        <Link
          href="/user/favorites"
          className={
            pathname === "/user/favorites"
              ? "p-3 bg-green-600 rounded-full text-white"
              : ""
          }
        >
          <AiOutlineHeart className="h-6 w-6" />
        </Link>

        <Link
          className={
            pathname === "/cart"
              ? "relative p-3 bg-green-600 rounded-full text-white"
              : "relative"
          }
          href="/cart"
        >
          <div
            className={
              pathname === "/cart"
                ? "absolute  top-1 left-8 "
                : "absolute  -top-3 left-5 "
            }
          >
            <span
              className={
                pathname === "/cart"
                  ? "text-white font-semibold"
                  : "text-green-600 font-semibold"
              }
            >
              0
            </span>
          </div>
          <HiOutlineShoppingCart className="h-6 w-6" />
        </Link>

      
          <Link
            className={
              pathname === "/user"
                ? "p-3 bg-green-600 rounded-full text-white"
                : ""
            }
            href="/user"
          >
            <HiOutlineUser className="h-6 w-6 " />
          </Link>
        
      </div>
    </section>
  )
}

export default FooterMobile