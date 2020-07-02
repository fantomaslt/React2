import React, { ReactNode, Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc1/AuxA/AuxA';
import Backdrop from '../Backdrop/Backdrop';

interface modalProps {
  show: boolean;
  children: ReactNode;
  modalClosed: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

class Modal extends Component<modalProps, {}> {
  shouldComponentUpdate(
    nextProps: { show: boolean; children: React.ReactNode },
    nextState: boolean
  ) {
    console.log(nextState);
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
