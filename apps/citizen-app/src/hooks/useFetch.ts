import { useState, useEffect, useCallback } from 'react';

interface UseFetchResult<T> {
    data: T | null;
    isLoading: boolean;
    error: string | null;
    refetch: () => void;
}

export function useFetch<T>(
    fetchFn: () => Promise<{ data?: T; error?: string }>,
    dependencies: any[] = []
): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetch = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await fetchFn();
            if (result.error) {
                setError(result.error);
            } else {
                setData(result.data || null);
            }
        } catch (e: any) {
            setError(e.message || 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    }, [fetchFn, ...dependencies]);

    useEffect(() => {
        fetch();
    }, [fetch]);

    return { data, isLoading, error, refetch: fetch };
}
