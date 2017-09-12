import React from 'react';
import './princi.css';
//import {Link, NavLink} from 'react-router-dom';
import {  Menu} from 'antd';
import 'antd/dist/antd.css';

class Nav extends React.Component {
    render (){
        return (
<div>
<div>

   <img src={require ('./imagenes/diente.png')}
      className="logo" />


        </div>
      <Menu


        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['4']}
        style={{ lineHeight: '70px' }}
      >

          <Menu.Item key="4"> Ingresa </Menu.Item>
          <Menu.Item key="3"> Hola </Menu.Item>
    <Menu.Item key="2"> Tu perfil </Menu.Item>
          <Menu.Item key="1">Tus finanzas </Menu.Item>







      </Menu>

</div>

        );
    }
}
export default Nav;
