import { useState } from "react";
import type { MenuItem } from "../types";
import { Home } from "lucide-react";


const useNavData = () => {
    

    const [isDashboard, setIsDashboard] = useState(false);

    const menuItems: MenuItem[] = [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: Home,
            link: "/dashboard",
            permission: "DashBoardRead",
            click: () => setIsDashboard(!isDashboard),
            stateVariables: isDashboard,
        
        },
    ]
    

    return menuItems;

    
}

export default useNavData;