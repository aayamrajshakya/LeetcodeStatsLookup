from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/api/profile/<username>', methods=['GET'])
def profile(username):
    url = f"https://leetcode-stats-api.herokuapp.com/{username}"
    response = requests.get(url)
    return jsonify(response.json())

if __name__ == '__main__':
    app.run()