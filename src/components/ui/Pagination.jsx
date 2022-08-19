import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate}) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++ ) {
        pageNumbers.push(i)
    }
  return (
    <nav className='max-w-sm mx-auto -mt-8 bg-zinc-200 px-2 rounded-lg'>
        <ul className="flex justify-between gap-4">
            {pageNumbers.map(number => (
                <li className='' key={number}>
                    <a href="!#" className='relative inline-flex items-center px-3 py-2 border border-zinc-300 bg-zinc-500 text-sm font-medium text-zinc-200 hover:bg-zinc-400 cursor-pointer' onClick={() => paginate(number)}>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination