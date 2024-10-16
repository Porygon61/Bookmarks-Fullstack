import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { currentDate } from '../Functions/Date';
import * as Yup from 'yup';

function CreateBookmark() {
	const initialValues = {
		URL: '',
		Rating: '',
		Progress: '',
		Title: '',
		Website: '',
		Status: '',
		Plot: '',
		Type: '',
		Notes: '',
		LastRead: currentDate(),
		Added: currentDate(),
	};

	const validationSchema = Yup.object().shape({
		URL: Yup.string().url('Enter a valid URL'),
		Rating: Yup.string(),
		Progress: Yup.number().required('Progress is a required Field'),
		Title: Yup.string().required('You must input a Title'),
		Website: Yup.string(),
		Status: Yup.string(),
		Plot: Yup.string(),
		Type: Yup.string(),
		Notes: Yup.string(),
		LastRead: Yup.string(),
		Added: currentDate(),
	});

	const onSubmit = (data) => {
		axios
			.post('http://localhost:3001/bookmarks', data)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.error('There was an error creating the bookmark!', error);
			});
	};
	return (
		<div className='createBookmarkPage'>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				<Form className='formContainer'>
					<label>URL:</label>
					<ErrorMessage name='URL' component='span' />
					<Field
						
						id='inputCreateBookmark'
						name='URL'
						placeholder='URL'
					/>

					<label>Rating:</label>
					<ErrorMessage name='Rating' component='span' />
					<Field as='select' id='inputCreateBookmark' name='Rating'>
						<option value=''>Select Status</option>
						<option value='y'>Good</option>
						<option value='o'>Average</option>
						<option value='n'>Bad</option>
						<option value='/'>No Opinion</option>
					</Field>

					<label>Progress:</label>
					<ErrorMessage name='Progress' component='span' />
					<Field
						autocomplete='off'
						id='inputCreateBookmark'
						name='Progress'
						placeholder='e.g 110'
					/>

					<label>Title:</label>
					<ErrorMessage name='Title' component='span' />
					<Field
						autocomplete='off'
						id='inputCreateBookmark'
						name='Title'
						placeholder='Title'
					/>

					<label>Website:</label>
					<ErrorMessage name='Website' component='span' />
					<Field
						id='inputCreateBookmark'
						name='Website'
						placeholder='e.g Asura Scans'
					/>

					<label>Status:</label>
					<ErrorMessage name='Status' component='span' />
					<Field as='select' id='inputCreateBookmark' name='Status'>
						<option value=''>Select Status</option>
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
						id='inputCreateBookmark'
						name='Plot'
						placeholder='Description'
					/>

					<label>Type:</label>
					<ErrorMessage name='Type' component='span' />
					<Field
						autocomplete='off'
						id='inputCreateBookmark'
						name='Type'
						placeholder='Manhwa/Manhua/Novel/Manga'
					/>

					<label>Notes:</label>
					<ErrorMessage name='Notes' component='span' />
					<Field
						autocomplete='off'
						id='inputCreateBookmark'
						name='Notes'
						placeholder='Extra Notes'
					/>

					<label>Last Read:</label>
					<ErrorMessage name='LastRead' component='span' />
					<Field
						autocomplete='off'
						id='inputCreateBookmark'
						name='LastRead'
						placeholder='YYYY_MM_DD HH:MM'
					/>

					<label>Added:</label>
					<ErrorMessage name='Added' component='span' />
					<Field
						autocomplete='off'
						id='inputCreateBookmark'
						name='Added'
						placeholder='YYYY_MM_DD'
					/>
					<button type='submit'>Create Bookmark</button>
				</Form>
			</Formik>
		</div>
	);
}

export default CreateBookmark;
