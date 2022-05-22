from flask import Flask, render_template, jsonify
app = Flask(__name__)


@app.route('/')
def home():
   return render_template('index.html')



@app.route("/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=ae2cb83e59342ff01977d51d6104c10a", methods=["GET"])
def weatherOne():
    return jsonify({'msg': 'GET 연결 완료!'})

@app.route("/https://api.openweathermap.org/data/2.5/weather?lat=${lat[city_name_reverse[city]]}&lon=${lon[city_name_reverse[city]]}&units=metric&appid=ae2cb83e59342ff01977d51d6104c10a", methods=["GET"])
def weatherTwo():
    return jsonify({'msg': 'GET 연결 완료!'})

@app.route("/url_link", methods=["GET"])
def weatherThree():
    return jsonify({'msg': 'GET 연결 완료!'})

@app.route("/http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=4a992b233723cebcd77991cb28f2bd39", methods=["GET"])
def weatherFour():
    return jsonify({'msg': 'GET 연결 완료!'})

@app.route("/https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=4a992b233723cebcd77991cb28f2bd39&units=metric", methods=["GET"])
def weatherFive():
    return jsonify({'msg': 'GET 연결 완료!'})




if __name__ =='__main__':
    app.debug = True
    app.run()