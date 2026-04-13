'use client';

import { BookOpen, Users, TrendingUp, Plus, Search, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [stats, setStats] = useState({
    totalBooks: 0,
    borrowedBooks: 0,
    activeMembers: 0,
    pendingReturns: 0,
  });

  // Mock data - replace with actual API calls
  useEffect(() => {
    setStats({
      totalBooks: 1247,
      borrowedBooks: 89,
      activeMembers: 342,
      pendingReturns: 12,
    });
  }, []);

  const statCards = [
    {
      title: 'Total Books',
      value: stats.totalBooks.toLocaleString(),
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      change: '+12%',
    },
    {
      title: 'Borrowed',
      value: stats.borrowedBooks,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      change: '+5%',
    },
    {
      title: 'Active Members',
      value: stats.activeMembers,
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      change: '+8%',
    },
    {
      title: 'Pending Returns',
      value: stats.pendingReturns,
      icon: BookOpen,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      change: '-3%',
    },
  ];

  const quickActions = [
    {
      title: 'Add New Book',
      description: 'Add a new book to the library collection',
      icon: Plus,
      href: '/library/add',
      color: 'bg-primary-600 hover:bg-primary-700',
    },
    {
      title: 'Search Books',
      description: 'Find books in the library',
      icon: Search,
      href: '/search',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      title: 'AI Recommendations',
      description: 'Get personalized book recommendations',
      icon: Sparkles,
      href: '/recommendations',
      color: 'bg-purple-600 hover:bg-purple-700',
    },
  ];

  const recentBooks = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: 'Available', cover: '📚' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', status: 'Borrowed', cover: '📖' },
    { id: 3, title: '1984', author: 'George Orwell', status: 'Available', cover: '📕' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', status: 'Available', cover: '📗' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening in your library.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <Card key={index} hover>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-green-600 mt-1">{stat.change} from last month</p>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Link key={index} href={action.href}>
              <Card hover className="h-full">
                <div className={`${action.color} p-4 rounded-lg mb-4 inline-block`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="mb-2">{action.title}</CardTitle>
                <CardContent className="text-sm">{action.description}</CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Books & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Books */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Books</CardTitle>
              <Link href="/library">
                <Button variant="ghost" size="sm">View All</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBooks.map((book) => (
                <div key={book.id} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="text-4xl">{book.cover}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{book.title}</h4>
                    <p className="text-sm text-gray-600">{book.author}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    book.status === 'Available' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {book.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Feed */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: 'Book borrowed', item: 'The Great Gatsby', user: 'John Doe', time: '2 hours ago' },
                { action: 'Book returned', item: '1984', user: 'Jane Smith', time: '5 hours ago' },
                { action: 'New book added', item: 'Pride and Prejudice', user: 'Admin', time: '1 day ago' },
                { action: 'Member registered', item: 'New member', user: 'Alice Johnson', time: '2 days ago' },
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.action}:</span> {activity.item}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      by {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
