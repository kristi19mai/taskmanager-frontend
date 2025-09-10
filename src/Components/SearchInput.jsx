import { CiSearch } from "react-icons/ci";
import { useState, useRef } from "react";
import { debounce } from "../reactQueryCustomHooks";
import { useGlobalContext } from "../context/Context";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const { setSearchTerm,searchTerm } = useGlobalContext();

  const debounceSetTermRef = useRef(
    debounce((data) => {
      setSearchTerm(data);
    }, 500)
  );

  const handleChange = (e) => {
    setSearchValue(() => {
      const newValue = e.target.value;
      debounceSetTermRef.current(newValue);
      return newValue;
    });
  };

  return (
    <form className="search-form">
      <input
        type="search"
        className="search-input"
        placeholder="Suchen"
        value={searchTerm}
        onChange={handleChange}
      />

      <button className="icon-btn" type="submit">
        <CiSearch />
      </button>
    </form>
  );
};
export default SearchInput;
