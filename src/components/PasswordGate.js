'use client';

import { useState, useEffect } from 'react';

const BLOG_PASSWORD = 'ricardochu'; // 修改这里设置你的密码

export default function PasswordGate({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 检查是否已经验证过
    const auth = sessionStorage.getItem('blog_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === BLOG_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('blog_auth', 'true');
      setError(false);
    } else {
      setError(true);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="soft-section flex min-h-screen items-center justify-center px-4">
        <div className="panel w-full max-w-md p-8 shadow-soft">
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-sm font-semibold text-primary dark:text-blue-300">
              Blog
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Password Required
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Please enter the password to access the blog.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={`w-full rounded-lg border px-4 py-3 transition duration-200 ${
                  error
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                } focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white outline-none transition-colors`}
                placeholder="Enter password"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-500">
                  Incorrect password. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="button-primary w-full"
            >
              Access Blog
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="/" className="block text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
