/**
 * Reflects the Kirby configuration options that have similar
 * effect on the client-side. Those options to not change any
 * settings that are part of the config.php of your Kirby instance.
 * Those affect your queries only.
 * @see https://getkirby.com/docs/reference/system/options
 */
export interface Options extends CustomOptions {
  thumbs: Thumbs;
}

export interface CustomOptions {
  [key: string]: any;
}

/**
 * Set default configuration for thumbs
 *
 */
export interface Thumbs extends Partial<ThumbPresetValues> {
  presets: ThumbPreset;
  srcsets: ThumbPresetList;
}

export interface ThumbPreset {
  [index: string]: Partial<ThumbPresetValues>;
}

export interface ThumbPresetList {
  [index: string]: Partial<ThumbPreset>;
}

export interface ThumbPresetValues {
  autoOrient: boolean;
  crop: boolean;
  blur: boolean;
  grayscale: boolean;
  height: number;
  quality: number;
  width: number;
}
