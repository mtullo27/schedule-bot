# Discord Scheduling Bot

This Discord bot is designed to facilitate scheduling matches between users in a Discord server. The bot has the following functionality:

-   Scheduling matches between users
-   Updating scheduled match times
-   Providing a command list and usage guide

## Requirements

-   Node.js
-   Discord.js library

## Installation

1. Clone this repository or download the provided code.
2. Install the required dependencies using `npm install`.
3. Add your Discord bot token to the `client.login()` method at the bottom of the code.

## Usage

-   The bot uses the prefix `!` by default. You can change the prefix by modifying the `const prefix = "!"` line.
-   The following commands are available:
    -   `!schedule @user MM/DD HH:MM` - Schedule a match with a user
    -   `!updateSchedule @user MM/DD HH:MM` - Update a scheduled match
    -   `!howtoschedule` - Display a guide on how to use the scheduling commands

### Command Details

-   `!schedule @user MM/DD HH:MM`
    -   Schedule a match with a specific user. Replace `@user` with the user mention and provide the date and time in the format MM/DD HH:MM.
-   `!updateSchedule @user MM/DD HH:MM`
    -   Update the scheduled match time for a user. Replace `@user` with the user mention and provide the new date and time in the format MM/DD HH:MM.
-   `!howtoschedule`
    -   Displays a guide with available commands and their usage.

**Note:** When using the `!schedule` or `!updateSchedule` commands, ensure that the correct date and time format (MM/DD HH:MM) is provided, and the mentioned user is correctly formatted.

## Coach Reminder

The bot includes a scheduled task to send a reminder to coaches every Sunday at 10 AM EST. The reminder will be sent to the `scheduled-matches` channel, notifying the coaches to schedule matches for the week. This feature aims to facilitate the scheduling process for the coaches.

## Additional Notes

-   The bot responds differently based on the Discord user's ID. Modify the ID checks to suit your specific user IDs and their respective responses.

---

This is the README
