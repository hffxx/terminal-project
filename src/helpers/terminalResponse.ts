import { RESPONSES } from "../data/responses";

export const terminalResponse = (input: string) => {
  if (input.trim() === "") {
    return;
  }
  const responseData = RESPONSES.find((res) => {
    return res.input === input.toLowerCase();
  });
  if (responseData) {
    return responseData.response;
  }
  return `"${input}" is not recognized as an internal or external command, operable program or batch file.`;
};
