
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateProjectInsights(description: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User description: "${description}". 
      As a friendly but expert senior web developer, give a one-sentence simple piece of advice or technical recommendation for this project. 
      Use simple language (e.g., "I recommend using a fast framework like Next.js to make sure your customers don't wait for pages to load"). 
      Avoid heavy jargon. Keep it encouraging and high-end.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 80,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return "I have some ideas for this. Let's talk about the technical details directly.";
  }
}
