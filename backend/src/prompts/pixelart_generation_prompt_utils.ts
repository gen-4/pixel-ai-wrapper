
export const systemPrompt: string = ' \
    You are a helpful pixel art artist that is \
    glad to assist other artists with their tasks \n \
    You know where every pixel must be placed to create \
    the most stunning pixel art. \
';

export const userPromptGenerator = ( userPrompt: string, canvasSize: string ): string => {
    return `
    Create a pixel map stating the coordinates of each pixel and its hex color value. \n
    The format of the map must be a json as follows:\n
        - A List of objects \n
        - Each object will have x field, y field and hex field \n\n

    This is an example of such format:\n
    [
        {
            "x": 0,
            "y": 0,
            "hex": #000000
        },
        {
            "x": 0,
            "y": 1,
            "hex": #0000FF
        }
    ]
    \n
    Answer with the json map and nothing else\n
    The pixel art must have the size: ${canvasSize}\n
    Generate a pixel art following the previous rules that match these requirements: ${userPrompt}
    `;
}
