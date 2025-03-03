import express, { Request, Response } from "express";

import { fetchOpenaiResponse, SuccessResponse, ErrorResponse } from "../llm/llm_controller";
import { systemPrompt, userPromptGenerator } from "../prompts/pixelart_generation_prompt_utils";




type Status = 200 | 400 | 404 | 500;

class GenerationResponse {
    status: Status;
    response: string;

    constructor(status: Status, response: string) {
        this.status = status;
        this.response = response;
    }
}



const router = express.Router();

router.post('/message', (request: Request, response: Response) => {
    let { prompt, size } = request.body;

    fetchOpenaiResponse(systemPrompt, userPromptGenerator(prompt, size))
    .then( (openaiResponse: SuccessResponse | ErrorResponse) => {
        let message: string = ''; 
        if  (openaiResponse.status === 200) {
            message = openaiResponse.response;
        } else {
            message = openaiResponse.details;
        }

        response.send(new GenerationResponse(openaiResponse.status, message));
    })
    .catch( error => response.send(new GenerationResponse(500, error))); // TODO: We should probably log this error and return something else
});

export default router;
