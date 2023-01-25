/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}

declare module '*.scss' {
  const css: { [key: string]: string };
  export default css;
}
declare module '*.sass' {
  const css: { [key: string]: string };
  export default css;
}
declare module 'react-markup';
declare module '*.webp';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
