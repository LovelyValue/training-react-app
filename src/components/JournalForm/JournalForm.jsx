import { useState } from 'react';
import Button from '../Button/Button';
import './JournalForm.css';

function JournalForm() {
	const [inputData, setInputData] = useState('');

	const inputChange = event => {
		setInputData(event.target.value);
		console.log(inputData);
	};

	const addJournalItem = e => {
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		e.preventDefault();
		console.log(formProps);
	};

	return (
		<form className='journal-form' onSubmit={addJournalItem}>
			<input type='text' name='title' />
			<input type='date' name='date' />
			<input type='text' name='tag' value={inputData} onChange={inputChange} />
			<textarea name='post' cols={30} rows={10}></textarea>
			<Button
				text='Сохранить'
				onClick={() => {
					console.log('Clicked');
				}}
			/>
		</form>
	);
}

export default JournalForm;
