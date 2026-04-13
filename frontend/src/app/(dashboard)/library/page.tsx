'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, Filter, Grid, List } from 'lucide-react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import BookCard from '@/components/library/BookCard';

interface Book {
  id: number;
  title: string;
  author: string;
  isbn?: string;
  category?: string;
  status: 'Available' | 'Borrowed' | 'Reserved';
  publishedYear?: number;
  cover?: string;
}

export default function LibraryPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(true);

  // Mock data - replace with actual API call
  useEffect(() => {
    setTimeout(() => {
      setBooks([
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '978-0-7432-7356-5', category: 'Fiction', status: 'Available', publishedYear: 1925, cover: '📚' },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '978-0-06-112008-4', category: 'Fiction', status: 'Borrowed', publishedYear: 1960, cover: '📖' },
        { id: 3, title: '1984', author: 'George Orwell', isbn: '978-0-452-28423-4', category: 'Dystopian', status: 'Available', publishedYear: 1949, cover: '📕' },
        { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', isbn: '978-0-14-143951-8', category: 'Romance', status: 'Available', publishedYear: 1813, cover: '📗' },
        { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', isbn: '978-0-316-76948-0', category: 'Fiction', status: 'Borrowed', publishedYear: 1951, cover: '📘' },
        { id: 6, title: 'Lord of the Flies', author: 'William Golding', isbn: '978-0-571-05686-9', category: 'Fiction', status: 'Available', publishedYear: 1954, cover: '📙' },
        { id: 7, title: 'Animal Farm', author: 'George Orwell', isbn: '978-0-452-28424-1', category: 'Political', status: 'Reserved', publishedYear: 1945, cover: '🐷' },
        { id: 8, title: 'Brave New World', author: 'Aldous Huxley', isbn: '978-0-06-085052-4', category: 'Dystopian', status: 'Available', publishedYear: 1932, cover: '🌍' },
      ]);
      setIsLoading(false);
    }, 500);
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchesSearch = 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.isbn?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || book.status.toLowerCase() === filterStatus.toLowerCase();
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Library</h1>
          <p className="text-gray-600">Manage and explore your book collection</p>
        </div>
        <Link href="/library/add">
          <Button variant="primary" size="lg">
            <Plus className="h-5 w-5 mr-2" />
            Add New Book
          </Button>
        </Link>
      </div>

      {/* Search and Filters */}
      <Card className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <Input
              placeholder="Search by title, author, or ISBN..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="available">Available</option>
              <option value="borrowed">Borrowed</option>
              <option value="reserved">Reserved</option>
            </select>
          </div>
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'primary' : 'ghost'}
              size="md"
              onClick={() => setViewMode('grid')}
              className="flex-1"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'primary' : 'ghost'}
              size="md"
              onClick={() => setViewMode('list')}
              className="flex-1"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Results Count */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing <span className="font-medium">{filteredBooks.length}</span> of{' '}
          <span className="font-medium">{books.length}</span> books
        </p>
      </div>

      {/* Books Grid/List */}
      {isLoading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          <p className="mt-2 text-gray-600">Loading books...</p>
        </div>
      ) : filteredBooks.length === 0 ? (
        <Card className="text-center py-12">
          <p className="text-gray-600 mb-4">No books found matching your criteria.</p>
          <Link href="/library/add">
            <Button variant="primary">Add Your First Book</Button>
          </Link>
        </Card>
      ) : (
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
          : 'space-y-4'
        }>
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
