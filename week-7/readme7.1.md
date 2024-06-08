# Context API & Prop Drilling

## Jargons

1. `Single page Application` : all frontend apps where we are dynamically changing pages, not fetching from any backend.

2. `Client side bundle` : all js code given by any bundlers.

3. `Client side routing`: all routing code written by devs where we can get pages.

## Routing in Frontend 

1. `Routing`: In React we can use `react-router-dom` for routing.
2. `useNavigate` is a hook for navigating and it should be inside `BrowserRouter` or a component that resides inside a `BrowserRouter`.

## Lazy Loading

To implement lazy loading in your React application, the syntax is and do not forget to put route inside suspense :

```javascript
const Dashboard = lazy(() => import('./components/Dashboard'));

 <Route path="/dashboard" element={<Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <ClipLoader size={50} color={"#123abc"} loading={true} />
          </div>}><Dashboard/></Suspense>} />
          


```

## pro drilling
Passing props is a great way to explicitly pipe data through your UI tree to the components that use it.

But passing props can become verbose and inconvenient when you need to pass some prop deeply through the tree, or if many components need the same prop. The nearest common ancestor could be far removed from the components that need data, and lifting state up that high can lead to a situation called “prop drilling”
## contextapi



if we are not using redux or recoil then contextapi is the best way for state management 
for optimal state management we can also use reducer/useReducer hook when we don't want to use statemanagement libraries.


## Recoil selector vs useMemo hook use

commit 26538d00e53db62fb10ac8ffaf3b1bc66beeb526 , in this commit work can be done using both but using selector is optimal approach bcz this is globally while useMemo is component specific . 