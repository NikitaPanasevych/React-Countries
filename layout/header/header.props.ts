import { ReactNode } from "react";
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
};