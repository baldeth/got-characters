import React from "react";
import Spinner from "../ui/Spinner";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ isLoading, items}) => {

  return (
    isLoading ? (<Spinner />) : (
      <div className=" max-w-3xl mx-auto justify-center p-10">
        <h2 className="ml-10 text-zinc-200 text-2xl font-bold tracking-wide leading-relaxed mb-4">
          Character List
        </h2>
  
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  #
                </th>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Image
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <CharacterItem key={item.id}  item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

    )
  );
};

export default CharacterGrid;
