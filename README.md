# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Workflow

The landing page is Dashboard Screen.
To view perspective details, click any perspective like Digital Transformation, Digital Culture and Environment etc.
In details screen, you can navigate back to Dashboard or you view more details under Overview and Evidence tabs.

## How the Code Was Built

### The project follows a component-based architecture using React.

• Each screen from the Figma design is implemented as a separate page or main component.
• Reusable UI elements (cards, tables, charts, headers) are abstracted into shared components.
• Material UI Grid and Box components are used to replicate spacing, alignment, and responsiveness from the Figma design.
• Chart.js is integrated to render graphs such as bar charts, line charts, and pie/donut charts.
• Static/mock data is used to populate charts and tables to focus on UI/UX implementation accuracy.
• Styling is primarily handled through MUI’s styling system to maintain consistency and theme control.

## Assumptions Made

• The project is UI-focused, so no backend APIs are connected.
• All data shown in charts and tables is mock/static data, assuming real data would be provided via APIs in a production environment.
• Authentication, authorization, and role-based access are out of scope.
• The dashboard is optimized primarily for desktop and tablet views, as per the Figma design.
• Business logic and calculations are minimal, assuming they would be handled server-side in a real system.

## Improvements With More Time

### API Integration

• Connect the dashboard to real backend APIs.
• Implement loading states and error handling.

### State Management

• Introduce a global state manager (Redux Toolkit / Zustand) for better scalability.

### Performance Optimization

• Memoization of heavy components.
• Lazy loading for charts and large sections.

### Responsiveness Enhancements

• Improve mobile responsiveness for smaller screens.
• Add adaptive layouts for different breakpoints.

### Theming & Customization

• Implement MUI theme customization (dark/light mode).
• Centralized color and typography management.

### Testing

• Add unit tests and component tests using Jest and React Testing Library.
