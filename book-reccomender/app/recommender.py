import joblib
import pandas as pd
from scipy import sparse
from sklearn.metrics.pairwise import cosine_similarity
import ast

print("\n✅ Loading saved TF-IDF model...\n")

# -------------------------
# Load saved assets
# -------------------------
tfidf = joblib.load("models/tfidf_vectorizer.pkl")
tfidf_matrix = sparse.load_npz("models/tfidf_matrix.npz")
df = pd.read_pickle("models/df_clean.pkl")

# -------------------------
# Ensure list columns are lists
# -------------------------
def parse_list(x):
    if isinstance(x, list):
        return x
    if pd.isna(x):
        return []
    try:
        return ast.literal_eval(x)
    except:
        return []

list_columns = ["genres", "characters", "awards", "ratingsByStars", "setting"]
for col in list_columns:
    df[col] = df[col].apply(parse_list)

# -------------------------
# Recommendation function
# -------------------------
def recommend(book_id, n=10):
    try:
        idx = df.index[df["bookId"] == book_id][0]
    except:
        return []

    sim_scores = cosine_similarity(tfidf_matrix[idx], tfidf_matrix).flatten()
    similar_indices = sim_scores.argsort()[::-1][1:n+1]

    return df.iloc[similar_indices][["bookId", "title", "author", "coverImg"]].to_dict(orient="records")
