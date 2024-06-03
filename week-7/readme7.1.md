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

