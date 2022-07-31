export interface IResponse {
  id: number;
  inputs: string[];
  response: string;
}

export const RESPONSES: IResponse[] = [
  {
    id: 0,
    inputs: ["command-list"],
    response: "Command list coming soon.",
  },
  { id: 1, inputs: ["essa"], response: "essa wariacie" },
];
