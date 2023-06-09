import { styled } from "styled-components";
import { Drawer } from "@material-tailwind/react";
import tw from "twin.macro";

let DrawerStyles: any = {};

DrawerStyles.Drawer = styled(Drawer)`
    ${tw`p-4`}
`;

export default DrawerStyles;