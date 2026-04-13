"""
Omnilexis - AI-Driven Library Management System
Main FastAPI application entry point
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from src.config.settings import settings

app = FastAPI(
    title="Omnilexis API",
    description="AI-Driven Library Management System API",
    version="1.0.0",
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    """Root endpoint"""
    return JSONResponse({
        "message": "Welcome to Omnilexis API",
        "version": "1.0.0",
        "status": "running"
    })


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return JSONResponse({"status": "healthy"})


# Include routers
# from src.api.v1.endpoints import router as v1_router
# app.include_router(v1_router, prefix="/api/v1")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
