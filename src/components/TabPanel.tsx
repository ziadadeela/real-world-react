import React from "react";
import {Box, Typography} from "@material-ui/core";

interface TabPanelProps {
    children: any;
    value:number;
    index:number;
}
export const TabPanel: React.FunctionComponent<TabPanelProps> = ({ children, value, index,...other}) => {
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
};
