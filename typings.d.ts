declare module '*.css';
declare module 'dva-model-extend';
declare module '*.less' {
  const content: any;
  export default content;
}
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare let API_PREFIX:string;
declare interface Window {
  cancelRequest: any;
  less: any;
}