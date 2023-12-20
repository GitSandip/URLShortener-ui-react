# URL Shortener

URL Shortener is a web application that allows users to create shortened URLs, making it easier to share links. It includes features such as custom back-halves and redirection.

**Backend Repository:** [URL Shortener API](https://github.com/GitSandip/url-shortener-api/tree/master)

## Project Overview

URL Shortener provides a simple and efficient way to generate short URLs for long links. Users can customize the back-half of the URL, and the system checks for uniqueness to avoid duplicates.

## Features

- Shorten long URLs.
- Customize back-halves for personalized short URLs.
- Prevents duplicate back-halves to ensure uniqueness.
- Redirection to the original long URL.

## Technologies Used

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Other: Axios, Mongoose, etc.

## Setup Instructions

1. Clone the repository.
2. Navigate to the frontend and backend directories and run `npm install`.
3. Set up MongoDB and configure environment variables.
4. Run the frontend and backend servers using `npm start`.

## Usage

1. Enter the long URL and an optional custom back-half.
2. Click the "Shorten" button.
3. Copy and share the generated short URL.

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Follow our [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
