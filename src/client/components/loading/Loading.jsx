import React from 'react';

function Loading(props) {
  return (
    <div className="lds-css ng-scope d-flex justify-content-center">
      <div style={{ width: '100%', height: '100%' }} className="lds-pacman">
        <div>
          <div />
          <div />
          <div />
        </div>
        <div>
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}

export default Loading;
