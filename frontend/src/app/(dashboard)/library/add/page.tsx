'use client';

import { useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function AddBookPage() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    category: '',
    publishedYear: '',
    description: '',
    pages: '',
    publisher: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Book added:', formData);
    setIsSubmitting(false);
    
    // Redirect to library page
    window.location.href = '/library';
  };

  const categories = [
    'Fiction',
    'Non-Fiction',
    'Science Fiction',
    'Fantasy',
    'Mystery',
    'Romance',
    'Biography',
    'History',
    'Science',
    'Technology',
    'Philosophy',
    'Dystopian',
    'Political',
  ];

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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Book</h1>
        <p className="text-gray-600">Add a new book to your library collection</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <div className="space-y-6">
            {/* Basic Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Title *"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter book title"
                />
                <Input
                  label="Author *"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  placeholder="Enter author name"
                />
                <Input
                  label="ISBN"
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleChange}
                  placeholder="Enter ISBN number"
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <Input
                  label="Published Year"
                  name="publishedYear"
                  type="number"
                  value={formData.publishedYear}
                  onChange={handleChange}
                  placeholder="e.g., 2023"
                  min="1000"
                  max={new Date().getFullYear()}
                />
                <Input
                  label="Publisher"
                  name="publisher"
                  value={formData.publisher}
                  onChange={handleChange}
                  placeholder="Enter publisher name"
                />
                <Input
                  label="Number of Pages"
                  name="pages"
                  type="number"
                  value={formData.pages}
                  onChange={handleChange}
                  placeholder="e.g., 350"
                  min="1"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                placeholder="Enter book description or synopsis..."
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-200">
              <Link href="/library">
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" variant="primary" isLoading={isSubmitting}>
                <Save className="h-4 w-4 mr-2" />
                Add Book
              </Button>
            </div>
          </div>
        </Card>
      </form>
    </div>
  );
}