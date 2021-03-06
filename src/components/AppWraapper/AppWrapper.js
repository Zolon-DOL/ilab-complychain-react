import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Routes from "../../modules/config/routes";
import BrandStrip from "../BrandStrip";
import Icons from "../Icons";
import { withLanguageContext } from "../Language";
import BottomNavBar from "../Menu/BottomNavBar";
import NavBar from "../Menu/NavBar";
import { Navigator } from "../Navigation";
import Share from "../Share";
import ScrollToTop from "./ScrollToTop";
class AppWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = this.updateNavBarItems();
    }

    updateNavBarItems = () => {
        const { localizor } = this.props;
        const items = {
            navBarLeftItems: [
                {
                    props: {
                        as: NavLink,
                        to: Routes.WhatAre.path,
                        content: localizor.strings.info.whatAre.title,
                        id: "what-are-link",
                        key: "whatAre"
                    }
                },
                {
                    props: {
                        as: NavLink,
                        to: Routes.WhyDevelop.path,
                        content: localizor.strings.info.whyDevelop.title,
                        id: "why-develop-link",
                        key: "whyDevelop"
                    }
                },
                {
                    props: {
                        as: NavLink,
                        to: Routes.Basics.path,
                        content: localizor.strings.info.basics.title,
                        id: "basics-link",
                        key: "basics"
                    }
                }
            ],

            bottomNavItems: [
                {
                    props: {
                        as: NavLink,
                        to: "/bookmarks",
                        id: "bookmarks-link"
                    },
                    icon: Icons.Bookmarks,
                    label: localizor.strings.general.bookmarks
                },
                {
                    props: {
                        as: NavLink,
                        to: "/search",
                        id: "search-link"
                    },
                    icon: Icons.Search,
                    label: localizor.strings.general.search
                },
                {
                    props: {
                        as: Share,
                        id: "share-link"
                    },
                    icon: Icons.Share,
                    label: localizor.strings.general.share
                },
                {
                    props: {
                        as: NavLink,
                        to: "/about",
                        id: "about-link"
                    },
                    icon: Icons.HelpCircle,
                    label: localizor.strings.general.about
                }
            ]
        };
        return items;
    };
    componentDidUpdate(prevProps) {
        if (prevProps.localizor.language !== this.props.localizor.language) {
            this.setState({ ...this.updateNavBarItems() });
        }
    }
    render() {
        const { navBarLeftItems, bottomNavItems } = this.state;
        return (
            <ScrollToTop>
                <BrandStrip />
                <NavBar leftItems={navBarLeftItems}>
                    <Navigator />
                </NavBar>
                <BottomNavBar id="bottom-nav-bar" items={bottomNavItems} />
            </ScrollToTop>
        );
    }
}

AppWrapper.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(AppWrapper);
