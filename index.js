import Quill from "quill";

export function quill(node) {
  const quill = new Quill(node, {
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        ["link", "code-block"]
      ]
    },
    placeholder: "Type something...",
    theme: "snow" // or 'bubble'
  });

  quill.on("text-change", function(delta, oldDelta, source) {
    node.dispatchEvent(
      new CustomEvent("text-change", {
        detail: {
          html: node.getElementsByClassName("ql-editor")[0].innerHTML,
          text: quill.getText()
        }
      })
    );
  });
}
