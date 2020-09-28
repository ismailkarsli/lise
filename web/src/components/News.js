import React from "react";

const News = () => {
  return (
    <div className="main-container">
      <h2 className="page-title">Haberler</h2>
      <div className="timeline container">
        <div className="timeline-item">
          <div className="item-photo">
            <img src="https://picsum.photos/1500/800" alt="Phosto" />
          </div>
          <div className="item-meta" date-is="28 Eylül 2020">
            <h1>Arcu odio ut sem nulla pharetra diam sit amet.</h1>
            <p>
              Dictum varius duis at consectetur lorem donec massa. Nisi lacus
              sed viverra tellus in hac habitasse platea dictumst. Faucibus a
              pellentesque sit amet porttitor. Et leo duis ut diam quam nulla
              porttitor massa id. Et molestie ac feugiat sed lectus vestibulum
              mattis ullamcorper velit. Platea dictumst vestibulum rhoncus est
              pellentesque elit ullamcorper dignissim.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="item-photo">
            <img src="https://picsum.photos/1500/1500" alt="Phosto" />
          </div>
          <div className="item-meta" date-is="28 Eylül 2020">
            <h1>Sit amet volutpat consequat mauris nunc congue nisi.</h1>
            <p>
              vitae suscipit. Morbi quis commodo odio aenean sed adipiscing.
              Viverra nibh cras pulvinar mattis. Tellus molestie nunc non
              blandit massa enim nec dui nunc. Cursus in hac habitasse platea
              dictumst quisque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
