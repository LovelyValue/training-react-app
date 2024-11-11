import './App.css';
import Button from './components/Button/Button';
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
			<JournalItem
				title={data[0].title}
				text={data[0].text}
				date={data[0].date}
			/>
			<Button />
		</>
	);
}

export default App;
