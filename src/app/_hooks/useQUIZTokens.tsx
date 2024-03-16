import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';

import QUIZArtifact from '@/app/_config/web3/artifacts/QUIZArtifact';

const { address, abi } = QUIZArtifact;

const useQUIZTokens: any = () => {
  const { active, library, chainId } = useWeb3React();

  const quizTokens = useMemo(() => {
    if (active === true) {
      return new library.eth.Contract(abi, address[typeof chainId === 'number' ? chainId : 0]);
    }
  }, [active, chainId, library?.eth?.Contract]);
  return quizTokens;
};

export default useQUIZTokens;
