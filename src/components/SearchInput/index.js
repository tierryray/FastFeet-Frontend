/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function SearchInput(props) {
  return (
    <Container>
      <MdSearch color="#999" size={24} />
      <input type="text" {...props} />
    </Container>
  );
}
