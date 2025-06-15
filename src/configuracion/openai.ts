import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || 'KEYENWASAP',
  dangerouslyAllowBrowser: true 
});

export { openai };