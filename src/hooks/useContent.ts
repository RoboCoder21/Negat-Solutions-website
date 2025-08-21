import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ContentItem {
  id: string;
  page_section: string;
  content_text: string;
  created_at: string;
  updated_at: string;
}

export const useContent = (section?: string) => {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = async () => {
    try {
      setLoading(true);
      setError(null);

      let query = supabase.from('content').select('*');
      
      if (section) {
        query = query.eq('page_section', section);
      }

      const { data, error: fetchError } = await query;

      if (fetchError) {
        setError(fetchError.message);
        return;
      }

      setContent(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const updateContent = async (pageSection: string, contentText: string) => {
    try {
      setError(null);

      const { error: upsertError } = await supabase
        .from('content')
        .upsert(
          { page_section: pageSection, content_text: contentText },
          { onConflict: 'page_section' }
        );

      if (upsertError) {
        setError(upsertError.message);
        return false;
      }

      await fetchContent();
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    }
  };

  const getContentBySection = (section: string): string => {
    const item = content.find(item => item.page_section === section);
    return item?.content_text || '';
  };

  useEffect(() => {
    fetchContent();
  }, [section]);

  return {
    content,
    loading,
    error,
    fetchContent,
    updateContent,
    getContentBySection,
  };
};