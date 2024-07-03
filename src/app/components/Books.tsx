import BooksCardLayout from "./BooksCardLayout";
import { booksList } from "./common/Helper";

const Books = () => {
  return (
    <div className="px-3">
      <div className="container mx-auto px-0 max-w-[1140px]">
        {booksList.map((obj, index) => (
          <div key={index} className="mt-[60px]">
            <p className="font-bold text-bunker text-2xl sm:text-custom-xl md:text-custom-2xl !leading-105">
              {obj.title}
            </p>
            <div className="grid grid-cols-3 gap-6">
              {obj.books.map((value, index) => (
                <BooksCardLayout
                  key={index}
                  title={value.title}
                  author={value.author}
                  image={value.image}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Books;
