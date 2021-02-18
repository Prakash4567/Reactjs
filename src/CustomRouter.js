import React from 'react';
import LifeCycleDemo from './LifeCycleDemo/LifeCycleDemo';
import Calculator from './Calculator/Calculator';
import Movies from './Movies/Movies.jsx';
import { Route } from "react-router-dom";

export function CustomRouter() {
  return (
    <div className="CustomRouter">
      <Route path="/movies" component={Movies} />
      <Route path="/calc" component={Calculator} />
      <Route path="/lcd" component={LifeCycleDemo} />
    </div>
  );
}
