import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        { item.id + 1}
      </th>
      <td className="py-4 px-6 font-bold tracking-wide">
        <p>{ item.fullName }</p>
        <p className="text-xs mt-2 font-normal text-gray-400 tracking-normal">{ item.title }</p>
        </td>
      <td className="py-4 px-6">
        <img src={ item.imageUrl } alt="" className='rounded w-16' />
      </td>
    </tr>
  );
};

export default CharacterItem;
