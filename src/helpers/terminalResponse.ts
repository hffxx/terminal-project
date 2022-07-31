import { RESPONSES } from "../data/responses";

export const terminalResponse = (input: string) => {
  const response = RESPONSES.find((res) => {
    return res.inputs.includes(input.toLowerCase());
  });
  if (response) {
    return response.response;
  }
  return `"${input}" is not recognized as an internal or external command, operable program or batch file.`;
};
