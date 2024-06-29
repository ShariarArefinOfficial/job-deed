//import React from 'react';

import PageTitle from "../../PageTitle/PageTitle";

const Blogs = () => {
    const title='Blogs'
    return (
        <div className="grid grid-cols-1  gap-5">
            <PageTitle title={title}></PageTitle>
            <div className="card w-1/2  bg-base-100 shadow-xl mx-auto">
 
  <div className="card-body items-center text-center">
    <h2 className="card-title">What is an access token and refresh token? How do they work and where should
we store them on the client side?</h2>
    <p>Access Tokens and Refresh Tokens
Access Tokens:

Purpose: Access tokens are used to access protected resources (like APIs) on behalf of a user.
Usage: They are included in API requests to authenticate and authorize those requests.
Lifespan: They typically have a short lifespan, ranging from a few minutes to an hour, to minimize the impact of a token being compromised.
Refresh Tokens:

Purpose: Refresh tokens are used to obtain new access tokens without requiring the user to re-authenticate.
Usage: When an access token expires, the refresh token can be sent to the authentication server to request a new access token.
Lifespan: They have a longer lifespan compared to access tokens, often lasting days, weeks, or even months.
How They Work
Authentication:

The user logs in, providing credentials to the authentication server.
The server validates the credentials and issues an access token and a refresh token.
Accessing Resources:

The client includes the access token in the Authorization header of API requests.
The server validates the access token and, if valid, processes the request and returns the response.
Token Expiry:

If the access token expires, the client uses the refresh token to request a new access token.
The server validates the refresh token and, if valid, issues a new access token (and possibly a new refresh token).
Storing Tokens on the Client Side
Access Tokens:

Storage Location: Store in memory (JavaScript variables) or in secure cookies.
Security Considerations: Since access tokens are short-lived, storing them in memory minimizes the risk of exposure. Avoid storing them in localStorage or sessionStorage due to their susceptibility to cross-site scripting (XSS) attacks.
Refresh Tokens:

Storage Location: Store in secure, HTTP-only cookies.
Security Considerations: Since refresh tokens have a longer lifespan and can be used to obtain new access tokens, they should be protected from exposure to client-side scripts. HTTP-only cookies are not accessible via JavaScript, reducing the risk of XSS attacks.
Best Practices
Token Storage:

Access Token: Store in memory or secure cookies.
Refresh Token: Store in HTTP-only secure cookies.
Token Security:

Use secure, HTTP-only cookies to store tokens when possible.
Ensure tokens are transmitted over HTTPS to prevent interception.
Implement short expiration times for access tokens to limit their window of use if compromised.
Use refresh tokens to avoid frequent user re-authentication, but ensure they are stored securely.
Token Management:

Implement automatic token renewal using refresh tokens to maintain seamless user experience.
Implement proper logout mechanisms to invalidate tokens server-side.
Monitor and handle potential token revocation scenarios.
XSS and CSRF Protection:

Implement Content Security Policy (CSP) to mitigate XSS risks.
Use CSRF tokens to protect against cross-site request forgery attacks when dealing with sensitive state-changing operations.</p>
    
  </div>
</div>
<div className="card w-1/2  bg-base-100 shadow-xl mx-auto">

  <div className="card-body items-center text-center">
    <h2 className="card-title">What is express js? What is Nest JS?</h2>
    <p>Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js.Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes. </p>
    <p>
    Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.
    </p>
   
  </div>
</div>

            
        </div>
    );
};

export default Blogs;