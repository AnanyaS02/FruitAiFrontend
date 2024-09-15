import React, { useState, useEffect } from 'react';
import FAQCard from './FAQCard';
import '../../styles/FAQ.css';

const FAQ = () => {
  const [faqData, setFaqData] = useState([]);
  const [newFaq, setNewFaq] = useState({ title: '', question: '', answer: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/faqs/');
      const data = await response.json();
      setFaqData(data);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    }
  };

  const addFaq = async () => {
    // Validation check: Ensure no field is empty
    if (!newFaq.title.trim() || !newFaq.question.trim() || !newFaq.answer.trim()) {
      setError('All fields are required.');
      return; // Exit the function if validation fails
    }

    setError(''); // Clear the error message if validation passes

    try {
      const response = await fetch('http://localhost:8000/api/faqs/add/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFaq),
      });
      const data = await response.json();
      setFaqData([...faqData, data]); // Add the new FAQ to the list
      setNewFaq({ title: '', question: '', answer: '' }); // Reset form fields
    } catch (error) {
      console.error('Error adding FAQ:', error);
    }
  };

  const updateFaq = async (id, updatedFaq) => {
    try {
      const response = await fetch(`http://localhost:8000/api/faqs/update/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFaq),
      });
      const data = await response.json();
      setFaqData(faqData.map((faq) => (faq.id === id ? data : faq))); 
    } catch (error) {
      console.error('Error updating FAQ:', error);
    }
  };

  const deleteFaq = async (id) => {
    try {
      await fetch(`http://localhost:8000/api/faqs/delete/${id}/`, {
        method: 'DELETE',
      });
      setFaqData(faqData.filter((faq) => faq.id !== id)); // Remove the FAQ from the list
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  };

  return (
    <div className="container">
      <div className="faq-section">
        <h1>FAQ Section</h1>

        {/* Display FAQ list first */}
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <FAQCard
              key={index}
              faq={faq}
              updateFaq={updateFaq}
              deleteFaq={deleteFaq}
            />
          ))}
        </div>

        <div className="faq-form">
          <h2>Add New FAQ</h2>
          <input
            type="text"
            placeholder="Title"
            value={newFaq.title}
            onChange={(e) => setNewFaq({ ...newFaq, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Question"
            value={newFaq.question}
            onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
          />
          <textarea
            placeholder="Answer"
            value={newFaq.answer}
            onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
          />
          <button onClick={addFaq}>Add FAQ</button>
          {/* Display error message if fields are empty */}
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
