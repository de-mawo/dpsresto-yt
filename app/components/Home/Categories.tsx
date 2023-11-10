import { categoriesData } from "@/data/categories-data";
import Image from "next/image";

const Categories = () => {
  return (
    <section className="my-16">
      <div className="max-w-2xl mx-auto my-5 text-center">
        <h2
          className="text-3xl leading-tight tracking-tight text-gray-600
        sm:text-4xl"
        >
          {" "}
          Categories
        </h2>
      </div>
      <div
        className="flex flex-row items-center md:justify-center justify-between mt-12 md:gap-12
    overflow-x-auto
    "
      >
        {categoriesData.map((cat) => (
          <div
            className="flex flex-col rounded-full h-16 w-16 items-center justify-center p-3 cursor-pointer shrink-0 
            overflow-hidden hover:bg-slate-200
            "
            key={cat.id}
          >
            <Image src={cat.imageSrc} width={60} height={60} alt="category" />
            <div className="whitespace-nowrap text-sm">
              <h3 className="text-center">{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
