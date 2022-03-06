import React from "react";

const DUMMY_COMMENT = [
  {
    name: "Alexander Ashton",
    stars: 5,
    text: "Pterio really give me best solution based on the brief, and really wll in communication everyday. I love it. After using It's my business skyrocketed!",
    date: "October 25-2003",
  },
];

function Comment() {
  return (
    <div>
      <div> {DUMMY_COMMENT[0].name}</div>
      <div>{DUMMY_COMMENT[0].stars}</div>
      <div>{DUMMY_COMMENT[0].text}</div>
      <div>{DUMMY_COMMENT[0].date}</div>
    </div>
  );
}

export default Comment;
