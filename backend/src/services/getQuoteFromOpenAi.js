const { openaiConfig } = require('../config/openai');

/* eslint-disable consistent-return */
const getQuoteFromOpenAi = async () => {
  try {
    const prompt = `Generate a LinkedIn connection request message for`;

    /**
     * Change the Model accordingly
     */
    const openAiParams = {
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-4o-mini',
    };

    const chatCompletion = await openaiConfig.chat.completions.create(
      openAiParams
    );

    return chatCompletion;
  } catch (error) {
    console.error('getQuoteFromOpenAi.Error - ', error.message);
    return error.message;
  }
};

module.exports = { getQuoteFromOpenAi };
