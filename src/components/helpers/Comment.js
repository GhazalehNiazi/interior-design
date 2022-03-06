import React from "react";

const DUMMY_COMMENT = [
  {
    name: "Alexander Ashton",
    stars: 5,
    text: "Pterio really give me best solution based on the brief, and really wll in communication everyday. I love it. After using It's my business skyrocketed!",
    date: "October 25-2003",
  },
];

function Comment(props) {
  return (
    <div className={props.className}>
      <h2> {DUMMY_COMMENT[0].name}</h2>
      <h2>{DUMMY_COMMENT[0].stars}</h2>
      <h3>{DUMMY_COMMENT[0].text}</h3>
      <h3>{DUMMY_COMMENT[0].date}</h3>
    </div>
  );
}

export default Comment;
