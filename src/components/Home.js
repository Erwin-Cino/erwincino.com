import React from "react";
import Blog from "./home-page/Blog";
import Jap from "./home-page/Jap";
import Position from "./home-page/Position";
import descriptions from "./description";

class Home extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      title: "",
      linkLeft: "BLOG",
      japName: "シーノ、エルイン",
      name: "Erwin Cino",
      blogLink: "https://blog.erwincino.com",
      linkRight: "PROJECTS",
      position: "MERN STACK DEV",
      description: descriptions
    };
  }

  render() {
    console.log(Object.values(this.state.description));
    return (
      <>
        <div className='home-first'>
          <Blog blogLink={this.state.blogLink} link={this.state.linkLeft} />
          <Jap name={this.state.name} japName={this.state.japName} />
          <Position
            position={this.state.position}
            name={this.state.name.toUpperCase()}
            description={this.state.description.desc1.intro}
          />
          <Blog link={this.state.linkRight} />
        </div>
      </>
    );
  }
}

export default Home;
