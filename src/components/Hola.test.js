import React from "react";
import { render } from "@testing-library/react";
import Hola from "./Hola";
describe('Hola Mundo Component', ()=> {
    const{getByText} = render(<Hola/> );
    const holaText = getByText('Hola Mundo');
    expect(holaText).toBeDocument();
});
