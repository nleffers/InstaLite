import React from 'react';
import Modal from '../components/UI/Modal/Modal';
import Aux from './Aux';
import useHttpErrorHandler from '../hoc/hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {
  const WithErrorHandler = props => {
    const [error, clearError] = useHttpErrorHandler(axios)

    return (
      <Aux>
        <Modal
          show={error !== null}
          modalClosed={clearError}
        >
          {error !== null ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  }

  return WithErrorHandler
}

export default withErrorHandler;
