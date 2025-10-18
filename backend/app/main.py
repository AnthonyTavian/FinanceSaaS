from fastapi import FastAPI
from app.routes import auth
from app.core.database import Base, engine

# cria tabelas no banco
Base.metadata.create_all(bind=engine)

app = FastAPI(title="FinanceSaaS API")

app.include_router(auth.router)

@app.get("/")
def root():
    return {"message": "API do FinanceSaaS no ar 🚀"}