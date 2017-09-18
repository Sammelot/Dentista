import React from 'react';
import './princi.css';
//import {Link, NavLink} from 'react-router-dom';
import {  Menu} from 'antd';
import 'antd/dist/antd.css';
import Routes from '../../Routes';
import {Link, NavLink} from 'react-router-dom';



class Nav extends React.Component {
    render (){

        return (
<div>
<div>

   <NavLink to="/"> <img src={require ('./imagenes/diente.png')}
      className="logo" />  </NavLink>


        </div>
      <Menu


        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['3']}
        style={{ lineHeight: '70px' }}
      >

          <Menu.Item key="3"> <NavLink to="/login">     Ingresa   </NavLink> </Menu.Item>
          <Menu.Item key="2"> <NavLink to="/sigui">     Perfil   </NavLink></Menu.Item>
    <Menu.Item key="1"> <NavLink to="/login">     Control   </NavLink></Menu.Item>








      </Menu>

</div>

        );
    }
}
export default Nav;
