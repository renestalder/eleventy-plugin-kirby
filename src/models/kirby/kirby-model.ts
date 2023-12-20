import { NormalizedSchema } from "normalizr";
import { Page } from "./page-model";
import { File } from "./file-model";

export interface Kirby extends NormalizedSchema<any, any> {
  entities: {
    pages: EntityItems<Page>;
    documents: EntityItems<File>;
    images: EntityItems<File>;
  };
}

export interface EntityItems<T = object> {
  [index: string]: T;
}
