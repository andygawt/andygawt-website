// Load and display media items
let allMedia = [];

// Fetch media data
fetch('data/media.json')
    .then(response => response.json())
    .then(data => {
        allMedia = data;
        displayMedia(allMedia);
    })
    .catch(error => {
        console.error('Error loading media data:', error);
        document.getElementById('media-feed').innerHTML = '<p>Error loading media items. Please try again later.</p>';
    });

// Display media items
function displayMedia(items) {
    const container = document.getElementById('media-feed');

    if (items.length === 0) {
        container.innerHTML = '<p>No media items found matching your filters.</p>';
        return;
    }

    const html = items.map(item => {
        const date = new Date(item.date);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        return `
            <div class="media-item">
                <div class="media-item-header">
                    <div class="media-item-date">${formattedDate}</div>
                    <div class="media-item-type">${item.type}</div>
                </div>
                <div class="media-item-title">
                    <a href="${item.url}" target="_blank">${item.title}</a>
                </div>
                <div class="media-item-outlet">${item.outlet}</div>
                ${item.description ? `<div class="media-item-description">${item.description}</div>` : ''}
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}

// Filter media items
function filterMedia() {
    const yearFilter = document.getElementById('year-filter').value;
    const typeFilter = document.getElementById('type-filter').value;

    let filtered = allMedia;

    if (yearFilter !== 'all') {
        filtered = filtered.filter(item => item.date.startsWith(yearFilter));
    }

    if (typeFilter !== 'all') {
        filtered = filtered.filter(item => item.type === typeFilter);
    }

    displayMedia(filtered);
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('year-filter').addEventListener('change', filterMedia);
    document.getElementById('type-filter').addEventListener('change', filterMedia);
});
