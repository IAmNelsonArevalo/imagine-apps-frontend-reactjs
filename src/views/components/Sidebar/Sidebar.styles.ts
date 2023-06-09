import { styled } from "styled-components";
import tw from "twin.macro";
import {
    Card
} from "@material-tailwind/react";

type TSidebarStyles = {
    Card: any;
    Svg: any;
}

let SidebarStyles: Partial<TSidebarStyles> = {}

SidebarStyles.Card = styled(Card)`
    ${tw`relative h-[100vh] w-full max-w-[20rem] shadow-xl rounded-[0] shadow-blue-gray-900/5 bg-[#111827] px-4`}

    @media (max-width: 1024px) {
        display: none !important;
    }
`;

SidebarStyles.Svg = styled.svg`
    ${tw`w-[20px] min-tablet:hidden block`}
`;

export default SidebarStyles;