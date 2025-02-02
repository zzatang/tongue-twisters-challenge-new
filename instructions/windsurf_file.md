## Project Overview

### Project Name:

Tongue Twisters Challenge

### Description:

A web-based platform designed to assist children with speech impediment issues in improving their pronunciation using tongue twisters. The platform incorporates artificial intelligence for real-time speech-to-text recognition and provides constructive feedback to foster learning.

### Target Audience:

The platform is intended for children aged 8 to 13 who may benefit from enhanced speech practice, with capabilities for unsupervised use.

### Tech Stack:

*   **Frontend:** Next.js 14, TypeScript, Tailwind CSS, shadcn/UI, Radix UI, Lucide Icons
*   **Backend & Storage:** Supabase (for scalable database, auth, storage purposes)
*   **AI Integration:** OpenAI for feedback generation, Python SpeechRecognition for streaming speech-to-text processing
*   **Authentication & User Management:** Clerk

### Key Features:

1.  Secure user accounts treating all users equally without a differentiated role system.
2.  A comprehensive library of tongue twisters categorized by difficulty.
3.  Real-time speech-to-text recognition using Python SpeechRecognition.
4.  AI-driven feedback that evaluates performance for accuracy, fluency, and provides improvement suggestions.
5.  Gamification elements including scores and badges to incentivize regular use.

## Project Structure

### Root Directory:

Houses main configuration files and documentation crucial for understanding the project at a glance.

### /frontend:

Contains all components related to the frontend, styles, and assets.

*   **/components:** Various UI components such as RegistrationForm, Dashboard, TongueTwisterDisplay, and FeedbackModal.
*   **/assets:** Visuals and audio resources enhancing interactive elements.
*   **/styles:** CSS files for styling components and global UI consistency.

### /backend:

Contains backend infrastructure code, including API controllers and database model definitions.

*   **/controllers:** Business logic modules such as AuthController, SpeechAnalysisController, and LeaderboardController.
*   **/models:** Defines database schemas like UserModel, ScoreModel, and TongueTwisterModel.
*   **/routes:** Router configuration for API endpoints, e.g., authRoutes.js, twisterRoutes.js, feedbackRoutes.js.

### /config:

Manages environment variables and application settings essential for deployment.

### /tests:

Dedicated space for unit and integration tests ensuring code reliability across both frontend and backend.

## Development Guidelines

### Coding Standards:

Adopt ES6+/TypeScript conventions for robust code quality. Maintain code consistency using Prettier and ESLint.

### Component Organization:

Segment components by their functionalities within the `/components` directory to ensure a clean and maintainable codebase.

## Windsurf IDE Integration

### Setup Instructions:

1.  Clone the repository.
2.  Install the necessary dependencies using `npm install`.
3.  Configure environment variables within the `/config` directory.
4.  Launch the app with Windsurf for an enhanced development workflow.

### Key Commands:

*   `npm run dev`: Invoke the development server.
*   `npm test`: Execute all test suites.
*   `npm run build`: Build a production-ready application.

## Additional Context

### User and Role Permissions:

The platform does not differentiate between user roles; all users are treated equally with standard user rights and access.

### Data Privacy:

Data handling conforms to the highest standards of security and privacy, implementing measures like encryption and access controls, in compliance with COPPA and GDPR.

### Gamification Strategy:

Children are rewarded through a gamified approach, earning badges for achievements and maintaining motivation via a leaderboard system.

### Design and Usability:

Design incorporates bright, engaging colors alongside user-friendly navigation tailored for children, ensuring intuitive interactions while supporting accessibility practices.
