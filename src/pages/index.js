import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Using window.location for immediate redirect
    window.location.href = 'https://matheusoncode.substack.com/';

    // Fallback using Next.js router (usually won't execute due to immediate redirect above)
    router.push('https://matheusoncode.substack.com/');
  }, []);

  // Return empty div in case there's any delay
  return <div></div>;
}
