import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreateBookmark from './pages/createBookmark';
import EditBookmark from './pages/editBookmark';	

function App() {
	return (
		<div className='App'>
			<Router>
				<div className='Header'>
					<Link to='/'>
						<span className='material-symbols-outlined'>home</span>
					</Link>
					<Link to='/createBookmark'>
						<span className='material-symbols-outlined'>add_circle</span>
					</Link>
					<span className='material-symbols-outlined'>menu</span>
				</div>

				<div className='Body'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/createBookmark' element={<CreateBookmark />} />
						<Route path='/edit/:id' element={<EditBookmark />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
