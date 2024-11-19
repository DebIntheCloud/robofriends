import React, { Component } from "react";  // Corrected import

class ErrorBoundry extends Component {     // Extends Component (capital C)
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    // Removed the semicolon after method signature
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    // Removed the semicolon after method signature
    render() {
        if (this.state.hasError) {
            return <h1>Ooops. That is not good</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundry;
