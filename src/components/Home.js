import React from "react";
import Blog from "./home-page/Blog";
import Jap from "./home-page/Jap";
import Position from "./home-page/Position";

class Home extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      title: "",
      linkLeft: "BLOG",
      japName: "シーノ、エルイン",
      name: "Erwin Cino",
      blogLink: "https://blog.erwincino.com",
      linkRight: "PROJECTS"
    };
  }
  render() {
    return (
      <>
        <div className='home-first'>
          <Blog blogLink={this.state.blogLink} link={this.state.linkLeft} />
          <Jap name={this.state.name} japName={this.state.japName} />
          <Position />
          <Blog link={this.state.linkRight} />
        </div>
      </>
    );
  }
}

export default Home;
