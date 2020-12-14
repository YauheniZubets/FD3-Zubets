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

  render() {

    console.log("MobileClient id="+this.props.client.id+" render");
    
    return (
      <tr>
        <td>{this.state.client.fam}</td>
        <td>{this.state.client.im}</td>
        <td>{this.state.client.otch}</td>
        <td>{this.state.client.balance}</td>
        <td>Статус</td>
        <td>
          <button value='Редактировать' onClick={this.showAddOrEditCard}>Редактировать</button>
        </td>
        <td>
          <button value='Удалить'>Удалить</button>
        </td>
      </tr>
    );

  }

}

export default MobileClient;
