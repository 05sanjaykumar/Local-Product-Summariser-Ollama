#!/bin/shAdd commentMore actions

# Start the server in the background
ollama serve &

# Give it time to initialize
sleep 3

# Pull the model (e.g., gemma:2b)
ollama pull gemma:2b

# Optional: keep container running
tail -f /dev/null