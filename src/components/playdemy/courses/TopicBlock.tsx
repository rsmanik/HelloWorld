import React, { useState } from 'react';
import './TopicBlock.css';
import { useNavigate } from 'react-router-dom'; 

function TopicBlock({ data }) {
  const navigate = useNavigate(); 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleCardClick = (topic) => {
    setSelectedTopic(topic);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTopic(null);
  };

  const handleConceptClick = () => {
    console.log('Concept selected');
    navigate('/lesson');
  };

  return (
    <div className="topicBlock">
      <h2>{data.title}</h2>
      <div className="topicList">
        {data.topics.map((topic, index) => (
          <div
            key={index}
            className={`topicCard ${topic.mastery}`}
            onClick={() => handleCardClick(topic)}
          >
            {topic.name}
          </div>
        ))}
      </div>
      
      <div className="legend">
        {/* ... existing legend code ... */}
      </div>

      {isModalOpen && selectedTopic && (
        <div className="modal">
          <h2>{selectedTopic.name} Concepts</h2>
          <div className="conceptList">
            {selectedTopic.concepts.map((concept, index) => (
              <div
                key={index}
                className={`conceptCard ${concept.mastery}`}
                onClick={() => handleConceptClick()}
              >
                {concept.name}
              </div>
            ))}
          </div>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
}

export default TopicBlock;
