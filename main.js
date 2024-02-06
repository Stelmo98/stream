document.addEventListener('DOMContentLoaded', function () {
  // Function to fetch Twitch stream title
  function getStreamTitle() {
    fetch('https://api.twitch.tv/helix/streams?user_id=480225354', {
      headers: {
        'Client-ID': 'lxexfolh6eysj99f8oijvs4a5vg3vv', // Replace with your Twitch Developer Client ID
        'Authorization': 'Bearer oauth:9o0w7m1gkqkdmus4t9brin8d9jwzow' // Replace with your Twitch OAuth token
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.data && data.data.length > 0) {
          const streamTitle = data.data[0].title;
          document.getElementById('stream-title').innerText = streamTitle;
        } else {
          document.getElementById('stream-title').innerText = 'Offline';
        }
      })
      .catch(error => console.error('Error fetching stream title:', error));
  }

  // Initial fetch on page load
  getStreamTitle();

  // Fetch stream title every 5 minutes (adjust as needed)
  setInterval(getStreamTitle, 300000);
});
