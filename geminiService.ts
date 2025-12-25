
import { GoogleGenAI } from "@google/genai";

export class ShortcutAI {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async askAboutShortcut(query: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: query,
        config: {
          systemInstruction: `أنت مساعد ذكي في موقع "88" المتخصص في اختصارات الكيبورد. 
          مهمتك مساعدة المستخدم في العثور على اختصارات لأي برنامج يطلبه (مثل فوتوشوب، ويندوز، لينكس، أوفيس، إلخ).
          أجب باللغة العربية بأسلوب تقني أنيق ومختصر.`,
        },
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "عذراً، حدث خطأ أثناء الاتصال بالمساعد الذكي. يرجى المحاولة لاحقاً.";
    }
  }
}
