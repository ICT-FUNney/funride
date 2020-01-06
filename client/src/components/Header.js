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
import { Avatar, Typography } from '@material-ui/core';

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
    constructor(props) {
        super(props)
        this.profStyle = {
            height: "50%",
            width: "100%",
            background: "#49BAEB",
            paddingLeft: "15%",
            paddingTop: "40%",
        };
        this.avatarStyle = {
            //top: "20%"
        };
        this.nameStyle = {
            marginTop: "20px"
        };
    };

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
                    <Link to="/Map">
                        <ListItem button>
                            <ListItemText primary="ホーム" />
                        </ListItem> 
                    </Link>   
                    <Link to="/request">
                        <ListItem button>
                            <ListItemText primary="依頼一覧" />
                        </ListItem>
                    </Link>
                    <Link to="/login">
                        <ListItem button>
                            <ListItemText primary="謝礼方法" />
                        </ListItem>
                    </Link>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <React.Fragment>
                    <AppBar position="fixed" classes={{ colorPrimary: this.props.classes.appBarColorDefault }}>
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

                                    <div style={this.profStyle}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://avatars1.githubusercontent.com/u/25400773?s=460&v=4"
                                            className={classes.large}
                                            style={this.avatarStyle} />

                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                            style={this.nameStyle}>
                                            高橋啓太
                                        </Typography>
                                    </div>
                                    {sideList}
                                </div>
                            </Drawer>
                            <strong>
                                <Link to="/map" style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit', fontFamily: 'Montserrat, sans-serif', }}>funride</Link>
                            </strong>
                        </Toolbar>
                    </AppBar>
                    <Toolbar />
                </React.Fragment>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(HeaderStyles)(Header);