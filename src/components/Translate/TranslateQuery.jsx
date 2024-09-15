import React, { useEffect, useState } from 'react';
import '../../styles/TranslateComponent.css'; // Assuming you've added the button CSS here

const TranslateComponent = () => {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
  
    useEffect(() => {
      const addGoogleTranslateScript = () => {
        if (!document.getElementById('google-translate-script')) {
          const script = document.createElement('script');
          script.id = 'google-translate-script';
          script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
          script.async = true;
          document.body.appendChild(script);
        }
  
        window.googleTranslateElementInit = () => {
          if (window.google && window.google.translate) {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: 'en',
                includedLanguages: 'en,es,fr,de,hi,zh-CN,ja,ko,ru,it,pt,ar,bn,ur,ta,tr,vi',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
              },
              'google_translate_element'
            );
          }
        };
      };
  
      addGoogleTranslateScript();
    }, []);
  
    const handleTranslate = () => {
      setTranslatedText(inputText); // Move inputText to the translated div
    };
  
    return (
      <div className="main-container">
        <div className="content-box">
          <h2>Translate Your Text</h2>
  
          {/* Textarea for input */}
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text to translate"
            rows="4"
            cols="50"
          ></textarea>
  
          <br />
          <button className="translate-button" onClick={handleTranslate}>
            Translate Text
          </button>
  
          {/* Div to display the translated content with added styles */}
          <div id="text_to_translate">
            {translatedText}
          </div>
  
          {/* Google Translate dropdown */}
          <div id="google_translate_element"></div>
        </div>
      </div>
    );
  };
  
  export default TranslateComponent;