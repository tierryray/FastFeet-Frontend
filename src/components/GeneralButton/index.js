import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

export default function GeneralButton({ Icon, title }) {
  return (
    <Button>
      <Icon color="#fff" size={22} />
      {title}
    </Button>
  );
}

GeneralButton.propTypes = {
  Icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
