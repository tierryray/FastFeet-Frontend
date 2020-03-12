import React, { useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';

import { Container, Badge, Actions, Action } from './styles';

export default function ActionsButton() {
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      <Actions visible={visible}>
        <Action>VISUALIZAR</Action>
        <Action>EDITAR</Action>
        <Action>EXCLUIR</Action>
      </Actions>
      <Badge onClick={() => setVisible(!visible)}>
        <MdMoreHoriz size={21} />
      </Badge>
    </Container>
  );
}
