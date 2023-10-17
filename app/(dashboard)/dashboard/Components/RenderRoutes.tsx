import Link from "next/link";
import { createElement } from "react";

type Props = {
  routes: { url: string; title: string; icon: React.ElementType }[];
  show: boolean;
};

export default function RenderRoutes({ routes, show }: Props) {
  return (
    <>
      {routes.map((route, index) => (
        <Link
          href={route.url}
          key={index}
          className="group p-1 rounded-md hover:bg-green-100 hover:text-green-600  dark:hover:bg-slate-200 "
        >
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div
                className={`absolute bg-green-600 text-white text-[0.7rem] p-1 rounded-md -top-6 left-[0.7rem] transform -translate-x-1/2 invisible ${
                  show && "md:hidden"
                } group-hover:visible`}
              >
                {route.title}
              </div>
              {createElement(route.icon, {
                className:
                  "text-slate-500 shrink-0 cursor-pointer transition-opacity duration-200 group-hover:text-green-600 ",
                size: 24,
              })}
            </div>
            <span className={`hidden ${show && "md:inline"}`}>
              {route.title}
            </span>
          </div>
        </Link>
      ))}
    </>
  );
}