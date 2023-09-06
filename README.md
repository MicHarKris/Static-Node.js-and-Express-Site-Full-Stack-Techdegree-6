# Static-Node.js-and-Express-Site
 A portfolio site to showcase projects.

'In this project, you'll create a gorgeous portfolio site to showcase the great projects you've built. The site will contain a modern landing page, an about page where you'll have a chance to share contact info, practice your elevator pitch and talk a little about yourself, and a series of project pages to show off and detail at least your first five projects from this Techdegree.
- You'll create a JSON file to store all the data about the projects you've created.
- You'll use Pug to complete provided templates that utilize the JSON to generate the markup that is ultimately displayed in the browser.

You'll use Node.js and Express to:
- Import the required dependencies
- Link the JSON with the Pug templates
- Set up routes to handle requests
- Set up the middleware to utilize static files like CSS
- Handle errors
- Set up a server to serve the project'

Includes:
Templates
- Dynamic use of Layout, Index, Project and About .pug files, that generate the html based on generic templates that are then filled with data from .json files.

Routes
- Several routes, both static and dynamic.

Data
- data.json containes a project object, that arranges the required information about each project, and image paths, and links to project live link and GitHub

Layout, CSS and Styles
- Changes made to the original styles.css:

- Changed Sidebar color:
    .sidebar {
        ...
        background: #FFF44E;
    }

- Changed Sidebar text color:
    .sidebar h5 {
        ...
        color: #221F20;   
    }, 
    .sidebar p {
        ...
        color: #221F20;   
    }, 
    .sidebar a {
        ...
        color: #221F20;   
    }, 

- Changed Sidebar Thumbnail Border color and added shadow:
    .sidebar .thumbnail {
        ...
        border: 4px solid #221F20;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    }

- Changed H1 font:
    h1{
        font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        letter-spacing: 2.5px;
        -webkit-text-transform: uppercase;
        text-transform: uppercase;
    }

- Added shadow on images and buttons:
    .cell img {
        ...
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    },
    .project-img {
        ...
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    }, 
    .btn-link {
        ...
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    }