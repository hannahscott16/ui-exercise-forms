# Form UI Exercise

This repo contains an exercise focused to evaluate a breadth of skills, both technical and non technical. There are no wrong answers or questions so feel free to express yourself.

## Problem Description

You have been assigned a ticket to implement a user password reset form on a website we’re building. This is in no way indicative of how we work at Space 48 (I promise!) but you’ve only got one hour to implement the feature to the best of your abilities. At the end of the hour, you need to push what you’ve got and provide a follow-up comment to describe:

How you’ve approached implementing the ticket

-   Firstly took a look at all of the designs identifying all elements within the component
-   Then began to build out all of the elements in HTML only, adding classes to each and grouping using BEM
-   Then began to identify font styles, colours and font sizes
-   Taking each block element at a time I then added the relevant sass to match as closely as possible to the design
-   Once the component had styling I then moved onto hiding the instructions area so they could be access by the user clicking on the help question. I used a js click function to toggle the instructions sliding up and down.
-   I then began to work on the form method of sending the email address data
-   I converted the entered data to JSON format using FormData, ready to use in the post method to the reset password api

What changes you think should be made to improve the UX

-   I think a change in the success message could have been implemented to improve the UX, making it clearer that the users email address had successfully been sent and there were no more action required. Once submitted successfully I think the form should be removed leaving just the success message.

What improvements you’d make to the component given more time, and give an estimate for how long those changes would take to implement.

-   Given more time I would have continued with the method to post the entered email address to the api url. I have converted the data to JSON and would have used ajax to send the data to the reset password api. This would have then determined a response to identify if the email address belonged to an existing user or not, which would determine the actions following, either the success message or an error message.
-   I would have also continued to style the validation error messages to match the design given, instead the default validation messages are shown.
-   I also would have implemented and styled the success message once the method had been completed.
-   I then would have used the test email addresses with existing accounts provided to test the form as well as testing with email addresses without an account to check for validation.
-   I think these extra tasks would have taken a couple of hours to implement taking the whole task time to around 3/4 hours.

The ticket reads as follows:

> **Summary:**
>
> Implement the “Forgot Password” form
>
> **Description:**
>
> We need to implement a password reset form so that customers can reset their password. Please refer to the attached Invision link for direction on design.
>
> _Functional Requirements_
>
> -   The password reset instructions must show and hide as the customer clicks the question
> -   The form must perform a POST request with JSON to /customer/account/resetPassword
> -   The email field must contain a valid email address before the form submission is allowed
> -   The component must support showing error or success messages based on the response (you don’t need to hook this up to a backend API)
>
> _Browser Support_
>
> Chrome (latest), Chrome for Android (latest), iOS (latest)
>
> _Design Links_
>
> https://projects.invisionapp.com/share/9WXTESN3RN5

## Exercise Notes

-   Fork this repository (https://github.com/Space48/ui-exercise-forms) to your own Github account and make it private
-   Implement your changes on your own local branch
-   Push that local branch to your fork
-   Open a pull request to master on your fork

## Assessment

You will be assessed on the following:

Your use of HTML, JS, CSS, Git, Github

## System Requirements

-   [git](https://git-scm.com/)
-   [Node](https://nodejs.org/) (at least version 10.16.3)
-   [npm](https://www.npmjs.com/) (at least version 6.9.0)

## Setup

To setup the project, type the following into your terminal:

```
npm run setup
```

## Local development

Once the project is setup, start the local environment by running the following from your terminal:

```
npm run dev
```

This should start up both a JSON server that will provide an endpoint for the exercise, as well as a local server for the frontend.

-   Frontend available at http://localhost:1234
-   Data endpoint available at http://localhost:3005

All development work should be done inside the `src` directory.

## Test data

Existing users that can be used for the exercise are:

-   koosvandermerwe@space48.com
-   erika.mustermann@space48.com
-   john.doe@space48.com
-   joe.bloggs@space48.com
