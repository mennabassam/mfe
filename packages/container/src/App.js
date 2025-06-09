import React from "react";
import MarkitingApp from "../components/MarkitingApp";
import Header from "../components/Header";
import {StylesProvider, createGenerateClassName} from "@material-ui/core";
const generateClassName = createGenerateClassName({
    productionPrefix: "ca", 
  });

export default ()=>{
    return <>
    <StylesProvider generateClassName={generateClassName}>
    <Header />
       <hr /> 
    <MarkitingApp />
    </StylesProvider>
    </>
}