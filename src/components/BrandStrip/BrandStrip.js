import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../../modules/config/theme";
import logo from "../../static/images/dol.png";

const Band = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 25px;
    background-color: ${theme.colors.primaryDarkest};
    color: ${theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
`;

const BrandText = styled.span`
    font-weight: bold;
    font-size: 1em;
    padding-left: 10px;
`;

const BrandLogo = styled.img`
    padding-right: 10px;
    max-height: 100%;
`;

class BrandStrip extends Component {
    render() {
        return (
            <Band id="brand-band">
                <BrandText id="brand-name">ILAB</BrandText>
                <BrandLogo id="brand-logo" src={logo} alt="Brand Strip Logo" />
            </Band>
        );
    }
}

export default BrandStrip;
