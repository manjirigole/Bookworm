import pandas as pd
import ast

print("\n✅ Loading raw dataset...\n")
df = pd.read_csv("data/books_raw.csv", encoding="utf-8", on_bad_lines="skip", engine="python")

# ------------------------------------------------------
# FIX LIST COLUMNS
# ------------------------------------------------------
list_columns = ["genres", "characters", "awards", "ratingsByStars", "setting"]

def fix_list(x):
    if pd.isna(x):
        return []
    try:
        return ast.literal_eval(x)
    except:
        return []

for col in list_columns:
    df[col] = df[col].apply(fix_list)

# ------------------------------------------------------
# CLEAN TEXT FIELDS
# ------------------------------------------------------
def clean_text(text):
    if pd.isna(text):
        return ""
    return (
        str(text)
        .encode("utf-8", "ignore")
        .decode("utf-8", "ignore")
        .replace("\n", " ")
        .strip()
    )

text_columns = ["description", "title", "series", "author", "publisher"]
for col in text_columns:
    df[col] = df[col].apply(clean_text)

# ------------------------------------------------------
# FIX DATES
# ------------------------------------------------------
df["publishDate"] = pd.to_datetime(df["publishDate"], errors="coerce")
df["firstPublishDate"] = pd.to_datetime(df["firstPublishDate"], errors="coerce")

# ------------------------------------------------------
# FIX ISBN
# ------------------------------------------------------
df["isbn"] = df["isbn"].astype(str).str.replace(r"\.0$", "", regex=True)

# ------------------------------------------------------
# FIX NUMERIC FIELDS
# ------------------------------------------------------
numeric_cols = ["rating", "pages", "numRatings", "bbeScore", "bbeVotes", "price"]

for col in numeric_cols:
    df[col] = pd.to_numeric(df[col], errors="coerce")

# ------------------------------------------------------
# REMOVE DUPLICATES
# ------------------------------------------------------
df = df.drop_duplicates(subset="bookId")

# ------------------------------------------------------
# SAVE CLEANED DATASET
# ------------------------------------------------------
df.to_csv("data/clean_books.csv", index=False)
print("\n✅ Cleaning Complete — Saved as data/clean_books.csv\n")
