import React, { Component } from 'react';
import { Input, Header, List } from 'semantic-ui-react';
class Searchbar extends Component {
  state = {
    query: "",
    loading: false,
    people: []
  };

  onKeydown = e => {
    if (e.key === 'Enter') {
        const { value } = e.target;
        this.setState({
            query: value
        });

        this.search(value);
    }
  };

  search = async query => {
    this.setState({loading: true});
    const url = `https://swapi.co/api/people?search=${query}`;
    
    try {  
        const response = await fetch(url)
        const json = await response.json();
        console.log(response, json);
        this.setState({people: json, loading: false});
    } catch(e) {
        console.log(e)
    }
  };

  render() {
    if (this.state.loading) {
       return (<p> Loading... </p>)      
    }

    return (
        
      <form>
          <Header>Search Characters</Header>
        <Input
          type="text"
          className="search-box"
          placeholder="Search for..."
          onKeyDown={this.onKeydown}
        />
​
        {this.state.people.map(person => (
          <List key={person.name}>
              <List.Item>
            <List.Content>{person.name}</List.Content>
            <List.Content>{person.hair_color}</List.Content>
            </List.Item>
          </List>
        ))}
      </form>
    );
  }
}

export default Searchbar;
