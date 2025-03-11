import OpenAI from 'openai';

const apiKey: string | undefined = process.env.OPENAI_API_KEY;
const openaiModel: string | undefined = process.env.OPENAI_MODEL;
const openaiUrl: string | undefined = process.env.OPENAI_URL;


type ErrorStatus = 400 | 404 | 500;

export class ErrorResponse {
    status: ErrorStatus;
    details: string;

    constructor(status: ErrorStatus, details: string) {
        this.status = status;
        this.details = details;
    }
}


export class SuccessResponse {
    status: 200;
    response: string;

    constructor(response: string) {
        this.status = 200;
        this.response = response;
    }
}

type Message = {
    role: 'user' | 'system' | 'assistant';
    content: string;
}


// Configure OpenAI API
const openai = new OpenAI({
    baseURL: openaiUrl,
    apiKey
});

export const fetchOpenaiResponse = async (systemPrompt: string, userPrompt: string): Promise<ErrorResponse | SuccessResponse> => {
    if (!openaiModel) {
        return new ErrorResponse(500, "No model provided");
    }

    const messages: Message[] = [
        {
            role: 'system',
            content: systemPrompt
        },
        {
            role: 'user',
            content: userPrompt
        }
    ]

    const response = await openai.chat.completions.create({
        model: openaiModel,
        messages
    });

    let openaiResponse: string | null = response.choices[0].message.content;
    if (!openaiResponse) {
        return new ErrorResponse(500, "Model did not answer anything");
    }
    return new SuccessResponse(openaiResponse);
};
