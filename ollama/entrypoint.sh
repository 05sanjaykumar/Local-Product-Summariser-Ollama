#!/bin/sh

# Start the Ollama server in the background
ollama serve &

# Give the server time to start up
sleep 3

# Only pull the model if it's not already available
if ! ollama list | grep -q "gemma:2b"; then
  echo "Model gemma:2b not found. Pulling..."
  ollama pull gemma:2b
else
  echo "Model gemma:2b already exists. Skipping pull."
fi

# Keep the container running
tail -f /dev/null
