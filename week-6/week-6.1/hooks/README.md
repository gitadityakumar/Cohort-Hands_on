# Hooks in React

## Jargons : lifecycle event , Mount , UnMount , 

1. In class based comonents where we get access to lifecycle functions , which was onComponentMount() and other bunch of like these.

2. funfact:  when we do pooling with fetch or axios.get() after shutting of dev server we will be sending request to server until we reload the page this behaviuor is comming from using fetch or axios.get() inside a useEffect(fn,[]); with no dependency array so to stop this behaviour we need add cleanup funciton.

