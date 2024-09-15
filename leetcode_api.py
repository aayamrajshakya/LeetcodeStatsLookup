import requests

def get_leetcode_profile(username):
	url = f"https://leetcode-api-faisalshohag.vercel.app/{username}"

	response = requests.get(url)

	if response.status_code == 200:
		return response.json()
	else:
		return None