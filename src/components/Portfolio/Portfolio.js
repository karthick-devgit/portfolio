import React from "react";
import "./Portfolio.css"
import { Carousel, Card } from "react-bootstrap";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="sectionCaptionPortfolio">What I Have Done So Far</h2>
      <div className="carouselWrapper">
        <Carousel className="carousel">
          <Carousel.Item>
            <Card className="carousel-card">
              <Card.Img
                className="carouselImage"
                variant="top"
                src="assets/images/dictionary.jpg"
              />
              <Card.Body>
                <Card.Title className="cardTitle">
                  <h5>Dictionary</h5>
                </Card.Title>
                <Card.Text className="cardText">
                  A mobile app built using Flutter which makes use of owlbot API
                  allows users to search for a particular word and save words to
                  local storage using SQL
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="carousel-card">
              <Card.Img
                variant="top"
                src="assets/images/music-player.jpg"
                className="carouselImage"
              />
              <Card.Body>
                <Card.Title className="cardTitle">
                  <h5>Music Recommender System</h5>
                </Card.Title>
                <Card.Text className="cardText">
                  GUI is built using React and Bootstrap. Server is built using
                  Flask. This system adapts Hybrid Recommendation Model(Content
                  Based, Colloborative, Popularity, Random)
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="carousel-card">
              <Card.Img
                variant="top"
                src="assets/images/image-encryption.jpg"
                className="carouselImage"
              />
              <Card.Body>
                <Card.Title className="cardTitle">
                  <h5>Image Encryption</h5>
                </Card.Title>
                <Card.Text className="cardText">
                  A symmetric key encryption module developed using Python based
                  on Chaos theory algorithms(Logistic Map). This algorithm is
                  packaged and can be installed using only pip install
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};
