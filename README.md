<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Drupal (Rain) starter
</h1>

## 🚀 Quick start

Imoprtant: Install https://bitbucket.org/mediacurrent/rain_demo and https://www.drupal.org/sandbox/jaykali/3299990. Copy the API key from the "API" user that is created.

1.  **Clone/fork this repo**

    Run "yarn install" to install dependencies.

2.  **Add environment variables.**

    Create a file named **.env.development** with the following values:

    ```shell
    DRUPAL_URL=[Copy from Drupal]
    JSON_API_KEY=[Copy from API user]
    ENABLE_GATSBY_REFRESH_ENDPOINT=true
    ```

3.  **Test your Gatsby build.**

    ```shell
    npm run develop
    ```

5.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!
    
## Cypress Testing

Cypress provides end-to-end testing for Gatsby Drupal (Rain) starter. See tests in the `cypress` folder. Cypress configuration can be found [here](https://github.com/mediacurrent/gatsby-drupal-rain/blob/master/cypress.config.js).

[Cypress commands](https://github.com/mediacurrent/gatsby-drupal-rain/blob/master/package.json#L16) which can be run from Yarn or NPM:

- `cy:open` - Open an intecactive Cypress session when Gatsby is already running.
- `cy:run` - Run headless Cypress when Gatsby is already running.
- `test:e2e` - Start Gatsby develop and open an intecactive Cypress session.
- `test:e2e:ci` - Start Gatsby develop and run headless Cypress.

For more details on Cypress usage, see the [documentation](https://docs.cypress.io/guides/overview/why-cypress).
