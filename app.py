import os
from flask import Flask, render_template, request, jsonify
import openai
from dotenv import load_dotenv

load_dotenv()  # Carrega variáveis do arquivo .env

app = Flask(__name__)

openai.api_key = os.getenv("OPENAI_API_KEY")
openai.api_base = os.getenv("OPENAI_API_BASE")
model_name = os.getenv("OPENAI_MODEL_NAME", "gpt-4o-mini")

@app.route("/")
def home():
    return render_template("chat.html")

@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")

    try:
        response = openai.ChatCompletion.create(
            model=model_name,
            messages=[
                {"role": "system", "content": "Você é o SyntrianFox, um assistente inteligente criado por Nicolas."},
                {"role": "user", "content": user_message}
            ]
        )
        reply = response.choices[0].message.content.strip()
        return jsonify({"response": reply})

    except Exception as e:
        return jsonify({"response": f"Erro: {str(e)}"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
