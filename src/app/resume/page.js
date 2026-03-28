'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
          >
            ← Back to Home
          </Link>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors"
          >
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <iframe 
            src="/resume.pdf" 
            className="w-full h-[calc(100vh-120px)]"
            title="Resume"
          />
        </div>
      </div>
    </div>
  );
}
