export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Streak Flame */}
        <div className="text-8xl">🔥</div>
        <div className="text-5xl font-black">47</div>
        <p className="text-gray-400 text-xl">Days Strong</p>

        {/* Daily Mission */}
        <div className="bg-zinc-900 rounded-2xl p-6 border border-red-900">
          <h2 className="text-red-500 text-sm uppercase tracking-wider">Today's Mission</h2>
          <p className="text-2xl mt-3 font-bold">Sokakta 5 kıza göz teması kur</p>
          <button className="mt-6 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full rounded-xl text-lg font-bold w-full">
            TAMAMLADIM
          </button>
        </div>

        {/* Relapse Button */}
        <button className="bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 px-12 py-6 rounded-2xl text-3xl font-black w-full shadow-2xl shadow-red-900/50 transform hover:scale-105 transition">
          RELAPSE OLDUM
        </button>

        <div className="text-gray-600 text-sm">
          @Sedoyigit → Founder • Platinum Patriarch
        </div>
      </div>
    </div>
  );
}
