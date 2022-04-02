import React, { useCallback, useState } from 'react';

import useHttp from '../../hooks/use-http';
import AdviceCard from './AdviceCard/AdviceCard';

const ADVICE_END_POINT = `https://api.adviceslip.com/advice`;
const INITIAL_ADVICE = {
  id: 117,
  advice: `It is easy to sit up and take notice, what's difficult is getting up and tacking action.`,
};

function Advice() {
  const [adviceSlip, setAdviceSlip] = useState(INITIAL_ADVICE);
  const { loading, error, get } = useHttp();

  const getAdvice = useCallback(() => {
    if (loading) return;

    const transformAdvice = (advice) => setAdviceSlip(advice.slip);
    get(ADVICE_END_POINT, transformAdvice);
  }, [get, loading]);

  return (
    <AdviceCard
      adviceId={adviceSlip.id}
      advice={adviceSlip.advice}
      isLoading={loading}
      getAdvice={getAdvice}
      error={error}
    />
  );
}

export default Advice;
