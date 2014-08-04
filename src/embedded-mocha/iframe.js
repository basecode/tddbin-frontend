/** @jsx React.DOM */

define(['react'], function(React) {

  var Iframe = React.createClass({

    getIframeRef: function() {
      return this.refs.iframe.getDOMNode();
    },

    render: function() {
      return (
        <iframe ref="iframe" src="../src/embedded-mocha/specRunner.html" width="100%" height="400"></iframe>
      );
    }

  });

  return Iframe;

});
