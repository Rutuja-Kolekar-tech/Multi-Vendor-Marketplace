import type { ElementType } from "react";

export type MenuItem = {
    id: string;
    label: string;
    icon: string | ElementType;
    link: string;
    permission: string;
    click?: () => void;
    stateVariables?: boolean;
    parentId?: string;
    subItems?: MenuItem[];


}