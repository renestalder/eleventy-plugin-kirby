import { NormalizedSchema } from "normalizr";
import { Page } from "./page-model";

export interface Kirby extends NormalizedSchema<any, any> {
  entities: {
    pages: EntityItems<Page>;
    documents: EntityItems;
    images: EntityItems;
  };
}

export interface EntityItems<T = object> {
  [index: string]: T;
}
