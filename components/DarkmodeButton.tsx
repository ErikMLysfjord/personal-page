import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <button
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      }}
    >
      {resolvedTheme === 'dark' ? <div>Lys</div> : <div>Mørk</div>}
    </button>
  );
}
