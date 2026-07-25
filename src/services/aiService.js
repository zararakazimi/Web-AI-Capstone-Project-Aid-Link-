import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

export async function analyzeSituation(situation, category) {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-oss-20b:free",

        messages: [
          {
            role: "system",
            content: `
User Situation:
${situation}

Selected Category:
${category}

Please answer EXACTLY in the following format.

## Needs Assessment

Explain the user's situation in a caring and supportive way.
Write one or two short paragraphs.

## Recommended Categories

Choose ONLY from these categories.

- Healthcare
- Education
- Food Assistance
- Emergency Relief
- Shelter
- Livelihood
- Agriculture
- Water & Sanitation
- Child Protection
- Women's Empowerment
- Disability Support
- Refugee Assistance
- Legal Aid
- Mental Health
- Community Development
- Nutrition
- Medical Assistance
- Disaster Response
- Protection
- Family Support
- Environment
- Climate Action
- Peacebuilding
- Conflict Resolution
- Mine Action
- Economic Development
- Eye Care
- Surgery
- Medical Training

Return ONLY 2–4 categories.

Do NOT create new category names.

## Action Plan

Provide 2–4 realistic numbered steps.

Do NOT recommend organization names.
Only recommend categories.
`,
          },

          {
            role: "user",
            content: `
You are AidLink AI.

You MUST recommend ONLY category names from the provided list.

Never invent category names.

Never recommend organization names.

Always return exactly this structure:

## Needs Assessment

...

## Recommended Categories

- Category 1
- Category 2

## Action Plan

1. ...
2. ...
`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5173",
          "X-Title": "AidLink",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Status:", error.response?.status);
    console.error("Response:", error.response?.data);

    return `
## Needs Assessment

Sorry, AidLink AI is currently unavailable.

## Recommended Categories

- Emergency

## Action Plan

1. Please try again in a few minutes.
2. Check your internet connection.
3. Verify your API key.
4. Contact support if the problem continues.
`;
  }
}