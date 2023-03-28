# Linagee documentation website

#### Currently, this documentation website is hosted at [https://docs.linagee.com](https://docs.linagee.com)

The documentation is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
With Docusaurus, you write Markdown files and Docusaurus generates a beautiful static website for you.

### Steps to writing/updating documentation

1. Clone the repo
2. Install dependencies
    ```bash
    npm install
    ```
3. Make your changes to the markdown files in the `/docs` folder
4. Run the development server
    ```bash
    npm start
    ```
5. Open the documentation in your browser at `http://localhost:3000/` and
   make sure everything looks good
6. When you are done, build the static site
    ```bash
    npm run build
    ```
   Then publish it in your favorite location.
   I recommend using [Vercel](https://vercel.com/) to host the static site. It's free and easy to use.

7. Commit and push your changes to the `main` branch or create a pull request
