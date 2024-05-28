# 🍅 Pomodoro

This timer [app](https://our-pomodoro.netlify.app/), built with React and TypeScript, is designed to enhance productivity. I developed it as a side project to learn new skills and customize features to better suit my personal workflow, which has significantly improved my daily task management.

## 📸 Screenshots

|                                                   |                                                  |
| :-----------------------------------------------: | :----------------------------------------------: |
| ![Screenshot 6](https://i.imgur.com/tJm5TQf.jpeg) | ![Screenshot 5](https://i.imgur.com/OMgwa1J.jpeg) |
| ![Screenshot 3](https://i.imgur.com/ajOYyXQ.jpeg) | ![Screenshot 4](https://i.imgur.com/uW2mfZg.jpeg) |
| ![Screenshot 2](https://i.imgur.com/qEjLyXK.jpeg) | ![Screenshot 1](https://i.imgur.com/lei3Ntj.jpeg) |
| ![Screenshot 2](https://i.imgur.com/Xje7MVo.jpeg) | ![Screenshot 1](https://i.imgur.com/6m3c63y.jpeg) |

## Prerequisites

- [NodeJS](https://nodejs.org/en/) version 14+
- [Docker](https://docs.docker.com/engine/install/ubuntu/) (optional, if you will be running the App with docker)

## 📦 Technologies

- <code>Vite</code>
- <code>React.js</code>
- <code>TypeScript</code>
- <code>Tailwind CSS</code>
- <code>Testing Library</code>
- <code>Jotai</code>
- <code>Driver.js</code>

## ✨ Features

Here's what Pomodoro offers:

- **Start Pomodoro Session**: Just hit start, and you're off!
- **Timer Indicators**: Keep an eye on your time with handy indicators.
- **Customise Settings**: Tailor your focus and break times to your liking.
- **Track Daily Tasks**: Manage your to-dos effortlessly - add, remove, edit, and toggle tasks as needed.
- **Estimate Finish Time**: Get an estimate of the time required to complete your daily tasks.

## 🤔 How to use a Pomodoro timer?

1. **Add tasks** to work on today
2. **Set estimate pomodoros** (1 = 25min of work) for each task
3. **Select a task** to work on
4. **Start timer** and focus on the task for 25 minutes
5. **Take a break** for 5 minutes when the alarm rings
6. **Iterate** 3-5 until you finish the tasks

> ℹ️ Tip:
> The selected task will update its estimate pomodoro number once the pomodoro timer has finished!

## 📚 What I Learned

- Wireframing the app
- Structuring React projects
- Create custom hooks
- Exploring Jotai, global state management
- Discovering Driver.js
- Utilising Web Worker
- Implementing unit tests and component tests

## 💭 How can it be improved?

- Enable customisation of background color for different timer mode
- Enable customisation of sound
- Implement user authentication for access across devices
- Introduce a reward or punishment system to incentivize focus and facilitate mindfulness

## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1. Clone this project using the following command:

   ```bash
   git clone https://github.com/oyerohabib/pomodoro.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pomodoro
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Build the project:

   ```bash
   npm run build
   ```

5. Preview the project:

   ```bash
   npm run preview
   ```

6. Open <http://localhost:5173> (or the address shown in your console) in your web browser to view the app.

7. To run the test cases, use:

   ```bash
   npm run test
   ```

Alternatively, you can run the application using Docker, after step 2 above, run the below commands:

1. Open and start the Docker Application on your computer.
2. Login into docker by running, ```docker login``` command and ensure the login is successful.
3. Build the Docker Image:

   ```bash
   docker build -t pomodoro .
   ```

4. Run the Docker Container:

   ```bash
   docker run -p 5173:5173 -d pomodoro:1.0
   ```

Alternatively, you can pull the docker image (from docker hub) and simply run, without having to build or clone it.

1. Pull the Docker Image:

   ```bash
   docker pull habibo1234/pomodoro:1.0
   ```

2. Run the Docker Image:

   ```bash
   docker run -p 5173:5173 -d habibo1234/pomodoro:1.0
   ```

## Contributing to project

Thank you for considering contributing to the Pomodoro App! We welcome contributions from the community to help improve and grow the project.

Please note that this project adheres to the [Contributor Covenant Code of Conduct](CONTRIBUTING.md). By participating, you are expected to uphold this code. Please report any unacceptable behavior.

## License

This project is licensed under the [MIT License](LICENSE).
