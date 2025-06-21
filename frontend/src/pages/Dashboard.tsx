// src/components/Dashboard.tsxAdd commentMore actions
import { useState } from 'react';
import { Input } from "../components/ui/input";
import { askAI } from '../services/api';

const DashBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    setAiResponse("");

    try {
      const { data } = await askAI(searchTerm);
      setAiResponse(data.summary);
    } catch (error: any) {
      console.error("[AI Error]", error);
      const message = error.response?.data?.error || "Failed to fetch AI response.";
      setAiResponse(`Error: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 font-sans text-white">
      <main className="flex-grow p-4 md:p-8 overflow-auto">
        <div className="mx-auto max-w-3xl mt-4">
          <div
            className="relative"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          >
            <Input
              type="text"
              placeholder="Trace items, compare products, or ask AI..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAskAI();
              }}
              className="w-full rounded-full border-2 border-transparent bg-gray-800/80 py-6 pl-12 pr-4 text-base text-gray-50 backdrop-blur-sm transition-all duration-300 focus:border-violet-500 focus:bg-gray-800 focus:outline-none focus:ring-0"
            />
            <button
              onClick={handleAskAI}
              className="mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
            >
              Ask AI
            </button>
          </div>

          <div className="text-red-500 mt-4">
            <strong>Note:</strong> The search is limited to top 30 results. Please wait for some time for for full AI response. On average my mac machines takes 1-2 minutes for response, depending on your own machine's specs the reponse time changes.
          </div>

          <div className="mt-10 text-left text-gray-200 whitespace-pre-wrap">
            {loading ? (
              <p className="text-violet-400">Thinking...</p>
            ) : (
              <div>{aiResponse}</div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-black text-white w-full text-center p-2">
        Made By Sanjay Kumar
      </footer>
    </div>
  );
};


export default DashBoard;