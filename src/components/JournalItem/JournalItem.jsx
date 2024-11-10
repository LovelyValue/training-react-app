import './JournalItem.css';

function JournalItem() {
	return (
		<>
			<h2 className='journal-item__header'>Lorem ipsum dolor sit amet.</h2>
			<h2 className='journal-item__body'>
				<div className='journal-item__date'>24.13.2023</div>
				<div className='journal-item__text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
					sunt.
				</div>
			</h2>
		</>
	);
}

export default JournalItem;
