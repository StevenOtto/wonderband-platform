import { BreakpointReadable } from '../types/styling';
import cssRulePerBreakpoint from './cssRulePerBreakpoint';

export const column = (values: BreakpointReadable) => cssRulePerBreakpoint('width', values, (val) => `${100 * val}%`);

export const push = (values: BreakpointReadable) =>
    cssRulePerBreakpoint('margin-left', values, (val) => `${100 * val}%`);

export const fontSize = (values: BreakpointReadable) => cssRulePerBreakpoint('font-size', values, (val) => `${val}px`);

export const distance = (
    prop: string = 'margin',
    values: BreakpointReadable | number | string,
    negative: boolean = false
) => cssRulePerBreakpoint(prop, values, (val) => `${negative ? '-' : ''}${val}px`);

export const cssRulesPerBreakpointPresets = (
    prop: string,
    values: BreakpointReadable | number | string,
    unit?: string,
    negative?: boolean
) => cssRulePerBreakpoint(prop, values, (val) => `${negative ? '-' : ''}${val}${unit || ''}`);

export const percentage = (prop: string, values: BreakpointReadable | number | string, negative: boolean = false) =>
    cssRulePerBreakpoint(prop, values, (val) => `${negative ? '-' : ''}${val}%`);
