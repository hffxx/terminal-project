export interface IResponse {
  id: number;
  input: string;
  response?: string;
}

export const RESPONSES: IResponse[] = [
  {
    id: 0,
    input: "help",
    response: `List of avaible commands: author | cmd | cls`,
  },
  { id: 1, input: "cls" },
  {
    id: 2,
    input: "author",
    response:
      "Maciej Hoffmann <a href='https://www.linkedin.com/in/maciej-hoffmann-5077b4234/' target='_blank'>LinkedIn</a> <a href='https://github.com/hffxx' target='_blank'>GitHub</a>",
  },
  {
    id: 3,
    input: "cmd",
    response: "HFX-SOFT® (Version 1.0.0a). All rights reserved.",
  },
];
