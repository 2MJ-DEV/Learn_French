import React from 'react'
import { motion } from 'framer-motion'
import { Book } from '../types'
import { BookOpen, Clock } from 'lucide-react'

interface BookCardProps {
	book: Book
	onClick: () => void
}

export const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			className='bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer'
			onClick={onClick}>
			<div className='relative h-48'>
				<img
					src={book.coverUrl}
					alt={book.title}
					className='w-full h-full object-cover'
				/>
				<div className='absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-medium text-indigo-600'>
					{book.difficulty}
				</div>
			</div>

			<div className='p-4'>
				<h3 className='text-lg font-semibold text-gray-800 mb-1'>
					{book.title}
				</h3>
				<p className='text-sm text-gray-600 mb-3'>{book.author}</p>

				<div className='flex items-center gap-4 text-sm text-gray-500'>
					<div className='flex items-center gap-1'>
						<BookOpen className='w-4 h-4' />
						<span>{book.chapters.length} chapters</span>
					</div>
					{book.audioUrl && (
						<div className='flex items-center gap-1'>
							<Clock className='w-4 h-4' />
							<span>Audio available</span>
						</div>
					)}
				</div>
			</div>
		</motion.div>
	)
}
