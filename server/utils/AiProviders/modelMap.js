/**
 * The model name and context window for all know model windows
 * that are available through providers which has discrete model options.
 */
const MODEL_MAP = {
  anthropic: {
    "claude-3-opus-latest": 200_000,
    "claude-3-5-haiku-latest": 200_000,
    "claude-3-5-haiku-20241022": 200_000,
    "claude-3-5-sonnet-latest": 200_000,
    "claude-3-5-sonnet-20241022": 200_000,
  },
  cohere: {
    "command-r": 128_000,
    "command-r-plus": 128_000,
    command: 4_096,
    "command-light": 4_096,
    "command-nightly": 8_192,
    "command-light-nightly": 8_192,
  },
  gemini: {
    "gemini-2.0-flash-exp-02-05": 2_097_152,
    "gemini-2.0-flash-thinking-exp-02-05": 2_097_152,
    "gemini-2.0-flash-001": 2_097_152,
  },
  groq: {
    "gemma2-9b-it": 8192,
    "gemma-7b-it": 8192,
    "llama3-70b-8192": 8192,
    "llama3-8b-8192": 8192,
    "llama-3.1-70b-versatile": 8000,
    "llama-3.1-8b-instant": 8000,
    "mixtral-8x7b-32768": 32768,
  },
  openai: {
    "gpt-3.5-turbo": 16_385,
    "gpt-3.5-turbo-1106": 16_385,
    "gpt-4o": 128_000,
    "gpt-4o-2024-08-06": 128_000,
    "gpt-4o-2024-05-13": 128_000,
    "gpt-4o-mini": 128_000,
    "gpt-4o-mini-2024-07-18": 128_000,
    "gpt-4-turbo": 128_000,
    "gpt-4-1106-preview": 128_000,
    "gpt-4-turbo-preview": 128_000,
    "gpt-4": 8_192,
    "gpt-4-32k": 32_000,
    "o1-preview": 128_000,
    "o1-preview-2024-09-12": 128_000,
    "o1-mini": 128_000,
    "o1-mini-2024-09-12": 128_000,
  },
  deepseek: {
    "deepseek-chat": 128_000,
    "deepseek-coder": 128_000,
  },
  xai: {
    "grok-beta": 131_072,
  },
};

module.exports = { MODEL_MAP };
