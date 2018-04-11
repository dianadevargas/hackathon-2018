function showNotification(event) {
    return new Promise(resolve => {
        const { body, title, tag } = JSON.parse(event.data.text());

        self.registration
            .getNotifications({ tag })
            .then(existingNotifications => {
                console.log(existingNotifications)
            })
            .then(() => {
                const icon = 'https://assets.homeimprovementpages.com.au/images/hui/hipages-180.png';
                return self.registration
                    .showNotification(title, { body, tag, icon })
            })
            .then(resolve);
    });
}

self.addEventListener("push", event => {
    event.waitUntil(
        showNotification(event)
    );
});

self.addEventListener("notificationclick", event => {
    event.waitUntil(clients.openWindow("/"));
});