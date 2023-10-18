import { Card } from 'flowbite-react';
import React, { useState, useEffect } from 'react';
import { Table } from 'flowbite-react';
import Image from 'next/image'

function ItemCard() {
  const [item, setItem] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
	const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
	
	// Calculate the total number of pages
	const totalPages = Math.ceil(item.length / itemsPerPage);

	// Calculate the page range for pagination
	const pageRange = 2; 
	const pageStart = Math.max(currentPage - pageRange, 1);
	const pageEnd = Math.min(currentPage + pageRange, totalPages);

	// Calculate the range of items to display on the current page
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const itemsToDisplay = item.slice(startIndex, endIndex);

  useEffect(() => {
    const endpoint = 'http://127.0.0.1:8000/api/scrapped';

    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setItem(data.data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

	const handleSearch = (e) => {
		e.preventDefault();
	
		// Get the value of the input field
		const query = e.target.elements.searchInput.value;
	
		setSearchQuery(query);
	
		if (query.trim() === '') {
			// If the query is empty or contains only whitespace, clear filteredItems
			setFilteredItems([]);
		} else {
			// Otherwise, filter the items based on the search query
			const filtered = item.filter((data) =>
				data.Name.toLowerCase().includes(query.toLowerCase())
			);
			setFilteredItems(filtered);
		}
	
		// Reset the current page to 1 when searching
		setCurrentPage(1);
	};

  return (
		<>
			<div className='flex scroll-sm'>
				<Card	className="bg-gray-100 mx-5 my-5" href="#">
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white px-5 uppercase">
						<div>
							Item List
						</div>
					</h5>
					<div className="font-lg text-gray-700 dark:text-gray-400 px-5 py-5">
						<div>
							<form onSubmit={handleSearch}>
								<div>
									<input
										type="text"
										name="searchInput"
										className='border rounded-lg mb-5'
										placeholder="Search by item name..."
										// onChange={(e) => handleSearch(e.target.value)}
									/>
								</div>
							</form>

							{/* start item table */}
							<Table hoverable>
								<Table.Head>
									<Table.HeadCell>
										Image
									</Table.HeadCell>
									<Table.HeadCell>
										Name
									</Table.HeadCell>
									<Table.HeadCell>
										Category
									</Table.HeadCell>
									<Table.HeadCell>
										<span className="sr-only">
											Edit
										</span>
									</Table.HeadCell>
								</Table.Head>
								<Table.Body className="divide-y">
									{(filteredItems.length === 0 ? itemsToDisplay : filteredItems).map((data, index) => (
										<Table.Row
											key={index}
											className="bg-white dark:border-gray-700 dark:bg-gray-800"
										>
											<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
												<Image src={data.image_link} alt="Item Image" width={100} height={100} priority={true}/>
											</Table.Cell>
											<Table.Cell>
												{data.Name}
											</Table.Cell>
											<Table.Cell>
												{data.Category}
											</Table.Cell>
											<Table.Cell>
												<a
													className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
													href={`/edit/${data.T4ID}`}
												>
													Edit
												</a>
											</Table.Cell>
										</Table.Row>
									))}
								</Table.Body>
							</Table>
							{/* end item table */}

							{/* Pagination controls */}
							<div className="pagination flex items-center justify-center mt-4">
								<button
									className={`pagination-button ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'} px-1`}
									onClick={() => setCurrentPage(currentPage - 1)}
									disabled={currentPage === 1}
								>
									Previous
								</button>
								{Array.from({ length: pageEnd - pageStart + 1 }, (_, i) => (
									<button
										key={pageStart + i}
										className={`pagination-button ${currentPage === pageStart + i ? 'bg-blue-500 text-white' : 'hover:bg-blue-500'} px-1`}
										onClick={() => setCurrentPage(pageStart + i)}
									>
										{pageStart + i}
									</button>
								))}
								<button
									className={`pagination-button ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'}`}
									onClick={() => setCurrentPage(currentPage + 1)}
									disabled={currentPage === totalPages}
								>
									Next
								</button>
							</div>
							<p className="text-center mt-2 text-gray-600">
								Page {currentPage} of {totalPages}
							</p>

						</div>
					</div>
				</Card>
			</div>
		</>
  );
}

export default ItemCard;
