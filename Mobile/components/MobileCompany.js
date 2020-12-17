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
    currentClient: null,
    showList: 0,
  };

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  
  showAddOrEditComponent = () => {
    this.setState({addOrEditComponent: !this.state.addOrEditComponent, addOrEditMode: 1});
  };
  
  addClient = (data) => {
    let newClients=[...this.state.clients];
    let newClient={};
    if (newClients.length > 0) {
      newClient.id=newClients[newClients.length-1].id+1;
    } else {
      newClient.id=1
    }
    newClient.fam=data[0];
    newClient.im=data[1];
    newClient.otch=data[2];
    newClient.balance=Number(data[3]);
    newClients=[...newClients, newClient];
    this.setState({clients: newClients, addOrEditComponent: false});
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
      this.setState({clients: newClients, addOrEditComponent: false, currentClient: null});
    })
  };

  showEditCard = (client) => {
    this.state.addOrEditComponent  
    ? this.setState({addOrEditComponent: false})
    : this.setState({addOrEditComponent: true, addOrEditMode: 2, currentClient: client})
  };

  activeCli = () => {
    this.setState({showList: 2});
  };

  blockedCli = () => {
    this.setState({showList: 1});
  };

  allCli = () => {
    this.setState({showList: 0});
  };

  delCli = (data) => {
    let newclients=[...this.state.clients];
    newclients.forEach((item, index)=>{
      if(data.id==item.id) {
        newclients.splice(index, 1);
      };
    });
    if (this.state.blockedClientsList){
      let newClientsBlocked=[...this.state.blockedClientsList];
      newClientsBlocked.forEach((item, index)=>{
        if(data.id==item.id) {
          newClientsBlocked.splice(index, 1);
        };
      });
      this.setState({blockedClientsList: newClientsBlocked});
    };
    if (this.state.activeClientsList){
      let newClientsActive=[...this.state.activeClientsList];
      newClientsActive.forEach((item, index)=>{
        if(data.id==item.id) {
          newClientsActive.splice(index, 1);
        };
      });
      this.setState({activeClientsList: newClientsActive});
    };
    this.setState({clients: newclients});
  };

  componentDidMount(){
    addOrEditEvents.addListener('AddClient', this.addClient);
    addOrEditEvents.addListener('EditCurrentClient', this.editClient);
    addOrEditEvents.addListener('ShowEditCard', this.showEditCard);
    addOrEditEvents.addListener('DeleteClient', this.delCli);
  };

  componentWillUnmount = () => {
    addOrEditEvents.removeListener('AddClient',this.addClient);
    addOrEditEvents.removeListener('EditCurrentClient',this.editClient);
    addOrEditEvents.removeListener('ShowEditCard', this.showEditCard);
    addOrEditEvents.removeListener('DeleteClient', this.delCli);
  };
  
  render() {

    console.log("MobileCompany render");
    var clientsCode;

    switch (this.state.showList) {
      case 0:
        clientsCode=this.state.clients.map(client=>{
          return <MobileClient key={client.id} client={client} />
        }) 
        break;
      case 1:
        clientsCode=this.state.clients.map(client=>{
          if (client.balance < 0) {
            return <MobileClient key={client.id} client={client} />
          }
        }) 
        break;
        case 2:
          clientsCode=this.state.clients.map(client=>{
            if (client.balance > 0) {
              return <MobileClient key={client.id} client={client} />
            }
          }) 
          break;
      
      default:
        break;
    }

    return (
      <div className='MobileCompany'>
        <input type="button" value="=МТС" onClick={this.setName1} />
        <input type="button" value="=Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div>
          <button onClick={this.allCli}>Все</button>
          <button onClick={this.activeCli}>Активные</button>
          <button onClick={this.blockedCli}>Заблокированные</button>
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
