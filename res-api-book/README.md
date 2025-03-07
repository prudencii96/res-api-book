REST API
ENDPOINTOK:
FELHASZNÁLÓK(USERS)
-POST /users: új felhasználó létrehozása
-POST /users/login: Felhasználó bejelentkezése és JWT token generálása
-GET /users/me: Bejelentkezett felhasználó adatainak lekérdezése(autentikált végpont)

KÖNYVEK(BOOKS)
POST /books: Új könyv létrehozása
GET /books: Könyvek listájának lekérdezése
GET /books/:id: Egy könyv részletes adatainak lekérdezése
PATCH /books/:id: Egy könyv adatainak  módosítása
DELETE /books/:id Egy könyv törlése

REVIEWS(REVIEWS)
POST /books/:bookld/reviews: Új review létrehozása egy könyvhöz (autentikált végpont)
GET /books/:bookld/reviews: Egy könyvhöz tartozó revew-k listájának lekérdezése
PATCH /reviews/:id: Egy review módosítása (autentikált végpont, csak a review írója)
DELETE /reviews/:id: Egy review törlése (autentikált végpont, csak a review írója)
