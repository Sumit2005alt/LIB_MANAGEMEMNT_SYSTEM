'use client';

import { useState, useEffect } from 'react';
import { Search as SearchIcon, Filter, BookOpen } from 'lucide-react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import BookCard from '@/components/library/BookCard';
import Badge from '@/components/ui/Badge';

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

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'All',
    'Fiction',
    'Non-Fiction',
    'Science Fiction',
    'Fantasy',
    'Mystery',
    'Romance',
    'Biography',
    'History',
    'Science',
  ];

  const allBooks: Book[] = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '978-0-7432-7356-5', category: 'Fiction', status: 'Available', publishedYear: 1925, cover: '📚' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '978-0-06-112008-4', category: 'Fiction', status: 'Borrowed', publishedYear: 1960, cover: '📖' },
    { id: 3, title: '1984', author: 'George Orwell', isbn: '978-0-452-28423-4', category: 'Dystopian', status: 'Available', publishedYear: 1949, cover: '📕' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', isbn: '978-0-14-143951-8', category: 'Romance', status: 'Available', publishedYear: 1813, cover: '📗' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', isbn: '978-0-316-76948-0', category: 'Fiction', status: 'Borrowed', publishedYear: 1951, cover: '📘' },
    { id: 6, title: 'Lord of the Flies', author: 'William Golding', isbn: '978-0-571-05686-9', category: 'Fiction', status: 'Available', publishedYear: 1954, cover: '📙' },
    { id: 7, title: 'Animal Farm', author: 'George Orwell', isbn: '978-0-452-28424-1', category: 'Political', status: 'Reserved', publishedYear: 1945, cover: '🐷' },
    { id: 8, title: 'Brave New World', author: 'Aldous Huxley', isbn: '978-0-06-085052-4', category: 'Dystopian', status: 'Available', publishedYear: 1932, cover: '🌍' },
  ];

  const handleSearch = async () => {
    setIsSearching(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const filtered = allBooks.filter((book) => {
      // If search query exists, filter by search
      const matchesSearch = !searchQuery.trim() || 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.isbn?.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by category
      const matchesCategory = selectedCategory === 'all' || 
        book.category?.toLowerCase() === selectedCategory.toLowerCase();
      
      return matchesSearch && matchesCategory;
    });
    
    setSearchResults(filtered);
    setIsSearching(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch();
    }, 300);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Books</h1>
        <p className="text-gray-600">Find books in your library by title, author, or ISBN</p>
      </div>

      {/* Search Bar */}
      <Card className="mb-6">
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search by title, author, or ISBN..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
              />
            </div>
            <Button variant="primary" onClick={handleSearch} isLoading={isSearching}>
              <SearchIcon className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>

          {/* Category Filters */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Filter by Category:</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === 'All' ? 'all' : category.toLowerCase())}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    (selectedCategory === 'all' && category === 'All') || 
                    selectedCategory === category.toLowerCase()
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Search Results */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            {(selectedCategory !== 'all' || searchQuery) ? 'Results' : 'All Books'}
            {searchResults.length > 0 && (
              <span className="ml-2 text-sm font-normal text-gray-600">
                ({searchResults.length} {searchResults.length === 1 ? 'book' : 'books'} found)
              </span>
            )}
          </h2>
        </div>

        {isSearching ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            <p className="mt-2 text-gray-600">Searching...</p>
          </div>
        ) : searchResults.length === 0 ? (
          <Card className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">
              {selectedCategory !== 'all' 
                ? `No books found in ${categories.find(c => c.toLowerCase() === selectedCategory) || selectedCategory} category.`
                : 'No books found matching your search.'
              }
            </p>
            <p className="text-sm text-gray-500">Try different keywords or check your filters.</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>

      {/* Popular Searches / Suggestions - Show when no search query and category is all */}
      {!searchQuery && selectedCategory === 'all' && (
        <Card className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.slice(1).map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category.toLowerCase());
                }}
                className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors text-center"
              >
                <Badge variant="info">{category}</Badge>
              </button>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}