import React from 'react';
import { Menu, Icon } from 'antd';
import {Link, NavLink} from 'react-router-dom';
 import './princi.css';
const { SubMenu } = Menu;



class Siguiente extends React.Component {
    render (){

      const IMAGEN = require('./imagenes/consul.jpeg');


        return (

          <div className= "sub" >




        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0, float: 'left' }}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" />Registro</span>}>
              <Menu.Item key="2" ><NavLink to="/Deposit"> Ingresos </NavLink></Menu.Item>
              <Menu.Item key="3"><NavLink to="/gastos">Gastos</NavLink></Menu.Item>

          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="calculator" />Flujo</span>}>
            <Menu.Item key="5"> <NavLink to="/Activos"> Activos y pasivos </NavLink></Menu.Item>


          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />Resultados</span>}>
            <Menu.Item key="9">  <NavLink to="/Progreso"> Progreso </NavLink></Menu.Item>
      <Menu.Item key="10" ><NavLink to="/Meta"> Meta </NavLink></Menu.Item>

          </SubMenu>
        </Menu>
</div>


);
}
}

export default Siguiente;
