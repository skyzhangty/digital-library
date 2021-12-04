import { DependencyList, useEffect, useState } from 'react';

export function useFetch<T>(
  asyncFunc: () => Promise<T>,
  setResult: (x: T) => void,
  deps?: DependencyList | undefined
) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    asyncFunc()
      .then(setResult)
      .then(() => setLoading(false));
  }, deps);

  return loading;
}
