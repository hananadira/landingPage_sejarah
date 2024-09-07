import React from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Model({ post, open, onClose }) {
  if (!post) return null;

  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      {/* Overlay Background */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" aria-hidden="true" />
      
      {/* Centered Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl transform transition-all max-w-md w-full">
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 transition-colors duration-200"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {/* Image Section */}
          <div className="h-56 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${post.imageSrc})` }} alt={post.imageAlt}></div>

          {/* Content Section */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900">{post.name}</h2>
            <p className="mt-2 text-gray-700">{post.description}</p>
            <p className="mt-4 text-sm text-gray-500">{post.tokoh}</p>
          </div>
          
          {/* Action Button */}
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
