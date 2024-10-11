import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
	const [listOfBookmarks, setListOfBookmarks] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [isLoading, setIsLoading] = useState(false); // Loading state for smoother filtering

	useEffect(() => {
		setIsLoading(true);
		axios.get('http://localhost:3001/bookmarks').then((response) => {
			setListOfBookmarks(response.data);
			setIsLoading(false); // Stop loading when data is fetched
		});
	}, []);

	// Simulate a smoother loading effect with a timeout
	const filteredBookmarks = listOfBookmarks.filter((bookmark) =>
		bookmark.Title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// Handle the loading spinner
	const handleSearchChange = (e) => {
		setIsLoading(true);
		setSearchTerm(e.target.value);
		setTimeout(() => {
			setIsLoading(false); // Simulate loading delay
		}, 500); // Optional delay for UX improvement
	};

	return (
		<div className='App'>
			<main className='Main'>
				<div className='SearchContainer'>
					<form action='' method='get' onSubmit={(e) => e.preventDefault()}>
						<input
							type='search'
							name='search'
							placeholder='Search'
							id='search-input'
							value={searchTerm} // Controlled input value
							onChange={handleSearchChange} // Update state on input change
							alt='Search'
							autoComplete='off'
						/>
						<button type='submit' id='search-submit'>
							<span className='material-symbols-outlined'>search</span>
						</button>
					</form>
				</div>
				<div className='DisplayContainer'>
					<table>
						<thead>
							<tr>
								<th>Edit</th>
								<th>URL</th>
								<th>Rating</th>
								<th>Progress</th>
								<th>Title</th>
								<th>Website</th>
								<th>Status</th>
								<th>Plot</th>
								<th>Type</th>
								<th>Notes</th>
								<th>Last Read</th>
								<th>Added</th>
							</tr>
						</thead>
						<tbody>
							{isLoading ? (
								<tr>
									<td colSpan='12'>
										<div className='loading-spinner'>Loading bookmarks...</div>
									</td>
								</tr>
							) : filteredBookmarks.length === 0 && !isLoading ? (
								<tr>
									<td colSpan='12'>No bookmarks found matching your search.</td>
								</tr>
							) : (
								filteredBookmarks.map((bookmark, key) => (
									<tr key={key}>
										<td>
											{/* Navigate to edit page */}
											<Link to={`/edit/${bookmark.id}`}>
												<button>
													<span className='material-symbols-outlined'>
														edit
													</span>
												</button>
											</Link>
										</td>
										<td>
											<a href={bookmark.URL} rel='noopener noreferrer'>
												<button>
													<span className='material-symbols-outlined'>
														link
													</span>
												</button>
											</a>
										</td>
										<td>{bookmark.Rating}</td>
										<td>{bookmark.Progress}</td>
										<td>{bookmark.Title}</td>
										<td>{bookmark.Website}</td>
										<td>{bookmark.Status}</td>
										<td>{bookmark.Plot || 'N/A'}</td>
										<td>{bookmark.Type || 'N/A'}</td>
										<td>{bookmark.Notes || 'N/A'}</td>
										<td>{bookmark.LastRead || 'N/A'}</td>
										<td>{bookmark.Added || 'N/A'}</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
			</main>
		</div>
	);
}

export default Home;
