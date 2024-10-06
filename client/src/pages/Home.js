import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
	const [listOfBookmarks, setListOfBookmarks] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3001/bookmarks').then((response) => {
			setListOfBookmarks(response.data);
		});
	}, []);
	return (
		<div className='App'>
            <h1 className='heading'>Bookmarks Viewer</h1>
			<main className='Main'>
                <div className='search'>
					<form action='' method='get'>
						<input
							type='search'
							name='search'
							placeholder='Search'
							id='search-input'
							alt='Search'
						/>
						<button
							class='fa-solid fa-magnifying-glass'
							type='submit'
							id='search-submit'
						></button>
					</form>
				</div>
				<div id='display'>
					<div id='table'>
						<table>
							<thead>
								<tr>
									<th className='Edit'>Edit</th>
									<th className='URL'>URL</th>
									<th className='Rating'>Rating</th>
									<th className='Progress'>Progress</th>
									<th className='Title'>Title</th>
									<th className='Website'>Website</th>
									<th className='Status'>Status</th>
									<th className='Plot'>Plot</th>
									<th className='Type'>Type</th>
									<th className='Notes'>Notes</th>
									<th className='LastRead'>Last Read</th>
									<th className='Added'>Added</th>
								</tr>
							</thead>
							<tbody id='tbody'>
								{listOfBookmarks.map((value, key) => {
									return (
										<tr id='row'>
											<td className='Edit' id='column-1'>
												<button class='fa-solid fa-pen-to-square'></button>
											</td>
											<td className='URL' id='column-2'>
												<a href={value.URL}>
													<button class='fa-solid fa-share'></button>
												</a>
											</td>
											<td className='Rating' id='column-3'>
												{value.Rating}
											</td>
											<td className='Progress' id='column-4'>
												{value.Progress}
											</td>
											<td className='Title' id='column-5'>
												{value.Title}
											</td>
											<td className='Website' id='column-6'>
												{value.Website}
											</td>
											<td className='Status' id='column-7'>
												{value.Status}
											</td>
											<td className='Plot' id='column-8'>
												{value.Plot}
											</td>
											<td className='Type' id='column-9'>
												{value.Type}
											</td>
											<td className='Notes' id='column-10'>
												{value.Notes}
											</td>
											<td className='LastRead' id='column-11'>
												{value.LastRead}
											</td>
											<td className='Added' id='column-12'>
												{value.Added}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Home;
