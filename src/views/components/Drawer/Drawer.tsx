import React from "react";
import { Typography, IconButton, List, ListItem } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import _ from "lodash";
/** Interfaces & Types */
import { IDrawer, IRoutesSidebar } from "models/interfaces/components/drawer.interfaces";
/** Styles */
import DrawerStyles from "./Drawer.styles";

const Drawer: React.FC<IDrawer> = ({ open, routes, onClose }): JSX.Element => {
    return (
        <DrawerStyles.Drawer open={open} onClose={onClose} size={window.innerWidth - (window.innerWidth * 0.3) as number}>
            <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                    Imagine Apps Shopping
                </Typography>
                <IconButton variant="text" color="blue-gray" onClick={onClose}>
                    <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                </IconButton>
            </div>
            <List>
                {
                    _.map(routes, (item: IRoutesSidebar, index: number) => (
                        <a key={index} href={item.path}>
                            <ListItem className={`font-semibold text-black ${window.location.pathname === item.path  ? 'bg-[#00E676]': ''}`}>
                                {item.name}
                            </ListItem>
                        </a>
                    ))
                }
            </List>
        </DrawerStyles.Drawer>
    );
}

export default Drawer;