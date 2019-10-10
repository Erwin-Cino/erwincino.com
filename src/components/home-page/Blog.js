import React from "react";

const Blog = props => (
  <div className='blog-menu'>
    <a href={props.blogLink} className='blog-menu-text'>
      {props.linkLeft}
    </a>
  </div>
);

export default Blog;
