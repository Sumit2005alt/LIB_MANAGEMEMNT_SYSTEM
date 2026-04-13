'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Edit, Trash2, Calendar, User, BookOpen, Tag } from 'lucide-react';
import Link from 'next/link';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function BookDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [book, setBook] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with actual API call
    setTimeout(() => {
      setBook({
        id: params.id,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        isbn: '978-0-7432-7356-5',
        category: 'Fiction',
        status: 'Available',
        publishedYear: 1925,
        pages: 180,
        publisher: 'Charles Scribner\'s Sons',
        description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on prosperous Long Island, the novel follows the mysterious millionaire Jay Gatsby and his quixotic passion and obsession with the beautiful former debutante Daisy Buchanan.',
        cover: '📚',
      });
      setIsLoading(false);
    }, 500);
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          <p className="mt-2 text-gray-600">Loading book details...</p>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="text-center py-12">
          <p className="text-gray-600 mb-4">Book not found</p>
          <Link href="/library">
            <Button variant="primary">Back to Library</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-6">
        <Link href="/library">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Library
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Book Cover and Actions */}
        <div className="md:col-span-1">
          <Card>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 h-64 rounded-lg flex items-center justify-center mb-4">
              <div className="text-8xl">{book.cover || '📚'}</div>
            </div>
            <div className="space-y-3">
              <Badge variant={book.status === 'Available' ? 'success' : book.status === 'Borrowed' ? 'warning' : 'danger'}>
                {book.status}
              </Badge>
              {book.status === 'Available' && (
                <Button variant="primary" className="w-full">
                  Borrow Book
                </Button>
              )}
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button variant="danger" className="flex-1">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Book Details */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{book.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <User className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Author</p>
                      <p className="text-base text-gray-900">{book.author}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Published Year</p>
                      <p className="text-base text-gray-900">{book.publishedYear}</p>
                    </div>
                  </div>
                  {book.category && (
                    <div className="flex items-start space-x-3">
                      <Tag className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Category</p>
                        <Badge variant="info" className="mt-1">{book.category}</Badge>
                      </div>
                    </div>
                  )}
                  {book.isbn && (
                    <div className="flex items-start space-x-3">
                      <BookOpen className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">ISBN</p>
                        <p className="text-base text-gray-900 font-mono text-sm">{book.isbn}</p>
                      </div>
                    </div>
                  )}
                  {book.pages && (
                    <div>
                      <p className="text-sm font-medium text-gray-500">Pages</p>
                      <p className="text-base text-gray-900">{book.pages} pages</p>
                    </div>
                  )}
                  {book.publisher && (
                    <div>
                      <p className="text-sm font-medium text-gray-500">Publisher</p>
                      <p className="text-base text-gray-900">{book.publisher}</p>
                    </div>
                  )}
                </div>

                {/* Description */}
                {book.description && (
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{book.description}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}