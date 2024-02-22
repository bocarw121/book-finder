import { useCallback } from 'react';

import type { Book, FilterOptions } from '../../types';
import { BookCard } from '../Book';

interface BookDisplayProps {
  books: Book[];
  shouldFilter: FilterOptions;
}

export function BookDisplay({ books, shouldFilter }: BookDisplayProps) {
  const filterBooks = useCallback(() => {
    // make a copy of the books array to not mutate the original
    const sortedBooks = [...books].sort((a, b) => {
      return a.first_publish_year - b.first_publish_year;
    });

    if (shouldFilter === 'By Year') {
      return sortedBooks;
    }

    return books;
  }, [books, shouldFilter]);

  if (books.length === 0) {
    return (
      <h2 className="text-center mt-8 prose-h1:text-4xl font-semibold">
        No books to display
      </h2>
    );
  }

  return (
    <div className="flex mx-20 flex-wrap justify-center my-12 gap-8">
      {filterBooks().map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}
