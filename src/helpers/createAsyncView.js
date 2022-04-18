import { lazy } from 'react';
import PropTypes from 'prop-types';

export const createAsyncView = componentName => {
  return lazy(() => {
    return import(`../views/${componentName}`).then(module => {
      return {
        ...module,
        default: module[componentName],
      };
    });
  });
};

createAsyncView.propTypes = {
  componentName: PropTypes.string.isRequired
}