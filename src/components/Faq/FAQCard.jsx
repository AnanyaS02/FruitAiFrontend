import React, { useState } from 'react';
import '../../styles/FAQCard.css';

const FAQCard = ({ faq, updateFaq, deleteFaq }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedFaq, setEditedFaq] = useState(faq);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Validate if question and answer fields are not empty
    if (!editedFaq.question.trim() || !editedFaq.answer.trim()) {
      setErrorMessage('Both question and answer fields must be filled out!');
      return;
    }

    updateFaq(faq.id, editedFaq);
    setIsEditing(false);
    setErrorMessage(''); // Clear error message on successful save
  };

  return (
    <div className="faq-card">
      <div className="faq-card-image">
        <img src="/fruits.jpg" alt={faq.title} />
        <p className="faq-image-name">{faq.title}</p>
      </div>

      {isEditing ? (
        <div className="faq-card-content">
          <input
            type="text"
            value={editedFaq.question}
            onChange={(e) => setEditedFaq({ ...editedFaq, question: e.target.value })}
            placeholder="Enter question"
          />
          <textarea
            value={editedFaq.answer}
            onChange={(e) => setEditedFaq({ ...editedFaq, answer: e.target.value })}
            placeholder="Enter answer"
          />
          <button onClick={handleSave}>Save</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error */}
        </div>
      ) : (
        <div className="faq-card-content">
          <h3 className="faq-question">{faq.question}</h3>
          <p className="faq-answer">{faq.answer}</p>
          <span><button className="edit-button" onClick={handleEdit}>Edit</button>
          <button className="delete-button" onClick={() => deleteFaq(faq.id)}>Delete</button></span>
        </div>
      )}
    </div>
  );
};

export default FAQCard;
