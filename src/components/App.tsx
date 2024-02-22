import { useEffect, useState } from 'react';
import { useDebounce } from '@uidotdev/usehooks';

import { Book, FilterOptions } from '../types';
import { Navbar } from './Navbar';
import { SearchInput } from './SearchInput';
import { FilterTabs } from './FilterTabs';
import { BookDisplay } from './BookDisplay';
import { Loading } from './Loading';
import { ErrorDisplay } from './ErrorDisplay';

export function App() {
  const [bookName, setBookName] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [shouldFilter, setShouldFilter] = useState<FilterOptions>('Relevance');
  const debouncedBookName = useDebounce(bookName, 500);

  async function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookName(event.target.value);
  }

  useEffect(() => {
    setLoading(true);
    setErrorMessage('');

    async function fetchBooks() {
      try {
        const url = `https://openlibrary.org/search.json?q=${debouncedBookName}&page=1`;

        const res = await fetch(url);
        const data = await res.json();

        setBooks(data.docs);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }

        setErrorMessage('Error fetching books');
      } finally {
        setLoading(false);
      }
    }

    // api throws an 500 error if the search query is less than 2 characters
    if (debouncedBookName.length > 1) {
      fetchBooks();
    } else {
      setBooks([]);
      setLoading(false);
    }
  }, [debouncedBookName]);

  return (
    <main className="min-w-[400px]">
      <Navbar />
      <SearchInput bookName={bookName} onChange={onChange} />
      <FilterTabs
        setShouldFilter={setShouldFilter}
        shouldFilter={shouldFilter}
      />
      {loading ? (
        <Loading />
      ) : (
        <BookDisplay books={books} shouldFilter={shouldFilter} />
      )}

      {errorMessage && <ErrorDisplay errorMessage={errorMessage} />}
    </main>
  );
}
