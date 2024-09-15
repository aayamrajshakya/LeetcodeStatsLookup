async function fetchProfile() {
    const username = document.getElementById('username').value;
    document.getElementById('profile').innerHTML = "Loading...";
    
    try {
        const response = await fetch(`/api/profile/${username}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        if (data.status === "success") {
            let profileHtml = `
                <h2>${username}'s LeetCode Profile</h2>
                <p>Total Solved: ${data.totalSolved} / ${data.totalQuestions}</p>
                <p>Easy: ${data.easySolved} / ${data.totalEasy}</p>
                <p>Medium: ${data.mediumSolved} / ${data.totalMedium}</p>
                <p>Hard: ${data.hardSolved} / ${data.totalHard}</p>
                <p>Acceptance Rate: ${data.acceptanceRate}%</p>
                <p>Ranking: ${data.ranking}</p>
            `;
            document.getElementById('profile').innerHTML = profileHtml;
        } else {
            document.getElementById('profile').innerHTML = "Unable to fetch user data. Please check the username and try again.";
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
        document.getElementById('profile').innerHTML = `Error: ${error.message}`;
    }
}