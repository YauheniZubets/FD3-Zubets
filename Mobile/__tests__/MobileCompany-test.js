'use strict';

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';
import AddOrEditClient from '../components/AddClient';

test('рендеринг заблокированных клиентов', () =>{

    const component=renderer.create(
        <MobileCompany 
            name='Velcom'
            clients={[ 
                {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
                {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
                {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
                {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-220},
            ]}
        />
    );

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const buttonBlocked = component.root.find( el => el.type=='button' && el.props.value == 'blocked'); 
    buttonBlocked.props.onClick();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

test('рендеринг активных клиентов', () =>{

    const component=renderer.create(
        <MobileCompany 
            name='Velcom'
            clients={[ 
                {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
                {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
                {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
                {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-220},
            ]}
        />
    );

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const buttonBlocked = component.root.find( el => el.type=='button' && el.props.value == 'active'); 
    buttonBlocked.props.onClick();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

