from fastapi import APIRouter, HTTPException
from firebase_admin import auth
from pydantic import BaseModel

router = APIRouter()

# -----------------------------
# MODELS
# -----------------------------
class RegisterRequest(BaseModel):
    email: str
    password: str
    name: str

class LoginRequest(BaseModel):
    email: str
    password: str


# -----------------------------
# REGISTER USER
# -----------------------------
@router.post("/register")
def register_user(request: RegisterRequest):
    try:
        user = auth.create_user(
            email=request.email,
            password=request.password,
            display_name=request.name
        )
        return {"success": True, "uid": user.uid}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


# -----------------------------
# LOGIN USER
# NOTE: Firebase Admin cannot log in a user directly.
# We will verify the token instead.
# -----------------------------
@router.post("/login")
def login_user(request: LoginRequest):
    # Mobile app will use Firebase client SDK to login,
    # then send ID token here to verify.
    raise HTTPException(
        status_code=400,
        detail="Use Firebase client SDK for login. This endpoint is token verification only."
    )


# -----------------------------
# VERIFY USER TOKEN
# -----------------------------
class TokenRequest(BaseModel):
    idToken: str

@router.post("/verify-token")
def verify_token(request: TokenRequest):
    try:
        decoded = auth.verify_id_token(request.idToken)
        return {"success": True, "uid": decoded["uid"]}
    except Exception as e:
        raise HTTPException(status_code=401, detail="Invalid token")
