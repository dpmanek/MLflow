import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { Home } from './pages/Home/Home';
import { Analytics } from './pages/Analytics/Analytics';
import { Navigation } from './components/Navigation/Navigation';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
	return (
		<ThemeProvider>
			<BrowserRouter basename="/MLflow">
				<Navigation />
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path="/analytics" element={<Analytics />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
