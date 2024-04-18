import { Request } from "express";

export interface GenerateImageRequest {
  campaignTitle: string;
  campaignDescription: string;
  organizationName: string;
}
