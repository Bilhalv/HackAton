from fastapi import FastAPI, HTTPException
from controller import vendas, metas, funcionario

app = FastAPI()

mng_vendas = vendas.Venda("local")
mng_metas = metas.Metas("local")
mng_func = funcionario.Funcionario("local")

def match_with_model(model, data):
    try:
        for key, value in model.items():
            if key not in data.keys() or not isinstance(data[key], value):
                return False
        return True
    except Exception as e:
        print(f"[ ERROR ] Invalid Request: {e}")
        return False

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Hello World"}

# Funcionários
@app.get("/funcionario/")
async def func_get_all():
    return mng_func.get_all()

@app.get("/funcionario/{registro:str}")
async def func_get(registro: str):
    return mng_func.search(registro)

@app.post("/funcionario/")
async def func_post(funcionario: dict):
    if match_with_model(mng_func.model(), funcionario):
        return mng_func.insert(funcionario)
    else:
        raise HTTPException(status_code=400, detail="Invalid data")

@app.put("/funcionario/{registro:str}")
def func_put(registro: str, funcionario: dict):
    if match_with_model(mng_func.model(), funcionario):
        return mng_func.update(funcionario, registro)
    else:
        raise HTTPException(status_code=400, detail="Invalid data")

@app.delete("/funcionario/{registro:str}")
def func_delete(registro: str):
    return mng_func.delete(registro)

# Metas
@app.get("/metas/")
async def metas_get_all():
    return mng_metas.get_all()

@app.get("/metas/{tipo:str}")
async def metas_get(tipo: str):
    return mng_metas.search(tipo)

@app.post("/metas/")
async def metas_post(metas: dict):
    if match_with_model(mng_metas.model(), metas):
        return mng_metas.insert(metas)
    else:
        raise HTTPException(status_code=400, detail="Invalid data")

@app.put("/metas/{tipo:str}")
def metas_put(tipo: str, metas: dict):
    if match_with_model(mng_metas.model(), metas):
        return mng_metas.update(metas, tipo)
    else:
        raise HTTPException(status_code=400, detail="Invalid data")

@app.delete("/metas/{tipo:str}")
def metas_delete(tipo: str):
    return mng_metas.delete(tipo)

# Vendas
@app.get("/vendas/")
async def vendas_get_all():
    return mng_vendas.get_all()

@app.get("/vendas/{data:str}")
async def vendas_get(data: str):
    return mng_vendas.search(data)

@app.post("/vendas/")
async def vendas_post(vendas: dict):
    if match_with_model(mng_vendas.model(), vendas):
        return mng_vendas.insert(vendas)
    else:
        raise HTTPException(status_code=400, detail="Invalid data")

@app.put("/vendas/{data:str}")
def vendas_put(data: str, vendas: dict):
    if match_with_model(mng_vendas.model(), vendas):
        return mng_vendas.update(vendas, data)
    else:
        raise HTTPException(status_code=400, detail="Invalid data")

@app.delete("/vendas/{data:str}")
def vendas_delete(data: str):
    return mng_vendas.delete(data)

