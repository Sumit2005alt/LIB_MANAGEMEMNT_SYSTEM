/**
 * Application constants
 */

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/v1/auth/login',
    REGISTER: '/api/v1/auth/register',
    REFRESH: '/api/v1/auth/refresh',
  },
  BOOKS: {
    LIST: '/api/v1/books',
    DETAIL: (id: string) => `/api/v1/books/${id}`,
  },
  LIBRARY: {
    LIST: '/api/v1/library',
    ADD: '/api/v1/library/books',
    UPDATE: (id: string) => `/api/v1/library/books/${id}`,
    DELETE: (id: string) => `/api/v1/library/books/${id}`,
  },
  RECOMMENDATIONS: {
    LIST: '/api/v1/recommendations',
    FEEDBACK: '/api/v1/recommendations/feedback',
  },
} as const

export const BOOK_STATUS = {
  WANT_TO_READ: 'want_to_read',
  READING: 'reading',
  COMPLETED: 'completed',
  ABANDONED: 'abandoned',
} as const
