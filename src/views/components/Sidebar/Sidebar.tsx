import React from "react";
import _ from "lodash";
import { Typography, List, ListItem } from "@material-tailwind/react";
/** Styles */
import SidebarStyles from "./Sidebar.styles";
/** Local Modules */
import useControllers from "controllers";
import useViews from "views";
/** Interfaces & Types */
import { IRoutesSidebar } from "models/interfaces/components/drawer.interfaces";

const Sidebar: React.FC = (): JSX.Element => {
    /** Controllers */
    const { useComponentsHooks } = useControllers();
    const { useDrawer } = useComponentsHooks();
    const { open, routes, openDrawer, closeDrawer } = useDrawer();

    /** Views */
    const { useComponents } = useViews();
    const { Drawer } = useComponents();

    return (
        <React.Fragment>
            <SidebarStyles.Card>
                <div className="mb-2 p-4">
                    <Typography variant="h5" color="white">
                        Imagine Apps Shopping
                    </Typography>
                </div>
                <List>
                    {
                        _.map(routes, (item: IRoutesSidebar, index: number) => (
                            <a key={index} href={item.path}>
                                <ListItem className={`font-semibold ${window.location.pathname === item.path ? 'bg-[white] text-[#111827] font-semibold' : 'text-white '}`}>
                                    {item.name}
                                </ListItem>
                            </a>
                        ))
                    }
                </List>
            </SidebarStyles.Card>
            <div className="h-[76px] flex items-center px-5 bg-white min-tablet:hidden" style={{ boxShadow: "0 0 0 0 #0000" }}>
                <SidebarStyles.Svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    onClick={openDrawer}
                >
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </SidebarStyles.Svg>
            </div>
            <Drawer open={open} onClose={closeDrawer} routes={routes} />
        </React.Fragment>

    );
}

export default Sidebar;