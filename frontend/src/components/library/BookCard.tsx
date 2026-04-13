import { BookOpen, Calendar, User, Eye } from 'lucide-react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

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

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const statusColors = {
    Available: 'success' as const,
    Borrowed: 'warning' as const,
    Reserved: 'danger' as const,
  };

  return (
    <Card hover className="h-full flex flex-col">
      <div className="flex-1">
        {/* Book Cover */}
        <div className="bg-gradient-to-br from-primary-100 to-primary-200 h-48 rounded-t-lg flex items-center justify-center mb-4">
          <div className="text-6xl">{book.cover || '📚'}</div>
        </div>

        {/* Book Info */}
        <div className="px-6 pb-4">
          <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-1">{book.title}</h3>
          <p className="text-sm text-gray-600 mb-3 flex items-center">
            <User className="h-3 w-3 mr-1" />
            {book.author}
          </p>

          <div className="space-y-2 mb-4">
            {book.publishedYear && (
              <p className="text-xs text-gray-500 flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {book.publishedYear}
              </p>
            )}
            {book.isbn && (
              <p className="text-xs text-gray-500">
                ISBN: {book.isbn}
              </p>
            )}
            {book.category && (
              <Badge variant="info" className="mr-2">{book.category}</Badge>
            )}
          </div>

          <div className="flex items-center justify-between mb-4">
            <Badge variant={statusColors[book.status]}>
              {book.status}
            </Badge>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 pb-6 pt-0 border-t border-gray-100 mt-auto">
        <div className="flex gap-2 mt-4">
          <Link href={`/library/${book.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full">
              <Eye className="h-4 w-4 mr-1" />
              View
            </Button>
          </Link>
          {book.status === 'Available' && (
            <Button variant="primary" size="sm" className="flex-1">
              Borrow
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}