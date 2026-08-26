sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: server responds with HTTP status code 302
    deactivate server

    Note: 302 is the server asking browser to perform a new HTTP GET request
    Note: So, browser now reloads the Notes page after which it sends atleast 3 more HTTP requests


    Note: 1st request to get the css file
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server


    Note: 2nd request to get the javascript file
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note: 3rd to get the json file from the server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note:  The browser executes the callback function that renders the notes