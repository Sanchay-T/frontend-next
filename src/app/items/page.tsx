import React from 'react';
import dynamic from 'next/dynamic';

const ItemManager = dynamic(() => import('../../components/ItemManager'), { ssr: false });

const ItemsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Items Page</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <ItemManager />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ItemsPage;