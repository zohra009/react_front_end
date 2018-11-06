
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'
import React, { Fragment, Component } from 'react';

class NavBar extends Component {

  // state = { activeItem: 'home' }
  //
  //   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      // const { activeItem } = this.state

      return (
        <header>
          <h1>DrunkFoodz</h1>

              <NavLink exact to="/">Homepage|   </NavLink>
              <NavLink to="/favorites"> Favorite Food Item|   </NavLink>



        </header>
      )
    }
  }

export default NavBar;

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
