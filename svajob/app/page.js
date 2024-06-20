"use client"
import { useRouter } from 'next/navigation'
export default function Home() {
  const router = useRouter();
  return (
    <main>
      {(
        (() => {
          router.push('/home');
          return null;
        })()
      )}

    </main>
  );
}
