import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0f0f0] flex flex-col">

      {/* 네비게이션 */}
      <nav className="flex items-center justify-between px-16 py-7 border-b border-[#1a1a1a]">
        <span className="font-serif text-2xl font-semibold tracking-wide">
          Zero<span className="text-[#444]">.</span>
        </span>
        <Link
          href="/auth"
          className="font-mono text-xs tracking-widest uppercase bg-[#f0f0f0] text-black px-6 py-3 hover:bg-[#e8e0d0] transition-colors"
        >
          시작하기
        </Link>
      </nav>

      {/* 히어로 */}
      <main className="flex-1 flex flex-col justify-center px-16 py-32">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#444] mb-8">
          카운트다운이 끝나면
        </p>
        <h1 className="font-serif text-[120px] font-light leading-none tracking-tight mb-10">
          Zero<span className="text-[#8b2020]">.</span>
        </h1>
        <p className="font-serif text-2xl font-light italic text-[#888] mb-14 leading-relaxed">
          내가 사라진 후,<br />
          내 목소리가 닿아야 할 사람에게.
        </p>
        <div className="flex gap-5 items-center">
          <Link
            href="/auth"
            className="font-mono text-xs tracking-widest uppercase bg-[#f0f0f0] text-black px-10 py-4 hover:bg-[#e8e0d0] transition-colors"
          >
            무료로 시작하기
          </Link>
          <span className="font-mono text-xs tracking-widest uppercase text-[#444]">
            어떻게 작동하나요 →
          </span>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="px-16 py-6 border-t border-[#1a1a1a]">
        <p className="font-mono text-[10px] tracking-widest uppercase text-[#444]">
          © 2026 Zero.
        </p>
      </footer>

    </div>
  );
}