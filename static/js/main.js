async function fetchProfile() {
    const username = document.getElementById('username').value;
    document.getElementById('profile').innerHTML = "Loading...";
    
    try {
        console.log(`Fetching profile for ${username}`);
        const response = await fetch(`/api/profile/${username}`);
        console.log(`Response status: ${response.status}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Received data:', data);
        
        if (data && data.totalSolved !== undefined) {
            const acceptanceRate = (data.totalSolved / data.totalSubmissions[0].submissions * 100).toFixed(2);
            let profileHtml = `
                <h2>${username}'s LeetCode Profile</h2>
                <p>Total Solved: ${data.totalSolved}</p>
                <p>Easy: ${data.easySolved} / ${data.totalEasy}</p>
                <p>Medium: ${data.mediumSolved} / ${data.totalMedium}</p>
                <p>Hard: ${data.hardSolved} / ${data.totalHard}</p>
                <p>Acceptance Rate: ${acceptanceRate}%</p>
                <p>Ranking: ${data.ranking}</p>
                <h3>Recent Submissions:</h3>
                <ul>
            `;
            
            // Add the 5 most recent submissions
            data.recentSubmissions.slice(0, 5).forEach(submission => {
                profileHtml += `<li>${submission.title} - ${submission.statusDisplay}</li>`;
            });
            
            profileHtml += '</ul>';
            document.getElementById('profile').innerHTML = profileHtml;
        } else {
            document.getElementById('profile').innerHTML = "Unable to parse user data.";
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
        document.getElementById('profile').innerHTML = `Error: ${error.message}`;
    }
}