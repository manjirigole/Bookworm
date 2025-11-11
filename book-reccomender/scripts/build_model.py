import pandas as pd
import ast
import joblib
from scipy import sparse
from sklearn.feature_extraction.text import TfidfVectorizer

print("\n✅ Loading cleaned data...\n")

# ------------------------------------------------------
# LOAD CLEANED CSV
# ------------------------------------------------------
df = pd.read_csv("data/clean_books.csv").fillna("")

# ------------------------------------------------------
# PARSE LIST COLUMNS
# ------------------------------------------------------
def parse_list(x):
    if isinstance(x, list):
        return x
    if pd.isna(x):
        return []
    try:
        return ast.literal_eval(x)
    except:
        return []

list_cols = ["genres", "characters", "awards", "ratingsByStars", "setting"]
for col in list_cols:
    df[col] = df[col].apply(parse_list)

# ------------------------------------------------------
# COMBINE FEATURES FOR TF-IDF
# ------------------------------------------------------
def combine_features(row):
    return " ".join(row["genres"]) + " " + row["author"] + " " + row["description"]

df["combined"] = df.apply(combine_features, axis=1)

# ------------------------------------------------------
# BUILD TF-IDF MODEL
# ------------------------------------------------------
print("\n✅ Building TF-IDF model...\n")

tfidf = TfidfVectorizer(stop_words="english", max_features=5000)
tfidf_matrix = tfidf.fit_transform(df["combined"])

# ------------------------------------------------------
# SAVE MODEL FILES
# ------------------------------------------------------
print("\n✅ Saving model files...\n")

joblib.dump(tfidf, "models/tfidf_vectorizer.pkl")
sparse.save_npz("models/tfidf_matrix.npz", tfidf_matrix)
df.to_pickle("models/df_clean.pkl")

print("\n✅ MODEL BUILD COMPLETE ✅\n")
