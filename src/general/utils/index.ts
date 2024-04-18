import { GenerateImageRequest } from "../interfaces/Requests";

export const generateImagePrompt = (
  imageRequest: GenerateImageRequest
): string =>
  `For the church campaign titled "${imageRequest.campaignTitle}" the campaign description is as follows: ${imageRequest.campaignDescription}. Preferred colors for the image are [Specify any preferred color scheme]. Please keep text minimal and concise, and avoid showing people's faces. Emphasize visual elements relevant to the campaign theme, and ensure the image aligns with the values and tone of church campaigns.`;
