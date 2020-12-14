import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import AddOrEditClient from './AddClient';

import './MobileCompany.css';

import {addOrEditEvents} from './events';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    addOrEditComponent: false,
    addOrEditMode: null,
    currentClient: null
  };

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  
  setBalance = (clientId,newBalance) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId && c.balance!=newBalance ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients});
  };

  showAddOrEditComponent = () => {
    this.setState({addOrEditComponent: !this.state.addOrEditComponent, addOrEditMode: 1});
  };
  
  addClient = (data) => {
    let newClients=[...this.state.clients];
    let newClient={};
    newClient.id=newClients[newClients.length-1].id+1;
    newClient.fam=data[0];
    newClient.im=data[1];
    newClient.otch=data[2];
    newClient.balance=Number(data[3]);
    newClients=[...newClients, newClient];
    this.setState({clients: newClients});
  };

  editClient = (data) => {
    let newClients=[...this.state.clients];
    newClients.forEach((item, index)=>{
      if (item.id==data[4]){
        let newClient={...item};
        newClient.id=data[4];
        newClient.fam=data[0];
        newClient.im=data[1];
        newClient.otch=data[2];
        newClient.balance=Number(data[3]);
        newClients[index]=newClient;
      };
      this.setState({clients: newClients});
    })
  };

  showEditCard = (client) => {
    this.state.addOrEditComponent  
    ? this.setState({addOrEditComponent: false})
    : this.setState({addOrEditComponent: true, addOrEditMode: 2, currentClient: client})
  };

  componentDidMount(){
    addOrEditEvents.addListener('AddClient', this.addClient);
    addOrEditEvents.addListener('EditCurrentClient', this.editClient);
    addOrEditEvents.addListener('ShowEditCard', this.showEditCard);
  };

  componentWillUnmount = () => {
    addOrEditEvents.removeListener('AddClient',this.addClient);
    addOrEditEvents.removeListener('EditCurrentClient',this.editClient);
    addOrEditEvents.removeListener('ShowEditCard', this.showEditCard);
  };
  
  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( client => {
        return <MobileClient key={client.id} client={client} />;
      }
    );

    return (
      <div className='MobileCompany'>
        <input type="button" value="=МТС" onClick={this.setName1} />
        <input type="button" value="=Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className=''>
          <button>Все</button>
          <button>Активные</button>
          <button>Заблокированные</button>
        </div>
        <div className='MobileCompanyClients'>
          <table>
            <tbody>
              <tr>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Отчество</th>
                <th>Баланс</th>
                <th>Статус</th>
                <th>Редактировать</th>
                <th>Удалить</th>
              </tr>
              {clientsCode}
            </tbody>
          </table>
        </div>
        <input type="button" value="Добавить клиента" onClick={this.showAddOrEditComponent} />
        {
          (this.state.addOrEditComponent) &&
          <AddOrEditClient mode={this.state.addOrEditMode} currentClient={this.state.currentClient}/>
        }
        
      </div>

    )
    ;

  }

}

export default MobileCompany;
