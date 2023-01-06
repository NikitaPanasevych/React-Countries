import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface BodyProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode;
};