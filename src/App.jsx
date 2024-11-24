import { useState } from 'react';
import './App.css';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

const INITIAL_DATA = [
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

function App() {
	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = item => {
		setItems(oldItems => [
			...oldItems,
			{
				title: item.title,
				date: new Date(item.date),
				text: item.text,
			},
		]);
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton></JournalAddButton>
				<JournalList>
					{items.map(el => (
						<CardButton>
							<JournalItem title={el.title} text={el.text} date={el.date} />
						</CardButton>
					))}
				</JournalList>
			</LeftPanel>

			<Body>
				<JournalForm onSubmit={addItem} />
			</Body>
		</div>
	);
}

export default App;
