import { useMemo } from 'react';

const useTruncatedAddress = (account: string | null | undefined) => {
  const truncated = useMemo(
    () => `${account?.substring(0, 6)}...${account?.substring(account.length - 4)}`,
    [account]
  );

  return truncated;
};

export default useTruncatedAddress;
