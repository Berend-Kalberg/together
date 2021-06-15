import React from 'react';
import { DebounceInput } from 'react-debounce-input';

const SearchBox = props => {
  return (
    <div className="px-0 lg:w-3/4 sm:w-3/4 md:w-1/2 lg:flex mx-auto block border hover:border-indigo-400 mt-20 rounded-lg">
      <DebounceInput
        minLength={0}
        debounceTimeout={1000}
        type="search"
        value={props.value}
        name="search"
        onChange={event => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
        className="w-full lg:p-4 py-3 px-1 rounded-lg"
      />
    </div>
  );
};

export default SearchBox;
