/**
 * Shared TypeScript types
 */

export interface User {
  id: string
  email: string
  username: string
  fullName?: string
  createdAt: string
}

export interface Book {
  id: string
  title: string
  author: string
  isbn?: string
  description?: string
  coverImageUrl?: string
  publishedDate?: string
}

export interface LibraryItem {
  id: string
  book: Book
  status: 'want_to_read' | 'reading' | 'completed' | 'abandoned'
  rating?: number
  notes?: string
  startedAt?: string
  completedAt?: string
}
