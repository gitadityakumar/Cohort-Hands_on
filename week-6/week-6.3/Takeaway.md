## Reconciliation 
In React, reconciliation refers to the process where the ReactDOM library efficiently calculates the difference between the previous and current states of components, and then applies only the necessary changes to the DOM to reflect those state updates. This process optimizes performance by minimizing unnecessary DOM manipulations, resulting in a more responsive and efficient user interface.

## useEffect 

- **Side Effects**:
  - Use `useEffect` when you need to perform side effects in your functional components. Side effects include things like data fetching, subscriptions, or manually changing the DOM.
  - Examples of side effects include fetching data from an API, subscribing to event listeners, or setting up timers.

- **Component Lifecycle**:
  - `useEffect` allows you to perform side effects after the component has rendered to the DOM. It combines the functionalities of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.
  - The function passed to `useEffect` will run after the component renders for the first time, and then after every update.

- **Dependencies**:
  - Pass an array of dependencies as the second argument to `useEffect`. This array specifies which values the effect depends on. The effect will re-run whenever any of these dependencies change.
  - If the dependency array is empty (`[]`), the effect will only run once after the initial render, similar to `componentDidMount` in class components.

- **Cleanup**:
  - If your effect requires cleanup (e.g., unsubscribing from a subscription or clearing a timer), return a function from the effect. This function will run before the component unmounts and before each subsequent re-render.
  - This cleanup function is analogous to `componentWillUnmount` in class components.

- **Avoiding Infinite Loops**:
  - Be careful to avoid infinite loops by ensuring that the effect's dependencies are properly specified. If the effect's dependencies change within the effect itself, it can trigger an infinite loop.
  - To prevent this, ensure that the dependencies array contains all values that the effect depends on, and be mindful of when and how these dependencies change.

Overall, `useEffect` is essential for managing side effects in functional components and allows you to integrate imperative, non-declarative code into your React applications while still leveraging the component-based architecture.




## useMemo 

1. Computing Derived Data:
Use useMemo when you need to perform complex computations to derive data from props or state.
Memoize the result of the computation to ensure it's only recalculated when its dependencies change .

2. Optimizing Expensive Functions:
Wrap computationally expensive functions with useMemo to memoize the function itself.
This prevents the function from being recreated on every render, optimizing performance.
3. Preventing Unnecessary Renders:
Memoize values with useMemo to prevent unnecessary re-renders of child components.
By memoizing values and passing them down as props, you ensure that child components only re-render when the memoized value changes, not on every parent render.


## memo

1. In React if a parent re-renders then its child also re-renders 

2. `memo ` lets you skip re-rendering a component when its props are unchanged.


## useRef



