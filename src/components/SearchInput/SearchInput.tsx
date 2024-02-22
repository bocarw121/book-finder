interface SearchInputProps {
  bookName: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchInput({ bookName, onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      value={bookName}
      onChange={onChange}
      className="input input-bordered border-primary input-info w-full max-w-xs block mx-auto mt-12"
      placeholder="Enter a book name to search for..."
    />
  );
}
