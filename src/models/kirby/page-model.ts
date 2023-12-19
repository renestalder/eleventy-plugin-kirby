import { LanguageCode } from "../language-model";

export interface Page<N = string[]> {
  id: string;
  uuid: string;
  status: string;
  template: string;
  slug: string;
  date: string;
  title: string;
  num: number | string;
  uri: string;
  parent: {
    id: string;
    uuid: string;
  } | null;
  language: LanguageCode;
  content: object;
  children: N;
  _permalink: string;
  _translations: Record<string, PageTranslationMeta>;
}

export type PageTranslationMeta = Pick<
  Page,
  "id" | "status" | "slug" | "language" | "_permalink"
>;

export function isPage(obj: any): obj is Page {
  const possiblePage = obj as Page;
  return possiblePage?.uuid && possiblePage?.uuid.startsWith("page://");
}
