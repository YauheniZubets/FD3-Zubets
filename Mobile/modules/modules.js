'use strict';

class ModulesClients {

    setNewClient = (clientDataArrow, currentState) => { //функция добавления клиента
        let newClients=[...currentState]; //копия для иммутабельности
        let newClient={};
        if (newClients.length > 0) {
            newClient.id=newClients[newClients.length-1].id+1;
        } else {
            newClient.id=1
        }
        newClient.fam=clientDataArrow[0];
        newClient.im=clientDataArrow[1];
        newClient.otch=clientDataArrow[2];
        newClient.balance=Number(clientDataArrow[3]);
        newClients=[...newClients, newClient];
        return  newClients;
    };

    editCurrentClient = (currentClient, currentState) => { //редактирование клиента
        let newClients=[...currentState];
        newClients.forEach((item, index)=>{
            if (item.id==currentClient[4]){
                let newClient={...item};
                newClient.id=currentClient[4];
                newClient.fam=currentClient[0];
                newClient.im=currentClient[1];
                newClient.otch=currentClient[2];
                newClient.balance=Number(currentClient[3]);
                newClients[index]=newClient;
            };
        })
        return newClients;
    };

    deleteCurrentClient = (currentClient, currentState) => {
        let newclients=[...currentState];
        newclients.forEach((item, index)=>{
            if(currentClient.id==item.id) {
                newclients.splice(index, 1);
            };
        });
        return newclients;
    }
};

export default ModulesClients;