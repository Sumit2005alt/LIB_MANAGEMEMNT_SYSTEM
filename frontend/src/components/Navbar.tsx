'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { 
  BookOpen, 
  Home, 
  Search, 
  User, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Library', href: '/library', icon: BookOpen },
  { name: 'Search', href: '/search', icon: Search },
  { name: 'Profile', href: '/profile', icon: User },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">Omnilexis</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigation.map((item) => {
              const isActive = item.href === '/' 
                ? pathname === '/' 
                : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  )}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/settings">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
                <Settings className="h-5 w-5" />
              </button>
            </Link>
            <Link href="/login">
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const isActive = item.href === '/' 
                ? pathname === '/' 
                : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'flex items-center px-3 py-2 rounded-md text-base font-medium',
                    isActive
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
            <div className="border-t border-gray-200 pt-2 mt-2">
              <Link href="/settings" onClick={() => setMobileMenuOpen(false)}>
                <button className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md">
                  <Settings className="h-5 w-5 mr-3" />
                  Settings
                </button>
              </Link>
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <button className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md">
                  <LogOut className="h-5 w-5 mr-3" />
                  Logout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}