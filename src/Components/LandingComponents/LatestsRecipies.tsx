import React from "react";
import { Card, Container } from "react-bootstrap";
import { useAppSelector } from "../../hooks";

function LatestsRecipes() {
  const { recipes } = useAppSelector((state) => state.Recipes);

  return (
    <Container
      fluid
      className="d-flex flex-row flex-wrap justify-content-center p-5"
    >
      <div className="flex-basis-100 d-flex flex-wrap justify-content-center">
        <p className="flex-basis-100 text-center display-4">
          Las Recetas Más Populares
        </p>
        <p className="fs-4 text-muted pe-3">Aquí están!</p>
        <p className="fs-4 text-muted text-center">
          Las recetas más calientes del momento!
        </p>
      </div>
      <div className="w-60 w-md-40 w-lg-20 p-3">
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/800x800/?cooking"
          />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="w-60 w-md-40 w-lg-20 p-3">
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/800x800/?kitchen"
          />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="w-60 w-md-40 w-lg-20 p-3">
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/800x800/?food"
          />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="w-60 w-md-40 w-lg-20 p-3">
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/800x800/?restaurant"
          />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default LatestsRecipes;
