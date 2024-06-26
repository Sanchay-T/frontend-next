import dynamic from 'next/dynamic';

const PersonalChatbot = dynamic(() => import('../../components/PersonalChatbot'), { ssr: false });

export default function ChatPage() {
  return (
    <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">AI Assistant</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
        <PersonalChatbot />
      </div>
    </div>
  );
}