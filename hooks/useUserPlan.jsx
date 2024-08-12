import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { useRouter } from 'next/router';

const useUserPlan = () => {
  const { data, error } = useSWR('/api/auth/session', fetcher);
  return {
    user: data?.user,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useUserPlan