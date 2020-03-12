import React, { useState, useMemo, useEffect } from 'react';

import { MdAdd } from 'react-icons/md';

import SearchInput from '~/components/SearchInput';
import GeneralButton from '~/components/GeneralButton';
import ActionsButton from '~/components/ActionsButton';

import api from '~/services/api';

import {
  Container,
  ActionsForm,
  HeaderTable,
  ItemTable,
  Status,
  Picture,
} from './styles';

export default function Deliveries() {
  useEffect(() => {
    async function loadSchedule() {}

    loadSchedule();
  }, []);

  return (
    <Container>
      <header>
        <h1>Gerenciando Encomendas</h1>
        <ActionsForm>
          <SearchInput placeholder="Busque por encomendas" />
          <GeneralButton Icon={MdAdd} title="Cadastrar" />
        </ActionsForm>
      </header>

      <HeaderTable>
        <div>
          <span>ID</span>
          <span>Destinatário</span>
          <span>Entregador</span>
          <span>Cidade</span>
          <span>Estado</span>
          <span>Status</span>
          <span>Ações</span>
        </div>
      </HeaderTable>

      <ItemTable>
        <div className="item">
          <span>#01</span>
          <span>Ludwig van Beethoven</span>
          <span>
            <Picture
              src="https://avatar.oxro.io/avatar?name=John+Doe"
              alt="John Doe"
            />
            John Doe
          </span>
          <span>Rio do Sul</span>
          <span>Santa Catarina</span>
          <Status delivered>ENTREGUE</Status>
          <ActionsButton />
        </div>
      </ItemTable>
      <ItemTable>
        <div className="item">
          <span>#01</span>
          <span>Ludwig van Beethoven</span>
          <span>
            <Picture
              src="https://avatar.oxro.io/avatar?name=John+Doe"
              alt="John Doe"
            />
            John Doe
          </span>
          <span>Rio do Sul</span>
          <span>Santa Catarina</span>
          <Status pending>PENDENTE</Status>
          <ActionsButton />
        </div>
      </ItemTable>

      <ItemTable>
        <div className="item">
          <span>#01</span>
          <span>Ludwig van Beethoven</span>
          <span>
            <Picture
              src="https://avatar.oxro.io/avatar?name=John+Doe"
              alt="John Doe"
            />
            John Doe
          </span>
          <span>Rio do Sul</span>
          <span>Santa Catarina</span>
          <Status removal>RETIRADA</Status>
          <ActionsButton />
        </div>
      </ItemTable>

      <ItemTable>
        <div className="item">
          <span>#01</span>
          <span>Ludwig van Beethoven</span>
          <span>
            <Picture
              src="https://avatar.oxro.io/avatar?name=John+Doe"
              alt="John Doe"
            />
            John Doe
          </span>
          <span>Rio do Sul</span>
          <span>Santa Catarina</span>
          <Status canceled>CANCELADA</Status>
          <ActionsButton />
        </div>
      </ItemTable>
    </Container>
  );
}
