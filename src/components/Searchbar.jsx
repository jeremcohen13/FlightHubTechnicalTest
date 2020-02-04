import React, { Component } from "react";
import { Input, List, Container, Grid } from "semantic-ui-react";
class Searchbar extends Component {
  state = {
    query: "",
    loading: false,
    people: []
  };

  onKeydown = e => {
    if (e.key === "Enter") {
      const { value } = e.target;
      this.setState({
        query: value
      });

      this.search(value);
    }
  };

  search = async query => {
    this.setState({ loading: true });
    const url = `https://swapi.co/api/people?search=${query}`;

    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(response, json);
      this.setState({ people: json.results, loading: false });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    if (this.state.loading) {
      return <p> Loading... </p>;
    }

    return (
      <Container textAlign="center">
        <form>
          <h3>Search Characters</h3>
          <Input
            style={{ width: "100%", alignContent: "center" }}
            type="text"
            className="search-box"
            placeholder="Search for..."
            onKeyDown={this.onKeydown}
          />

          <Grid columns={2} style={{ paddingTop: "4rem" }}>
            {this.state.people.map(person => (
              <Grid.Column key={person.name}>
                <List>
                  <List.Item>
                    <h2>{person.name}</h2>

                    <strong>Hair Color</strong>
                    <List.Content>{person.hair_color}</List.Content>
                    <strong>Mass</strong>
                    <List.Content>{person.mass}</List.Content>
                    <strong>Birth Year</strong>
                    <List.Content>{person.birth_year}</List.Content>
                    <strong>Height</strong>
                    <List.Content>{person.height}</List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
            ))}
          </Grid>
        </form>
        ​
      </Container>
    );
  }
}

export default Searchbar;
