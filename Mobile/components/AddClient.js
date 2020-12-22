import React from 'react';
import PropTypes from 'prop-types';

import './AddClient.css';

import {addOrEditEvents} from './events';

class AddOrEditClient extends React.PureComponent {

    static propTypes={
        mode: PropTypes.number.isRequired,
        currentClient: PropTypes.any
    }

    state = {
        mode:this.props.mode
    }

    newFamRef=null;
    newImRef=null;
    newOtchRef=null;
    newBalRef=null;

    setNewFamRef = (ref) => {
        this.newFamRef=ref;
    }

    setNewImRef = (ref) => {
        this.newImRef=ref;
    }

    setNewOtchRef = (ref) => {
        this.newOtchRef=ref;
    }

    setNewBalRef = (ref) => {
        this.newBalRef=ref;
    }

    setNewData = () => {
        if (this.newFamRef.value && this.newImRef.value && this.newOtchRef.value && this.newBalRef.value) {
            let newDataCli = [this.newFamRef.value, this.newImRef.value, this.newOtchRef.value, this.newBalRef.value];
            if (this.props.currentClient && this.props.currentClient.id) newDataCli.push(this.props.currentClient.id);
            (this.props.mode==1) && addOrEditEvents.emit('AddClient', newDataCli);
            (this.props.mode==2) && addOrEditEvents.emit('EditCurrentClient', newDataCli);
            this.newFamRef.value='';
            this.newImRef.value='';
            this.newOtchRef.value='';
            this.newBalRef.value='';
        };
    }

    render(){
        console.log('Add or Edit Render');
        return (
            <div>
                <input type='text' placeholder='Фамилия' 
                    ref={this.setNewFamRef}
                    defaultValue={(this.props.currentClient) && this.props.currentClient.fam} 
                ></input>
                <input type='text' placeholder='Имя' 
                    ref={this.setNewImRef}
                    defaultValue={(this.props.currentClient) && this.props.currentClient.im}
                ></input>
                <input type='text' placeholder='Отчество' 
                    ref={this.setNewOtchRef}
                    defaultValue={(this.props.currentClient) && this.props.currentClient.otch}
                ></input>
                <input type='text' placeholder='Баланс' 
                    ref={this.setNewBalRef}
                    defaultValue={(this.props.currentClient) && this.props.currentClient.balance}
                ></input>
                {
                    (this.props.mode==1) && <button onClick={this.setNewData} value='Добавить'>Добавить</button>
                }
                {
                    (this.props.mode==2) && <button onClick={this.setNewData}>Редактировать</button>
                }
            </div>
        )
    }
};

export default AddOrEditClient;