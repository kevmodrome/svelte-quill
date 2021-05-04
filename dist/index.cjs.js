'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Quill = _interopDefault(require('quill'));

function quill(node, options) {
  const quillInstance = new Quill(node, {
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        ["link", "code-block"]
      ]
    },
    placeholder: "Type something...",
    theme: "snow", // or 'bubble'
    ...options
  });
  const container = node.getElementsByClassName("ql-editor")[0];

  quillInstance.on("text-change", function(delta, oldDelta, source) {
    node.dispatchEvent(
      new CustomEvent("text-change", {
        detail: {
          html: container.innerHTML,
          text: quillInstance.getText()
        }
      })
    );
  });
  return quillInstance;
}

exports.quill = quill;
