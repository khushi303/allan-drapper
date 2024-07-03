import Image from "next/image";
interface BooksCard {
  title: string;
  author: string;
  image: string;
}
const BooksCardLayout = ({ title, author, image }: BooksCard) => {
  return (
    <div className="border border-bunker h-full xl:min-h-[376px] py-9 px-12 flex flex-col items-center justify-center">
      <Image src={image} alt={title} width={145} height={181}/>
      <p className="mt-2 text-center sm:mt-3 md:mt-4 text-bunker text-opacity-80 font-bold text-xl sm:text-2xl md:text-custom-xl !leading-[120%]">
        -{title}
      </p>
      <p className="font-medium text-lg sm:text-xl md:text-2xl text-gray">
        {author}
      </p>
    </div>
  );
};

export default BooksCardLayout;
