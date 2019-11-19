from flask import Flask, render_template, request, redirect, make_response

app = Flask(__name__)


@app.route('/')
def main():
    return render_template('main.html')


@app.route('/game')
def game():
    number_of_cells = int(request.args.get('select-cellnumber'))
    return render_template('game.html', number_of_cells=number_of_cells)


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True)