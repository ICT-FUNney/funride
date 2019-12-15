import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';

const HeaderStyles = {
    list: {
        width: 250,
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    appBarColorDefault: {
        backgroundColor: '#49BAEB',
    }
};

class Header extends Component {
    state = {
        left: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <Link to="/map">
                        <ListItem button>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                    <Link to="/login">
                        <ListItem button>
                            <ListItemText primary="About" />
                        </ListItem>
                    </Link>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <React.Fragment>
                    <AppBar position="fixed" classes={{colorPrimary: this.props.classes.appBarColorDefault}}>
                        <Toolbar>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                                <MenuIcon />
                            </IconButton>
                            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    onClick={this.toggleDrawer('left', false)}
                                    onKeyDown={this.toggleDrawer('left', false)}
                                >
                                    {sideList}
                                </div>
                            </Drawer>
                            <strong>
                                <Link to="/" style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit', fontFamily: 'Montserrat, sans-serif', }}>funride</Link>
                            </strong>
                        </Toolbar>
                    </AppBar>
                    <Toolbar/>
                </React.Fragment>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(HeaderStyles)(Header);