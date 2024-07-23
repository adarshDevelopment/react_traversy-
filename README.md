# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



lessiongs to revise:
1. Proxy 

2. UseEffect: 
    the first time it loads, when the UI renders, the side effect causes the useEffecct to take action.

    Suspence:
        can run while loading the UI. can display a loading Spinner while in process.

3. Data Loader: from react routerin 'Single Job Page' section of the video

4. fetch()
    function fetch(
        input: string | URL | globalThis.Request,
        init?: RequestInit,
    ): Promise<Response>;

    It(init: requestInit) is an object (RequestInit) that contains settings and options for the request, such as headers, HTTP method, body content, etc. The RequestInit type is defined in the Fetch API specification and includes various properties that can be used to configure the request.

