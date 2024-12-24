# LeetCode Stats Lookup
A simple Flask-based application to view your LeetCode profile information. I utilized the API provided by [Sachin Sharma](https://github.com/chinxcode) for retrieving LeetCode profile data.

## How to run locally
1. Clone the repo:
```bash
git clone https://github.com/aayamrajshakya/LeetcodeStatsLookup.git
cd LeetcodeStatsLookup
```

2. Create & start a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate
```

3. Install the required dependencies:
```bash 
pip install -r requirements.txt
```

4. Start the application:
```bash
python app.py
```

5. The site should be live at `http://localhost:5000`.

## Repo directory tree:
```
.
├── app.py
├── README.md
├── requirements.txt
├── static
│   ├── css
│   │   └── styles.css
│   └── js
│       └── main.js
├── templates
│   └── index.html
└── vercel.json
```

## Future plan:
I plan to continue working on this in my leisure time and add features such as a user details like top programming languages, submission statistics, and more.
