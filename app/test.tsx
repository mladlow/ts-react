/// <reference path='../typings/browser.d.ts'/>

import * as React from "react";
import * as DOM from "react-dom";

class DemoProps {
  public name: string;
  public age: number;
}

class Demo extends React.Component<DemoProps, any> {
  private foo: number;
  constructor(props: DemoProps) {
    super(props);
    this.foo = 42;
  }

  render() {
    return <div>Hello world!</div>
  }
}

function render() {
  DOM.render(
    <Demo name={"meggie"} age={29}/>,
      document.getElementsByClassName('appbody')[0]
  );
}

render();
