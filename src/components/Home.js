import React from "react";
import Blog from "./home-page/Blog";
import Jap from "./home-page/Jap";

class Home extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      title: "",
      linkLeft: "BLOG",
      japName: "シーノ、エルイン",
      name: "Erwin Cino",
      blogLink: "https://blog.erwincino.com"
    };
  }
  render() {
    return (
      <>
        <div className='home-first'>
          <Blog blogLink={this.state.blogLink} linkLeft={this.state.linkLeft} />
          <Jap name={this.state.name} japName={this.state.japName} />
        </div>
      </>
    );
  }
}

export default Home;
