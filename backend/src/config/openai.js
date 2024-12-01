const { OpenAI } = require('openai');
const { openAIApiKey } = require('../variables');

const openaiConfig = new OpenAI({
  apiKey: openAIApiKey,
});

module.exports = {
  openaiConfig,
};
