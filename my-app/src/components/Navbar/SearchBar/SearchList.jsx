import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchList.css';

function SearchList({ TitleArray = [], setSearchQuery }) {
  if (!Array.isArray(TitleArray) || TitleArray.length === 0) {
    return (
      <div className="Container_SearchList">
        <p className='titleItem'>No titles available</p>
      </div>
    );
  }

  return (
    <div className="Container_SearchList">
      {TitleArray.map((m) => (
        <p
          key={m}
          onClick={() => setSearchQuery(m)}
          className='titleItem'
        >
          <FaSearch />
          {m}
        </p>
      ))}
    </div>
  );
}

export default SearchList;

