import { hc } from 'hono/client';

  import { AppType } from '@/app/api/[[...route]]/route';

  // Use the current browser origin so API calls are always same-origin
  // (the session cookie is sent, no cross-origin 401s). Fall back to the
  // env var during SSR, where `window` is unavailable.
  const baseUrl =
    typeof window !== 'undefined'
      ? window.location.origin
      : process.env.NEXT_PUBLIC_APP_URL!;

  export const client = hc<AppType>(baseUrl);
