import React, { Component } from "react";
import Modal from './Modal.js';
import gift from '../img/gift.png';
import sale from '../img/sale.png';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          {/* <p>Congrutalations! You won 20% off</p> */}
          <img src={sale} alt='sale' className='sale'/>
        </Modal>
        <button type="button" onClick={this.showModal} className='modal'>
          <img src={gift} alt='gift'/>
        </button>
      </main>
    );
  }
}

export default Dashboard