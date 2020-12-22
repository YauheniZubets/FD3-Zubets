import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import AddOrEditClient from './AddClient';
import ModulesClients from '../modules/modules';  // функции с логикой добавления и удаления 

import './MobileCompany.css';

import {addOrEditEvents} from './events';

class MobileCompany extends React.PureComponent {

  constructor (props){
    super(props);
    this.moduleLogic= new ModulesClients; //логика методов: добавления, удаления клиентов
  }

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

  /*
  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  */
  
  showAddOrEditComponent = () => {
    this.setState({addOrEditComponent: !this.state.addOrEditComponent, addOrEditMode: 1});
  };
  
  addClient = (data) => {
    this.setState({clients: this.moduleLogic.setNewClient(data, this.state.clients), addOrEditComponent: false});
  };

  editClient = (data) => {
    this.setState({clients: this.moduleLogic.editCurrentClient(data, this.state.clients), addOrEditComponent: false, currentClient: null});
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
    this.setState({clients: this.moduleLogic.deleteCurrentClient(data, this.state.clients)});
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
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div>
          <button onClick={this.allCli} value='all'>Все</button>
          <button onClick={this.activeCli} value='active'>Активные</button>
          <button onClick={this.blockedCli} value='blocked'>Заблокированные</button>
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
