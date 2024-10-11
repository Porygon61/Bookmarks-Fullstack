import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function EditBookmark() {
	const { id } = useParams();
	const [bookmarkData, setBookmarkData] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		axios.get(`http://localhost:3001/bookmarks/${id}`).then((response) => {
			setBookmarkData(response.data);
		});
	}, [id]);

	const validationSchema = Yup.object().shape({
		URL: Yup.string(),
		Rating: Yup.string(),
		Progress: Yup.number().required('Progress is required'),
		Title: Yup.string().required('You must input a Title'),
		Website: Yup.string(),
		Status: Yup.string().oneOf([
			'Hiatus',
			'Completed',
			'Ongoing',
			'Dropped',
			'Other',
		]),
		Plot: Yup.string(),
		Type: Yup.string(),
		Notes: Yup.string(),
		LastRead: Yup.string(),
		Added: Yup.string(),
	});

	const onSubmit = (data) => {
		// Update LastRead to current date and time when edited
		const currentDate = new Date();
		const formattedDate = `${currentDate.getFullYear()}_${String(
			currentDate.getMonth() + 1
		).padStart(2, '0')}_${String(currentDate.getDate()).padStart(
			2,
			'0'
		)} ${String(currentDate.getHours()).padStart(2, '0')}:${String(
			currentDate.getMinutes()
		).padStart(2, '0')}`;

		const updatedData = {
			...data,
			LastRead: formattedDate,
		};

		axios
			.put(`http://localhost:3001/bookmarks/${id}`, updatedData)
			.then((response) => {
				console.log(response.data);
				navigate('/'); // Redirect to home after update
			});
	};

	if (!bookmarkData) {
		return <div>Loading...</div>;
	}

	return (
		<div className='editBookmarkPage'>
			<Formik
				initialValues={bookmarkData}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
				enableReinitialize
			>
				<Form className='formContainer'>
					<label>URL:</label>
					<ErrorMessage name='URL' component='span' />
					<Field
						autocomplete='off'
						id='inputEditBookmark'
						name='URL'
						placeholder='URL'
					/>

					<label>Rating:</label>
					<ErrorMessage name='Rating' component='span' />
					<Field as='select' id='inputEditBookmark' name='Rating'>
						<option value=''>Select Status</option>
						<option value='y'>Good</option>
						<option value='o'>Average</option>
						<option value='n'>Bad</option>
						<option value='/'>No Opinion</option>{' '}
					</Field>

					<label>Progress:</label>
					<ErrorMessage name='Progress' component='span' />
					<Field
						autocomplete='off'
						id='inputEditBookmark'
						name='Progress'
						placeholder='e.g 110'
					/>

					<label>Title:</label>
					<ErrorMessage name='Title' component='span' />
					<Field
						autocomplete='off'
						id='inputEditBookmark'
						name='Title'
						placeholder='Title'
					/>

					<label>Website:</label>
					<ErrorMessage name='Website' component='span' />
					<Field
						autocomplete='off'
						id='inputEditBookmark'
						name='Website'
						placeholder='e.g Asura Scans'
					/>

					<label>Status:</label>
					<ErrorMessage name='Status' component='span' />
					<Field as='select' id='inputEditBookmark' name='Status'>
						<option value='Hiatus'>Hiatus</option>
						<option value='Completed'>Completed</option>
						<option value='Ongoing'>Ongoing</option>
						<option value='Dropped'>Dropped</option>
						<option value='Other'>Other</option>
					</Field>

					<label>Plot:</label>
					<ErrorMessage name='Plot' component='span' />
					<Field
						autocomplete='off'
						id='inputEditBookmark'
						name='Plot'
						placeholder='Description'
					/>

					<label>Type:</label>
					<ErrorMessage name='Type' component='span' />
					<Field
						autocomplete='off'
						id='inputEditBookmark'
						name='Type'
						placeholder='Manhwa/Manhua/Novel/Manga'
					/>

					<label>Notes:</label>
					<ErrorMessage name='Notes' component='span' />
					<Field
						autocomplete='off'
						id='inputEditBookmark'
						name='Notes'
						placeholder='Extra Notes'
					/>

					<label>Last Read:</label>
					<ErrorMessage name='LastRead' component='span' />
					<Field
						autocomplete='off'
						id='inputEditBookmark'
						name='LastRead'
						placeholder='YYYY_MM_DD HH:MM'
						disabled // Field should be disabled
					/>

					<label>Added:</label>
					<ErrorMessage name='Added' component='span' />
					<Field
						autocomplete='off'
						id='inputEditBookmark'
						name='Added'
						placeholder='YYYY_MM_DD'
						disabled // This field should also be disabled
					/>

					<button type='submit'>Update Bookmark</button>
				</Form>
			</Formik>
		</div>
	);
}

export default EditBookmark;
