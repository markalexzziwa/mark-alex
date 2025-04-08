let events = [
    { date: "27-Jan-2025", title: "Opening Term I", time: "08:00", location: "School Compound" },
    { date: "10-Feb-2025", title: "Adoration Day", time: "10:00", location: "Parish Church" },
    { date: "24-Feb-2025", title: "Thanks-Giving Mass", time: "08:00", location: "School Play-Ground" },
    { date: "04-Mar-2025", title: "BOT Exams", time: "09:00", location: "Respective Examination Blocks" },
    { date: "20-Mar-2025", title: "Visitation Day", time: "08:00", location: "School Compound" },
    { date: "01-April-2025", title: "EOT Exams", time: "08:00", location: "Respective Examination Blocks" },
    { date: "19-April-2025", title: "End Of Term I Address", time: "17:00", location: "Main Hall" },
    { date: "26-Mar-2025", title: "Beginning of Term II", time: "08:00", location: "School Compound" },
];

function renderEvents() {
    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = '';

    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'event-item';
        eventDiv.innerHTML = `
                    <span class="event-date">${formatDate(event.date)}</span>
                    <span class="event-details">${event.title} - ${event.time} @ ${event.location}</span>
                `;
        eventsList.appendChild(eventDiv);
    });
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    });
}

function sortEvents() {
    events.sort((a, b) => new Date(a.date) - new Date(b.date));
    renderEvents();
}
renderEvents();