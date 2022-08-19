import axios from "axios";
import { useEffect, useState } from "react";
import CharacterDetail from "./components/characters/CharacterDetail";
import CharacterGrid from "./components/characters/CharacterGrid";
import Header from "./components/ui/Header";
import Pagination from "./components/ui/Pagination";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://thronesapi.com/api/v2/Characters`);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // Get Current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className=" bg-zinc-700 py-8 px-4 md:px-16 lg:px-24">
      <Header />
      <div className='flex flex-col-reverse md:flex-row justify-between gap-8'>
        <div className="w-3/5">
        <CharacterGrid isLoading={isLoading} items={currentItems} />
        <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate} />
        </div>
        <div className="w-2/5 mt-10 md:mt-24">
          <CharacterDetail  />
        </div>
      </div>
    </div>
  );
};

export default App;
