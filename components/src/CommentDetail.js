import React from "react";

const styleObj = {
  height: 50,
  width: 50,
};
const styleTxt = {
  textAlign: "left",
  paddingLeft: 60,
};
const styleNameDate = {
  textAlign: "left",
  paddingLeft: 25,
  paddingTop: 10,
};

const CommentDetail = (props) => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img style={styleObj} alt="avatar" src={props.avatar} />
      </a>

      <div className="content" />
      <a style={styleNameDate} href="/" className="author">
        {props.author}
      </a>

      <div className="metadata">
        <span className="date">{props.timeAgo}</span>
      </div>
      <div style={styleTxt} className="text">
        {props.blogComment}
      </div>
    </div>
  );
};

export default CommentDetail;
// makes this file accesible to others
