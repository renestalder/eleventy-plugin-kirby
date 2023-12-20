export interface File extends Record<string, any> {
  id?: string;
  uuid?: string;
}

export function isFile(obj: any): obj is File {
  const possibleFile = obj as File;
  return possibleFile?.uuid && possibleFile?.uuid.startsWith("page://");
}
