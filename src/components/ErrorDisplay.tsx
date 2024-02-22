interface ErrorDisplayProps {
  errorMessage: string;
}

export function ErrorDisplay({ errorMessage }: ErrorDisplayProps) {
  return (
    <div className="toast prose">
      <div className="alert alert-error text-white">
        <span>{errorMessage}</span>
      </div>
    </div>
  );
}
