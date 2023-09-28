import React from 'react';
import TopicBlock from '../../playdemy/courses/TopicBlock';

const data = {
  "title": "My Topics",
  "topics": [
    {
      "name": "React",
      "mastery": "high",
      "concepts": [
        {"name": "Hooks", "mastery": "high"},
        {"name": "Props", "mastery": "medium"}
      ]
    },
    {
      "name": "Redux",
      "mastery": "medium",
      "concepts": [
        {"name": "Actions", "mastery": "low"},
        {"name": "Reducers", "mastery": "medium"}
      ]
    },
    {
      "name": "Newdux",
      "mastery": "medium",
      "concepts": [
        {"name": "Actions", "mastery": "low"},
        {"name": "Reducers", "mastery": "medium"}
      ]
    },  ]
};


function CourseProgress() {
  return (
    <div className="App">
      <TopicBlock data={data} />
    </div>
  );
}

export default CourseProgress;
