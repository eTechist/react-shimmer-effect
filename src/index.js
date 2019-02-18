import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import classNames from "classnames";
import styles from "./style";

class Shimmer extends Component {
  /**
   * Appending animating shimmer class to the Shimmer component's child.
   */
  appendShimmerToChild(child) {
    const { classes } = this.props;
    return React.cloneElement(child, {
      className: classNames(child.props.className, classes.shimmer)
    });
  }

  render() {
    const { children } = this.props;
    let modifiedChildren = [];
    if (children.length > 0) {
      children.forEach(element => {
        modifiedChildren.push(this.appendShimmerToChild(element));
      });
    } else {
      modifiedChildren = this.appendShimmerToChild(children);
    }
    return <Fragment>{modifiedChildren}</Fragment>;
  }
}

Shimmer.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.object
};

export default injectSheet(styles)(Shimmer);
