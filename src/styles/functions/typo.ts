import { css } from 'styled-components';
import cssRulePerBreakpoint from './cssRulePerBreakpoint';
import bpVars from '../bpVars';
import { BreakpointReadable } from '../types/styling';

export type TypoType = keyof typeof bpVars.typos;

type TypoConf = {
    weight: number | BreakpointReadable;
    size: number | BreakpointReadable;
};

export const typo = (value: TypoType | TypoConf) => {
    const conf = typeof value === 'string' ? bpVars.typos[value] : value;
    return css`
        ${cssRulePerBreakpoint('font-size', conf.size, (v) => `${v}px`)}
        ${cssRulePerBreakpoint('font-weight', conf.weight)}
    `;
};
