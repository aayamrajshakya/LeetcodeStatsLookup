document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('username').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            fetchProfile();
        }
    });
});

document.getElementById('username').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchProfile();
    }
});

async function fetchProfile() {
    const username = document.getElementById('username').value;
    document.getElementById('profile').innerHTML = "Looking for profile...";
    
    try {
        const response = await fetch(`/${username}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();        
        if (data.username) {
            let profileHtml = `
                <h2>Details for '${username}'</h2>
                <p><center><img src="${data.profile.userAvatar}" alt="${username}'s avatar" /></center></p>
                <p>Name: ${data.profile.realName || 'N/A'}</p>
                <p>Total Solved: ${data.totalSolved} / ${data.totalQuestions}</p>
                <p>Easy: ${data.easySolved} / ${data.totalEasy}</p>
                <p>Medium: ${data.mediumSolved} / ${data.totalMedium}</p>
                <p>Hard: ${data.hardSolved} / ${data.totalHard}</p>
                <p>Ranking: ${data.ranking}</p>
            `;

            profileHtml += '<h3>Badges:</h3>';
            if (data.badges && data.badges.length > 0) {
                profileHtml += '<ul>';
                data.badges.forEach(badge => {
                    const iconUrl = badge.icon.startsWith('http') ? badge.icon : `https://leetcode.com${badge.icon}`;
                    profileHtml += `
                        <li>
                            <img src="${iconUrl}" alt="${badge.displayName}" style="width:20px;height:20px;">
                            ${badge.displayName}
                        </li>
                    `;
                });
                profileHtml += '</ul>';
            } else {
                profileHtml += '<p>no badges yet :(</p>';
            }
            document.getElementById('profile').innerHTML = profileHtml;
        } else {
            document.getElementById('profile').innerHTML = "User not found. Please try again.";
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
        document.getElementById('profile').innerHTML = `Error: ${error.message}`;
    }
}