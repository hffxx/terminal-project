export interface IResponse {
  id: number;
  inputs: string[];
  response?: string;
}

export const RESPONSES: IResponse[] = [
  {
    id: 0,
    inputs: ["command-list"],
    response: `cls command-2 command-3 command-4 command-5`,
  },
  { id: 1, inputs: ["cls"] },
  { id: 2, inputs: ["command-2"], response: "essa wariacie" },
  { id: 3, inputs: ["command-3"], response: "essa wariacie" },
  { id: 4, inputs: ["command-4"], response: "essa wariacie" },
  { id: 5, inputs: ["command-5"], response: "essa wariacie" },
];
