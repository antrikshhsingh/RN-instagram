import React from 'react';
import Navigation from './navigation/navigation';
import Amplify from 'aws-amplify'
import {withAuthenticator,AmplifyTheme} from 'aws-amplify-react-native'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)


const App = () => {
  return <Navigation />;
};

// const signUpConfig = {
//   hideAllDefaults: true,
//   signUpFields: [
//     {
//       label: "Full name",
//       key: "name",
//       required: true,
//       displayOrder: 1,
//       type: "string",
//       placeholder: "Full name",
//     },
//     {
//       label: "Email",
//       key: "email",
//       required: true,
//       displayOrder: 2,
//       type: "string",
//       placeholder: "Email",
//     },
//     {
//       label: "Username",
//       key: "username",
//       required: true,
//       displayOrder: 3,
//       type: "string",
//       placeholder: "Username/handle",
//     },
//     {
//       label: "Password",
//       key: "password",
//       required: true,
//       displayOrder: 4,
//       type: "password",
//       placeholder: "Password",
//     },
//   ],
// };

// const customTheme = {
//   ...AmplifyTheme,
//   button: {
//     ...AmplifyTheme.button,
//     backgroundColor: '#5c78ff',
//     borderRadius: 100,
//   },
//   buttonDisabled: {
//     ...AmplifyTheme.buttonDisabled,
//     backgroundColor: "#5c78ff",
//     borderRadius: 100,
//   },
//   sectionFooterLink: {
//     ...AmplifyTheme.sectionFooterLink,
//     color: '#5c78ff',
//   },
// };

export default App;
