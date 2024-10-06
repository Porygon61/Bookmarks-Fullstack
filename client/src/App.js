import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import createBookmark from './pages/createBookmark';

function App() {
	return (
		<div className='App'>
			<Router>
				<div className='Header'>
					<link
						rel='stylesheet'
						href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css'
						integrity='sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=='
						crossorigin='anonymous'
						referrerpolicy='no-referrer'
					/>
					<Link
						to='/'
						className='fa-solid fa-bookmark nav-icon'
					></Link>
					<Link to='/createBookmark' className='createBookmark-link'>Create a Bookmark</Link>
					<i className='fa-solid fa-bars nav-icon'></i>
				</div>
				<Routes>
					<Route path='/' exact component={Home} />
					<Route path='/createBookmark' exact component={createBookmark} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
