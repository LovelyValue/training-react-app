import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

function JournalAddButton() {
	return (
		<CardButton className='journal-add'>
			<img src='/add.svg' alt='add' />
			Новое сообщение
		</CardButton>
	);
}

export default JournalAddButton;
