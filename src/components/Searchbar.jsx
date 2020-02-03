import React, { Component } from 'react';
import { Input, Header, List } from 'semantic-ui-react';

class Search extends Component {
  token = null;
  state = {
    query: "",
    people: []
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({
      query: value
    });

    this.search(value);
  };

  search = query => {
    const url = `https://swapi.co/api/people?search=${query}`;
    const token = {};
    this.token = token;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        if (this.token === token) {
          this.setState({ people: data.results });
        }
      });
  };

  componentDidMount() {
    this.search("");
  }

  render() {
    return (
        
      <form>
          <Header>Search Characters</Header>
        <Input
          type="text"
          className="search-box"
          placeholder="Search for..."
          onChange={this.onChange}
        />
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

export default Search;


