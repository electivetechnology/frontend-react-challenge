/*
Lodash is a JavaScript library that helps programmers write
more concise and easier to maintain JavaScript.
*/
import * as _ from "lodash";

// handle 3rd party css errors from old parser - needs upgrading
// handle 3rd party prop type error - needs upgrading
// handle content editable error - known issue
const originalConsoleError = console.error;
console.error = console.warn = function(msg) {
  if (_.startsWith(msg, "Error: Could not parse CSS stylesheet")) return;
  if (_.startsWith(msg, "Warning: Failed prop type")) return;
  if (
    _.startsWith(
      msg,
      "Warning: A component is `contentEditable` and contains `children` managed by React."
    )
  )
    return;
  originalConsoleError(msg);
};
