export class GenerationModel {
    x: number;
    y: number;
    prompt: string;

    constructor(x: number, y: number, prompt: string) {
        this.x = x;
        this.y = y;
        this.prompt = prompt;
    }
}
