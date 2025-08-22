import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  created_at: string;
}

export const useContactSubmissions = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) {
        setError(fetchError.message);
        return;
      }

      setSubmissions(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const submitContact = async (name: string, email: string, message: string, company?: string) => {
    try {
      setError(null);

      const { error: insertError } = await supabase
        .from('contact_submissions')
        .insert({ name, email, message, company });

      if (insertError) {
        setError(insertError.message);
        return false;
      }

      await fetchSubmissions();
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return {
    submissions,
    loading,
    error,
    fetchSubmissions,
    submitContact,
  };
};