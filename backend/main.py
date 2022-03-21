from fastapi import FastAPI


app = FastAPI()


@app.get('/health')
def _health():
    return 'ok'

@app.post('/register')
def _register(email):
    return 'ok'

@app.post('/login')
def _login():
    return 'ok'

@app.post('/email/confirm')
def _confirm_email():
    return 'ok'

@app.post('/password/reset')
def _reset_password():
    return 'ok'

@app.post('/password/confirm')
def _confirm_reset_password():
    return 'ok'

@app.get('/user/details')
def _get_user_statistic():
    return 'ok'

@app.post('/user/details')
def _set_user_details():
    return 'ok'
