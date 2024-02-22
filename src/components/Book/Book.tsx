import { Book } from '../../types';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <div className="card w-[26rem] bg-base-100 shadow-xl border border-dotted border-primary transition-all ease-in-out duration-300 prose">
      <div className="card-body">
        <h2 className="card-title mx-auto text-primary">{book.title}</h2>

        <p className="text-gray-500 text-sm">
          <span className="font-bold text-black">Author: </span>
          {book.author_name && book.author_name[0]}
        </p>
        <p className="text-gray-500 text-sm">
          <span className="font-bold text-black">Year Published: </span>
          {book.first_publish_year}
        </p>

        <p className="text-gray-500 text-sm">
          <span className="font-bold text-black">ISBN: </span>
          {book.isbn && book.isbn[0] ? book.isbn[0] : 'N/A'}
        </p>

        <p className="text-gray-500 text-sm">
          <span className="font-bold text-black">Pages: </span>
          {book.number_of_pages_median} pages
        </p>
      </div>

      <div className="card-actions p-4 cursor-pointer ">
        <a
          href={`https://openlibrary.org${book.key}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary flex  w-full text-white "
        >
          View Book
        </a>
      </div>
    </div>
  );
}
