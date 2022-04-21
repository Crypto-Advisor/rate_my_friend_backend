CREATE TABLE instagram_accounts(
    id integer PRIMARY KEY,
    name varchar(30) UNIQUE NOT NULL,
    account boolean
);

CREATE TABLE ratings(
    id integer PRIMARY KEY,
    account_id integer REFERENCES instagram_accounts(id) UNIQUE NOT NULL,
    num_ratings integer,
    rating integer
);

CREATE TABLE comments(
    id integer PRIMARY KEY,
    account_id integer REFERENCES instagram_accounts(id) UNIQUE NOT NULL,
    rating_id integer REFERENCES ratings(id) UNIQUE NOT NULL,
    comments text
);

INSERT INTO ratings
ADD COLUMN comment_id integer REFERENCES comments(id) UNIQUE NOT NULL;