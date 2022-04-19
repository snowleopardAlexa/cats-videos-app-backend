<div id="top"></div>
<!-- PROJECT SHIELDS -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/snowleopardAlexa/cats-videos-app-backend">
    <img src="cat-logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Cats Videos App</h3>

  <p align="center">
    This is a back-end for cats-videos-app. It had been built with Strapi 3 and MongoDB. Strapi 4 dropped support for MongoDB hence it could not be used for this project. It was necessary to install plugin Cloudinary for deployment to Heroku due to the fact that Strapi does not store media content like images and videos. 
    <br />
    <a href="https://github.com/snowleopardAlexa/cats-videos-app-backend"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="">View Demo</a>
    ·
    <a href="https://github.com/snowleopardAlexa/cats-videos-app-backend/issues">Report Bug</a>
    ·
    <a href="https://github.com/snowleopardAlexa/cats-videos-app-backend/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#dependencies">Dependencies</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## Cats Videos App

![Alt text](strapi.png?raw=true "Cats Videos App") 
![Alt text](postman-1.png?raw=true "Cats Videos App") 
![Alt text](mongo.png?raw=true "Cats Videos App") 
![Alt text](cloud.png?raw=true "Cats Videos App") https://

### Built With

* [Strapi@v3.2.3](https://docs-v3.strapi.io/developer-docs/latest/getting-started/introduction.html)
* [MongoDB](https://www.mongodb.com/)
* [Cloudinary](https://cloudinary.com/)


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/snowleopardAlexa/cats-videos-app-backend.git
   ```
2. Install node_modules
   ```sh
    npm install
   ```
3. Run development server
    ```sh
    npm run develop
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

### Dependencies

- @strapi/provider-upload-cloudinary: "^4.1.8",
- strapi: "3.2.3",
- strapi-admin: "3.2.3",
- strapi-connector-mongoose: "3.2.3",
- strapi-provider-upload-cloudinary: "^3.6.8",

<!-- USAGE EXAMPLES -->
## Usage

This project had been built for an assignment. 

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap
1. Create MongoDB Cluster in Atlas
2. Create project with Strapi 3 and MongoDB by using Docker
3. Create Collection called Video
4. Add Content Type
5. Add Media Content
6. Create Entry for each Video - add title, year, body, slug, url, video, avatar
7. Publish each Videos
8. Set up User Permissions - Roles
9. Install Cloudinary plugin
10. Configurate Environmental Variables for Cloudinary
11. Configure Environmental Variables for MongoDB
12. Test GET, POST, PUT, DELETE methods with POSTMAN. 

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

None

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Aleksandra Slomska - aleksandravslomska@gmail.com

Project Link: https://github.com/snowleopardAlexa/cats-videos-app-backend

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/snowleopardAlexa/medium-clone.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
