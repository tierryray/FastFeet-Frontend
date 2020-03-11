import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

export default function ActionButton({ Icon, title }) {
  return (
    <Button>
      <Icon color="#fff" size={22} />
      {title}
    </Button>
  );
}

ActionButton.propTypes = {
  Icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
