import { EllipsisHorizontalIcon, BellAlertIcon } from "@heroicons/react/24/outline";
import * as React from 'react';
import CircularProgress, {
    type CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const theme = createTheme({
    palette: {
        primary: {
            main: '#7c86ff'
        }
    }
})

function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: 'text.secondary' }}
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

const Goals = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <ThemeProvider theme={theme}>

            <div className="p-5">
                <div className="h-[80px]">
                    <button className="m-5 cursor-pointer float-right p-2 bg-gray-700 text-white  rounded-[5px]">{'+'} Create Goals</button>
                </div>
                <div className="h-20 shadow-sm">
                    <div className="p-5">
                        <p className="text-md text-gray-700">Expenses</p>
                        <p className="text-2xl text-gray-900 text-semibold">ZAR 700 000</p>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="md:flex gap-4">
                        <div className="md:flex-4 shadow-sm h-75 relative">
                            <div className="flex p-3">
                                <p className="flex-11">Food</p>
                                <p className="flex-1 text-center cursor-pointer">
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                        className="float-right"
                                    >
                                        <EllipsisHorizontalIcon className="size-6" />
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        slotProps={{
                                            list: {
                                                'aria-labelledby': 'basic-button',
                                            },
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Edit Goal</MenuItem>
                                        <MenuItem onClick={handleClose}>Deactivate Goal</MenuItem>
                                        <MenuItem onClick={handleClose}>Delete Goal</MenuItem>
                                    </Menu>
                                </p>
                            </div>
                            <div className="p-3">
                                <p className="text-gray-500">Targeted Spending</p>
                                <p className="text-gray-900 text-xl mt-2 text-semibold">R4000.00</p>
                            </div>
                            <Divider />
                            <div className="p-3">
                                <div className="flex">
                                    <div className="flex-11">
                                        <p className="text-gray-500">Spent So far</p>
                                        <p>R1500.00</p>
                                    </div>
                                    <div className="flex-1 items-right">
                                        <CircularProgressWithLabel value={37.5} />
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="p-3">
                                <div className="flex">
                                    <div className="flex-8">
                                        <p className="text-gray-500">Budget Period</p>
                                        {/* <p>R1500.00</p> */}
                                    </div>
                                    <div className="flex-4">
                                        <p>3 Months</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 h-8 w-[100%] bg-indigo-200">
                                <div className="pl-3">
                                    <div className="mt-0.5">
                                        <BellAlertIcon className="size-5 flex-1 inline " /> <p className="mt-1.5 inline">Apr 25</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="md:flex-4 shadow-sm h-75 relative">
                            <div className="flex p-3">
                                <p className="flex-11">Food</p>
                                <p className="flex-1 text-center cursor-pointer">
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                        className="float-right"
                                    >
                                        <EllipsisHorizontalIcon className="size-6" />
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        slotProps={{
                                            list: {
                                                'aria-labelledby': 'basic-button',
                                            },
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Edit Goal</MenuItem>
                                        <MenuItem onClick={handleClose}>Deactivate Goal</MenuItem>
                                        <MenuItem onClick={handleClose}>Delete Goal</MenuItem>
                                    </Menu>
                                </p>
                            </div>
                            <div className="p-3">
                                <p className="text-gray-500">Targeted Spending</p>
                                <p className="text-gray-900 text-xl mt-2 text-semibold">R4000.00</p>
                            </div>
                            <Divider />
                            <div className="p-3">
                                <div className="flex">
                                    <div className="flex-11">
                                        <p className="text-gray-500">Spent So far</p>
                                        <p>R1500.00</p>
                                    </div>
                                    <div className="flex-1 items-right">
                                        <CircularProgressWithLabel value={37.5} />
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="p-3">
                                <div className="flex">
                                    <div className="flex-8">
                                        <p className="text-gray-500">Budget Period</p>
                                        {/* <p>R1500.00</p> */}
                                    </div>
                                    <div className="flex-4">
                                        <p>3 Months</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 h-8 w-[100%] bg-indigo-200">
                                <div className="pl-3">
                                    <div className="mt-0.5">
                                        <BellAlertIcon className="size-5 flex-1 inline " /> <p className="mt-1.5 inline">Apr 25</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="md:flex-4 shadow-sm h-75 relative">
                            <div className="flex p-3">
                                <p className="flex-11">Food</p>
                                <p className="flex-1 text-center cursor-pointer">
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                        className="float-right"
                                    >
                                        <EllipsisHorizontalIcon className="size-6" />
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        slotProps={{
                                            list: {
                                                'aria-labelledby': 'basic-button',
                                            },
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Edit Goal</MenuItem>
                                        <MenuItem onClick={handleClose}>Deactivate Goal</MenuItem>
                                        <MenuItem onClick={handleClose}>Delete Goal</MenuItem>
                                    </Menu>
                                </p>
                            </div>
                            <div className="p-3">
                                <p className="text-gray-500">Targeted Spending</p>
                                <p className="text-gray-900 text-xl mt-2 text-semibold">R4000.00</p>
                            </div>
                            <Divider />
                            <div className="p-3">
                                <div className="flex">
                                    <div className="flex-11">
                                        <p className="text-gray-500">Spent So far</p>
                                        <p>R1500.00</p>
                                    </div>
                                    <div className="flex-1 items-right">
                                        <CircularProgressWithLabel value={37.5} />
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="p-3">
                                <div className="flex">
                                    <div className="flex-8">
                                        <p className="text-gray-500">Budget Period</p>
                                        {/* <p>R1500.00</p> */}
                                    </div>
                                    <div className="flex-4">
                                        <p>3 Months</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 h-8 w-[100%] bg-indigo-200">
                                <div className="pl-3">
                                    <div className="mt-0.5">
                                        <BellAlertIcon className="size-5 flex-1 inline " /> <p className="mt-1.5 inline">Apr 25</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Goals;

