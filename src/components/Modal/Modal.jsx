import { Component } from 'react';

import css from './Modal.module.css';
import PropTypes from 'prop-types';



export class Modal extends Component {


  componentDidMount() {
    window.addEventListener('keydown', this.keyDown); // при натисканні клавіші Escape викликає функцію keyDown
  }

  keyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown); // видаляє обробник події keydown з вікна браузера
  }


  handleClose = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div onClick={this.handleClose} className={css.Overlay}>
        <div className={css.Modal}>{this.props.children}</div>
        { }
      </div>
    );
  }
}

Modal.propTypes = {
  showModal: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
  largeImageURL: PropTypes.string,
  alt: PropTypes.string,
};
