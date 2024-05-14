"use client";
import Image from "next/image";
import { useDebounce } from "../hooks/useDebounce";
import { useState } from "react";
import SearchResult from "./SearchResult";
import { useRouter } from "next/navigation";

const Search = ({ docs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    doSearch(value);
  };

  const doSearch = useDebounce((term) => {
    const found = docs.filter((doc) => {
      return doc.title.toLowerCase().includes(term.toLowerCase());
    });
    console.log(found);
    setsearchResult(found);
  }, 500);

  const closeSearchResults = (e) => {
    e.preventDefault();
    router.push(e.target.href);
    setSearchTerm("");
  };

  return (
    <>
      <div className="hidden lg:block lg:max-w-md lg:flex-auto">
        <button
          type="button"
          className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
        >
          <Image
            height={50}
            width={50}
            src="/icons/search.svg"
            className="h-5 w-5"
            alt=""
          />
          <input
            value={searchTerm}
            onChange={handleChange}
            type="text"
            placeholder="Search..."
            className="flex-1 focus:border-none focus:outline-none"
          />
        </button>
        {searchTerm && searchTerm.trim().length > 0 && (
          <SearchResult
            searchTerm={searchTerm}
            searchResult={searchResult}
            closeSearchResults={closeSearchResults}
          />
        )}
      </div>
    </>
  );
};

export default Search;
