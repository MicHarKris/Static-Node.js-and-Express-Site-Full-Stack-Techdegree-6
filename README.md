# Static-Node.js-and-Express-Site
 A portfolio site to showcase projects.

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