import { useEffect } from 'react';

const BASE = 'Inertia Software';

export default function useTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE}` : `${BASE} — ERP, Website & App Development Studio`;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }, [title, description]);
}
