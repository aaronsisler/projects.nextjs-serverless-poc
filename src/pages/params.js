import React from "react";

class Params extends React.Component {
  static getInitialProps({ query }) {
    return { query };
  }

  render() {
    const { query } = this.props;
    return (
      <main>
        <h2>This is the Params Page</h2>
        <h5>Query: {query.projectId}</h5>
      </main>
    );
  }
}

export default Params;
