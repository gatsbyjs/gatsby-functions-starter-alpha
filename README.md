<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=gatsby-functions-starter-alpha">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby functions starter (Alpha Version)
</h1>

## 🚀 Quick start

1.  **Get Access Tokens for Airtable and Sendgrid.**

    This starter has examples from both Airtable and Sendgrid for posting forms and for sending emails. There are **3** environment variable you'll need to add your project:
    - `GATSBY_SENDGRID_API_KEY`: [Link to Sendgrid Page]
    - `GATSBY_AIRTABLE_KEY`: [Link to Airtable API Key page]
    - `GATSBY_AIRTABLE_DB`: [Link to Airtable DB Key page]

    You'll want to add these as environment variables when deploying to Gatsby Cloud. Don't forget to add them to the Preview variables if you plan to add a CMS preview integration. 


2.  **Start developing.**

    To get started, run `yarn` to add all necessary packages.

    When developing locally, you'll want to include the ENV variables inline with your `gatsby develop` command (i.e. `GATSBY_SENDGRID_API_KEY={your_key_here} gatsby develop`).


    ```shell
    cd gatsby-functions-starter-alpha
    yarn run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000! You can use the UI on the index page to test the functions or directly access them at http://localhost:8000/api/airtable and http://localhost:8000/api/sendgrid

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Deploy**

  [<img src="https://www.gatsbyjs.com/deploynow.svg">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/jsumnersmith/gatsby-functions-starter-alpha)
