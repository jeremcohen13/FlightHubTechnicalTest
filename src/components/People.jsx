import React from "react";
import { Card, Grid } from "semantic-ui-react";

export default function People({ data }) {
  return (
    <div>
      <h2>People</h2>
      <Grid columns={4} style={{ paddingLeft: "4rem" }}>
        {data.map((req, res) => {
          return (
            <Grid.Column key={res}>
              <Card link style={{ background: "black" }}>
                <Card.Content>
                  <Card.Header style={{ color: "#ffe81f" }}>
                    {req.name}
                  </Card.Header>
                  <Card.Description style={{ color: "#ffe81f" }}>
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
