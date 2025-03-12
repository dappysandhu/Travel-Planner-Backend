# Travel Planner Backend

## Project Description

Travel Planner Backend is a comprehensive server-side application designed to help users plan and manage their travel experiences. The application provides robust APIs for creating, managing, and tracking travel itineraries, destinations, and trip details.

## Features

- User authentication and authorization
- Create, read, update, and delete (CRUD) travel itineraries
- Destination management
- Trip planning and scheduling
- User profile management
- Collaborative trip planning

## Technologies Used

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Joi / Express-validator
- **Logging**: Winston
- **Testing**: Jest
- **API Documentation**: Swagger

## Prerequisites

- Node.js (v16.x or later)
- MongoDB (v5.x or later)
- npm (v8.x or later)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/travel-planner-backend.git
cd travel-planner-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the project root with the following variables:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/travel_planner
JWT_SECRET=your_jwt_secret
```

### 4. Run the Application

#### Development Mode

```bash
npm run dev
```

#### Production Mode

```bash
npm start
```

## Project Structure

```
travel-planner-backend/
│
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   └── utils/
│
├── tests/
├── config/
├── logs/
├── .env
├── package.json
└── README.md
```

## Running Tests

```bash
npm test
```

## Authentication

The backend uses JWT for secure authentication. Users must register and login to access protected routes.

## API Endpoints

### Authentication

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/profile`

### Trips

- `GET /api/trips`
- `POST /api/trips`
- `GET /api/trips/:id`
- `PUT /api/trips/:id`
- `DELETE /api/trips/:id`

## Recommended Git Branching Model (GitFlow)

- main branch – Stable version, contains production-ready code.
- develop branch – Ongoing development, merges features before they go to main.
- Feature branches (feature/branch-name) – For new features, merged into develop after completion.
- Bugfix branches (bugfix/branch-name) – For fixing bugs, merged into develop or main.
- Hotfix branches (hotfix/branch-name) – For urgent fixes applied directly to main.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

© 2025 Travel Planner Team. All rights reserved.

This is a private project. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited without explicit permission from the project owners.

## Contact

Project Link: [https://github.com/yourusername/travel-planner-backend](https://github.com/yourusername/travel-planner-backend)
