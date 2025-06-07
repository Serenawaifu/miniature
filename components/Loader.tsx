export default function Loader({ size = 64 }: { size?: number }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        className="animate-bounce"
        style={{ filter: 'drop-shadow(0 0 8px #00a8e8)' }}
      >
        <ellipse cx="32" cy="40" rx="20" ry="16" fill="#fff" stroke="#222" strokeWidth="2"/>
        <ellipse cx="24" cy="38" rx="3" ry="5" fill="#222"/>
        <ellipse cx="40" cy="38" rx="3" ry="5" fill="#222"/>
        <path d="M16 24 Q12 8 24 16" stroke="#222" strokeWidth="2" fill="none"/>
        <path d="M48 24 Q52 8 40 16" stroke="#222" strokeWidth="2" fill="none"/>
        <ellipse cx="32" cy="48" rx="6" ry="2" fill="#222"/>
      </svg>
      <span className="mt-2 text-blue-400 font-bold">Loading Neko…</span>
    </div>
  );
}
