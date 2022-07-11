import React, { useState, useEffect } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "작성자1",
    content: "하이 1",
    emotion: 5,
    create_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "작성자2",
    content: "하이 2",
    emotion: 4,
    create_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "작성자3",
    content: "하이 3",
    emotion: 3,
    create_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "작성자4",
    content: "하이 4",
    emotion: 2,
    create_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "작성자5",
    content: "하이 5",
    emotion: 1,
    create_date: new Date().getTime(),
  },
];
function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
