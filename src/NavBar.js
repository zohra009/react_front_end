
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';
import { Input, Menu, Button, Icon } from 'semantic-ui-react'
import React, { Fragment, Component } from 'react';
import './NavBar.css'


class NavBar extends Component {



    render() {
      // const { activeItem } = this.state
      console.log(this.props)
      return (
        <Menu inverted size="massive">

          <Menu.Item active="olive" color="olive"><Link to="/" >DrunkFoodz</Link><Icon name='home' /></Menu.Item>
          <Menu.Menu position="middle">

          <Menu.Item active="teal" color="teal"><Link to="/favorites" > Favorite Food Item</Link></Menu.Item>
          </Menu.Menu>


        </Menu>
      )
    }
  }

export default NavBar;

// <Button basic color='blue' type="button"><Link to="/">Homepage</Link></Button>
  // style={{color:"palevioletred"}}
//Vadim's code
// <NavLink to="/reviews">See Reviews|   </NavLink>
// <NavLink to="/follow">Find FoodEasers</NavLink>
// <NavLink to="/food">Show Food Page|   </NavLink>

//Bryan's Code
// {loggedIn ? <button onClick={this.props.logout}>Logout</button > : <Link to="/login">Login</Link>}



// <Menu secondary>
//  <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
//  <Menu.Item
//    name='ShowPage'
//    active={activeItem === 'messages'}
//    onClick={this.handleItemClick}
//  />
//  <Menu.Item
//    name='My Favorites'
//    active={activeItem === 'friends'}
//    onClick={this.handleItemClick}
//  />
//  <Menu.Menu position='right'>
//    <Menu.Item>
//      <Input icon='search' placeholder='Search...' />
//    </Menu.Item>
//    <Menu.Item
//      name='logout'
//      active={activeItem === 'logout'}
//      onClick={this.handleItemClick}
//    />
//  </Menu.Menu>
// </Menu>
