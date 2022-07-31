export interface IResponse {
  id: number;
  inputs: string[];
  response: string;
}

export const RESPONSES: IResponse[] = [
  { id: 0, inputs: ["yarn start", "npm start"], response: "Starting the app" },
  { id: 1, inputs: ["kocham cie"], response: "Ja Ciebie tez" },
];
