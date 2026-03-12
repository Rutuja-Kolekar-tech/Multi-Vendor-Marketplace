import type { ReactNode } from "react";

export type AppRoute = {    
    path: string;
    component: ReactNode;
    layout: boolean;
    permissionTitle: string[];
}