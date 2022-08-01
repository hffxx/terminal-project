import linkedinLogo from "../assets/images/linkedin.svg";
import githubLogo from "../assets/images/github.svg";
export interface IResponse {
  id: number;
  input: string;
  response?: string;
}

export const RESPONSES: IResponse[] = [
  {
    id: 0,
    input: "help",
    response: `List of avaible commands: <span>author</span> | <span>cmd</span> | <span>cls</span>`,
  },
  { id: 1, input: "cls" },
  {
    id: 2,
    input: "author",
    response: `<span>Maciej Hoffmann<span><a href='https://www.linkedin.com/in/maciej-hoffmann-5077b4234/' target='_blank'><div><img alt='linkedin' src=${linkedinLogo}/ class="logo"></div><span>LinkedIn</span></a><a href='https://github.com/hffxx' target='_blank'><div><img alt='github' src=${githubLogo}/ class="logo"><span>GitHub</span></a>`,
  },
  {
    id: 3,
    input: "cmd",
    response: "HFX-SOFT® (Version 1.0.0a). All rights reserved.",
  },
];
