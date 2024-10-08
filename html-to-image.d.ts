declare module "html-to-image" {
  export function toPng(node: HTMLElement, options?: unknown): Promise<string>;
  export function toJpeg(node: HTMLElement, options?: unknown): Promise<string>;
  export function toBlob(
    node: HTMLElement,
    options?: unknown
  ): Promise<Blob | null>;
  export function toSvg(node: HTMLElement, options?: unknown): Promise<string>;
}
