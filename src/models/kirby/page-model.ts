import { LanguageCode } from "../language-model";

export interface Page<N = string[]> {
  id: string;
  status: string;
  template: string;
  slug: string;
  date: string;
  title: string;
  num: number | string;
  uri: string;
  parent: string;
  language: LanguageCode;
  content: object;
  children: N;
  _permalink: string;
  _translationIds: string[];
}
