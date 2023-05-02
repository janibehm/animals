import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/List';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

import { animals, birds } from './animalsList';

class App extends Component {
  state = {
    animals: animals,
    birds: birds,
    title: 'Living world',
    searchInput: '',
    data: [],
  }

  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(animal => animal.name !== name)
    this.setState({
      animals: updatedArray
    })
  }

  likesHandler = (name, action, list) => {
    const updatedArray = this.state[list].map((item) => {
      if (item.name === name) {
        if (action === 'add') {
          return { ...item, likes: item.likes + 1 }
        } else {
          return { ...item, likes: item.likes - 1 }
        }
      } else {
        return item
      }
    })

    this.setState(
      {
        [list]: updatedArray
      }
    )
  }

  searchHandler = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Header data={this.state} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<List
            title="animals"
            data={this.state.animals}
            removeHandler={this.removeHandler}
            likesHandler={this.likesHandler}
            searchHandler={this.searchHandler}
            searchInput={this.state.searchInput} />} />
          <Route path="/birds" element={<List
            title="birds"
            data={this.state.birds}
            removeHandler={this.removeHandler}
            likesHandler={this.likesHandler}
            searchHandler={this.searchHandler}
            searchInput={this.state.searchInput} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;