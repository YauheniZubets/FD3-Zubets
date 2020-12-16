import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

import {addOrEditEvents} from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
    client:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    client: this.props.client,
  };

  componentWillReceiveProps = (newProps) => {
    //console.log("MobileClient id="+this.props.client.id+" componentWillReceiveProps");
    this.setState({client: newProps.client});
  };

  showAddOrEditCard = () => {
    addOrEditEvents.emit('ShowEditCard', this.state.client);
  };

  deleteClient = () => {
    addOrEditEvents.emit('DeleteClient', this.state.client);
  }

  render() {

    console.log("MobileClient id="+this.props.client.id+" render");
    
    return (
      <tr className='MobileClient'>
        <td>{this.state.client.fam}</td>
        <td>{this.state.client.im}</td>
        <td>{this.state.client.otch}</td>
        <td>{this.state.client.balance}</td>
        <td className={this.state.client.balance>0?'MobileClientActive':'MobileClientBlocked'}>{this.state.client.balance>0?'Активный':'Заблокирован'}</td>
        <td>
          <button value='Редактировать' onClick={this.showAddOrEditCard}>Редактировать</button>
        </td>
        <td>
          <button value='Удалить' onClick={this.deleteClient}>Удалить</button>
        </td>
      </tr>
    );

  }

}

export default MobileClient;
