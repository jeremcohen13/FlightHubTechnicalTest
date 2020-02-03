import React from "react";
import { Card, Grid, Header } from "semantic-ui-react";

export default function People({ data }) {
  return (
    <div>
      <Header>People</Header>
      <Grid columns={4}>
        {data.map((req, res) => {
          return (
            <Grid.Column key={res}>
              <Card>
                <Card.Content>
                  <Card.Header>{req.name}</Card.Header>
                  <Card.Description>
                    <strong>Height</strong>
                    <p>{req.name}</p>
                    <strong>Hair Color</strong>
                    <p>{req.hair_color}</p>
                    <strong>Mass</strong>
                    <p>{req.mass}</p>
                    <strong>Eye Color</strong>
                    <p>{req.eye_color}</p>
                    <strong>Birth Year</strong>
                    <p>{req.birth_year}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </div>
  );
}
