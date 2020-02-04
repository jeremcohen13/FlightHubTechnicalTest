import React from "react";
import { Card, Grid } from "semantic-ui-react";

export default function Starships({ data }) {
  return (
    <div>
      <h3>Starships</h3>
      <Grid columns={4}>
        {data.map((req, res) => {
          return (
            <Grid.Column key={res}>
              <Card link style={{ background: "black" }}>
                <Card.Content>
                  <Card.Header style={{ color: "#ffe81f" }}>
                    {req.name}
                  </Card.Header>
                  <Card.Description style={{ color: "#ffe81f" }}>
                    <strong>Model</strong>
                    <p>{req.model}</p>
                    <strong>Manufacturer</strong>
                    <p>{req.manufacturer}</p>
                    <strong>Crew</strong>
                    <p>{req.crew}</p>
                    <strong>Passengers</strong>
                    <p>{req.passengers}</p>
                    <strong>Cost</strong>
                    <p>{req.cost_in_credits}</p>
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
