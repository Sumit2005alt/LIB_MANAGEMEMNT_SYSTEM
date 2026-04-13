"""
API v1 router
"""

from fastapi import APIRouter

router = APIRouter(prefix="/api/v1", tags=["v1"])


@router.get("/")
async def v1_root():
    """API v1 root endpoint"""
    return {"version": "1.0.0", "status": "active"}
