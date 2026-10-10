export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="8" fill="var(--bg-raised)" stroke="var(--line)" />
      <path
        d="M4 17C8 4 12 4 16 16s8 12 12-1"
        fill="none"
        stroke="var(--cyan)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
