import { useEffect } from "react";

/**
 * A custom hook to persist form input values to localStorage.
 * It loads values on mount and saves them on unmount.
 * @param {Object.<string, React.RefObject<HTMLInputElement>>} refs - An object where keys are the storage keys
 * and values are the ref objects attached to the input elements.
 */
export const usePersistentForm = ({ refs }) => {
  console.log(refs);
  useEffect(() => {
    // This object will hold the actual DOM nodes. We capture them here
    // so we can access their values in the cleanup function.
    const nodes = {};

    console.log("✅ Hook Mounted: Loading data from localStorage...");

    // Iterate over every key-ref pair passed into the hook
    for (const key in refs) {
      const ref = refs[key];
      if (ref && ref.current) {
        // 1. Capture the DOM node for use in the cleanup function later
        nodes[key] = ref.current;

        // 2. Load the saved value from localStorage
        const savedValue = localStorage.getItem(key);

        // 3. If a value was found, set it on the input element
        if (savedValue !== null) {
          nodes[key].value = savedValue;
          console.log(`   -> Loaded '${savedValue}' into input for '${key}'`);
        }
      }
    }

    // This cleanup function is returned and will run when the component unmounts
    return () => {
      console.log("🛑 Hook Unmounting: Saving data to localStorage...");

      // Iterate over the captured DOM nodes
      for (const key in nodes) {
        const node = nodes[key];
        const valueToSave = node.value;

        // Save the current value of the input to localStorage
        if (valueToSave) {
          localStorage.setItem(key, valueToSave);
          console.log(`   -> Saved '${valueToSave}' for '${key}'`);
        } else {
          // Optional: If the field is empty, remove it from storage
          localStorage.removeItem(key);
        }
      }
    };
  }, [refs]); // The effect depends on the refs object
};