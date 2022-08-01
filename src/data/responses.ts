export interface IResponse {
  id: number;
  inputs: string[];
  response?: string;
}

export const RESPONSES: IResponse[] = [
  {
    id: 0,
    inputs: ["help"],
    response: `List of avaible commands: author | cmd | cls`,
  },
  { id: 1, inputs: ["cls"] },
  { id: 2, inputs: ["author"], response: "Maciej Hoffmann HFX-SOFT" },
  {
    id: 3,
    inputs: ["cmd"],
    response: "HFX-SOFT® (Version 1.0.0a). All rights reserved.",
  },
];
