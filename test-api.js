const axios = require('axios');

const testEmailAPI = async () => {
  const baseURL = 'http://localhost:3000';
  
  // Test data
  const emailData = {
    to: 'trymegmal@gmail.com',
    subject: 'Test Email from API',
    text: 'Hello! This is a test email sent from Node.js API.'
  };

  try {
    console.log('Testing POST /send-email...');
    
    const response = await axios.post(`${baseURL}/send-email`, emailData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('✅ Test Passed!');
    console.log('Status:', response.status);
    console.log('Response:', response.data);
    
  } catch (error) {
    console.log('❌ Test Failed!');
    if (error.response) {
      console.log('Status:', error.response.status);
      console.log('Error:', error.response.data);
    } else {
      console.log('Error:', error.message);
    }
  }
};

// Run test
testEmailAPI();