import mongoose from "mongoose";

import { pixelGenerationSchema } from "../schemas/mongo_schemas";


export const pixelGeneration = mongoose.model('PixelGeneration', pixelGenerationSchema);
