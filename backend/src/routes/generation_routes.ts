import express, { Request, Response } from "express";

import { fetchOpenaiResponse, SuccessResponse, ErrorResponse } from "../llm/llm_controller";
import { systemPrompt, userPromptGenerator } from "../prompts/pixelart_generation_prompt_utils";

import { pixelGeneration } from "../db/models/mongo_models";




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
    let generation = new pixelGeneration({size, prompt});

    fetchOpenaiResponse(systemPrompt, userPromptGenerator(prompt, size))
    .then( (openaiResponse: SuccessResponse | ErrorResponse) => {
        let message: string = ''; 
        if  (openaiResponse.status === 200) {
            message = openaiResponse.response;
            generation = new pixelGeneration({size, prompt, response: message});
        } else {
            message = openaiResponse.details;
        }

        generation.save();
        response.send(new GenerationResponse(openaiResponse.status, message));
    })
    .catch( error => {
        generation.save();
        response.send(new GenerationResponse(500, error))
    }); // TODO: We should probably log this error and return something else
});

export default router;
