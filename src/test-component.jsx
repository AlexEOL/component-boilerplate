/**
 * Created by AlexEOL on 26.10.16.
 */
import styles from './style.scss';
import React from 'react';

export default
class TestComponent extends React.Component {
  render() {
    return (
      <div className={styles.testClass}>
        This is test component
      </div>
    );
  }
}

TestComponent.propTypes = {};
TestComponent.defaultProps = {};
