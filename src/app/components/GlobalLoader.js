import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function GlobalLoader() {
  const loading = useSelector(state => state.loading.value);
  if (!loading) return null;
  return (
    <div className="fixed inset-0 z-50 bg-white bg-opacity-90 flex items-center justify-center">
      <div className="w-11/12 max-w-2xl md:max-w-3xl lg:max-w-4xl space-y-6">
        {/* Hero Section Skeleton */}
        <div className="flex flex-col items-center space-y-3 py-6">
          <Skeleton height={32} width="60%" className="mx-auto" />
          <Skeleton height={48} width="80%" className="mx-auto" />
          <Skeleton height={20} width="50%" className="mx-auto" />
          <div className="flex justify-center gap-4 mt-4">
            <Skeleton height={44} width={120} />
            <Skeleton height={44} width={120} />
          </div>
        </div>
        {/* Services Section Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-4 bg-gray-100 rounded-lg flex flex-col items-center">
              <Skeleton circle height={60} width={60} />
              <Skeleton height={20} width="70%" className="mt-4" />
              <Skeleton height={16} width="90%" className="mt-2" />
              <Skeleton height={12} width="80%" className="mt-2" />
            </div>
          ))}
        </div>
        {/* Portfolio Section Skeleton */}
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <Skeleton height={200} width="100%" className="md:w-1/2 rounded-lg" />
          <div className="flex-1 flex flex-col gap-2">
            <Skeleton height={24} width="60%" />
            <Skeleton height={20} width="80%" />
            <Skeleton height={16} width="90%" />
            <Skeleton height={44} width={140} className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}