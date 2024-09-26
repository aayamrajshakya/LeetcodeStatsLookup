from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/<username>', methods=['GET'])
def profile(username):
    url = f"https://leetscan.vercel.app/{username}"
    response = requests.get(url)
    return jsonify(response.json())

if __name__ == '__main__':
    app.run()