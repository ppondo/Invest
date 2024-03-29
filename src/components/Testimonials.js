import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import erika from "../images/stockPhotos/erika.jpg";
import chris from "../images/stockPhotos/chris.jpg";
import mike from "../images/stockPhotos/mike.jpg";
import ashley from "../images/stockPhotos/ashley.jpg"

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        interval={6100}
      >
        <div>
          <img src={erika} alt="Erika" />
          <div className="myCarousel">
            <h3>Erika</h3>
            <h4>21</h4>
            <p>
              I really learned a lot from Invest. It truly helped me to start
              investing my money wisely to maximize my profits. I was also able
              to learn how to read the stock market and familiarize myself with
              the termonology associated with investing.
            </p>
          </div>
        </div>

        <div>
          <img src={chris} alt="Chris" />
          <div className="myCarousel">
            <h3>Chris</h3>
            <h4>19</h4>
            <p>
              I was introduced to investing pretty recently and was overwhelmed
              by different investment strategies and what my friends were
              telling me to do and what to invest in. Then, I did my own
              research and found Invest. It helped me to understand what
              investing actually is.
            </p>
          </div>
        </div>

        <div>
          <img src={mike} alt="Mike" />
          <div className="myCarousel">
            <h3>Mike</h3>
            <h4>23</h4>
            <p>
              Invest helped my to learn how to invest my money after getting my
              first full time job. I liked how it was catered towards people my
              age and is very college oriented. I also learned how to be a good
              investor and save for my retirement.
            </p>
          </div>
        </div>

        <div>
          <img src={ashley} alt="Ashley" />
          <div className="myCarousel">
            <h3>Ashley</h3>
            <h4>20</h4>
            <p>
              I'm in college and I recently saw a lot of online talk and 
              social media buzz around investing and the stock markey. Invest was able 
              to teach me about the ins and outs of how to properly invest my money. The quiz 
              that they offer really helped me to remember important topics and some smart tips. 
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
