import React from "react";
import { Card, Grid, Header } from "semantic-ui-react";

export default function Planets({ data }) {
  return (
    <div>
      <Header>Planets</Header>
      <Grid columns={4}>
        {data.map((req, res) => {
          return (
            <Grid.Column key={res}>
              <Card>
                <Card.Content>
                  <Card.Header>{req.name}</Card.Header>
                  <Card.Description>
                    <strong>Terrain</strong>
                    <p>{req.terrain}</p>
                    <strong>Population</strong>
                    <p>{req.population}</p>
                    <strong>Climate</strong>
                    <p>{req.climate}</p>
                    <strong>Gravity</strong>
                    <p>{req.gravity}</p>
                    <strong>Diameter</strong>
                    <p>{req.diameter}</p>
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
