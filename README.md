# payslips-manager-gabriel-carvalho

## Online preview

https://payslips-manager.web.app/

## Description

Cross-platform application using React, Capacitor and TypeScript for managing and
viewing payslips.

## Features

- Upload and store payslips securely
- Organize payslips by date or category
- Search and filter payslips based on specific criteria
- Generate reports and summaries of payslip data
- Export payslips in various formats (PDF, CSV, etc.)
- Integration with payroll systems for automatic data retrieval

## Running the Web application locally

1. Clone the repository: `git clone https://github.com/gabriel-n-carvalho/payslips-manager-gabriel-carvalho`
2. Install the required dependencies: `npm install`
3. Start the application: `npm run dev`

## Running e2e tests locally

1. Start the development server: `npm run dev`
2. Run the e2e tests: `npx cypress open`

## Notes

#### Implemented the @capacitor/filesystem plugin to manage files on the device.

- ![alt text](https://firebasestorage.googleapis.com/v0/b/payslips-manager.appspot.com/o/app-views.png?alt=media&token=332953b2-6c58-424a-a452-ecc9f09f91ae)

#### Integrated the Redux Toolkit to manage the application's state. Although it may not be essential for a small project, I believe it's a good practice, especially for projects that may expand in the future. Also, I really like using the Redux DevTools Extension, as it simplifies maintaining larger projects.

- ![alt text](https://firebasestorage.googleapis.com/v0/b/payslips-manager.appspot.com/o/redux-toolkit.png?alt=media&token=934fb4d8-a52e-4155-86a1-39f9e263aa15)
