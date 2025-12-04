export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-10 max-w-lg">

        {/* Streak Alevi */}
        <div className="text-9xl animate-pulse">🔥</div>
        <div className="text-7xl font-black tracking-tighter">47</div>
        <p className="text-zinc-500 text-xl">Days Strong</p>

        {/* Günlük Mission */}
        <div className="bg-zinc-950 border border-red-950 rounded-3xl p-8">
          <p className="text-red-500 text-sm uppercase tracking-widest">Bugünkü Görev</p>
          <p className="text-2xl mt-4 font-bold">Sokakta 5 kıza 3 saniye göz teması kur</p>
          <button className="mt-8 w-full bg-red-600 hover:bg-red-500 py-5 rounded-2xl text-xl font-bold transition">
            TAMAMLADIM
          </button>
        </div>

        {/* Relapse Butonu */}
        <button className="w-full bg-gradient-to-br from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 py-8 rounded-3xl text-4xl font-black shadow-2xl shadow-red-900/60 transform hover:scale-105 transition-all duration-200">
          RELAPSE OLDUM
        </button>

        <p className="text-zinc-600 text-sm pt-10">
          @Sedoyigit → Founder • Platinum Patriarch
        </p>
      </div>
    </div>
  );
}
