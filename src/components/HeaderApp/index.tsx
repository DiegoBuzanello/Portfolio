import React from 'react';
import Button from '@material-ui/core/Button';
import { Wrapper } from '../../tools/Wrapper';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { useHistory } from "react-router-dom";

// import {PdfEN} from '../../assets/pdf/Diego-Buzanello_CV-EN.pdf';

import './styles.css';

function HeaderApp() {
    const PdfPT = '/assets/pdf/diego-buzanello_cv.pdf';
    const history = useHistory();

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<any>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: any) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: any) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);

    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <header id="header-component">
            <Wrapper>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    className="cv-button"
                >
                    DOWNLOAD CV
                </Button>
                <Popper placement="bottom-end" className="cv-button-options" open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>

                                        <a target="_blank" href={process.env.PUBLIC_URL + '/cv/diego-buzanello_cv.pdf'}>
                                            <MenuItem>
                                                <span className="option-pdf">
                                                    Português
                                                </span>
                                            </MenuItem>
                                        </a>

                                        <a target="_blank" href={process.env.PUBLIC_URL + '/cv/diego-buzanello_cv-en.pdf'}>
                                            <MenuItem>
                                                <span className="option-pdf">
                                                    English
                                            </span>
                                            </MenuItem>
                                        </a>

                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>

            </Wrapper>
        </header>
    );
}

export default HeaderApp;