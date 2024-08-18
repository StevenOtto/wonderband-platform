// Converts array with values breakpoint to a key-based object (key = breakpoint)
import { BreakpointObject, BreakpointReadable } from '../types/styling';

const convertArrayToResponsiveObject = (
    breakpointObjectOrArray: BreakpointReadable | null
): BreakpointObject | null => {
    if (!breakpointObjectOrArray) return null;
    if (Array.isArray(breakpointObjectOrArray)) {
        return {
            xs: breakpointObjectOrArray[0],
            sm: breakpointObjectOrArray[1],
            md: breakpointObjectOrArray[2],
            lg: breakpointObjectOrArray[3],
            xl: breakpointObjectOrArray[4],
            xxl: breakpointObjectOrArray[5],
        };
    }
    return breakpointObjectOrArray as BreakpointObject;
};

export default convertArrayToResponsiveObject;
