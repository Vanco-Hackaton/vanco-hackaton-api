import { Router, Request, Response } from "express";
import { Controller } from "../general/interfaces/Controller";
import {
  StandardRequestBody,
  StandardRequestQuery,
  StandardResponse,
} from "../types/types";
import { STATUS_CODE } from "../general/constants";
import { GenerateImageRequest } from "../general/interfaces/Requests";
import { GenerateImageResponse } from "../general/interfaces/Responses";
import OpenAI from "openai";
import { generateImagePrompt } from "../general/utils";

export class MainController implements Controller {
  private readonly _path: string = "/api/main";

  public getPath(): string {
    return this._path;
  }

  public getRoutes = () => {
    const routes = Router();
    routes.get("/", this.generateLowResImage);
    return routes;
  };

  private async generateLowResImage(
    _req: StandardRequestBody<GenerateImageRequest>,
    res: StandardResponse<GenerateImageResponse>
  ) {
    try {
      const openai = new OpenAI();
      const dalleResponse = await openai.images.generate({
        prompt: generateImagePrompt(_req.body),
        model: "dall-e-2",
        size: "256x256",
        quality: "standard",
        n: 1,
      });
      return res.status(STATUS_CODE.OK).json({
        data: {
          url: dalleResponse.data[0].url,
          revised_prompt: dalleResponse.data[0].revised_prompt,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(STATUS_CODE.SERVER_ERROR).json({ error: error });
    }
  }
}
