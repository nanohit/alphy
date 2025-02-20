import { useEffect, useState } from 'react';
import supabase from '../lib/supabase'; // Ensure you have a `supabase.js` file to configure Supabase client
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check the current session on page load
    const session = supabase.auth.session();
    setUser(session?.user ?? null);

    // Subscribe to auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null); // Update user state on login or logout
      }
    );

    // Clean up the listener when the component is unmounted
    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <div>
      {/* Pass user state as a prop to your pages if needed */}
      <Component {...pageProps} user={user} />
    </div>
  );
}
