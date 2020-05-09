import React from "react";
import {Box, Typography} from "@material-ui/core";

interface TabPanelProps {
    children: any;
}
export const TabPanel: React.FunctionComponent<TabPanelProps> = ({ children,...other}) => {
    return (
        <Typography
            component="div"
            role="tabpanel"
            id={`simple-tabpanel`}
            aria-labelledby={`simple-tab`}
            {...other}
        >
            { <Box p={3}>{children}</Box>}
        </Typography>
    );
};
