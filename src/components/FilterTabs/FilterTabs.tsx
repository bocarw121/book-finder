import { cn } from '../../lib/utils';
import { FilterOptions } from '../../types';

interface FilterTabsProps {
  setShouldFilter: React.Dispatch<React.SetStateAction<FilterOptions>>;
  shouldFilter: FilterOptions;
}

export function FilterTabs({ setShouldFilter, shouldFilter }: FilterTabsProps) {
  return (
    <div role="tablist" className="tabs tabs-bordered w-[50%] mx-auto mt-4">
      <button
        onClick={() => {
          setShouldFilter('Relevance');
        }}
        className={cn('tab tab-lifted', {
          'tab-active': shouldFilter === 'Relevance',
        })}
      >
        Relevance
      </button>
      <button
        onClick={() => {
          setShouldFilter('By Year');
        }}
        className={cn('tab tab-lifted', {
          'tab-active': shouldFilter === 'By Year',
        })}
      >
        By Year
      </button>
    </div>
  );
}
