import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const styleobj = {
  paddingLeft: 100,
};

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 17:45"
          blogComment="Great blog post thanks"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      {/*if you ever want to show custom content inside conponent, we take child, wrap it in parent component.Then child component is going to show in the {props.children} property, we can then take that props.children property and reference it from anywhere inside of JSX  */}

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="One week ago at 15:00"
          blogComment="I actually disagree with your point abotut quantum string theory"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="One year ago at 09:54"
          blogComment="You can earn $3,000 a day from home"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// when referencing component you do not use {} you use it as if tag <CommentDetail>
