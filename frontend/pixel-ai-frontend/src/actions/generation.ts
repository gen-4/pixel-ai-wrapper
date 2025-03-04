'use server'


export const generatePixelArt = async (data: FormData) => console.log(data.get('xSize'), data.get('ySize'), data.get('prompt'));
