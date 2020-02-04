import React from "react";
import { Card, Grid } from "semantic-ui-react";

export default function Planets({ data }) {
  return (
    <div>
      <h3>Planets</h3>
      <Grid columns={4}>
        {data.map((req, res) => {
          return (
            <Grid.Column key={res}>
              <Card link style={{ background: "black", border: "none" }}>
                <Card.Content>
                  <Card.Header style={{ color: "#ffe81f" }}>
                    {req.name}
                  </Card.Header>
                  <Card.Description style={{ color: "#ffe81f" }}>
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
