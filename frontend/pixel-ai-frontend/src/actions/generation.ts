'use server'

const host: string | undefined = process.env.NEXT_PUBLIC_BACKEND_HOST;
const port: string | undefined = process.env.NEXT_PUBLIC_BACKEND_PORT;

export const generatePixelArt = async (data: FormData) => {
    const prompt = data.get('prompt');
    const x = data.get('xSize');
    const y = data.get('ySize');
    if (!(prompt && x && y)) {
        // Error
        return;
    }

    fetch(
        `http://${host}:${port}/message`,
        {
            method: 'POST',
            body: {
                prompt: prompt,
                size: `${x}x${y}`
            }
        }
    )
    .then(res => console.log(res))
    .catch((err) => console.error('Failed to generate the pixel art: ' + err));
};
