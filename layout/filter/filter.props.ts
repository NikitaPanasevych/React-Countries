import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface FilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    children: ReactNode;
};