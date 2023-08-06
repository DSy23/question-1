import './Search.css';

const Search = ({ searchText, onChange, variant = "" }) => {
  return (
    <input
      type="text"
      value={searchText}
      onChange={onChange}
      className={variant}
    />
  );
};

export default Search;
