import { BookCard } from '../components/BookCard'
import { Search, Filter } from 'lucide-react'
import { useEffect, useState } from 'react'

export const Library = () => {
	const [books, setBooks] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		setLoading(true)
		fetch('/bookData.json')
			.then((res) => {
				console.log('Réponse du fetch:', res) // Vérifier si le statut est 200
				if (!res.ok) {
					throw new Error('Impossible de charger la liste des livres')
				}
				return res.json()
			})
			.then((data) => {
				console.log('Données reçues:', data) // Vérifier si les données sont bien chargées
				setBooks(data)
				setError(null)
			})
			.catch((err) => {
				console.error('Erreur lors du chargement des livres:', err)
				setError(err.message)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])

	if (loading) {
		return (
			<div className='container'>
				<div style={{ textAlign: 'center' }}>Chargement des livres...</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className='container'>
				<div style={{ textAlign: 'center', color: '#dc3545' }}>{error}</div>
			</div>
		)
	}

	return (
		<div className='max-w-7xl mx-auto'>
			<div className='flex flex-col md:flex-row justify-between items-center mb-8 gap-4'>
				<h1 className='text-3xl font-bold text-gray-900'>Library</h1>

				<div className='flex gap-4 w-full md:w-auto'>
					<div className='relative flex-1 md:w-64'>
						<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
						<input
							type='text'
							placeholder='Search books...'
							className='w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500'
						/>
					</div>

					<button className='flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50'>
						<Filter className='w-5 h-5' />
						<span>Filter</span>
					</button>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
				{books.map((book) => (
					<BookCard
						key={book.id}
						book={book}
						onClick={() => console.log('Book clicked:', book.id)}
					/>
				))}
			</div>
		</div>
	)
}
