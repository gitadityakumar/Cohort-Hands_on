## useMemo Hook

This app is solely designed for utilizing the `useMemo` hook. However, there are alternative methods to address the underlying issue.

The problem with this app arises when we click the count button, triggering a re-render of the counter. Each time this happens, the logic recalculates the sum within the given range.

**Solution**: We'll employ the `useMemo` hook. Now, our component renders, but not every time the input changes. Instead, it performs the expensive operation only when the input changes, updating the sum accordingly. Even as the counter changes, the app still re-renders, yet the sum remains memoized.
