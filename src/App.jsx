import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

function App() {
	const data = [
		{
			title: 'Movie',
			text: 'text',
			date: new Date(),
		},

		{
			title: 'Books',
			text: 'sex',
			date: new Date(),
		},
	];

	return (
		<>
			<CardButton>
				<JournalItem
					title={data[0].title}
					text={data[0].text}
					date={data[0].date}
				/>
			</CardButton>
			<CardButton>
				<JournalItem
					title={data[1].title}
					text={data[1].text}
					date={data[1].date}
				/>
			</CardButton>
			<Button />
		</>
	);
}

export default App;
