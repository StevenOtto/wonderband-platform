export type BreakpointObject = Partial<
  Record<BreakpointString, string | number>
>;
export type BreakpointArray = ReadonlyArray<number | string>;

export type BreakpointReadable = BreakpointArray | BreakpointObject;

export enum BreakpointString {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",
}
