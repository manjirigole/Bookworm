from fastapi import FastAPI
from app.recommender import df, recommend
from app.auth import router as auth_router

app = FastAPI()

# ---------------------------
# AUTH ROUTES
# ---------------------------
app.include_router(auth_router, prefix="/auth")

# ---------------------------
# BOOK ROUTES
# ---------------------------
@app.get("/book/{book_id}")
def get_book(book_id: str):
    book = df[df["bookId"] == book_id]
    if book.empty:
        return {"error": "Book not found"}
    return book.to_dict(orient="records")[0]

@app.get("/recommend/{book_id}")
def get_recommendations(book_id: str):
    return {"recommendations": recommend(book_id)}

@app.get("/search")
def search_books(q: str):
    results = df[df["title"].str.contains(q, case=False, na=False)]
    return results.iloc[:20][["bookId", "title", "author", "coverImg"]].to_dict(orient="records")
