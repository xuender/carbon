export interface Config {
  dialog?: {
    header?: string;
    warn?: string;
    cancel?: string;
    ok?: string;
    placeholder?: string;
  };
  http?: {
    waitMessage?: string;
    duration?: number;
  };
}
