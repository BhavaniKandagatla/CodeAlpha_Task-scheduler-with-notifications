// Function to schedule a task
function scheduleTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDateTime = document.getElementById('taskDateTime');

    const task = taskInput.value;
    const dateTime = taskDateTime.value;

    if (task && dateTime) {
        const tasksList = document.getElementById('tasks');
        const listItem = document.createElement('li');
        listItem.innerHTML = `${task} - ${dateTime}`;
        tasksList.appendChild(listItem);

        // Call function to set up notification or send email for this task and dateTime
        setupNotification(task, dateTime);
    } else {
        alert('Please enter both task and date/time');
    }
}

// Function to set up notification (simulated for demo purposes)
function setupNotification(task, dateTime) {
    // Simulated notification, in a real app, this would be replaced by actual notification logic
    console.log(`Scheduled notification for task "${task}" at ${dateTime}`);
    // Here you would integrate with a service that handles notifications (like sending an email or a push notification)
}
