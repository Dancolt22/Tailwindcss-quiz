export default function ClassChip({ children }) {
  return (
    <span className="font-mono text-xs bg-red-50 text-red-600 border border-red-100 px-2 py-1 rounded-md">
      {children}
    </span>
  );
}
