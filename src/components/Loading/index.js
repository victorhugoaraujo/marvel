import React from 'react';

import { Container } from './styles';
import { AiOutlineLoading } from 'react-icons/ai';

const Loading = () => {
  return (
    <Container>
      <AiOutlineLoading data-testid="loading" className="ai-spin" />
    </Container>
  );
};

export default Loading;
