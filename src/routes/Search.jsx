// import { useState, useEffect } from "react";
// import SearchSvg from "../SVG/SearchSvg";

const Search = () => {
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [searchResults, setSearchResults] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(
  //           import.meta.env.VITE_BACKEND_URL + "/api/users"
  //         );
  //         const data = await response.json();
  //         console.log(data);
  //         // setSearchResults(data);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, [searchTerm]);

  //   const handleChange = (event) => {
  //     setSearchTerm(event.target.value);
  //   };

  return (
    <>
      {/* <div
        className={
          theme === "dark"
            ? "bg-[#9E9E9E] flex items-center pl-5  rounded-xl"
            : "bg-[#FAFAFA] flex items-center pl-5  rounded-xl"
        }
      >
        <SearchSvg />
        <input
          className={
            theme === "dark"
              ? "bg-transparent w-[100%] px-6 py-4  placeholder:text-gray-500 focus:border-none focus:outline-none  text-black "
              : "bg-transparent w-[100%] px-6 py-4 focus:border-none focus:outline-none "
          }
          type="text"
          id="searchInput"
          name="searchInput"
          placeholder="Search one user ..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>

      <div>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      </div> */}
    </>
  );
};

export default Search;
