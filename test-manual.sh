#!/bin/bash

echo "Testing Email API..."

# Test POST /send-email
curl -X POST http://localhost:3000/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "to": "test@example.com",
    "subject": "Test Email",
    "text": "Hello from curl test!"
  }' \
  -w "\nStatus Code: %{http_code}\n"

echo "Test completed!"