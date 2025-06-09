import React from "react";
import MarkitingApp from "../components/MarkitingApp";
import Header from "../components/Header";
import {stylesProvider, createGenerateClassName} from "@material-ui/core";
const generateClassName = createGenerateClassName({
    productionPrefix: "ca", 
  });

export default ()=>{
    return <>
    <stylesProvider generateClassName={generateClassName}>
    <Header />
       <hr /> 
    <MarkitingApp />
    </stylesProvider>
    </>
}