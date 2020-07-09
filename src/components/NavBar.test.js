import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
import { act } from "react-dom/test-utils";
import 'jest-enzyme';
import NavBar from './NavBar';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders", () => {
    act(() => {
      render(<Router><NavBar /></Router>, container);
    });
    expect(container.textContent).toBe("Logout Hotels");
  });