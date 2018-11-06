import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FoodPage from './FoodPage'
import FavoritesContainer from './containers/FavoritesContainer'
import NavBar  from './NavBar'

// import FoodListContainer from './containers/FoodListContainer';
// import FavoritesContainer from './containers/FavoritesContainer'
import ShowPage from './components/ShowPage'
import FoodItem from './components/FoodItem'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  // <Route exact path="/" component={FoodItem} >Food Item </Route>

  render() {

    return (
      <div className="App">
        Your are in App

        <Router>

          <div>
            <NavBar />
              <Switch>

                <Route exact path="/favorites" component={FavoritesContainer} > Favorite Food Item </Route>
                <Route exact path="/food" component={ShowPage}> Show Food Page </Route>
                <Route path="/" component={FoodPage} > Favorite Food Item </Route>


              </Switch>
          </div>
      </Router>



      </div>
    );
  }
}

export default App;

// {this.state.clickedFood ? <ShowPage clickedFood={this.state.clickedFood} backToAllFood={this.backToAllFood} addHandler={this.addHandler}/> :
