import React from "react";
import ReactDOM from "react-dom";
import FormComponent from "./components/form.component";

const App = () => {
    return <div>Template with React Webpack Babel
        <FormComponent/>
    </div>;
    // return
};

ReactDOM.render(<App/>, document.querySelector("#root"));
